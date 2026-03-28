export interface DetailedFAQItem {
  question: string;
  answer: string;
}

export interface DetailedFAQCategory {
  category: string;
  faqs: DetailedFAQItem[];
}

export const faqDetailedData: DetailedFAQCategory[] = [
  {
    category: 'Geschäftsmodell',
    faqs: [
      {
        question: 'Was ist ein Brand Operator?',
        answer:
          'Ein Brand Operator ist ein strategischer E-Commerce-Partner, der die gesamte Online-Vertriebskette für Hersteller übernimmt – von der Technologie über den Verkauf bis zum Kundenservice.\n\nIm Gegensatz zu klassischen Fulfillment-Dienstleistern, die nur lagern und versenden, übernimmt VENDORi als Brand Operator die komplette E-Commerce-Wertschöpfungskette: rechtlicher Verkauf als Merchant of Record (MoR), Steuer-Compliance, Kundenservice, Technologie und Risikomanagement.',
      },
      {
        question: 'Wie unterscheidet sich VENDORi von klassischen Fulfillment-Dienstleistern?',
        answer:
          `<div class="overflow-x-auto">
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
      },
      {
        question: 'Was bedeutet Merchant of Record (MoR) konkret?',
        answer:
          'Ein Merchant of Record (MoR) ist der rechtlich verantwortliche Verkäufer einer Transaktion. Als MoR tritt VENDORi rechtlich gegenüber dem Endkunden auf – der Hersteller bleibt vollständig im Hintergrund.\n\nDas bedeutet konkret:\n\n• Wir erstellen die Rechnungen\n• Wir führen die Umsatzsteuer via OSS-Verfahren (One-Stop-Shop) ab\n• Wir garantieren DSGVO-Konformität\n• Wir haften für das Widerrufsrecht\n• Wir tragen das rechtliche Risiko der Transaktion\n\nDer Hersteller kann sich vollständig auf sein Kerngeschäft (Produktion & B2B) konzentrieren, während VENDORi den D2C-Kanal (Direct-to-Consumer) skaliert.',
      },
    ],
  },
  {
    category: 'Onboarding',
    faqs: [
      {
        question: 'Wie läuft der Onboarding-Prozess ab?',
        answer:
          'Go-Live in 4-8 Wochen bei Setup-Kosten von 5.000-10.000 EUR einmalig. Der Onboarding-Prozess ist auf Geschwindigkeit und minimale Belastung Ihrer Ressourcen ausgelegt:\n\n• Zeitrahmen: Durchschnittlich 4 bis 8 Wochen bis zu den ersten Umsätzen\n• ERP-Anbindung: Nahtlose technische Integration über unser SAP-System\n• Investition: Einmalige Setup-Fee von 5.000 – 10.000 EUR (beinhaltet Shop-Bau, Marktplatz-Anbindung und Logistik-Setup)\n\nExpertentipp: Durch unsere bestehende E-Commerce-Infrastruktur entfällt die monatelange Lernkurve beim Aufbau eigener E-Commerce-Teams.',
      },
      {
        question: 'Was ist in der Setup-Fee enthalten?',
        answer:
          'Die einmalige Setup-Fee von 5.000 – 10.000 EUR umfasst das komplette technische Onboarding:\n\n• Shop-Entwicklung: Aufbau eines hochperformanten Shopware-Stores\n• Marktplatz-Integration: Anbindung aller relevanten Plattformen (Amazon, eBay, Otto, etc.)\n• Logistik-Anbindung: Synchronisation aller Warenwirtschaftsprozesse\n• ERP-Integration: Nahtlose Verbindung zu Ihrem bestehenden System\n• Produktdaten-Migration: Übernahme und Optimierung Ihrer Produktdaten\n\nDie laufenden Kosten sind im Kommissionsmodell rein erfolgsbasiert – Sie zahlen nur bei erfolgreichen Verkäufen.',
      },
    ],
  },
  {
    category: 'Technologie',
    faqs: [
      {
        question: 'Welchen Tech-Stack nutzt VENDORi?',
        answer:
          'VENDORi nutzt einen "Best-of-Breed"-Tech-Stack für maximale E-Commerce-Performance. Ein Tech-Stack ist die Kombination aller Technologien und Software-Tools, die für den Betrieb eines Online-Geschäfts benötigt werden.\n\nVENDORI TECH-STACK – Best-of-Breed Komponenten:\n\n• E-Commerce Core: Shopware (Storefront) + SAP (ERP)\n• Marketing & CRM: Klaviyo (E-Mail-Automation)\n• Omnichannel-Vertrieb: 10+ Plattformen zentral gesteuert\n• Performance-Tracking: GA4 + Microsoft Clarity\n• Marktplatz-Ads: Amazon Ads + Native Plattform-SEO\n\nDieser Tech-Stack garantiert maximale Ausfallsicherheit, Skalierbarkeit und Performance-Optimierung über alle Kanäle hinweg.',
      },
      {
        question: 'Auf welchen Marktplätzen vertreibt VENDORi?',
        answer:
          'VENDORi steuert den Vertrieb auf 10+ führenden europäischen Plattformen mit spezialisierten Strategien pro Marktplatz:\n\n• Generalisten: Amazon, eBay, Otto, Kaufland\n• Spezialisten: ManoMano (Bau/Garten), Galaxus, Leroy Merlin\n• Regional-Champions: Cdiscount (FR), Bol (NL), Praxis (NL), Brico (BE)\n• Weitere Plattformen: Je nach Produktkategorie und Zielmarkt\n\nJeder Marktplatz wird mit spezialisierten Strategien optimiert: Amazon Ads, muttersprachliches SEO, technisches Performance-Tracking und kontinuierliche Conversion-Optimierung.',
      },
    ],
  },
  {
    category: 'Internationalisierung',
    faqs: [
      {
        question: 'In welche Länder kann VENDORi expandieren?',
        answer:
          'VENDORi ermöglicht den sofortigen Verkauf in 20+ europäischen Ländern – ohne dass Sie sich um lokale Steuergesetze kümmern müssen:\n\n• Kernmärkte: Deutschland, Frankreich, Italien, Spanien, Niederlande, Polen\n• Weitere Märkte: Österreich, Belgien, Schweiz und viele weitere EU-Länder\n\nWichtig: Vollständige Steuer-Compliance durch VENDORi\n\n• Umsatzsteuer: Komplette Abwicklung über das OSS-Verfahren (One-Stop-Shop). Das OSS-Verfahren ist ein EU-weites Umsatzsteuer-Meldesystem, das grenzüberschreitende Verkäufe vereinfacht.\n• Content-Lokalisierung: Wir erstellen lokalisierte Produktseiten basierend auf länderspezifischer Keyword-Recherche\n• Reporting: Volle Kontrolle durch wöchentliche KPI-Reports und Echtzeit-Dashboards',
      },
      {
        question: 'Wie transparent sind die Finanzen und das Reporting?',
        answer:
          'Volle Kontrolle über Ihre E-Commerce-Performance durch professionelles Reporting:\n\n• Wöchentliche KPI-Reports mit allen relevanten Kennzahlen\n• Echtzeit-Dashboards für Umsatz, Retourenquoten und Marketing-Effizienz (ROAS)\n• Detaillierte Aufschlüsselung nach Ländern, Marktplätzen und Produkten\n• Transparente Darstellung aller Kosten und Margen\n\nZiel ist maximale Transparenz für fundierte Geschäftsentscheidungen – Sie behalten die volle Kontrolle über Ihre Performance-Daten.',
      },
    ],
  },
  {
    category: 'Kooperationsmodelle',
    faqs: [
      {
        question: 'Welche Kooperationsmodelle bietet VENDORi an?',
        answer:
          `Wählen Sie das Kooperationsmodell, das am besten zu Ihrer Unternehmensstruktur passt:

<div class="my-6">
  <p class="text-lg font-bold text-primary-400 mb-4">VENDORI KOOPERATIONSMODELLE – Welches passt zu Ihnen?</p>
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
          <td>12-18% vom Nettoumsatz</td>
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

<p class="mt-6"><strong>1. KOMMISSIONSMODELL:</strong><br>
Rein erfolgsbasiert. VENDORi erhält 12–18 % vom Nettoumsatz. Ideal für Hersteller, die kein finanzielles Risiko eingehen möchten – Sie zahlen nur bei erfolgreichen Verkäufen.</p>

<p class="mt-4"><strong>2. KONSIGNATIONSLAGER:</strong><br>
Die Ware bleibt bis zum Verkauf an den Endkunden in Ihrem Eigentum, wird aber von uns verwaltet. Optimiert die Bilanzierung und minimiert das Risiko für beide Seiten.</p>`,
      },
      {
        question: 'Wie wird die Vergütung im Kommissionsmodell berechnet?',
        answer:
          'Im Kommissionsmodell arbeiten wir rein erfolgsbasiert – Sie zahlen nur bei erfolgreichen Verkäufen:\n\n• Vergütung: 12–18 % vom Nettoumsatz (je nach Produktkategorie und Volumen)\n• Keine versteckten Kosten: Alle Leistungen sind in der Provision enthalten (Kundenservice, Steuer-Compliance, Technologie, Marketing)\n• Risikominimierung: Sie zahlen nur bei erfolgreichen Verkäufen\n• Skalierbar: Bei steigendem Volumen sinkt der Prozentsatz – wir wachsen gemeinsam\n\nDieses Modell eignet sich besonders für Hersteller, die ohne Kapitaleinsatz und ohne finanzielles Risiko in den E-Commerce einsteigen oder skalieren möchten.',
      },
    ],
  },
];
