// ============================================
// FAQ UNIFIED DATA - Single Source of Truth
// ============================================

export interface UnifiedFAQItem {
  question: string;
  answer: string;
  featured: boolean; // Wird auf Homepage angezeigt
  category: string; // Kategorie für FAQ-Seite
  priority?: number; // Optional: Sortierungs-Priorität
}

export interface FAQCategory {
  category: string;
  faqs: UnifiedFAQItem[];
}

// ============================================
// ZENTRALE FAQ-DATENQUELLE
// ============================================

export const unifiedFAQData: UnifiedFAQItem[] = [
  // ========================================
  // KATEGORIE: Geschäftsmodell
  // ========================================
  {
    question: 'Was ist ein Brand Operator?',
    answer: `<p>Ein Brand Operator ist ein strategischer E-Commerce-Partner, der die gesamte Online-Vertriebskette für Hersteller übernimmt – von der Technologie über den Verkauf bis zum Kundenservice.</p>
<p>Im Gegensatz zu klassischen Fulfillment-Dienstleistern, die nur lagern und versenden, übernimmt VENDORi als Brand Operator die komplette E-Commerce-Wertschöpfungskette:</p>
<ul>
  <li><span class="bullet">›</span><span>Rechtlicher Verkauf als <strong>Merchant of Record (MoR)</strong></span></li>
  <li><span class="bullet">›</span><span><strong>Steuer-Compliance</strong> (USt-ID, OSS-Abwicklung)</span></li>
  <li><span class="bullet">›</span><span>Vollständiger <strong>Kundenservice</strong> (First & Second Level)</span></li>
  <li><span class="bullet">›</span><span><strong>Technologie</strong>: SAP, Shopware & Marktplatz-Setup</span></li>
  <li><span class="bullet">›</span><span><strong>Risikomanagement</strong> & Haftungsübernahme</span></li>
</ul>`,
    featured: false,
    category: 'Geschäftsmodell',
  },
  {
    question: 'Wie unterscheidet sich VENDORi von klassischen Fulfillment-Dienstleistern?',
    answer: `<div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>Kategorie</th>
          <th>Fulfillment</th>
          <th>VENDORi (Brand Operator)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rechtlicher Verkäufer</td>
          <td>Hersteller bleibt Verkäufer</td>
          <td>Wir übernehmen die Verkäuferrolle (MoR)</td>
        </tr>
        <tr>
          <td>Steuer-Compliance</td>
          <td>Hersteller verantwortlich für USt-ID, OSS</td>
          <td>Komplette Übernahme (USt-ID, OSS-Abwicklung)</td>
        </tr>
        <tr>
          <td>Kundenservice</td>
          <td>Teilweise oder gar nicht</td>
          <td>Vollständiger Support (First & Second Level)</td>
        </tr>
        <tr>
          <td>Technologie</td>
          <td>Nur Schnittstellen</td>
          <td>Komplettes SAP, Shopware & Marktplatz-Setup</td>
        </tr>
        <tr>
          <td>Risiko & Haftung</td>
          <td>Beim Hersteller</td>
          <td>Minimal für Hersteller – wir übernehmen Haftung & Retouren</td>
        </tr>
      </tbody>
    </table>
  </div>`,
    featured: false,
    category: 'Geschäftsmodell',
  },
  {
    question: 'Was bedeutet Merchant of Record (MoR) konkret?',
    answer: `<p>Ein <strong>Merchant of Record (MoR)</strong> ist der rechtlich verantwortliche Verkäufer einer Transaktion. Als MoR tritt VENDORi rechtlich gegenüber dem Endkunden auf – der Hersteller bleibt vollständig im Hintergrund.</p>
<p>Das bedeutet konkret:</p>
<ul>
  <li><span class="bullet">›</span><span>Wir erstellen die <strong>Rechnungen</strong></span></li>
  <li><span class="bullet">›</span><span>Wir führen die <strong>Umsatzsteuer</strong> via OSS-Verfahren ab</span></li>
  <li><span class="bullet">›</span><span>Wir garantieren <strong>DSGVO-Konformität</strong></span></li>
  <li><span class="bullet">›</span><span>Wir haften für das <strong>Widerrufsrecht</strong></span></li>
  <li><span class="bullet">›</span><span>Wir tragen das <strong>rechtliche Risiko</strong> der Transaktion</span></li>
</ul>
<p>Der Hersteller kann sich vollständig auf sein Kerngeschäft (Produktion & B2B) konzentrieren, während VENDORi den D2C-Kanal skaliert.</p>`,
    featured: false,
    category: 'Geschäftsmodell',
  },

  // ========================================
  // KATEGORIE: Onboarding
  // ========================================
  {
    question: 'Wie läuft der Onboarding-Prozess ab?',
    answer: `<p>Go-Live in <strong>4–8 Wochen</strong> bei einmaligen Setup-Kosten von <strong>5.000–10.000 EUR</strong>. Der Onboarding-Prozess ist auf Geschwindigkeit und minimale Belastung Ihrer Ressourcen ausgelegt:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Zeitrahmen:</strong> Durchschnittlich 4–8 Wochen bis zu den ersten Umsätzen</span></li>
  <li><span class="bullet">›</span><span><strong>ERP-Anbindung:</strong> Nahtlose technische Integration über unser SAP-System</span></li>
  <li><span class="bullet">›</span><span><strong>Investition:</strong> Einmalige Setup-Fee von 5.000–10.000 EUR (beinhaltet Shop-Bau, Marktplatz-Anbindung und Logistik-Setup)</span></li>
</ul>
<p>Durch unsere bestehende E-Commerce-Infrastruktur entfällt die monatelange Lernkurve beim Aufbau eigener E-Commerce-Teams.</p>`,
    featured: false,
    category: 'Onboarding',
  },
  {
    question: 'Was ist in der Setup-Fee enthalten?',
    answer: `<p>Die einmalige Setup-Fee von <strong>5.000–10.000 EUR</strong> umfasst das komplette technische Onboarding:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Shop-Entwicklung:</strong> Aufbau eines hochperformanten Shopware-Stores</span></li>
  <li><span class="bullet">›</span><span><strong>Marktplatz-Integration:</strong> Anbindung aller relevanten Plattformen (Amazon, eBay, Otto, etc.)</span></li>
  <li><span class="bullet">›</span><span><strong>Logistik-Anbindung:</strong> Synchronisation aller Warenwirtschaftsprozesse</span></li>
  <li><span class="bullet">›</span><span><strong>ERP-Integration:</strong> Nahtlose Verbindung zu Ihrem bestehenden System</span></li>
  <li><span class="bullet">›</span><span><strong>Produktdaten-Migration:</strong> Übernahme und Optimierung Ihrer Produktdaten</span></li>
</ul>
<p>Die laufenden Kosten sind im Kommissionsmodell rein erfolgsbasiert – Sie zahlen nur bei erfolgreichen Verkäufen.</p>`,
    featured: false,
    category: 'Onboarding',
  },

  // ========================================
  // KATEGORIE: Technologie
  // ========================================
  {
    question: 'Welchen Tech-Stack nutzt VENDORi?',
    answer: `<p>VENDORi nutzt einen <strong>„Best-of-Breed"-Tech-Stack</strong> für maximale E-Commerce-Performance:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>E-Commerce Core:</strong> Shopware (Storefront) + SAP (ERP)</span></li>
  <li><span class="bullet">›</span><span><strong>Marketing & CRM:</strong> Klaviyo (E-Mail-Automation)</span></li>
  <li><span class="bullet">›</span><span><strong>Omnichannel-Vertrieb:</strong> 10+ Plattformen zentral gesteuert</span></li>
  <li><span class="bullet">›</span><span><strong>Performance-Tracking:</strong> GA4 + Microsoft Clarity</span></li>
  <li><span class="bullet">›</span><span><strong>Marktplatz-Ads:</strong> Amazon Ads + Native Plattform-SEO</span></li>
</ul>
<p>Dieser Stack garantiert maximale Ausfallsicherheit, Skalierbarkeit und Performance-Optimierung über alle Kanäle hinweg.</p>`,
    featured: false,
    category: 'Technologie',
  },
  {
    question: 'Auf welchen Marktplätzen vertreibt VENDORi?',
    answer: `<p>VENDORi steuert den Vertrieb auf <strong>10+ führenden europäischen Plattformen</strong> mit spezialisierten Strategien pro Marktplatz:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Generalisten:</strong> Amazon, eBay, Otto, Kaufland</span></li>
  <li><span class="bullet">›</span><span><strong>Spezialisten:</strong> ManoMano (Bau/Garten), Galaxus, Leroy Merlin</span></li>
  <li><span class="bullet">›</span><span><strong>Regional-Champions:</strong> Cdiscount (FR), Bol (NL), Praxis (NL), Brico (BE)</span></li>
</ul>
<p>Jeder Marktplatz wird mit spezialisierten Strategien optimiert: Amazon Ads, muttersprachliches SEO, technisches Performance-Tracking und kontinuierliche Conversion-Optimierung.</p>`,
    featured: false,
    category: 'Technologie',
  },

  // ========================================
  // KATEGORIE: Internationalisierung
  // ========================================
  {
    question: 'In welche Länder kann VENDORi expandieren?',
    answer: `<p>VENDORi ermöglicht den sofortigen Verkauf in <strong>20+ europäischen Ländern</strong> – ohne dass Sie sich um lokale Steuergesetze kümmern müssen.</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Kernmärkte:</strong> Deutschland, Frankreich, Italien, Spanien, Niederlande, Polen</span></li>
  <li><span class="bullet">›</span><span><strong>Weitere Märkte:</strong> Österreich, Belgien, Schweiz und weitere EU-Länder</span></li>
  <li><span class="bullet">›</span><span><strong>Steuer-Compliance:</strong> Vollständige Abwicklung über das OSS-Verfahren (One-Stop-Shop)</span></li>
  <li><span class="bullet">›</span><span><strong>Content-Lokalisierung:</strong> Lokalisierte Produktseiten basierend auf länderspezifischer Keyword-Recherche</span></li>
  <li><span class="bullet">›</span><span><strong>Reporting:</strong> Wöchentliche KPI-Reports und Echtzeit-Dashboards</span></li>
</ul>`,
    featured: false,
    category: 'Internationalisierung',
  },
  {
    question: 'Wie transparent sind die Finanzen und das Reporting?',
    answer: `<p>Volle Kontrolle über Ihre E-Commerce-Performance durch professionelles Reporting:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Wöchentliche KPI-Reports</strong> mit allen relevanten Kennzahlen</span></li>
  <li><span class="bullet">›</span><span><strong>Echtzeit-Dashboards</strong> für Umsatz, Retourenquoten und Marketing-Effizienz (ROAS)</span></li>
  <li><span class="bullet">›</span><span><strong>Detaillierte Aufschlüsselung</strong> nach Ländern, Marktplätzen und Produkten</span></li>
  <li><span class="bullet">›</span><span><strong>Transparente Darstellung</strong> aller Kosten und Margen</span></li>
</ul>
<p>Ziel ist maximale Transparenz für fundierte Geschäftsentscheidungen – Sie behalten die volle Kontrolle über Ihre Performance-Daten.</p>`,
    featured: false,
    category: 'Internationalisierung',
  },

  // ========================================
  // KATEGORIE: Kooperationsmodelle
  // ========================================
  {
    question: 'Welche Kooperationsmodelle bietet VENDORi an?',
    answer: `<p>Wählen Sie das Kooperationsmodell, das am besten zu Ihrer Unternehmensstruktur passt:</p>

<div class="my-6">
  <div class="overflow-x-auto">
    <table>
      <thead>
        <tr>
          <th>Modell</th>
          <th>Vergütung</th>
          <th>Risiko</th>
          <th>Ideal für</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kommission</td>
          <td>12–18% vom Nettoumsatz</td>
          <td>Bei VENDORi</td>
          <td>Risikofreier Start</td>
        </tr>
        <tr>
          <td>Konsignation</td>
          <td>Variable Vereinbarung</td>
          <td>Geteilt</td>
          <td>Bilanz-Optimierung</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p><strong>1. Kommissionsmodell:</strong> Rein erfolgsbasiert. VENDORi erhält 12–18 % vom Nettoumsatz. Ideal für Hersteller, die kein finanzielles Risiko eingehen möchten – Sie zahlen nur bei erfolgreichen Verkäufen.</p>
<p><strong>2. Konsignationslager:</strong> Die Ware bleibt bis zum Verkauf an den Endkunden in Ihrem Eigentum, wird aber von uns verwaltet. Optimiert die Bilanzierung und minimiert das Risiko für beide Seiten.</p>`,
    featured: false,
    category: 'Kooperationsmodelle',
  },
  {
    question: 'Wie wird die Vergütung im Kommissionsmodell berechnet?',
    answer: `<p>Im Kommissionsmodell arbeiten wir rein erfolgsbasiert – Sie zahlen nur bei erfolgreichen Verkäufen:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Vergütung:</strong> 12–18 % vom Nettoumsatz (je nach Produktkategorie und Volumen)</span></li>
  <li><span class="bullet">›</span><span><strong>Keine versteckten Kosten:</strong> Alle Leistungen sind in der Provision enthalten (Kundenservice, Steuer-Compliance, Technologie, Marketing)</span></li>
  <li><span class="bullet">›</span><span><strong>Risikominimierung:</strong> Sie zahlen nur bei erfolgreichen Verkäufen</span></li>
  <li><span class="bullet">›</span><span><strong>Skalierbar:</strong> Bei steigendem Volumen sinkt der Prozentsatz – wir wachsen gemeinsam</span></li>
</ul>
<p>Dieses Modell eignet sich besonders für Hersteller, die ohne Kapitaleinsatz und ohne finanzielles Risiko in den E-Commerce einsteigen oder skalieren möchten.</p>`,
    featured: false,
    category: 'Kooperationsmodelle',
  },

  // ========================================
  // KATEGORIE: Allgemein (ganz unten auf FAQ-Seite)
  // ========================================
  // Featured FAQs (Homepage)
  {
    question: 'Was macht VENDORi anders als andere E-Commerce-Agenturen?',
    answer: `<p>VENDORi ist selbst <strong>aktiver E-Commerce-Seller mit über 1,5 Millionen Kunden in den eigenen D2C-Shops</strong> – kein Agentur-Konstrukt. Wir betreiben täglich eigene Shops und D2C-Brands mit vollständiger technischer Infrastruktur.</p>
<p>Jede Strategie, die wir empfehlen, haben wir bereits in unseren eigenen Shops validiert und skaliert — <strong>erprobte Methoden, kein Experiment auf Ihre Kosten.</strong></p>`,
    featured: true,
    category: 'Allgemein',
    priority: 1,
  },
  {
    question: 'Für welche Unternehmen ist VENDORi der richtige Partner?',
    answer: `<p>VENDORi ist spezialisiert auf <strong>Hersteller und Marken</strong>, die ihren E-Commerce-Umsatz entwickeln oder skalieren möchten – ohne selbst als Verkäufer auftreten zu müssen.</p>
<p>Wir arbeiten über drei Kanäle: unsere eigenen Shops, Ihre D2C-Plattformen oder internationale Marktplätze wie Amazon. Besonders geeignet für <strong>Mittelstand und wachsende Marken</strong> im DIY-, Werkzeug- und Gartensektor.</p>`,
    featured: true,
    category: 'Allgemein',
    priority: 2,
  },
  {
    question: 'In welchen Märkten ist VENDORi tätig?',
    answer: `<p>VENDORi ist in <strong>20+ europäischen Ländern</strong> aktiv: Deutschland, Frankreich, Niederlande, Österreich, Spanien, Italien, Belgien und weitere EU-Märkte.</p>
<p>Unsere eigenen Shops beliefern Kunden europaweit über D2C-Kanäle und internationale Marktplätze mit vollständiger Steuer-Compliance (OSS-Verfahren).</p>`,
    featured: true,
    category: 'Allgemein',
    priority: 3,
  },
  // Nicht-Featured FAQs (nur FAQ-Seite)
  {
    question: 'Welche Services bietet VENDORi konkret an?',
    answer: `<p>VENDORi bietet drei Hauptservices:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>D2C-Strategie & Umsatzwachstum</strong> mit praxiserprobten, validierten Strategien</span></li>
  <li><span class="bullet">›</span><span><strong>Internationale Marktplatz-Expansion</strong> in 20+ europäischen Ländern</span></li>
  <li><span class="bullet">›</span><span><strong>E-Commerce-Partnerschaft als Brand Operator</strong> mit vollständiger operativer Begleitung</span></li>
</ul>`,
    featured: false,
    category: 'Allgemein',
    priority: 4,
  },
  {
    question: 'Wie schnell kann ich mit VENDORi starten?',
    answer: `<p>Start innerhalb von <strong>2–3 Wochen</strong> nach kostenlosem Kennenlern-Gespräch – keine monatelangen Strategiephasen.</p>
<ul>
  <li><span class="bullet">›</span><span>Erste Tests starten in <strong>Woche 1–2</strong> nach Beauftragung</span></li>
  <li><span class="bullet">›</span><span>Erste Daten und Kennzahlen nach <strong>4–8 Wochen</strong> verfügbar</span></li>
  <li><span class="bullet">›</span><span>Wir arbeiten agil mit <strong>schnellen Iterationen</strong></span></li>
</ul>`,
    featured: false,
    category: 'Allgemein',
    priority: 5,
  },
  {
    question: 'Was kostet die Zusammenarbeit mit VENDORi?',
    answer: `<p>VENDORi bietet flexible Kooperationsmodelle:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Projektbasiert</strong> für klar definierte Aufgaben</span></li>
  <li><span class="bullet">›</span><span><strong>Retainer-Modell</strong> für laufende Betreuung</span></li>
  <li><span class="bullet">›</span><span><strong>Rein erfolgsbasierte Kommission</strong> (12–18 % vom Nettoumsatz)</span></li>
</ul>
<p>Die Kosten richten sich nach Ihrem individuellen Bedarf und Skalierungspotenzial. Nach dem kostenlosen Erstgespräch erstellen wir ein transparentes, individuelles Angebot.</p>`,
    featured: false,
    category: 'Allgemein',
    priority: 6,
  },
  {
    question: 'Auf welchen Marktplätzen ist VENDORi aktiv?',
    answer: `<p>VENDORi vertreibt auf <strong>10+ führenden EU-Marktplätzen</strong>:</p>
<ul>
  <li><span class="bullet">›</span><span>Amazon, eBay, Kaufland, Otto, Galaxus, ManoMano</span></li>
  <li><span class="bullet">›</span><span>XXXLutz, Cdiscount, Leroy Merlin, Rue de Commerce</span></li>
  <li><span class="bullet">›</span><span>Bol, Praxis, Brico und weitere regionale Plattformen</span></li>
</ul>
<p>Zusätzlich betreiben wir eigene D2C-Shops, die direkt in <strong>20+ europäische Länder</strong> liefern.</p>`,
    featured: false,
    category: 'Allgemein',
    priority: 7,
  },
  {
    question: 'Wie lange dauert es bis erste Ergebnisse sichtbar sind?',
    answer: `<p>Wir arbeiten mit schnellen, agilen Iterationen – keine monatelangen Strategiephasen ohne Transparenz:</p>
<ul>
  <li><span class="bullet">›</span><span>Erste Tests starten in <strong>Woche 1–2</strong> nach Beauftragung</span></li>
  <li><span class="bullet">›</span><span>Erste Daten und Kennzahlen nach <strong>4–8 Wochen</strong> verfügbar</span></li>
  <li><span class="bullet">›</span><span>Schnelles Testing → schnelles Learning → schnelle Optimierung</span></li>
</ul>`,
    featured: false,
    category: 'Allgemein',
    priority: 8,
  },
  {
    question: 'Welche Branchen betreut VENDORi?',
    answer: `<p><strong>Spezialisierung:</strong> Werkzeug, Garten & DIY-Sektor – VENDORi betreut primär Hersteller und Marken aus diesen Branchen. Verwandte Kategorien wie Home & Living sind ebenfalls möglich.</p>
<p><strong>Wichtig:</strong> VENDORi kann grundsätzlich jede Branche im E-Commerce betreuen. Entscheidend ist das Skalierungspotenzial, das wir gemeinsam im Erstgespräch bewerten.</p>`,
    featured: false,
    category: 'Allgemein',
    priority: 9,
  },
  {
    question: 'Brauche ich eigene E-Commerce-Erfahrung?',
    answer: `<p><strong>Nein</strong> – VENDORi bringt das komplette E-Commerce-Know-how mit. Wir übernehmen alle operativen Tasks:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>Tech-Stack:</strong> Shopware, SAP – komplett von uns betrieben</span></li>
  <li><span class="bullet">›</span><span><strong>Steuer-Compliance:</strong> OSS-Verfahren, USt-ID – vollständig übernommen</span></li>
  <li><span class="bullet">›</span><span><strong>Kundenservice:</strong> First & Second Level Support – von unserem Team</span></li>
</ul>
<p>Sie konzentrieren sich auf Ihr Kerngeschäft (Produktion & B2B), während wir den D2C-Kanal skalieren.</p>`,
    featured: false,
    category: 'Allgemein',
    priority: 10,
  },
  {
    question: 'Wie entstand VENDORi? Woher kommt die Erfahrung?',
    answer: `<p>VENDORi wurde <strong>2023 gegründet</strong>, basierend auf über <strong>22 Jahren praktischer E-Commerce-Erfahrung</strong> des Gründers Dejan Todorovic (seit 2002).</p>
<p>Die Gründung war kein theoretisches Konzept, sondern entstand aus der Praxis:</p>
<ul>
  <li><span class="bullet">›</span><span><strong>2002–2023:</strong> Aufbau und Skalierung eigener E-Commerce-Shops in Deutschland, Frankreich und darüber hinaus</span></li>
  <li><span class="bullet">›</span><span><strong>Praktisches Know-how:</strong> Über 1,5 Millionen Kunden in eigenen D2C-Shops betreut</span></li>
  <li><span class="bullet">›</span><span><strong>Operator-Mentalität:</strong> Täglich operativ in Marktplätzen und eigenen Shops aktiv</span></li>
  <li><span class="bullet">›</span><span><strong>2023:</strong> VENDORi GmbH gegründet, um diese Expertise anderen Herstellern zugänglich zu machen</span></li>
</ul>
<p>Das ist nicht Theorie, das ist Praxis – von jemanden, der selbst täglich im E-Commerce arbeitet.</p>`,
    featured: false,
    category: 'Allgemein',
    priority: 11,
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Returns only featured FAQs for homepage
 * Sorted by priority (ascending)
 */
export function getFeaturedFAQs(): UnifiedFAQItem[] {
  return unifiedFAQData
    .filter((faq) => faq.featured)
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
}

/**
 * Returns all FAQs grouped by category for FAQ page
 * FAQs within each category are sorted by priority
 */
export function getFAQsByCategory(): FAQCategory[] {
  const categories = Array.from(
    new Set(unifiedFAQData.map((faq) => faq.category))
  );

  return categories.map((category) => ({
    category,
    faqs: unifiedFAQData
      .filter((faq) => faq.category === category)
      .sort((a, b) => (a.priority || 999) - (b.priority || 999)),
  }));
}

/**
 * Returns all FAQs (for JSON-LD Schema)
 */
export function getAllFAQs(): UnifiedFAQItem[] {
  return unifiedFAQData;
}

// ============================================
// BACKWARD COMPATIBILITY EXPORTS
// ============================================

/**
 * @deprecated Use getFeaturedFAQs() instead
 * Exported for backward compatibility during migration
 */
export const faqData = getFeaturedFAQs();

/**
 * @deprecated Use getFAQsByCategory() instead
 * Exported for backward compatibility during migration
 */
export const faqDetailedData = getFAQsByCategory();
