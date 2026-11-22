// Automatisch erzeugt aus dem freigegebenen Prototyp "index (1) 1.html" (Stand 22.11.2026).
// Texte und Markup 1:1 übernommen. Änderungen am Inhalt bitte direkt hier vornehmen.
import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ScrollSpy } from '@/components/site/ScrollSpy';

const DESCRIPTION = 'Alle wichtigen Informationen zu VENDORi, unseren Services und der Zusammenarbeit.';

export const metadata: Metadata = {
  title: 'FAQ',
  description: DESCRIPTION,
  alternates: { canonical: 'https://vendori.eu/faq' },
  openGraph: { title: 'FAQ | VENDORi GmbH', description: DESCRIPTION, url: 'https://vendori.eu/faq', type: 'website' },
};

// FAQPage-Schema aus den sichtbaren Antworten erzeugt (Klartext)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was macht VENDORi anders als andere E-Commerce-Agenturen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi verbindet operative E-Commerce-Erfahrung mit Dienstleistungen für Hersteller und Marken. Wir betreiben mit myToolStore einen internationalen Onlineshop, entwickeln mit ShowerNIZR® eine eigene Produktmarke und führen mit yourNOVA einen spezialisierten Shop für den Küchenkomposter Nova. Diese praktische Erfahrung nutzen wir für die Entwicklung, Umsetzung und Optimierung von E-Commerce-Strategien, von Shop-Technologie und Produktdaten bis zum internationalen Vertrieb und Kundenservice."
      }
    },
    {
      "@type": "Question",
      "name": "Welche E-Commerce-Leistungen bietet VENDORi an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir übernehmen den Online-Vertrieb für Hersteller und Marken in drei Bereichen: • Shops & Technologie: Shop-Technologie, Produktdaten und Produktpräsentation • Marktplätze & Internationalisierung: Amazon und weitere Marktplätze, Übersetzungen und lokalisierte Inhalte • Laufender E-Commerce-Betrieb: Kundenservice, Selling-Bilder und Prozessoptimierung"
      }
    },
    {
      "@type": "Question",
      "name": "Für welche Unternehmen ist VENDORi der richtige Partner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi ist spezialisiert auf Hersteller und Marken, die ihren E-Commerce-Umsatz entwickeln oder skalieren möchten, ohne selbst als Verkäufer auftreten zu müssen. Wir arbeiten über drei Kanäle: unsere eigenen Shops, Ihre D2C-Plattformen oder internationale Marktplätze wie Amazon. Besonders geeignet für Mittelstand und wachsende Marken im DIY-, Werkzeug- und Gartensektor."
      }
    },
    {
      "@type": "Question",
      "name": "Auf welchen Marktplätzen ist VENDORi aktiv?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi vertreibt auf 10+ führenden EU-Marktplätzen: • Amazon, eBay, Kaufland, Otto, ManoMano • XXXLutz, Cdiscount, Leroy Merlin, Rue de Commerce • Praxis, Brico und weitere regionale Plattformen Zusätzlich betreiben wir eigene D2C-Shops, die direkt in 20+ europäische Länder liefern."
      }
    },
    {
      "@type": "Question",
      "name": "In welchen Märkten ist VENDORi tätig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi ist in 20+ europäischen Ländern aktiv: Deutschland, Frankreich, Niederlande, Österreich, Spanien, Italien, Belgien und weitere EU-Märkte. Unsere eigenen Shops beliefern Kunden europaweit über D2C-Kanäle und internationale Marktplätze mit vollständiger Steuer-Compliance (OSS-Verfahren)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie schnell kann ich mit VENDORi starten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Start erfolgt innerhalb von 2 bis 3 Wochen nach dem Erstgespräch, ohne monatelange Strategiephasen. • Erste Tests starten in Woche 1 bis 2 nach Beauftragung • Erste Daten und Kennzahlen nach 4 bis 8 Wochen verfügbar • Wir arbeiten agil mit schnellen Iterationen"
      }
    },
    {
      "@type": "Question",
      "name": "Was kostet die Zusammenarbeit mit VENDORi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi bietet flexible Kooperationsmodelle: • Projektbasiert für klar definierte Aufgaben • Retainer-Modell für laufende Betreuung • Rein erfolgsbasierte Kommission (12 bis 18 % vom Nettoumsatz) Die Kosten richten sich nach Ihrem individuellen Bedarf und Skalierungspotenzial. Nach dem kostenlosen Erstgespräch erstellen wir ein transparentes, individuelles Angebot."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert es, bis erste Ergebnisse sichtbar sind?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir arbeiten mit schnellen, agilen Iterationen. Monatelange Strategiephasen ohne Transparenz gibt es bei uns nicht: • Erste Tests starten in Woche 1 bis 2 nach Beauftragung • Erste Daten und Kennzahlen nach 4 bis 8 Wochen verfügbar • Schnelles Testen, schnelles Lernen, schnelle Optimierung"
      }
    },
    {
      "@type": "Question",
      "name": "Welche Branchen betreut VENDORi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unser Schwerpunkt liegt auf Werkzeug, Garten und DIY. VENDORi betreut vor allem Hersteller und Marken aus diesen Branchen. Verwandte Kategorien wie Home & Living sind ebenfalls möglich. Grundsätzlich kann VENDORi jede Branche im E-Commerce betreuen. Entscheidend ist das Skalierungspotenzial, das wir gemeinsam im Erstgespräch bewerten."
      }
    },
    {
      "@type": "Question",
      "name": "Brauche ich eigene E-Commerce-Erfahrung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. VENDORi bringt das komplette E-Commerce-Know-how mit und übernimmt alle operativen Aufgaben: • Tech-Stack: Shopware und SAP, komplett von uns betrieben • Steuer-Compliance: OSS-Verfahren und USt-ID, vollständig übernommen • Kundenservice: First und Second Level Support durch unser Team Sie konzentrieren sich auf Ihr Kerngeschäft (Produktion und B2B), während wir den D2C-Kanal skalieren."
      }
    },
    {
      "@type": "Question",
      "name": "Wie entstand VENDORi? Woher kommt die Erfahrung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi wurde 2023 gegründet. Grundlage sind über 22 Jahre praktische E-Commerce-Erfahrung des Gründers Dejan Todorovic (seit 2002). Die Gründung war kein theoretisches Konzept, sondern entstand aus der Praxis: • 2002 bis 2023: Aufbau und Skalierung eigener E-Commerce-Shops in Deutschland, Frankreich und darüber hinaus • Praktisches Know-how: über 1,5 Millionen Kunden in eigenen D2C-Shops betreut • Operator-Mentalität: täglich operativ auf Marktplätzen und in eigenen Shops aktiv • 2023: Gründung der VENDORi GmbH, um diese Expertise anderen Herstellern zugänglich zu machen Das ist nicht Theorie, das ist Praxis von jemandem, der selbst täglich im E-Commerce arbeitet."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist ein Brand Operator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Brand Operator ist ein strategischer E-Commerce-Partner, der die gesamte Online-Vertriebskette für Hersteller übernimmt: von der Technologie über den Verkauf bis zum Kundenservice. Im Gegensatz zu klassischen Fulfillment-Dienstleistern, die nur lagern und versenden, übernimmt VENDORi als Brand Operator die komplette E-Commerce-Wertschöpfungskette: • Rechtlicher Verkauf als Merchant of Record (MoR) • Steuer-Compliance (USt-ID, OSS-Abwicklung) • Vollständiger Kundenservice (First und Second Level) • Technologie: SAP, Shopware und Marktplatz-Setup • Risikomanagement und Haftungsübernahme"
      }
    },
    {
      "@type": "Question",
      "name": "Wie unterscheidet sich VENDORi von klassischen Fulfillment-Dienstleistern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kategorie: Fulfillment | VENDORi (Brand Operator) Rechtlicher Verkäufer: Hersteller bleibt Verkäufer | Wir übernehmen die Verkäuferrolle (MoR) Steuer-Compliance: Hersteller verantwortlich für USt-ID, OSS | Komplette Übernahme (USt-ID, OSS-Abwicklung) Kundenservice: Teilweise oder gar nicht | Vollständiger Support (First und Second Level) Technologie: Nur Schnittstellen | Komplettes SAP-, Shopware- und Marktplatz-Setup Risiko und Haftung: Beim Hersteller | Minimal für Hersteller, wir übernehmen Haftung und Retouren"
      }
    },
    {
      "@type": "Question",
      "name": "Was bedeutet Merchant of Record (MoR) konkret?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Merchant of Record (MoR) ist der rechtlich verantwortliche Verkäufer einer Transaktion. Als MoR tritt VENDORi rechtlich gegenüber dem Endkunden auf. Der Hersteller bleibt vollständig im Hintergrund. Das bedeutet konkret: • Wir erstellen die Rechnungen • Wir führen die Umsatzsteuer über das OSS-Verfahren ab • Wir garantieren DSGVO-Konformität • Wir haften für das Widerrufsrecht • Wir tragen das rechtliche Risiko der Transaktion Der Hersteller kann sich vollständig auf sein Kerngeschäft (Produktion und B2B) konzentrieren, während VENDORi den D2C-Kanal skaliert."
      }
    },
    {
      "@type": "Question",
      "name": "Wie läuft der Onboarding-Prozess ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go-Live in 4 bis 8 Wochen bei einmaligen Setup-Kosten von 5.000 bis 10.000 EUR. Der Onboarding-Prozess ist auf Geschwindigkeit und minimale Belastung Ihrer Ressourcen ausgelegt: • Zeitrahmen: durchschnittlich 4 bis 8 Wochen bis zu den ersten Umsätzen • ERP-Anbindung: nahtlose technische Integration über unser SAP-System • Investition: einmalige Setup-Fee von 5.000 bis 10.000 EUR (beinhaltet Shop-Bau, Marktplatz-Anbindung und Logistik-Setup) Durch unsere bestehende E-Commerce-Infrastruktur entfällt die monatelange Lernkurve beim Aufbau eigener E-Commerce-Teams."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist in der Setup-Fee enthalten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die einmalige Setup-Fee von 5.000 bis 10.000 EUR umfasst das komplette technische Onboarding: • Shop-Entwicklung: Aufbau eines leistungsstarken Shopware-Stores • Marktplatz-Integration: Anbindung aller relevanten Plattformen (Amazon, eBay, Otto usw.) • Logistik-Anbindung: Synchronisation aller Warenwirtschaftsprozesse • ERP-Integration: nahtlose Verbindung zu Ihrem bestehenden System • Produktdaten-Migration: Übernahme und Optimierung Ihrer Produktdaten Die laufenden Kosten sind im Kommissionsmodell rein erfolgsbasiert. Sie zahlen nur bei erfolgreichen Verkäufen."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Tech-Stack nutzt VENDORi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi nutzt einen „Best-of-Breed“-Tech-Stack für maximale E-Commerce-Performance: • E-Commerce Core: Shopware (Storefront) und SAP (ERP) • Marketing & CRM: Klaviyo (E-Mail-Automation) • Omnichannel-Vertrieb: 10+ Plattformen zentral gesteuert • Performance-Tracking: GA4 und Microsoft Clarity • Marktplatz-Ads: Amazon Ads und natives Plattform-SEO Dieser Stack garantiert maximale Ausfallsicherheit, Skalierbarkeit und Performance-Optimierung über alle Kanäle hinweg."
      }
    },
    {
      "@type": "Question",
      "name": "Auf welchen Marktplätzen vertreibt VENDORi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi steuert den Vertrieb auf 10+ führenden europäischen Plattformen mit spezialisierten Strategien pro Marktplatz: • Generalisten: Amazon, eBay, Otto, Kaufland • Spezialisten: ManoMano (Bau und Garten), Leroy Merlin • Regionale Marktführer: Cdiscount (FR), Praxis (NL), Brico (BE) Jeder Marktplatz wird mit spezialisierten Strategien optimiert: Amazon Ads, muttersprachliches SEO, technisches Performance-Tracking und kontinuierliche Conversion-Optimierung."
      }
    },
    {
      "@type": "Question",
      "name": "In welche Länder kann VENDORi expandieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VENDORi ermöglicht den sofortigen Verkauf in 20+ europäischen Ländern, ohne dass Sie sich um lokale Steuergesetze kümmern müssen. • Kernmärkte: Deutschland, Frankreich, Italien, Spanien, Niederlande, Polen • Weitere Märkte: Österreich, Belgien, Schweiz und weitere EU-Länder • Steuer-Compliance: vollständige Abwicklung über das OSS-Verfahren (One-Stop-Shop) • Content-Lokalisierung: lokalisierte Produktseiten auf Basis länderspezifischer Keyword-Recherche • Reporting: wöchentliche KPI-Reports und Echtzeit-Dashboards"
      }
    },
    {
      "@type": "Question",
      "name": "Wie transparent sind die Finanzen und das Reporting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Volle Kontrolle über Ihre E-Commerce-Performance durch professionelles Reporting: • Wöchentliche KPI-Reports mit allen relevanten Kennzahlen • Echtzeit-Dashboards für Umsatz, Retourenquoten und Marketing-Effizienz (ROAS) • Detaillierte Aufschlüsselung nach Ländern, Marktplätzen und Produkten • Transparente Darstellung aller Kosten und Margen Ziel ist maximale Transparenz für fundierte Geschäftsentscheidungen. Sie behalten die volle Kontrolle über Ihre Performance-Daten."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Kooperationsmodelle bietet VENDORi an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wählen Sie das Kooperationsmodell, das am besten zu Ihrer Unternehmensstruktur passt: Modell: Vergütung | Risiko | Ideal für Kommission: 12 bis 18 % vom Nettoumsatz | Bei VENDORi | Risikofreier Start Konsignation: Variable Vereinbarung | Geteilt | Bilanz-Optimierung 1. Kommissionsmodell: Rein erfolgsbasiert. VENDORi erhält 12 bis 18 % vom Nettoumsatz. Ideal für Hersteller, die kein finanzielles Risiko eingehen möchten. Sie zahlen nur bei erfolgreichen Verkäufen. 2. Konsignationslager: Die Ware bleibt bis zum Verkauf an den Endkunden in Ihrem Eigentum, wird aber von uns verwaltet. Das optimiert die Bilanzierung und minimiert das Risiko für beide Seiten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Vergütung im Kommissionsmodell berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Im Kommissionsmodell arbeiten wir rein erfolgsbasiert. Sie zahlen nur bei erfolgreichen Verkäufen: • Vergütung: 12 bis 18 % vom Nettoumsatz (je nach Produktkategorie und Volumen) • Keine versteckten Kosten: Alle Leistungen sind in der Provision enthalten (Kundenservice, Steuer-Compliance, Technologie, Marketing) • Risikominimierung: Sie zahlen nur bei erfolgreichen Verkäufen • Skalierbar: Bei steigendem Volumen sinkt der Prozentsatz, wir wachsen gemeinsam Dieses Modell eignet sich besonders für Hersteller, die ohne Kapitaleinsatz und ohne finanzielles Risiko in den E-Commerce einsteigen oder skalieren möchten."
      }
    }
  ]
};

export default async function FAQPage() {
  const nonce = (await headers()).get('x-nonce') || '';
  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {await BreadcrumbJsonLd({ items: [{ name: 'FAQ', url: 'https://vendori.eu/faq' }] })}
      <ScrollSpy />
      <section className="page-hero" aria-labelledby="alle-faq-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Brotkrümelnavigation">
            <ol>
              <li>
                <Link href="/">
                  Start
                </Link>
              </li>
              <li>
                <span aria-current="page">
                  FAQ
                </span>
              </li>
            </ol>
          </nav>
          <div className="page-hero__inner">
            <p className="eyebrow">
              FAQ
            </p>
            <h1 id="alle-faq-title" className="h1">
              Fragen &amp; Antworten.
            </h1>
            <p className="lead">
              Alle wichtigen Informationen zu VENDORi, unseren Services und der Zusammenarbeit.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-label="Fragen nach Themen">
        <div className="container faq-page">
          <nav className="faq-cats" aria-label="Themen" data-spy>
            <p className="faq-cats__title" aria-hidden="true">
              Themen
            </p>
            <ul>
              <li>
                <a href="#allgemein">
                  Allgemein{' '}
                  <span>
                    11
                  </span>
                </a>
              </li>
              <li>
                <a href="#geschaeftsmodell">
                  Geschäftsmodell{' '}
                  <span>
                    3
                  </span>
                </a>
              </li>
              <li>
                <a href="#onboarding">
                  Onboarding{' '}
                  <span>
                    2
                  </span>
                </a>
              </li>
              <li>
                <a href="#technologie">
                  Technologie{' '}
                  <span>
                    2
                  </span>
                </a>
              </li>
              <li>
                <a href="#internationalisierung">
                  Internationalisierung{' '}
                  <span>
                    2
                  </span>
                </a>
              </li>
              <li>
                <a href="#kooperationsmodelle">
                  Kooperationsmodelle{' '}
                  <span>
                    2
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div>
            {/* Allgemein: die ersten sechs Antworten sind wortgleich mit der Startseite */}
            <section className="faq-group" aria-labelledby="allgemein">
              <h2 id="allgemein" className="faq-group__title">
                Allgemein
              </h2>
              <div className="faq__list">
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Was macht VENDORi anders als andere E-Commerce-Agenturen?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi verbindet operative E-Commerce-Erfahrung mit Dienstleistungen für Hersteller und Marken. Wir betreiben mit{' '}
                      <strong>
                        myToolStore
                      </strong>
                      {' '}einen internationalen Onlineshop, entwickeln mit{' '}
                      <strong>
                        ShowerNIZR®
                      </strong>
                      {' '}eine eigene Produktmarke und führen mit{' '}
                      <strong>
                        yourNOVA
                      </strong>
                      {' '}einen spezialisierten Shop für den Küchenkomposter Nova.
                    </p>
                    <p>
                      Diese praktische Erfahrung nutzen wir für die Entwicklung, Umsetzung und Optimierung von E-Commerce-Strategien, von Shop-Technologie und Produktdaten bis zum internationalen Vertrieb und Kundenservice.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Welche E-Commerce-Leistungen bietet VENDORi an?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Wir übernehmen den Online-Vertrieb für Hersteller und Marken in drei Bereichen:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Shops &amp; Technologie:
                          </strong>
                          {' '}Shop-Technologie, Produktdaten und Produktpräsentation
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Marktplätze &amp; Internationalisierung:
                          </strong>
                          {' '}Amazon und weitere Marktplätze, Übersetzungen und lokalisierte Inhalte
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Laufender E-Commerce-Betrieb:
                          </strong>
                          {' '}Kundenservice, Selling-Bilder und Prozessoptimierung
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Für welche Unternehmen ist VENDORi der richtige Partner?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi ist spezialisiert auf{' '}
                      <strong>
                        Hersteller und Marken
                      </strong>
                      , die ihren E-Commerce-Umsatz entwickeln oder skalieren möchten, ohne selbst als Verkäufer auftreten zu müssen.
                    </p>
                    <p>
                      Wir arbeiten über drei Kanäle: unsere eigenen Shops, Ihre D2C-Plattformen oder internationale Marktplätze wie Amazon. Besonders geeignet für{' '}
                      <strong>
                        Mittelstand und wachsende Marken
                      </strong>
                      {' '}im DIY-, Werkzeug- und Gartensektor.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Auf welchen Marktplätzen ist VENDORi aktiv?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi vertreibt auf{' '}
                      <strong>
                        10+ führenden EU-Marktplätzen
                      </strong>
                      :
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Amazon, eBay, Kaufland, Otto, ManoMano
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          XXXLutz, Cdiscount, Leroy Merlin, Rue de Commerce
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Praxis, Brico und weitere regionale Plattformen
                        </span>
                      </li>
                    </ul>
                    <p>
                      Zusätzlich betreiben wir eigene D2C-Shops, die direkt in{' '}
                      <strong>
                        20+ europäische Länder
                      </strong>
                      {' '}liefern.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      In welchen Märkten ist VENDORi tätig?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi ist in{' '}
                      <strong>
                        20+ europäischen Ländern
                      </strong>
                      {' '}aktiv: Deutschland, Frankreich, Niederlande, Österreich, Spanien, Italien, Belgien und weitere EU-Märkte.
                    </p>
                    <p>
                      Unsere eigenen Shops beliefern Kunden europaweit über D2C-Kanäle und internationale Marktplätze mit vollständiger Steuer-Compliance (OSS-Verfahren).
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie schnell kann ich mit VENDORi starten?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Der Start erfolgt innerhalb von{' '}
                      <strong>
                        2 bis 3 Wochen
                      </strong>
                      {' '}nach dem Erstgespräch, ohne monatelange Strategiephasen.
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Erste Tests starten in{' '}
                          <strong>
                            Woche 1 bis 2
                          </strong>
                          {' '}nach Beauftragung
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Erste Daten und Kennzahlen nach{' '}
                          <strong>
                            4 bis 8 Wochen
                          </strong>
                          {' '}verfügbar
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wir arbeiten agil mit{' '}
                          <strong>
                            schnellen Iterationen
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Was kostet die Zusammenarbeit mit VENDORi?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi bietet flexible Kooperationsmodelle:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Projektbasiert für klar definierte Aufgaben
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Retainer-Modell für laufende Betreuung
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Rein erfolgsbasierte Kommission (12 bis 18&nbsp;% vom Nettoumsatz)
                        </span>
                      </li>
                    </ul>
                    <p>
                      Die Kosten richten sich nach Ihrem individuellen Bedarf und Skalierungspotenzial. Nach dem kostenlosen Erstgespräch erstellen wir ein transparentes, individuelles Angebot.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie lange dauert es, bis erste Ergebnisse sichtbar sind?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Wir arbeiten mit schnellen, agilen Iterationen. Monatelange Strategiephasen ohne Transparenz gibt es bei uns nicht:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Erste Tests starten in{' '}
                          <strong>
                            Woche 1 bis 2
                          </strong>
                          {' '}nach Beauftragung
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Erste Daten und Kennzahlen nach{' '}
                          <strong>
                            4 bis 8 Wochen
                          </strong>
                          {' '}verfügbar
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Schnelles Testen, schnelles Lernen, schnelle Optimierung
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Welche Branchen betreut VENDORi?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Unser Schwerpunkt liegt auf{' '}
                      <strong>
                        Werkzeug, Garten und DIY
                      </strong>
                      . VENDORi betreut vor allem Hersteller und Marken aus diesen Branchen. Verwandte Kategorien wie Home &amp; Living sind ebenfalls möglich.
                    </p>
                    <p>
                      Grundsätzlich kann VENDORi jede Branche im E-Commerce betreuen. Entscheidend ist das Skalierungspotenzial, das wir gemeinsam im Erstgespräch bewerten.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Brauche ich eigene E-Commerce-Erfahrung?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Nein. VENDORi bringt das komplette E-Commerce-Know-how mit und übernimmt alle operativen Aufgaben:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Tech-Stack:
                          </strong>
                          {' '}Shopware und SAP, komplett von uns betrieben
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Steuer-Compliance:
                          </strong>
                          {' '}OSS-Verfahren und USt-ID, vollständig übernommen
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Kundenservice:
                          </strong>
                          {' '}First und Second Level Support durch unser Team
                        </span>
                      </li>
                    </ul>
                    <p>
                      Sie konzentrieren sich auf Ihr Kerngeschäft (Produktion und B2B), während wir den D2C-Kanal skalieren.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie entstand VENDORi? Woher kommt die Erfahrung?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi wurde{' '}
                      <strong>
                        2023 gegründet
                      </strong>
                      . Grundlage sind über 22&nbsp;Jahre praktische E-Commerce-Erfahrung des Gründers Dejan Todorovic (seit 2002).
                    </p>
                    <p>
                      Die Gründung war kein theoretisches Konzept, sondern entstand aus der Praxis:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            2002 bis 2023:
                          </strong>
                          {' '}Aufbau und Skalierung eigener E-Commerce-Shops in Deutschland, Frankreich und darüber hinaus
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Praktisches Know-how:
                          </strong>
                          {' '}über 1,5&nbsp;Millionen Kunden in eigenen D2C-Shops betreut
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Operator-Mentalität:
                          </strong>
                          {' '}täglich operativ auf Marktplätzen und in eigenen Shops aktiv
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            2023:
                          </strong>
                          {' '}Gründung der VENDORi GmbH, um diese Expertise anderen Herstellern zugänglich zu machen
                        </span>
                      </li>
                    </ul>
                    <p>
                      Das ist nicht Theorie, das ist Praxis von jemandem, der selbst täglich im E-Commerce arbeitet.
                    </p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" aria-labelledby="geschaeftsmodell">
              <h2 id="geschaeftsmodell" className="faq-group__title">
                Geschäftsmodell
              </h2>
              <div className="faq__list">
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Was ist ein Brand Operator?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Ein Brand Operator ist ein strategischer E-Commerce-Partner, der die gesamte Online-Vertriebskette für Hersteller übernimmt: von der Technologie über den Verkauf bis zum Kundenservice.
                    </p>
                    <p>
                      Im Gegensatz zu klassischen Fulfillment-Dienstleistern, die nur lagern und versenden, übernimmt VENDORi als Brand Operator die komplette E-Commerce-Wertschöpfungskette:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Rechtlicher Verkauf als Merchant of Record (MoR)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Steuer-Compliance (USt-ID, OSS-Abwicklung)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Vollständiger Kundenservice (First und Second Level)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Technologie:
                          </strong>
                          {' '}SAP, Shopware und Marktplatz-Setup
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Risikomanagement und Haftungsübernahme
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie unterscheidet sich VENDORi von klassischen Fulfillment-Dienstleistern?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <div className="table-wrap" role="region" aria-label="Vergleich Fulfillment und VENDORi" tabIndex={0}>
                      <table className="table table--compare">
                        <thead>
                          <tr>
                            <th scope="col">
                              Kategorie
                            </th>
                            <th scope="col">
                              Fulfillment
                            </th>
                            <th scope="col">
                              VENDORi (Brand Operator)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              Rechtlicher Verkäufer
                            </th>
                            <td>
                              Hersteller bleibt Verkäufer
                            </td>
                            <td>
                              Wir übernehmen die Verkäuferrolle (MoR)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Steuer-Compliance
                            </th>
                            <td>
                              Hersteller verantwortlich für USt-ID, OSS
                            </td>
                            <td>
                              Komplette Übernahme (USt-ID, OSS-Abwicklung)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Kundenservice
                            </th>
                            <td>
                              Teilweise oder gar nicht
                            </td>
                            <td>
                              Vollständiger Support (First und Second Level)
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Technologie
                            </th>
                            <td>
                              Nur Schnittstellen
                            </td>
                            <td>
                              Komplettes SAP-, Shopware- und Marktplatz-Setup
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Risiko und Haftung
                            </th>
                            <td>
                              Beim Hersteller
                            </td>
                            <td>
                              Minimal für Hersteller, wir übernehmen Haftung und Retouren
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Was bedeutet Merchant of Record (MoR) konkret?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Ein Merchant of Record (MoR) ist der rechtlich verantwortliche Verkäufer einer Transaktion. Als MoR tritt VENDORi rechtlich gegenüber dem Endkunden auf. Der Hersteller bleibt vollständig im Hintergrund.
                    </p>
                    <p>
                      Das bedeutet konkret:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wir erstellen die Rechnungen
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wir führen die Umsatzsteuer über das OSS-Verfahren ab
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wir garantieren DSGVO-Konformität
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wir haften für das Widerrufsrecht
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wir tragen das rechtliche Risiko der Transaktion
                        </span>
                      </li>
                    </ul>
                    <p>
                      Der Hersteller kann sich vollständig auf sein Kerngeschäft (Produktion und B2B) konzentrieren, während VENDORi den D2C-Kanal skaliert.
                    </p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" aria-labelledby="onboarding">
              <h2 id="onboarding" className="faq-group__title">
                Onboarding
              </h2>
              <div className="faq__list">
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie läuft der Onboarding-Prozess ab?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Go-Live in{' '}
                      <strong>
                        4 bis 8 Wochen
                      </strong>
                      {' '}bei einmaligen Setup-Kosten von{' '}
                      <strong>
                        5.000 bis 10.000 EUR
                      </strong>
                      . Der Onboarding-Prozess ist auf Geschwindigkeit und minimale Belastung Ihrer Ressourcen ausgelegt:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Zeitrahmen:
                          </strong>
                          {' '}durchschnittlich 4 bis 8 Wochen bis zu den ersten Umsätzen
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            ERP-Anbindung:
                          </strong>
                          {' '}nahtlose technische Integration über unser SAP-System
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Investition:
                          </strong>
                          {' '}einmalige Setup-Fee von 5.000 bis 10.000 EUR (beinhaltet Shop-Bau, Marktplatz-Anbindung und Logistik-Setup)
                        </span>
                      </li>
                    </ul>
                    <p>
                      Durch unsere bestehende E-Commerce-Infrastruktur entfällt die monatelange Lernkurve beim Aufbau eigener E-Commerce-Teams.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Was ist in der Setup-Fee enthalten?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Die einmalige Setup-Fee von 5.000 bis 10.000 EUR umfasst das komplette technische Onboarding:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Shop-Entwicklung:
                          </strong>
                          {' '}Aufbau eines leistungsstarken Shopware-Stores
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Marktplatz-Integration:
                          </strong>
                          {' '}Anbindung aller relevanten Plattformen (Amazon, eBay, Otto usw.)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Logistik-Anbindung:
                          </strong>
                          {' '}Synchronisation aller Warenwirtschaftsprozesse
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            ERP-Integration:
                          </strong>
                          {' '}nahtlose Verbindung zu Ihrem bestehenden System
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Produktdaten-Migration:
                          </strong>
                          {' '}Übernahme und Optimierung Ihrer Produktdaten
                        </span>
                      </li>
                    </ul>
                    <p>
                      Die laufenden Kosten sind im Kommissionsmodell rein erfolgsbasiert. Sie zahlen nur bei erfolgreichen Verkäufen.
                    </p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" aria-labelledby="technologie">
              <h2 id="technologie" className="faq-group__title">
                Technologie
              </h2>
              <div className="faq__list">
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Welchen Tech-Stack nutzt VENDORi?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi nutzt einen „Best-of-Breed“-Tech-Stack für maximale E-Commerce-Performance:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            E-Commerce Core:
                          </strong>
                          {' '}Shopware (Storefront) und SAP (ERP)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Marketing &amp; CRM:
                          </strong>
                          {' '}Klaviyo (E-Mail-Automation)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Omnichannel-Vertrieb:
                          </strong>
                          {' '}10+ Plattformen zentral gesteuert
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Performance-Tracking:
                          </strong>
                          {' '}GA4 und Microsoft Clarity
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Marktplatz-Ads:
                          </strong>
                          {' '}Amazon Ads und natives Plattform-SEO
                        </span>
                      </li>
                    </ul>
                    <p>
                      Dieser Stack garantiert maximale Ausfallsicherheit, Skalierbarkeit und Performance-Optimierung über alle Kanäle hinweg.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Auf welchen Marktplätzen vertreibt VENDORi?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi steuert den Vertrieb auf{' '}
                      <strong>
                        10+ führenden europäischen Plattformen
                      </strong>
                      {' '}mit spezialisierten Strategien pro Marktplatz:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Generalisten:
                          </strong>
                          {' '}Amazon, eBay, Otto, Kaufland
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Spezialisten:
                          </strong>
                          {' '}ManoMano (Bau und Garten), Leroy Merlin
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Regionale Marktführer:
                          </strong>
                          {' '}Cdiscount (FR), Praxis (NL), Brico (BE)
                        </span>
                      </li>
                    </ul>
                    <p>
                      Jeder Marktplatz wird mit spezialisierten Strategien optimiert: Amazon Ads, muttersprachliches SEO, technisches Performance-Tracking und kontinuierliche Conversion-Optimierung.
                    </p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" aria-labelledby="internationalisierung">
              <h2 id="internationalisierung" className="faq-group__title">
                Internationalisierung
              </h2>
              <div className="faq__list">
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      In welche Länder kann VENDORi expandieren?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      VENDORi ermöglicht den sofortigen Verkauf in{' '}
                      <strong>
                        20+ europäischen Ländern
                      </strong>
                      , ohne dass Sie sich um lokale Steuergesetze kümmern müssen.
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Kernmärkte:
                          </strong>
                          {' '}Deutschland, Frankreich, Italien, Spanien, Niederlande, Polen
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Weitere Märkte:
                          </strong>
                          {' '}Österreich, Belgien, Schweiz und weitere EU-Länder
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Steuer-Compliance:
                          </strong>
                          {' '}vollständige Abwicklung über das OSS-Verfahren (One-Stop-Shop)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Content-Lokalisierung:
                          </strong>
                          {' '}lokalisierte Produktseiten auf Basis länderspezifischer Keyword-Recherche
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Reporting:
                          </strong>
                          {' '}wöchentliche KPI-Reports und Echtzeit-Dashboards
                        </span>
                      </li>
                    </ul>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie transparent sind die Finanzen und das Reporting?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Volle Kontrolle über Ihre E-Commerce-Performance durch professionelles Reporting:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Wöchentliche KPI-Reports mit allen relevanten Kennzahlen
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Echtzeit-Dashboards für Umsatz, Retourenquoten und Marketing-Effizienz (ROAS)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Detaillierte Aufschlüsselung nach Ländern, Marktplätzen und Produkten
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          Transparente Darstellung aller Kosten und Margen
                        </span>
                      </li>
                    </ul>
                    <p>
                      Ziel ist maximale Transparenz für fundierte Geschäftsentscheidungen. Sie behalten die volle Kontrolle über Ihre Performance-Daten.
                    </p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" aria-labelledby="kooperationsmodelle">
              <h2 id="kooperationsmodelle" className="faq-group__title">
                Kooperationsmodelle
              </h2>
              <div className="faq__list">
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Welche Kooperationsmodelle bietet VENDORi an?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Wählen Sie das Kooperationsmodell, das am besten zu Ihrer Unternehmensstruktur passt:
                    </p>
                    <div className="table-wrap" role="region" aria-label="Kooperationsmodelle im Vergleich" tabIndex={0}>
                      <table className="table table--compare">
                        <thead>
                          <tr>
                            <th scope="col">
                              Modell
                            </th>
                            <th scope="col">
                              Vergütung
                            </th>
                            <th scope="col">
                              Risiko
                            </th>
                            <th scope="col">
                              Ideal für
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              Kommission
                            </th>
                            <td>
                              12 bis 18&nbsp;% vom Nettoumsatz
                            </td>
                            <td>
                              Bei VENDORi
                            </td>
                            <td>
                              Risikofreier Start
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Konsignation
                            </th>
                            <td>
                              Variable Vereinbarung
                            </td>
                            <td>
                              Geteilt
                            </td>
                            <td>
                              Bilanz-Optimierung
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      <strong>
                        1. Kommissionsmodell:
                      </strong>
                      {' '}Rein erfolgsbasiert. VENDORi erhält 12 bis 18&nbsp;% vom Nettoumsatz. Ideal für Hersteller, die kein finanzielles Risiko eingehen möchten. Sie zahlen nur bei erfolgreichen Verkäufen.
                    </p>
                    <p>
                      <strong>
                        2. Konsignationslager:
                      </strong>
                      {' '}Die Ware bleibt bis zum Verkauf an den Endkunden in Ihrem Eigentum, wird aber von uns verwaltet. Das optimiert die Bilanzierung und minimiert das Risiko für beide Seiten.
                    </p>
                  </div>
                </details>
                <details className="faq__item">
                  <summary>
                    <h3 className="faq__q">
                      Wie wird die Vergütung im Kommissionsmodell berechnet?
                    </h3>
                    <span className="faq__toggle" aria-hidden="true">
                      <svg className="icon">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq__answer">
                    <p>
                      Im Kommissionsmodell arbeiten wir rein erfolgsbasiert. Sie zahlen nur bei erfolgreichen Verkäufen:
                    </p>
                    <ul className="checklist">
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Vergütung:
                          </strong>
                          {' '}12 bis 18&nbsp;% vom Nettoumsatz (je nach Produktkategorie und Volumen)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Keine versteckten Kosten:
                          </strong>
                          {' '}Alle Leistungen sind in der Provision enthalten (Kundenservice, Steuer-Compliance, Technologie, Marketing)
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Risikominimierung:
                          </strong>
                          {' '}Sie zahlen nur bei erfolgreichen Verkäufen
                        </span>
                      </li>
                      <li>
                        <svg className="icon" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span>
                          <strong>
                            Skalierbar:
                          </strong>
                          {' '}Bei steigendem Volumen sinkt der Prozentsatz, wir wachsen gemeinsam
                        </span>
                      </li>
                    </ul>
                    <p>
                      Dieses Modell eignet sich besonders für Hersteller, die ohne Kapitaleinsatz und ohne finanzielles Risiko in den E-Commerce einsteigen oder skalieren möchten.
                    </p>
                  </div>
                </details>
              </div>
            </section>
            <div className="faq__ask" style={{ marginTop: 'var(--space-12)' }}>
              <h2 className="faq__ask-title">
                Ihre Frage ist nicht dabei?
              </h2>
              <p>
                Wir beantworten sie gern persönlich.
              </p>
              <div className="faq__ask-actions">
                <Link className="btn btn--primary btn--sm" href="/#contact">
                  Erstgespräch vereinbaren
                </Link>
                <a className="link" href="tel:+4962749278157">
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  +49 (0) 6274 9278157
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
