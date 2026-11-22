// Automatisch erzeugt aus dem freigegebenen Prototyp "index (1) 1.html" (Stand 22.11.2026).
// Texte und Markup 1:1 übernommen. Änderungen am Inhalt bitte direkt hier vornehmen.
import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ScrollSpy } from '@/components/site/ScrollSpy';

export const metadata: Metadata = {
  title: 'Erklärung zur Barrierefreiheit',
  description: 'Informationen zur Barrierefreiheit dieser Website gemäß dem Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines (WCAG 2.1).',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vendori.eu/barrierefreiheit' },
};

export default async function Page() {
  return (
    <>
      {await BreadcrumbJsonLd({ items: [{ name: 'Barrierefreiheit', url: 'https://vendori.eu/barrierefreiheit' }] })}
      <ScrollSpy />
      <section className="page-hero" aria-labelledby="barrierefreiheit-title">
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
                  Barrierefreiheit
                </span>
              </li>
            </ol>
          </nav>
          <div className="page-hero__inner">
            <p className="eyebrow">
              Rechtliches
            </p>
            <h1 id="barrierefreiheit-title" className="h1">
              Erklärung zur Barrierefreiheit
            </h1>
            <p className="lead">
              Informationen zur Barrierefreiheit dieser Website gemäß dem Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines (WCAG 2.1).
            </p>
            <p className="page-hero__meta">
              Erstellt und zuletzt überprüft am 19. November 2026
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-label="Erklärung">
        <div className="container legal">
          <nav className="toc" aria-labelledby="barrierefreiheit-toc" data-spy>
            <p id="barrierefreiheit-toc" className="toc__title">
              Inhalt
            </p>
            <ol>
              <li>
                <a href="#engagement">
                  Unser Engagement
                </a>
              </li>
              <li>
                <a href="#status">
                  Konformitätsstatus
                </a>
              </li>
              <li>
                <a href="#technik">
                  Technische Spezifikationen
                </a>
              </li>
              <li>
                <a href="#einschraenkungen">
                  Bekannte Einschränkungen
                </a>
              </li>
              <li>
                <a href="#feedback">
                  Feedback und Kontakt
                </a>
              </li>
              <li>
                <a href="#durchsetzung">
                  Durchsetzungsverfahren
                </a>
              </li>
              <li>
                <a href="#datum">
                  Datum dieser Erklärung
                </a>
              </li>
              <li>
                <a href="#links">
                  Weiterführende Informationen
                </a>
              </li>
            </ol>
          </nav>
          <div className="prose">
            <section aria-labelledby="engagement">
              <h2 id="engagement">
                Unser Engagement für Barrierefreiheit
              </h2>
              <p>
                Die VENDORi GmbH verpflichtet sich, ihre Website für alle Menschen zugänglich zu machen, unabhängig von ihren Fähigkeiten oder Technologien. Wir arbeiten kontinuierlich daran, die Benutzerfreundlichkeit und Zugänglichkeit unserer Website zu verbessern und dabei die relevanten Standards einzuhalten.
              </p>
            </section>
            <section aria-labelledby="status">
              <h2 id="status">
                Konformitätsstatus
              </h2>
              <p>
                Diese Website ist weitgehend konform mit den Web Content Accessibility Guidelines (WCAG) 2.1{' '}
                <strong>
                  Level AA
                </strong>
                .
              </p>
              <p>
                Die WCAG 2.1 Level AA definieren Anforderungen, um Webinhalte für Menschen mit verschiedenen Behinderungen zugänglicher zu machen. Durch die Erfüllung dieser Anforderungen werden Inhalte für eine breitere Zielgruppe nutzbar.
              </p>
            </section>
            <section aria-labelledby="technik">
              <h2 id="technik">
                Technische Spezifikationen
              </h2>
              <p>
                Die Barrierefreiheit dieser Website basiert auf folgenden Technologien:
              </p>
              <ul>
                <li>
                  HTML5 für semantische Struktur
                </li>
                <li>
                  WAI-ARIA für erweiterte Zugänglichkeit
                </li>
                <li>
                  CSS3 für responsives Design und Anpassungsfähigkeit
                </li>
                <li>
                  JavaScript (progressiv erweitert)
                </li>
              </ul>
              <h3>
                Umgesetzte Funktionen für Barrierefreiheit
              </h3>
              <ul>
                <li>
                  Vollständige Tastaturnavigation
                </li>
                <li>
                  Optimierung für Screenreader (getestet mit NVDA, JAWS, VoiceOver)
                </li>
                <li>
                  Sprunglinks zum Hauptinhalt für schnelle Navigation
                </li>
                <li>
                  Ausreichende Farbkontraste (mindestens 4,5:1)
                </li>
                <li>
                  Responsives Design für alle Bildschirmgrößen
                </li>
                <li>
                  Klare Fokus-Indikatoren für Tastaturnutzer
                </li>
                <li>
                  Beschriftete Formularfelder und Fehlermeldungen
                </li>
                <li>
                  Alternative Texte für alle bedeutungstragenden Bilder
                </li>
                <li>
                  Semantische HTML-Struktur mit logischer Überschriftenhierarchie
                </li>
              </ul>
            </section>
            <section aria-labelledby="einschraenkungen">
              <h2 id="einschraenkungen">
                Bekannte Einschränkungen
              </h2>
              <p>
                Trotz unserer Bemühungen können einige Bereiche der Website noch Barrierefreiheitsprobleme aufweisen:
              </p>
              <ul>
                <li>
                  <strong>
                    Animationen:
                  </strong>
                  {' '}Einige dekorative Animationen können bei aktivierter Einstellung „Bewegung reduzieren“ (prefers-reduced-motion) noch nicht vollständig reduziert werden. Wir arbeiten an einer Verbesserung.
                </li>
                <li>
                  <strong>
                    Farbkontraste:
                  </strong>
                  {' '}Platzhaltertexte in Formularen könnten in bestimmten Situationen unter dem AAA-Level liegen (AA wird erreicht).
                </li>
                <li>
                  <strong>
                    Externe Inhalte:
                  </strong>
                  {' '}Eingebettete Inhalte von Drittanbietern (falls vorhanden) unterliegen deren Barrierefreiheitsstandards.
                </li>
              </ul>
              <p>
                Wir nehmen diese Einschränkungen ernst und arbeiten kontinuierlich an Verbesserungen.
              </p>
            </section>
            <section aria-labelledby="feedback">
              <h2 id="feedback">
                Feedback und Kontaktaufnahme
              </h2>
              <p>
                Wenn Sie auf Barrieren auf unserer Website stoßen oder Fragen zur Barrierefreiheit haben, freuen wir uns, von Ihnen zu hören. Ihr Feedback hilft uns, die Zugänglichkeit unserer Website kontinuierlich zu verbessern.
              </p>
              <h3>
                Kontaktmöglichkeiten
              </h3>
              <ul>
                <li>
                  Über unser{' '}
                  <Link href="/#contact">
                    Kontaktformular
                  </Link>
                  {' '}(bitte erwähnen Sie „Barrierefreiheit“ in Ihrer Nachricht)
                </li>
                <li>
                  Über die Kontaktdaten aus unserem{' '}
                  <Link href="/impressum">
                    Impressum
                  </Link>
                </li>
              </ul>
              <p className="note">
                <strong>
                  Reaktionszeit:
                </strong>
                {' '}Wir bemühen uns, Ihre Anfrage zur Barrierefreiheit innerhalb von 2&nbsp;Wochen zu beantworten und gegebenenfalls Lösungen bereitzustellen.
              </p>
            </section>
            <section aria-labelledby="durchsetzung">
              <h2 id="durchsetzung">
                Durchsetzungsverfahren
              </h2>
              <p>
                Wenn Sie mit unserer Antwort auf Ihr Feedback zur Barrierefreiheit nicht zufrieden sind, können Sie sich an die zuständige Schlichtungsstelle wenden:
              </p>
              <h3>
                Schlichtungsstelle nach § 16 BGG
              </h3>
              <address className="addr">
                <strong>
                  Schlichtungsstelle BGG bei der Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen
                </strong>
                <span>
                  Mauerstraße 53
                </span>
                <span>
                  10117 Berlin
                </span>
                <span>
                  Telefon:{' '}
                  <a href="tel:+4930185272805">
                    030 18 527-2805
                  </a>
                </span>
                <span>
                  Fax: 030 18 527-2901
                </span>
                <span>
                  E-Mail:{' '}
                  <a href="mailto:info@schlichtungsstelle-bgg.de">
                    info@schlichtungsstelle-bgg.de
                  </a>
                </span>
                <span>
                  Website:{' '}
                  <a href="https://www.schlichtungsstelle-bgg.de" target="_blank" rel="noopener">
                    www.schlichtungsstelle-bgg.de
                  </a>
                </span>
              </address>
              <p>
                Die Schlichtungsstelle BGG hat die Aufgabe, bei Konflikten zum Thema Barrierefreiheit zwischen Menschen mit Behinderungen und öffentlichen Stellen des Bundes eine außergerichtliche Streitbeilegung zu unterstützen. Das Schlichtungsverfahren ist kostenlos.
              </p>
            </section>
            <section aria-labelledby="datum">
              <h2 id="datum">
                Datum dieser Erklärung
              </h2>
              <p>
                Diese Erklärung zur Barrierefreiheit wurde am 19. November 2026 erstellt und zuletzt am 19. November 2026 überprüft.
              </p>
              <p>
                Die Bewertung erfolgte durch eine Selbsteinschätzung gemäß WCAG 2.1 Level AA sowie durch Tests mit gängigen Hilfstechnologien und Accessibility-Tools.
              </p>
            </section>
            <section aria-labelledby="links">
              <h2 id="links">
                Weiterführende Informationen
              </h2>
              <p>
                Weitere Informationen zum Thema Barrierefreiheit finden Sie hier:
              </p>
              <ul>
                <li>
                  <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener">
                    Web Content Accessibility Guidelines (WCAG) 2.1
                  </a>
                </li>
                <li>
                  <a href="https://www.bmas.de/DE/Service/Gesetze-und-Gesetzesvorhaben/barrierefreiheitsstaerkungsgesetz.html" target="_blank" rel="noopener">
                    Barrierefreiheitsstärkungsgesetz (BFSG)
                  </a>
                </li>
                <li>
                  <a href="https://www.behindertenbeauftragter.de/" target="_blank" rel="noopener">
                    Beauftragter der Bundesregierung für die Belange von Menschen mit Behinderungen
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
