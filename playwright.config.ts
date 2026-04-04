import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 *
 * Optimiert für:
 * - Parallele Ausführung (4 Worker)
 * - Multiple Viewports (Desktop, Mobile)
 * - HTML Reporter für einfaches Debugging
 * - Automatische Screenshots on failure
 */

export default defineConfig({
  // Test-Verzeichnis
  testDir: './tests/e2e',

  // Maximale parallele Worker (lokal: 4, CI: 2)
  workers: process.env.CI ? 2 : 4,

  // Alle Tests parallel ausführen
  fullyParallel: true,

  // Test-Timeout (30 Sekunden pro Test)
  timeout: 30000,

  // Expect-Timeout (5 Sekunden für Assertions)
  expect: {
    timeout: 5000,
  },

  // In CI: Fail schnell bei ersten Fehlern
  forbidOnly: !!process.env.CI,

  // Retries: 0 lokal, 2 in CI (wegen Flakiness)
  retries: process.env.CI ? 2 : 0,

  // Reporter: HTML (lokal) + GitHub Actions (CI)
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]
    : [['html', { open: 'on-failure' }], ['list']],

  // Global Setup/Teardown (optional)
  // globalSetup: require.resolve('./tests/global-setup'),
  // globalTeardown: require.resolve('./tests/global-teardown'),

  // Shared Settings für alle Tests
  use: {
    // Base URL (Development Server)
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',

    // Trace on first retry (für Debugging)
    trace: 'on-first-retry',

    // Screenshots bei Fehlern
    screenshot: 'only-on-failure',

    // Video nur bei Fehlern (spart Speicher)
    video: 'retain-on-failure',

    // Browser-Kontext-Optionen
    locale: 'de-DE',
    timezoneId: 'Europe/Berlin',

    // Viewport wird pro Project gesetzt
  },

  // Test-Projects für verschiedene Browser/Viewports
  projects: [
    // Desktop Chrome
    {
      name: 'chromium-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },

    // Desktop Firefox
    {
      name: 'firefox-desktop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 },
      },
    },

    // Desktop Safari (nur auf macOS)
    {
      name: 'webkit-desktop',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 },
      },
    },

    // Mobile - iPhone 12
    {
      name: 'mobile-iphone',
      use: {
        ...devices['iPhone 12'],
      },
    },

    // Mobile - Pixel 5
    {
      name: 'mobile-android',
      use: {
        ...devices['Pixel 5'],
      },
    },

    // Tablet - iPad Pro
    {
      name: 'tablet-ipad',
      use: {
        ...devices['iPad Pro'],
      },
    },

    // Large Desktop (1920px)
    {
      name: 'chromium-large',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  // Development Server (optional - nur wenn nicht bereits laufend)
  webServer: process.env.CI ? undefined : {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 Minuten für Server-Start
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
