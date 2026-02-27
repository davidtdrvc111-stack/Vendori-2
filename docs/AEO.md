# AEO (Answer Engine Optimization) - KI-Optimierung

## Was ist AEO?

Answer Engine Optimization (AEO) optimiert Inhalte für KI-gestützte Suchmaschinen und Answer Engines:
- ChatGPT (mit Web-Browsing)
- Claude (mit Web-Browsing)
- Google SGE (Search Generative Experience)
- Perplexity AI
- Bing Chat
- Weitere KI-Assistenten

**Ziel**: Website-Inhalte werden von KI-Systemen verstanden, extrahiert und in Antworten verwendet.

## AEO vs SEO

| SEO | AEO |
|-----|-----|
| Optimiert für Rankings | Optimiert für direkte Antworten |
| Keywords und Backlinks | Kontext und Struktur |
| Click-Through-Rate | Information-Extraction |
| Meta-Tags wichtig | Content-Qualität entscheidend |

**Wichtig**: AEO ergänzt SEO, ersetzt es nicht!

## Core Principles

### 1. Klare, Direkte Antworten

```tsx
// ✅ Gut - Direkte Antworten
<section>
  <h2>Was kostet eine Website-Entwicklung?</h2>
  <p>
    Eine professionelle Website-Entwicklung bei VENDORi kostet ab 5.000€.
    Der finale Preis hängt von Umfang, Features und Design-Anforderungen ab.
  </p>
</section>

// ❌ Schlecht - Vage
<section>
  <h2>Preise</h2>
  <p>
    Kontaktieren Sie uns für ein individuelles Angebot.
  </p>
</section>
```

### 2. FAQ-Strukturen

```tsx
// src/sections/faq_section/FAQ.tsx
<section itemScope itemType="https://schema.org/FAQPage">
  <h2>Häufig gestellte Fragen</h2>

  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <h3 itemProp="name">Wie lange dauert eine Website-Entwicklung?</h3>
    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
      <p itemProp="text">
        Eine Standard-Website benötigt 4-6 Wochen von Konzept bis Launch.
        Komplexe Web-Anwendungen können 3-6 Monate in Anspruch nehmen.
      </p>
    </div>
  </div>

  {/* Weitere FAQs */}
</section>
```

### 3. Strukturierte Daten - FAQ Schema

```typescript
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie lange dauert eine Website-Entwicklung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Standard-Website benötigt 4-6 Wochen von Konzept bis Launch. Komplexe Web-Anwendungen können 3-6 Monate in Anspruch nehmen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professionelle Websites starten ab 5.000€. Der Preis variiert je nach Umfang, Features und Design-Komplexität.',
      },
    },
  ],
}
```

### 4. HowTo Schema (für Anleitungen)

```typescript
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Wie wähle ich die richtige Web-Technologie?',
  description: 'Schritt-für-Schritt Anleitung zur Auswahl der passenden Technologie für Ihr Web-Projekt',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Anforderungen definieren',
      text: 'Erstellen Sie eine Liste aller funktionalen und technischen Anforderungen',
    },
    {
      '@type': 'HowToStep',
      name: 'Budget festlegen',
      text: 'Bestimmen Sie Ihr Budget für Entwicklung und laufende Kosten',
    },
    {
      '@type': 'HowToStep',
      name: 'Technologien vergleichen',
      text: 'Vergleichen Sie passende Technologien anhand Ihrer Anforderungen',
    },
  ],
}
```

## Content-Struktur für KI

### 1. Natürliche Sprache

```tsx
// ✅ Gut - Natürliche Sprache
<p>
  VENDORi ist eine Web-Entwicklungsagentur in Deutschland, die sich auf
  moderne React- und Next.js-Anwendungen spezialisiert hat. Wir entwickeln
  performante, SEO-optimierte Websites für kleine und mittlere Unternehmen.
</p>

// ❌ Schlecht - Keyword-Stuffing
<p>
  Web-Entwicklung Deutschland, React Entwicklung, Next.js Agentur,
  Website erstellen, Webdesign Deutschland...
</p>
```

### 2. Kontext-Reiche Inhalte

```tsx
// ✅ Gut - Vollständiger Kontext
<article>
  <h2>Next.js für Enterprise-Anwendungen</h2>
  <p>
    Next.js ist ein React-Framework, das sich besonders für große
    Enterprise-Anwendungen eignet. Es bietet Server-Side Rendering (SSR),
    Static Site Generation (SSG) und Incremental Static Regeneration (ISR).
  </p>
  <p>
    Vorteile für Unternehmen:
  </p>
  <ul>
    <li>Schnelle Ladezeiten durch SSR/SSG</li>
    <li>SEO-Optimierung out-of-the-box</li>
    <li>TypeScript-Support für Type-Safety</li>
    <li>Skalierbarkeit für große Teams</li>
  </ul>
</article>

// ❌ Schlecht - Kein Kontext
<div>
  <h2>Next.js</h2>
  <p>Wir nutzen Next.js.</p>
</div>
```

### 3. Hierarchische Struktur

```tsx
// ✅ Gut - Klare Hierarchie
<main>
  <h1>Web-Entwicklung Services</h1>

  <section>
    <h2>Frontend-Entwicklung</h2>
    <p>Moderne, responsive Benutzeroberflächen...</p>

    <article>
      <h3>React Development</h3>
      <p>Komponenten-basierte Entwicklung mit React...</p>
    </article>

    <article>
      <h3>Next.js Development</h3>
      <p>Full-Stack React Framework für SEO...</p>
    </article>
  </section>

  <section>
    <h2>Backend-Entwicklung</h2>
    <p>Robuste API-Architekturen...</p>
  </section>
</main>
```

## Entitäten und Beziehungen

### 1. Klare Entitäts-Definition

```typescript
// src/config/entities.ts
export const companyEntity = {
  name: 'VENDORi GmbH',
  type: 'Web Development Agency',
  location: 'Deutschland',
  founded: '2024',
  services: [
    'Web-Entwicklung',
    'React Development',
    'Next.js Development',
    'UI/UX Design',
    'SEO-Optimierung',
  ],
  technologies: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
  ],
}
```

### 2. About Page mit vollständigem Kontext

```tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main>
      <h1>Über VENDORi GmbH</h1>

      <section>
        <h2>Wer wir sind</h2>
        <p>
          VENDORi GmbH ist eine spezialisierte Web-Entwicklungsagentur mit
          Sitz in Deutschland. Seit 2024 entwickeln wir moderne,
          performante Webanwendungen für kleine und mittlere Unternehmen.
        </p>
      </section>

      <section>
        <h2>Was wir machen</h2>
        <p>
          Wir spezialisieren uns auf die Entwicklung von React- und
          Next.js-Anwendungen. Unser Tech Stack umfasst TypeScript,
          Tailwind CSS und moderne Backend-Technologien.
        </p>
      </section>

      <section>
        <h2>Unsere Expertise</h2>
        <ul>
          <li>Frontend-Entwicklung mit React und Next.js</li>
          <li>TypeScript für Type-Safety</li>
          <li>SEO-Optimierung für beste Rankings</li>
          <li>DSGVO-konforme Implementierung</li>
          <li>Performance-Optimierung (Core Web Vitals)</li>
        </ul>
      </section>
    </main>
  )
}
```

## Listicles und Vergleiche

### 1. Vergleichs-Tabellen

```tsx
<section>
  <h2>React vs Next.js - Der Vergleich</h2>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>React</th>
        <th>Next.js</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rendering</td>
        <td>Client-Side Rendering</td>
        <td>SSR, SSG, ISR</td>
      </tr>
      <tr>
        <td>SEO</td>
        <td>Eingeschränkt</td>
        <td>Exzellent</td>
      </tr>
      <tr>
        <td>Routing</td>
        <td>React Router benötigt</td>
        <td>Eingebaut (File-based)</td>
      </tr>
    </tbody>
  </table>
</section>
```

### 2. Listicles

```tsx
<article>
  <h2>10 Best Practices für moderne Web-Entwicklung</h2>

  <ol>
    <li>
      <h3>TypeScript verwenden</h3>
      <p>
        TypeScript bietet Type-Safety und verhindert viele Runtime-Fehler.
        Es verbessert die Developer Experience durch Autocomplete und
        IntelliSense.
      </p>
    </li>

    <li>
      <h3>Performance optimieren</h3>
      <p>
        Core Web Vitals sind entscheidend für SEO und User Experience.
        Ziel: LCP {'<'} 2.5s, FID {'<'} 100ms, CLS {'<'} 0.1.
      </p>
    </li>

    {/* Weitere Punkte */}
  </ol>
</article>
```

## Zitate und Autoritäten

### 1. Quellen referenzieren

```tsx
<article>
  <h2>Warum Next.js wählen?</h2>
  <p>
    Laut Vercel (den Entwicklern von Next.js) nutzen über 500.000
    Entwickler weltweit Next.js für ihre Produktions-Websites.
    Große Unternehmen wie Nike, Netflix und TikTok setzen auf Next.js.
  </p>
  <cite>
    Quelle: Vercel Next.js Showcase, 2024
  </cite>
</article>
```

### 2. Statistiken und Fakten

```tsx
<section>
  <h2>Performance-Vorteile</h2>
  <p>
    Websites mit Next.js laden durchschnittlich 40% schneller als
    reine Client-Side React-Anwendungen. Dies führt zu:
  </p>
  <ul>
    <li>53% höhere Conversion-Rate (Google, 2023)</li>
    <li>32% weniger Bounce-Rate</li>
    <li>Bessere Google Rankings durch Core Web Vitals</li>
  </ul>
</section>
```

## Lokalisierung und Kontext

### 1. Geografischer Kontext

```tsx
<section itemScope itemType="https://schema.org/LocalBusiness">
  <h2>VENDORi - Ihr Partner in Deutschland</h2>
  <p>
    Als deutsche Web-Entwicklungsagentur verstehen wir die spezifischen
    Anforderungen des deutschen Marktes:
  </p>
  <ul>
    <li>DSGVO-konforme Implementierung</li>
    <li>Deutschsprachiger Support</li>
    <li>Lokale Hosting-Optionen in Deutschland</li>
    <li>Impressum und Datenschutzerklärung nach deutschem Recht</li>
  </ul>

  <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
    <span itemProp="addressCountry">Deutschland</span>
  </address>
</section>
```

### 2. Sprache und Kultur

```tsx
// Deutscher Content mit lokalen Referenzen
<p>
  Unsere Websites erfüllen alle rechtlichen Anforderungen in Deutschland,
  einschließlich TMG (Telemediengesetz), DSGVO und ePrivacy Directive.
  Wir sorgen für ein vollständiges Impressum gemäß §5 TMG.
</p>
```

## Technische Implementation

### 1. Semantisches HTML

```tsx
// ✅ Gut - Semantisch
<article itemScope itemType="https://schema.org/Article">
  <header>
    <h1 itemProp="headline">Next.js Tutorial für Anfänger</h1>
    <time itemProp="datePublished" dateTime="2024-01-15">
      15. Januar 2024
    </time>
  </header>

  <section itemProp="articleBody">
    <p>Einführung in Next.js...</p>
  </section>

  <footer>
    <address itemProp="author" itemScope itemType="https://schema.org/Person">
      <span itemProp="name">Max Mustermann</span>
    </address>
  </footer>
</article>

// ❌ Schlecht - Keine Semantik
<div>
  <div>Next.js Tutorial für Anfänger</div>
  <div>15. Januar 2024</div>
  <div>Einführung in Next.js...</div>
</div>
```

### 2. Mikrodaten (Microdata)

```tsx
<div itemScope itemType="https://schema.org/Product">
  <h3 itemProp="name">Premium Website Paket</h3>
  <p itemProp="description">
    Professionelle Website-Entwicklung mit Next.js, TypeScript und SEO-Optimierung
  </p>

  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
    <span itemProp="price">5000</span>
    <span itemProp="priceCurrency">EUR</span>
    <meta itemProp="availability" content="https://schema.org/InStock" />
  </div>
</div>
```

### 3. JSON-LD für komplexe Daten

```typescript
// src/app/services/page.tsx
export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'VENDORi GmbH',
      url: 'https://vendori.de',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'React Development',
            description: 'Moderne React-Anwendungen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Next.js Development',
            description: 'Full-Stack Next.js Websites',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Page Content */}
    </>
  )
}
```

## Content-Strategie

### 1. Fragen beantworten

Erstelle Content basierend auf häufigen Fragen:
- "Wie viel kostet...?"
- "Was ist der Unterschied zwischen...?"
- "Wie lange dauert...?"
- "Welche Vorteile hat...?"
- "Wann sollte ich...?"

### 2. Schritt-für-Schritt Anleitungen

```tsx
<article>
  <h2>Website-Projekt starten - So geht's</h2>

  <section>
    <h3>Schritt 1: Anforderungen sammeln</h3>
    <p>
      Definieren Sie zunächst alle funktionalen und Design-Anforderungen.
      Erstellen Sie eine Liste mit Must-Have und Nice-to-Have Features.
    </p>
  </section>

  <section>
    <h3>Schritt 2: Budget planen</h3>
    <p>
      Kalkulieren Sie Kosten für Entwicklung (einmalig) und Hosting
      (monatlich). Eine professionelle Website startet ab 5.000€.
    </p>
  </section>

  {/* Weitere Schritte */}
</article>
```

### 3. Problemlösung fokussieren

```tsx
<section>
  <h2>Langsame Website? Diese 5 Lösungen helfen</h2>

  <article>
    <h3>Problem 1: Große Bilder</h3>
    <p><strong>Lösung:</strong> Next.js Image Component verwenden</p>
    <p>
      Das Image Component optimiert Bilder automatisch und lädt sie
      nur bei Bedarf (Lazy Loading). Resultat: 60% schnellere Ladezeit.
    </p>
  </article>

  {/* Weitere Probleme + Lösungen */}
</section>
```

## AEO-Checkliste

### Content:
- [ ] Direkte Antworten auf häufige Fragen
- [ ] FAQ-Sektion mit Schema Markup
- [ ] Natürliche, konversationelle Sprache
- [ ] Vollständiger Kontext in jedem Abschnitt
- [ ] Listicles und Schritt-für-Schritt Anleitungen
- [ ] Vergleiche und Tabellen
- [ ] Statistiken und Fakten mit Quellen
- [ ] Problemlösungen explizit beschrieben

### Struktur:
- [ ] Semantisches HTML (header, main, article, section)
- [ ] Klare h1-h6 Hierarchie
- [ ] Logische Information Architecture
- [ ] Breadcrumbs für Navigation
- [ ] Zusammenhängende Absätze (kein Keyword-Stuffing)

### Technisch:
- [ ] JSON-LD Schema Markup (Organization, FAQPage, HowTo)
- [ ] Microdata für Produkte/Services
- [ ] Klare URL-Struktur
- [ ] Alt-Tags für alle Bilder mit Kontext
- [ ] Meta Descriptions mit natürlicher Sprache
- [ ] Open Graph für Social Sharing

### Lokalisierung:
- [ ] Geografischer Kontext (Deutschland)
- [ ] Kulturelle Referenzen (TMG, DSGVO)
- [ ] Lokale Kontaktdaten
- [ ] Sprache: Klares Deutsch

## Testing für AEO

### 1. KI-Tools testen
- ChatGPT mit Web-Browsing: Stelle Fragen über deine Website
- Perplexity: Suche nach deinem Service + Standort
- Bing Chat: Frage nach Informationen zu deinem Unternehmen

### 2. Fragen stellen
```
"Wer bietet Next.js Entwicklung in Deutschland an?"
"Was kostet eine professionelle Website in Deutschland?"
"Unterschied zwischen React und Next.js"
"Beste Web-Entwicklungsagentur in [Stadt]"
```

### 3. Antwort-Qualität prüfen
- Wird deine Website erwähnt?
- Sind die extrahierten Informationen korrekt?
- Ist der Kontext vollständig?
- Werden Quellen korrekt genannt?

## Quick Wins

1. **FAQ-Seite erstellen** mit Schema Markup
2. **"Über uns" Seite** mit vollständigem Kontext
3. **Service-Beschreibungen** detailliert und konversationell
4. **Direkte Antworten** in Überschriften einbauen
5. **Schema.org Markup** für alle wichtigen Entitäten
6. **Listicles erstellen** ("10 Best Practices...")
7. **Vergleiche** ("React vs Next.js")
8. **Statistiken** mit Quellen belegen

## Best Practices

✅ **Schreibe für Menschen, nicht für KI**
- Natürliche, konversationelle Sprache
- Hilfreiche, vollständige Antworten

✅ **Kontext ist König**
- Jeder Abschnitt sollte eigenständig verständlich sein
- Erkläre Fachbegriffe beim ersten Vorkommen

✅ **Strukturiere logisch**
- Klare Hierarchie
- Zusammenhängende Themen gruppieren

✅ **Beantworte Fragen direkt**
- Keine Umwege
- Konkrete Zahlen und Fakten

✅ **Nutze Strukturierte Daten**
- Schema.org für alles Wichtige
- JSON-LD für komplexe Informationen

## Häufige Fehler

❌ **Vage Antworten**: "Kontaktieren Sie uns für Details"
→ ✅ Konkrete Informationen bereitstellen

❌ **Kein Kontext**: "Wir nutzen React"
→ ✅ "Wir nutzen React für moderne, komponenten-basierte UIs..."

❌ **Nur Keywords**: "Web Development Deutschland React Next.js"
→ ✅ Vollständige, natürliche Sätze

❌ **Fehlende Struktur**: Alles in einem Block
→ ✅ Semantisches HTML mit klarer Hierarchie

❌ **Keine direkten Antworten**: Content "versteckt"
→ ✅ Wichtige Infos prominent platzieren

## Resources

- **Schema.org**: https://schema.org/docs/documents.html
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **OpenAI Structured Outputs**: https://platform.openai.com/docs/guides/structured-outputs
