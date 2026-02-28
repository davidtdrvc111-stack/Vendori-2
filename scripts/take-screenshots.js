/**
 * Screenshot Tool für VENDORi Website
 * Erstellt automatisch Screenshots nach jeder Änderung
 * - 3 Breakpoints: Mobile, Tablet, Desktop (oder spezifisch)
 * - UTC-Timestamp Ordner
 * - Fullpage + Section-Screenshots
 * - Ghost Header Scrolled State
 *
 * Usage:
 *   npm run screenshots                    # Alle Breakpoints
 *   npm run screenshots hero               # Alle Breakpoints + Hero Section
 *   npm run screenshots hero mobile        # Nur Mobile + Hero Section
 *   npm run screenshots -- mobile          # Nur Mobile (kein Section-Filter)
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const CONFIG = {
  baseUrl: 'http://localhost:3000',
  screenshotsBaseDir: path.join(__dirname, '..', 'screenshots'),
  maxImageDimension: 2000, // Max width/height für Claude AI Analyse
  viewports: {
    mobile: { width: 375, height: 812, name: 'mobile' },
    tablet: { width: 768, height: 1024, name: 'tablet' },
    desktop: { width: 1920, height: 1080, name: 'desktop' },
  },
  // Sections die erfasst werden können
  sections: [
    { selector: 'header', name: 'header', id: 'header' },
    { selector: 'section:has(h1)', name: 'hero-section', id: 'hero' },
    { selector: '#about', name: 'about-section', id: 'about' },
    { selector: '#services', name: 'services-section', id: 'services' },
    { selector: '#contact', name: 'contact-section', id: 'contact' },
  ],
};

function getUTCTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, '-').slice(0, -5); // Format: 2024-02-27T20-30-45
}

/**
 * Resizes image if any dimension exceeds maxDimension
 * Maintains aspect ratio
 */
async function resizeImageIfNeeded(imagePath, maxDimension = CONFIG.maxImageDimension) {
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    // Check if resizing is needed
    if (metadata.width > maxDimension || metadata.height > maxDimension) {
      const resizeOptions = {};

      if (metadata.width > metadata.height) {
        resizeOptions.width = maxDimension;
      } else {
        resizeOptions.height = maxDimension;
      }

      await image
        .resize({ ...resizeOptions, fit: 'inside', withoutEnlargement: true })
        .toFile(imagePath + '.tmp');

      // Replace original with resized
      fs.unlinkSync(imagePath);
      fs.renameSync(imagePath + '.tmp', imagePath);

      return { resized: true, original: `${metadata.width}x${metadata.height}` };
    }

    return { resized: false };
  } catch (error) {
    console.error(`  ⚠️  Fehler beim Resize von ${path.basename(imagePath)}:`, error.message);
    return { resized: false, error: true };
  }
}

async function cleanAndCreateOutputDir() {
  // Lösche alten screenshots Ordner komplett
  if (fs.existsSync(CONFIG.screenshotsBaseDir)) {
    fs.rmSync(CONFIG.screenshotsBaseDir, { recursive: true, force: true });
  }

  // Erstelle neuen Ordner mit UTC-Timestamp
  const timestamp = getUTCTimestamp();
  const outputDir = path.join(CONFIG.screenshotsBaseDir, timestamp);
  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`📁 Screenshot-Ordner erstellt: ${timestamp} (UTC)\n`);
  return outputDir;
}

async function takeScreenshots(outputDir, sectionFilter = null, breakpointFilter = null) {
  console.log('🚀 Starte Screenshot-Prozess...\n');

  const browser = await chromium.launch();

  try {
    console.log(`📡 Verbinde zu ${CONFIG.baseUrl}...`);

    // Filtere Viewports basierend auf breakpointFilter
    let viewportsToProcess = Object.entries(CONFIG.viewports);

    if (breakpointFilter) {
      const filtered = viewportsToProcess.filter(([_, viewport]) =>
        viewport.name === breakpointFilter.toLowerCase()
      );

      if (filtered.length === 0) {
        console.error(`❌ Ungültiger Breakpoint: "${breakpointFilter}"`);
        console.log('✅ Verfügbare Breakpoints: mobile, tablet, desktop');
        throw new Error('Ungültiger Breakpoint');
      }

      viewportsToProcess = filtered;
      console.log(`🎯 Nur Breakpoint: ${breakpointFilter.toUpperCase()}\n`);
    }

    // Loop durch alle/gefilterte Viewports
    for (const [_, viewport] of viewportsToProcess) {
      console.log(`\n📱 ${viewport.name.toUpperCase()} (${viewport.width}x${viewport.height})`);

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const page = await context.newPage();

      // Seite laden
      await page.goto(CONFIG.baseUrl, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000); // Warte auf Animationen

      // Öffne Mobile-Menu wenn Header-Screenshots erstellt werden
      if (sectionFilter === 'header' || sectionFilter === 'sticky_header') {
        try {
          const menuButton = await page.$('button[aria-label="Menu"]');
          if (menuButton) {
            await menuButton.click();
            await page.waitForTimeout(300); // Warte auf Menu-Animation
          }
        } catch (error) {
          // Menu-Button nicht gefunden, fortfahren
        }
      }

      // 1. FULLPAGE Screenshot
      const fullPagePath = path.join(outputDir, `fullpage-${viewport.name}.png`);
      await page.screenshot({
        path: fullPagePath,
        fullPage: true,
      });

      // Resize wenn nötig (für Claude AI Analyse)
      const resizeResult = await resizeImageIfNeeded(fullPagePath);
      if (resizeResult.resized) {
        console.log(`  ✅ Fullpage gespeichert (resized von ${resizeResult.original})`);
      } else {
        console.log(`  ✅ Fullpage gespeichert`);
      }

      // 2. SECTION Screenshots (nur wenn Section-Filter angegeben)
      if (sectionFilter) {
        const sectionsToCapture = CONFIG.sections.filter(
          s => s.name === sectionFilter || s.id === sectionFilter
        );

        for (const section of sectionsToCapture) {
          try {
            const element = await page.$(section.selector);
            if (element) {
              const sectionPath = path.join(outputDir, `${section.name}-${viewport.name}.png`);
              await element.screenshot({ path: sectionPath });

              // Resize wenn nötig
              const resizeResult = await resizeImageIfNeeded(sectionPath);
              if (resizeResult.resized) {
                console.log(`  ✅ ${section.name} gespeichert (resized von ${resizeResult.original})`);
              } else {
                console.log(`  ✅ ${section.name} gespeichert`);
              }
            }
          } catch (error) {
            console.log(`  ⚠️  ${section.name} nicht gefunden`);
          }
        }

        // 3. SCROLLED STATE (nur bei Header-Änderungen)
        if (sectionFilter === 'header' || sectionFilter === 'sticky_header') {
          await page.evaluate(() => window.scrollTo(0, 600));
          await page.waitForTimeout(600); // Warte auf Scroll-Transition
          const scrolledPath = path.join(outputDir, `header-scrolled-${viewport.name}.png`);
          await page.screenshot({
            path: scrolledPath,
            fullPage: false, // Nur Viewport
          });

          // Resize wenn nötig
          const resizeResult = await resizeImageIfNeeded(scrolledPath);
          if (resizeResult.resized) {
            console.log(`  ✅ Header-Scrolled gespeichert (resized von ${resizeResult.original})`);
          } else {
            console.log(`  ✅ Header-Scrolled gespeichert`);
          }
        }
      }

      await context.close();
    }

    console.log('\n\n✨ Alle Screenshots erstellt!');
    console.log(`📂 Gespeichert in: ${outputDir}`);

  } catch (error) {
    console.error('❌ Fehler beim Screenshot-Prozess:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function main() {
  try {
    // CLI-Argumente parsen
    const args = process.argv.slice(2);

    let sectionArg = null;
    let breakpointArg = null;

    // Erkennung der Argumente
    const validBreakpoints = ['mobile', 'tablet', 'desktop'];
    const validSections = CONFIG.sections.map(s => s.id);

    for (const arg of args) {
      const argLower = arg.toLowerCase();

      if (validBreakpoints.includes(argLower)) {
        breakpointArg = argLower;
      } else if (validSections.includes(argLower) || CONFIG.sections.some(s => s.name === argLower)) {
        sectionArg = argLower;
      } else if (arg !== '--') {
        console.log(`⚠️  Unbekanntes Argument ignoriert: "${arg}"`);
      }
    }

    // Ausgabe der aktiven Filter
    if (sectionArg || breakpointArg) {
      console.log('🎯 Aktive Filter:');
      if (sectionArg) console.log(`   Section: ${sectionArg}`);
      if (breakpointArg) console.log(`   Breakpoint: ${breakpointArg}`);
      console.log('');
    }

    const outputDir = await cleanAndCreateOutputDir();
    await takeScreenshots(outputDir, sectionArg, breakpointArg);

    console.log('\n✅ Screenshot-Prozess abgeschlossen!');
  } catch (error) {
    console.error('\n❌ Prozess fehlgeschlagen:', error.message);
    process.exit(1);
  }
}

main();
