// Automatisch erzeugt aus dem freigegebenen Prototyp "index (1) 1.html" (Stand 22.11.2026).
// Texte und Markup 1:1 übernommen. Änderungen am Inhalt bitte direkt hier vornehmen.
import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ScrollSpy } from '@/components/site/ScrollSpy';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Hier finden Sie alle Informationen zur Datenverarbeitung bei der VENDORi GmbH.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://vendori.eu/datenschutz' },
};

export default async function Page() {
  return (
    <>
      {await BreadcrumbJsonLd({ items: [{ name: 'Datenschutz', url: 'https://vendori.eu/datenschutz' }] })}
      <ScrollSpy />
      <section className="page-hero" aria-labelledby="datenschutz-title">
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
                  Datenschutzerklärung
                </span>
              </li>
            </ol>
          </nav>
          <div className="page-hero__inner">
            <p className="eyebrow">
              Rechtliches
            </p>
            <h1 id="datenschutz-title" className="h1">
              Datenschutzerklärung
            </h1>
            <p className="lead">
              Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Hier finden Sie alle Informationen zur Datenverarbeitung bei der VENDORi GmbH.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tight" aria-label="Datenschutzerklärung">
        <div className="container legal">
          <nav className="toc" aria-labelledby="datenschutz-toc" data-spy>
            <p id="datenschutz-toc" className="toc__title">
              Inhalt
            </p>
            <ol>
              <li>
                <a href="#a">
                  A. Datenschutzerklärung für die Website
                </a>
                <ol>
                  <li>
                    <a href="#a1">
                      I. Verantwortlicher
                    </a>
                  </li>
                  <li>
                    <a href="#a2">
                      II. Rechte des Nutzers
                    </a>
                  </li>
                  <li>
                    <a href="#a3">
                      III. Datenverarbeitung
                    </a>
                  </li>
                  <li>
                    <a href="#cookies">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#analyse">
                      Google Analytics und Clarity
                    </a>
                  </li>
                  <li>
                    <a href="#kontakt">
                      Kontaktanfragen
                    </a>
                  </li>
                  <li>
                    <a href="#dienstleister">
                      Hosting und Dienstleister
                    </a>
                  </li>
                  <li>
                    <a href="#social-links">
                      Social Media
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#b">
                  B. Social-Media-Auftritte
                </a>
                <ol>
                  <li>
                    <a href="#b1">
                      I. Gemeinsame Verantwortliche
                    </a>
                  </li>
                  <li>
                    <a href="#b2">
                      II. Rechte des Nutzers
                    </a>
                  </li>
                  <li>
                    <a href="#b3">
                      III. Datenverarbeitung
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </nav>
          <div className="prose">
            {/* ========== A ========== */}
            <section aria-labelledby="a">
              <h2 id="a">
                A. Datenschutzerklärung für die Website
              </h2>
              <p>
                Wir verarbeiten personenbezogene Daten (nachfolgend „Daten“) der Nutzer nur, soweit dies zur Bereitstellung einer funktionsfähigen und komfortablen Website sowie unserer Inhalte und Leistungen erforderlich ist. Als „Verarbeitung“ gilt die Erhebung, Nutzung, Weitergabe und/oder Speicherung. Als „personenbezogene Daten“ gelten nach der EU-Datenschutzgrundverordnung (nachfolgend „DSGVO“) grundsätzlich alle Daten, mit denen eine natürliche Person identifiziert werden kann. Die genauen Definitionen der Begrifflichkeiten sind in Art. 4 DSGVO bestimmt.
              </p>
              <p>
                Nachstehende Ausführungen informieren Sie insbesondere über die Art, den Umfang, den Zweck, die Dauer und die Rechtsgrundlage der Verarbeitung von personenbezogenen Daten, über deren Zwecke und Mittel wir allein oder gemeinsam mit anderen entscheiden, sowie über die von uns zur Optimierung und Nutzungsqualität gegebenenfalls eingesetzten Komponenten Dritter, die in eigener Verantwortung Daten verarbeiten.
              </p>
              <h3 id="a1">
                I. Informationen zum Verantwortlichen
              </h3>
              <p>
                Der Verantwortliche (nachfolgend „Anbieter“) im Sinne der DSGVO und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <address className="addr">
                <strong>
                  VENDORi GmbH
                </strong>
                <span>
                  Hahnenfeldstr. 25
                </span>
                <span>
                  69429 Waldbrunn
                </span>
                <span>
                  Telefon:{' '}
                  <a href="tel:+4962749278157">
                    +49 (0) 6274 9278157
                  </a>
                </span>
                <span>
                  E-Mail:{' '}
                  <a href="mailto:info@vendori.eu">
                    info@vendori.eu
                  </a>
                </span>
              </address>
              <h3 id="a2">
                II. Rechte des Nutzers
              </h3>
              <p>
                Der Nutzer hat in Bezug auf die vom Anbieter nachfolgend wiedergegebene Verarbeitung seiner personenbezogenen Daten das Recht,
              </p>
              <ol>
                <li>
                  eine Bestätigung darüber zu verlangen, ob die ihn betreffenden Daten verarbeitet werden, und auf genaue Auskunft über diese Daten sowie auf weitere Informationen und Kopien der Daten entsprechend Art. 15 DSGVO;
                </li>
                <li>
                  die unverzügliche Berichtigung der ihn betreffenden unrichtigen Daten oder die Vervollständigung dieser Daten gemäß Art. 16 DSGVO zu verlangen;
                </li>
                <li>
                  zu verlangen, dass die ihn betreffenden Daten gemäß Art. 17 DSGVO unverzüglich gelöscht werden, alternativ, falls beispielsweise eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, eine Einschränkung der Verarbeitung der Daten nach Maßgabe des Art. 18 DSGVO zu verlangen;
                </li>
                <li>
                  dass er die ihn betreffenden und von ihm bereitgestellten Daten nach Maßgabe des Art. 20 DSGVO erhält und deren Übermittlung an andere Verantwortliche zu fordern;
                </li>
                <li>
                  eine Beschwerde bei der zuständigen Aufsichtsbehörde nach Art. 77 DSGVO einzureichen, falls der Nutzer der Ansicht ist, dass die Verarbeitung seiner Daten durch den Anbieter gegen die DSGVO verstößt. Die zuständige Aufsichtsbehörde ist:{' '}
                  <address className="addr" style={{ marginTop: 'var(--space-3)' }}>
                    <strong>
                      Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)
                    </strong>
                    <span>
                      Lautenschlagerstraße 20
                    </span>
                    <span>
                      70173 Stuttgart
                    </span>
                    <span>
                      Telefon: +49 711 615541-0
                    </span>
                    <span>
                      E-Mail:{' '}
                      <a href="mailto:poststelle@lfdi.bwl.de">
                        poststelle@lfdi.bwl.de
                      </a>
                    </span>
                    <span>
                      <a href="https://www.baden-wuerttemberg.datenschutz.de/" target="_blank" rel="noopener">
                        www.baden-wuerttemberg.datenschutz.de
                      </a>
                    </span>
                  </address>
                </li>
                <li>
                  Der Nutzer kann grundsätzlich der künftigen Verarbeitung der ihn betreffenden Daten, welche durch einen Verantwortlichen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, jederzeit nach Maßgabe des Art. 21 DSGVO widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
                </li>
                <li>
                  Der Anbieter ist zudem verpflichtet, jede Berichtigung oder Löschung der personenbezogenen Daten oder eine Einschränkung der Verarbeitung, die aufgrund von Artikel 16 DSGVO, Artikel 17 Absatz 1 DSGVO und Artikel 18 DSGVO erfolgt, allen Empfängern der Daten mitzuteilen, denen die Daten von ihm offengelegt wurden. Die Verpflichtung besteht nicht für den Fall, dass diese Mitteilung sich als unmöglich erweist oder mit einem unverhältnismäßigen Aufwand verbunden ist. Dem Nutzer steht das Recht auf Auskunft bezüglich dieser Empfänger zu.
                </li>
              </ol>
              <h3 id="a3">
                III. Informationen zur Datenverarbeitung
              </h3>
              <p>
                Soweit nachfolgend zu den einzelnen Datenverarbeitungen keine detaillierten Angaben erfolgen, werden die vom Anbieter verarbeiteten Daten des Nutzers gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
              <h4>
                Serverdaten
              </h4>
              <p>
                Aus kommunikations- und sicherheitstechnischen Gründen werden während des Besuches der Website u.&nbsp;a. folgende Daten, die der Internet-Browser des Nutzers an den Anbieter bzw. an seinen Webspace-Provider übermittelt, erhoben (sogenannte Serverlogfiles):
              </p>
              <ul>
                <li>
                  Browsertyp und -version
                </li>
                <li>
                  verwendetes Betriebssystem
                </li>
                <li>
                  Website, von der der Nutzer auf die Website des Anbieters gewechselt hat (Referrer URL)
                </li>
                <li>
                  Website, die der Nutzer besucht
                </li>
                <li>
                  Datum und Uhrzeit des Zugriffs
                </li>
                <li>
                  Internet-Protokoll-(IP)-Adresse des Nutzers
                </li>
              </ul>
              <p>
                Die Daten werden zudem vorübergehend gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage für die vorübergehende Speicherung ist Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses an der Verbesserung der Stabilität, Funktionalität und Sicherheit der Website. Nach spätestens sieben Tagen werden die Daten gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
              </p>
              <h4 id="cookies">
                a) Cookies
              </h4>
              <p>
                Der Verantwortliche verwendet auf seiner Website sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die der vom Nutzer eingesetzte Internet-Browser auf dem Endgerät ablegt und speichert. Diese Cookies verarbeiten im individuellen Umfang bestimmte Informationen des Nutzers, wie beispielsweise Browser- und Standortdaten und IP-Adresswerte. Der Einsatz erlaubt es dem Verantwortlichen, seine Website bedienfreundlicher, effektiver und sicherer zu gestalten. Die „persistenten“ Cookies erlauben es der Website, den Nutzer über seinen Browser bei einem zeitnahen wiederholten Besuch wiederzuerkennen, um die schon vorgenommene Einstellung des Nutzers in Bezug auf die Cookies nicht nochmals darzustellen bzw. abzufragen.
              </p>
              <p>
                Technisch notwendige Cookies werden auf Basis des berechtigten Interesses des Verantwortlichen an einem sicheren und funktionsfähigen Betrieb der Website verarbeitet (Art. 6 Abs. 1 lit. f DSGVO). Für analytische und Marketing-Cookies ist die Rechtsgrundlage die ausdrückliche Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG. Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.
              </p>
              <p>
                Die „Session“-Cookies werden gelöscht, wenn der Nutzer seinen Browser schließt. Die „persistenten“ Cookies werden automatisiert nach 12 Monaten gelöscht. Diese Frist ist je nach Cookie unterschiedlich, überschreitet jedoch nicht eine Frist von 12 Monaten.
              </p>
              <h4>
                b) Übersicht der eingesetzten Cookies
              </h4>
              <p>
                Folgende Tabelle gibt Ihnen eine Übersicht über alle auf dieser Website eingesetzten Cookies:
              </p>
              <div className="table-wrap" role="region" aria-label="Übersicht der eingesetzten Cookies" tabIndex={0}>
                <table className="table table--wide">
                  <thead>
                    <tr>
                      <th scope="col">
                        Cookie-Name
                      </th>
                      <th scope="col">
                        Anbieter
                      </th>
                      <th scope="col">
                        Zweck
                      </th>
                      <th scope="col">
                        Kategorie
                      </th>
                      <th scope="col">
                        Laufzeit
                      </th>
                      <th scope="col">
                        Rechtsgrundlage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <code>
                          vendori_cookie_consent
                        </code>
                      </th>
                      <td>
                        VENDORi GmbH (First-Party)
                      </td>
                      <td>
                        Speichert die Cookie-Einstellungen des Nutzers (necessary, analytics, marketing, timestamp, version) im localStorage
                      </td>
                      <td>
                        Notwendig
                      </td>
                      <td>
                        12 Monate
                      </td>
                      <td>
                        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <code>
                          _ga
                        </code>
                      </th>
                      <td>
                        Google Ireland Limited
                      </td>
                      <td>
                        Eindeutige Benutzer-ID zur Unterscheidung von Website-Besuchern (Google Analytics 4)
                      </td>
                      <td>
                        Analytisch
                      </td>
                      <td>
                        2 Jahre
                      </td>
                      <td>
                        Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <code>
                          _ga_*
                        </code>
                      </th>
                      <td>
                        Google Ireland Limited
                      </td>
                      <td>
                        Speichert Session-Informationen und Zeitstempel (Google Analytics 4)
                      </td>
                      <td>
                        Analytisch
                      </td>
                      <td>
                        2 Jahre
                      </td>
                      <td>
                        Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <code>
                          _clck
                        </code>
                      </th>
                      <td>
                        Microsoft Corporation
                      </td>
                      <td>
                        Eindeutige Benutzer-ID für Microsoft Clarity zur Session-Zuordnung
                      </td>
                      <td>
                        Analytisch
                      </td>
                      <td>
                        1 Jahr
                      </td>
                      <td>
                        Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <code>
                          _clsk
                        </code>
                      </th>
                      <td>
                        Microsoft Corporation
                      </td>
                      <td>
                        Verbindet mehrere Seitenaufrufe eines Nutzers zu einer einzelnen Clarity-Session
                      </td>
                      <td>
                        Analytisch
                      </td>
                      <td>
                        1 Tag
                      </td>
                      <td>
                        Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <code>
                          CLID
                        </code>
                      </th>
                      <td>
                        Microsoft Corporation
                      </td>
                      <td>
                        Microsoft Clarity User-ID zur plattformübergreifenden Zuordnung
                      </td>
                      <td>
                        Analytisch
                      </td>
                      <td>
                        1 Jahr
                      </td>
                      <td>
                        Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4>
                c) Beseitigungsmöglichkeit
              </h4>
              <p>
                Der Nutzer kann die Installation der Cookies durch eine entsprechende Einstellung des Browsers verhindern oder einschränken. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen der Website vollumfänglich nutzbar sind.
              </p>
              <h4 id="analyse">
                Google Analytics 4
              </h4>
              <p>
                Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Google Analytics verwendet Cookies, um das Nutzerverhalten zu analysieren und die Website-Nutzung auszuwerten. Die durch die Cookies erzeugten Informationen über die Benutzung dieser Website (einschließlich der IP-Adresse) werden an einen Server von Google übertragen und dort gespeichert.
              </p>
              <p>
                <strong>
                  Verarbeitete Daten:
                </strong>
              </p>
              <ul>
                <li>
                  IP-Adresse (anonymisiert)
                </li>
                <li>
                  Besuchte Seiten und Verweildauer
                </li>
                <li>
                  Browsertyp und -version
                </li>
                <li>
                  Betriebssystem
                </li>
                <li>
                  Referrer-URL (zuvor besuchte Seite)
                </li>
                <li>
                  Datum und Uhrzeit des Zugriffs
                </li>
                <li>
                  Geräteinformationen (Desktop, Mobil, Tablet)
                </li>
              </ul>
              <dl className="kv">
                <dt>
                  IP-Anonymisierung
                </dt>
                <dd>
                  Wir haben die IP-Anonymisierung („anonymize_ip: true“) aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb der EU vor der Übermittlung gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
                </dd>
                <dt>
                  Drittländer
                </dt>
                <dd>
                  Google verarbeitet die Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage von Art. 46 Abs. 2 lit. c DSGVO (Standardvertragsklauseln) sowie zusätzlichen Garantien gemäß Art. 46 Abs. 3 lit. a DSGVO.
                </dd>
                <dt>
                  Rechtsgrundlage
                </dt>
                <dd>
                  Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung). Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.
                </dd>
                <dt>
                  Zweck
                </dt>
                <dd>
                  Analyse der Website-Nutzung, Verbesserung der Benutzerfreundlichkeit und Optimierung unserer Inhalte.
                </dd>
                <dt>
                  Speicherdauer
                </dt>
                <dd>
                  Die Cookies werden nach maximal 2 Jahren automatisch gelöscht. Serverseitige Daten werden von Google nach 14 Monaten automatisch gelöscht.
                </dd>
                <dt>
                  Datenschutz Google
                </dt>
                <dd>
                  <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener">
                    policies.google.com/privacy
                  </a>
                </dd>
                <dt>
                  Opt-out
                </dt>
                <dd>
                  Sie können die Erfassung durch Google Analytics verhindern, indem Sie die Analytics-Cookies in den Cookie-Einstellungen deaktivieren oder ein{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">
                    Browser-Add-on
                  </a>
                  {' '}installieren.
                </dd>
              </dl>
              <h4>
                Microsoft Clarity
              </h4>
              <p>
                Diese Website nutzt Microsoft Clarity, einen Webanalysedienst der Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA („Microsoft“). Microsoft Clarity verwendet Cookies und andere Technologien, um Session-Aufzeichnungen und Heatmaps zu erstellen. Diese helfen uns zu verstehen, wie Nutzer mit unserer Website interagieren.
              </p>
              <p>
                <strong>
                  Verarbeitete Daten:
                </strong>
              </p>
              <ul>
                <li>
                  Mausbewegungen, Klicks und Scroll-Verhalten
                </li>
                <li>
                  Besuchte Seiten und Verweildauer
                </li>
                <li>
                  IP-Adresse (anonymisiert)
                </li>
                <li>
                  Browsertyp und -version
                </li>
                <li>
                  Betriebssystem und Geräteinformationen
                </li>
                <li>
                  Referrer-URL
                </li>
              </ul>
              <p className="note">
                Microsoft Clarity zeichnet{' '}
                <strong>
                  keine
                </strong>
                {' '}Tastatureingaben in Formularfeldern auf. Passwörter, Kreditkartendaten und andere sensible Eingaben werden nicht erfasst.
              </p>
              <dl className="kv">
                <dt>
                  Drittländer
                </dt>
                <dd>
                  Microsoft verarbeitet die Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage von Art. 46 Abs. 2 lit. c DSGVO (Standardvertragsklauseln).
                </dd>
                <dt>
                  Rechtsgrundlage
                </dt>
                <dd>
                  Art. 6 Abs. 1 lit. a DSGVO i.&nbsp;V.&nbsp;m. § 25 TTDSG (Einwilligung). Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.
                </dd>
                <dt>
                  Zweck
                </dt>
                <dd>
                  Verbesserung der Benutzerfreundlichkeit durch Analyse des Nutzerverhaltens, Identifikation von Usability-Problemen und Optimierung der Website-Navigation.
                </dd>
                <dt>
                  Speicherdauer
                </dt>
                <dd>
                  Die Daten werden nach maximal 1 Jahr automatisch gelöscht.
                </dd>
                <dt>
                  Datenschutz Microsoft
                </dt>
                <dd>
                  <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener">
                    privacy.microsoft.com/de-de/privacystatement
                  </a>
                </dd>
                <dt>
                  Opt-out
                </dt>
                <dd>
                  Sie können die Erfassung durch Microsoft Clarity verhindern, indem Sie die Analytics-Cookies in den Cookie-Einstellungen deaktivieren.
                </dd>
              </dl>
              <h4 id="kontakt">
                Kontaktanfragen
              </h4>
              <p>
                Im Falle einer Kontaktaufnahme des Nutzers werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Dient die Kontaktanfrage der Erfüllung eines Vertrages oder der Durchführung vorvertraglicher Maßnahmen, wie beispielsweise eine Preisanfrage, so ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO. Die Daten des Nutzers werden gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.&nbsp;B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
              </p>
              <p>
                Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO sein. Eine erteilte Einwilligung für die Kontaktanfrage kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter widerrufen. Die im Zusammenhang verarbeiteten Daten werden gelöscht, sobald ihre Verarbeitung nicht mehr erforderlich ist.
              </p>
              <h4>
                Speicherdauer für Kontaktanfragen
              </h4>
              <p>
                Wir speichern Ihre Kontaktdaten nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist:
              </p>
              <ol>
                <li>
                  <strong>
                    Allgemeine Anfragen
                  </strong>
                  {' '}(Informationen, Fragen): 30 Tage nach abschließender Beantwortung
                </li>
                <li>
                  <strong>
                    Angebotsanfragen ohne Vertragsabschluss:
                  </strong>
                  {' '}6 Monate nach letzter Kommunikation (für mögliche Rückfragen)
                </li>
                <li>
                  <strong>
                    Geschäftliche Korrespondenz mit Vertragsabschluss:
                  </strong>
                  {' '}6 Jahre nach Ende des Geschäftsjahres gemäß § 257 Abs. 1 Nr. 2 HGB (Aufbewahrungspflicht für Geschäftsbriefe). In diesem Fall ist eine vorzeitige Löschung auf Ihr Verlangen nicht möglich (Art. 17 Abs. 3 lit. b DSGVO, gesetzliche Aufbewahrungspflicht). Die Daten werden jedoch nach Ablauf der Frist automatisch gelöscht.
                </li>
                <li>
                  <strong>
                    Technische Logs
                  </strong>
                  {' '}(n8n-Workflow, Vercel-Server): 7 Tage nach der Anfrage
                </li>
              </ol>
              <p>
                Sie können jederzeit die Löschung Ihrer Daten beantragen. Wir prüfen dann, ob einer Löschung gesetzliche Aufbewahrungspflichten entgegenstehen.
              </p>
              <h4>
                Spam- und Missbrauchsschutz (Rate-Limiting)
              </h4>
              <p>
                Zum Schutz vor Spam und automatisierten Missbrauchsversuchen setzen wir ein Rate-Limiting-System ein, das die Anzahl der Kontaktanfragen pro IP-Adresse begrenzt (maximal 5 Anfragen pro Minute). Dabei werden folgende Daten vorübergehend verarbeitet:
              </p>
              <ul>
                <li>
                  IP-Adresse des Nutzers
                </li>
                <li>
                  Zeitstempel der Anfragen
                </li>
              </ul>
              <p>
                Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im Schutz unserer IT-Infrastruktur vor Überlastung und Missbrauch sowie im Schutz vor Spam. Die Daten werden ausschließlich im Arbeitsspeicher (In-Memory) gespeichert und automatisch nach spätestens 1 Stunde gelöscht. Es erfolgt keine dauerhafte Speicherung.
              </p>
              <h4 id="dienstleister">
                Vercel (Hosting)
              </h4>
              <p>
                Die Website wird auf der Infrastruktur der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden Serverlogdaten (inkl. IP-Adresse) durch Vercel verarbeitet. Vercel verarbeitet diese Daten als Auftragsverarbeiter gemäß Art. 28 DSGVO. Die Datenübermittlung in die USA erfolgt auf Grundlage von Standardvertragsklauseln (Standard Contractual Clauses, SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen:{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">
                  vercel.com/legal/privacy-policy
                </a>
              </p>
              <h4>
                Webhook-Verarbeitung (n8n)
              </h4>
              <p>
                Im Zuge der Bearbeitung von Kontaktanfragen werden die übermittelten Daten (Name, E-Mail-Adresse, Nachricht) über einen Webhook an unseren eigenen Server weitergeleitet, um die anschließende E-Mail-Kommunikation zu ermöglichen. Wir betreiben n8n als selbst gehostete Lösung auf einem Server der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland. Hetzner agiert hierbei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Mit Hetzner wurde ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen. Die Verarbeitung erfolgt ausschließlich auf Servern in Deutschland (Rechenzentrum Nürnberg/Falkenstein). Es findet keine Übermittlung in Drittländer statt.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b bzw. lit. a DSGVO. Die Daten werden ausschließlich zur Bearbeitung der Anfrage verwendet und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (max. 6 Jahre nach § 257 HGB). Weitere Informationen:{' '}
                <a href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank" rel="noopener">
                  hetzner.com/de/rechtliches/datenschutz
                </a>
              </p>
              <h4>
                E-Mail-Versand (Gmail/Google Workspace)
              </h4>
              <p>
                Der Versand von E-Mails (Kontaktbestätigungen, Antworten auf Anfragen) erfolgt über Gmail, bereitgestellt von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                <strong>
                  Verarbeitete Daten:
                </strong>
              </p>
              <ul>
                <li>
                  E-Mail-Adresse des Absenders
                </li>
                <li>
                  Name (falls angegeben)
                </li>
                <li>
                  E-Mail-Inhalt (Nachricht)
                </li>
              </ul>
              <p>
                Google agiert hierbei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Mit Google wurde ein Auftragsverarbeitungsvertrag (Data Processing Agreement) abgeschlossen. Die Datenverarbeitung erfolgt ausschließlich auf Servern in der EU (Dublin, Irland). Es findet keine Übermittlung in Drittländer statt.
              </p>
              <dl className="kv">
                <dt>
                  Rechtsgrundlage
                </dt>
                <dd>
                  Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung/Kommunikation)
                </dd>
                <dt>
                  Speicherdauer
                </dt>
                <dd>
                  Siehe „Speicherdauer für Kontaktanfragen“ (oben)
                </dd>
                <dt>
                  Weitere Informationen
                </dt>
                <dd>
                  <a href="https://workspace.google.com/intl/de/terms/dpa_terms.html" target="_blank" rel="noopener">
                    Google Workspace Datenschutzerklärung
                  </a>
                </dd>
              </dl>
              <h4 id="social-links">
                Einbindung Social Media
              </h4>
              <p>
                Der Anbieter setzt auf der Website eine Verlinkung auf die nachstehend aufgeführten sozialen Netzwerke ein. Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität der Website.
              </p>
              <p>
                Die Einbindung der Plugins erfolgt dabei über eine verlinkte Grafik. Erst durch einen Klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet. Nach der Weiterleitung des Kunden werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuches des Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über einen „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss sich der Nutzer vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu konfigurieren.
              </p>
              <p>
                Folgende soziale Netzwerke sind vom Anbieter verlinkt:
              </p>
              <ul>
                <li>
                  <strong>
                    Facebook:
                  </strong>
                  {' '}Betreiber innerhalb der EU: Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.{' '}
                  <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener">
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <strong>
                    Instagram:
                  </strong>
                  {' '}Betreiber innerhalb der EU: Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.{' '}
                  <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener">
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <strong>
                    Twitter:
                  </strong>
                  {' '}Betreiber innerhalb der EU: Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland.{' '}
                  <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener">
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <strong>
                    Pinterest:
                  </strong>
                  {' '}Betreiber innerhalb der EU: Pinterest Europe Ltd., Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Irland.{' '}
                  <a href="https://policy.pinterest.com/de/privacy-policy" target="_blank" rel="noopener">
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <strong>
                    YouTube:
                  </strong>
                  {' '}Betreiber innerhalb der EU: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.{' '}
                  <a href="https://policies.google.com/privacy?hl=de&amp;gl=de" target="_blank" rel="noopener">
                    Datenschutzerklärung
                  </a>
                </li>
              </ul>
            </section>
            {/* ========== B ========== */}
            <section aria-labelledby="b">
              <h2 id="b">
                B. Datenschutzrichtlinie für Social-Media-Auftritte
              </h2>
              <p>
                Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden nutzen wir sog. Social-Media-Plattformen. Nachstehende Ausführungen informieren Sie insbesondere über die Art, den Umfang, den Zweck, die Dauer und die Rechtsgrundlage der Verarbeitung von personenbezogenen Daten, wenn Sie eine unserer Firmenpräsentationen auf einer Social-Media-Plattform besuchen oder darüber mit uns in Kontakt treten. Als „Verarbeitung“ gilt die Erhebung, Nutzung, Weitergabe und/oder Speicherung. Als „personenbezogene Daten“ gelten nach der Datenschutzgrundverordnung (nachfolgend „DSGVO“) grundsätzlich alle Daten, mit denen eine natürliche Person identifiziert werden kann. Die genauen Definitionen der Begrifflichkeiten sind in Art. 4 DSGVO bestimmt.
              </p>
              <h3 id="b1">
                I. Informationen zu den gemeinsamen Verantwortlichen
              </h3>
              <p>
                Für alle nachstehend genannten Social-Media-Plattformen ist die
              </p>
              <address className="addr">
                <strong>
                  VENDORi GmbH
                </strong>
                <span>
                  Hahnenfeldstr. 25
                </span>
                <span>
                  69429 Waldbrunn
                </span>
                <span>
                  Telefon:{' '}
                  <a href="tel:+4962749278157">
                    +49 (0) 6274 9278157
                  </a>
                </span>
                <span>
                  E-Mail:{' '}
                  <a href="mailto:info@vendori.eu">
                    info@vendori.eu
                  </a>
                </span>
              </address>
              <p>
                (nachfolgend „Anbieter“ genannt) mit dem nachfolgend jeweils genannten Plattformbetreiber gemeinsam i.&nbsp;S.&nbsp;d. Art. 26 DSGVO verantwortlich.
              </p>
              <h4>
                Facebook und Instagram
              </h4>
              <p>
                Auf den Social-Media-Plattformen „Facebook“ und „Instagram“ ist der Anbieter gemeinsam mit der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, verantwortlich.
              </p>
              <p>
                Der Datenschutzbeauftragte von Facebook kann über ein{' '}
                <a href="https://www.facebook.com/help/contact/540977946302970" target="_blank" rel="noopener">
                  Kontaktformular
                </a>
                {' '}erreicht werden. Die gemeinsam Verantwortlichen haben in einer Vereinbarung die jeweiligen Verpflichtungen aus der DSGVO geregelt. Diese Vereinbarung ist unter dem folgenden Link abrufbar:{' '}
                <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener">
                  facebook.com/legal/terms/page_controller_addendum
                </a>
              </p>
              <h3 id="b2">
                II. Rechte des Nutzers
              </h3>
              <p>
                Ungeachtet der Einzelheiten der Vereinbarung können Sie Ihre Rechte im Rahmen der DSGVO bei und gegenüber jedem einzelnen der Verantwortlichen geltend machen. Der Nutzer hat in Bezug auf die von den Verantwortlichen nachfolgend wiedergegebene Verarbeitung seiner personenbezogenen Daten das Recht,
              </p>
              <ol>
                <li>
                  eine Bestätigung darüber zu verlangen, ob die ihn betreffenden Daten verarbeitet werden, und auf genaue Auskunft über diese Daten sowie auf weitere Informationen und Kopien der Daten entsprechend Art. 15 DSGVO;
                </li>
                <li>
                  die unverzügliche Berichtigung der ihn betreffenden unrichtigen Daten oder die Vervollständigung dieser Daten gemäß Art. 16 DSGVO zu verlangen;
                </li>
                <li>
                  zu verlangen, dass die ihn betreffenden Daten gemäß Art. 17 DSGVO unverzüglich gelöscht werden, alternativ, falls beispielsweise eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, eine Einschränkung der Verarbeitung der Daten nach Maßgabe des Art. 18 DSGVO zu verlangen;
                </li>
                <li>
                  dass er die ihn betreffenden und von ihm bereitgestellten Daten nach Maßgabe des Art. 20 DSGVO erhält, sowie das weitere Recht, deren Übermittlung an andere Verantwortliche zu fordern;
                </li>
                <li>
                  eine Beschwerde bei der Aufsichtsbehörde nach Art. 77 DSGVO einzureichen, falls der Nutzer der Ansicht ist, dass die Verarbeitung seiner Daten durch einen Verantwortlichen gegen die DSGVO verstößt.
                </li>
                <li>
                  Der Nutzer kann grundsätzlich der künftigen Verarbeitung der ihn betreffenden Daten, welche durch einen Verantwortlichen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, jederzeit nach Maßgabe des Art. 21 DSGVO widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
                </li>
                <li>
                  Der Verantwortliche ist zudem verpflichtet, jede Berichtigung oder Löschung der personenbezogenen Daten oder eine Einschränkung der Verarbeitung, die aufgrund von Artikel 16 DSGVO, Artikel 17 Absatz 1 DSGVO und Artikel 18 DSGVO erfolgt, allen Empfängern der Daten mitzuteilen, denen die Daten offengelegt wurden. Die Verpflichtung besteht nicht für den Fall, dass diese Mitteilung sich als unmöglich erweist oder mit einem unverhältnismäßigen Aufwand verbunden ist. Dem Nutzer steht das Recht auf Auskunft bezüglich dieser Empfänger zu.
                </li>
              </ol>
              <h3 id="b3">
                III. Informationen zur Datenverarbeitung
              </h3>
              <p>
                Zur Bewerbung seiner Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreibt der Anbieter eine Firmenpräsenz auf den nachfolgenden Plattformen. Rechtsgrundlage für die dadurch erfolgende und nachfolgend für jede Plattform wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Analyse, der Kommunikation sowie dem Absatz und der Bewerbung seiner Produkte und Leistungen.
              </p>
              <p>
                Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Plattformbetreiber für die Zukunft widerrufen.
              </p>
              <h4>
                Facebook und Instagram
              </h4>
              <p>
                Bei dem Aufruf des Onlineauftrittes des Anbieters auf den Plattformen „Facebook“ und „Instagram“ werden von der Facebook Ireland Ltd. als Betreiberin beider Plattformen in der EU Daten des Nutzers (z.&nbsp;B. persönliche Informationen, IP-Adresse etc.) verarbeitet.
              </p>
              <p>
                Diese Daten des Nutzers dienen dem Anbieter zu statistischen Informationen über die Inanspruchnahme seiner Firmenpräsenz auf „Facebook“ und „Instagram“. Die Facebook Ireland Ltd. nutzt diese Daten insbesondere zu Marktforschungs- und Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und außerhalb von „Facebook“ und „Instagram“ interessenbezogen zu bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf „Facebook“ oder „Instagram“ eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.
              </p>
              <p>
                Im Falle einer Kontaktaufnahme des Nutzers mit dem Anbieter über „Facebook“ oder „Instagram“ werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden beim Anbieter gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.&nbsp;B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.
              </p>
              <p>
                Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf. auch Cookies gesetzt. Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die Installation der Cookies durch eine entsprechende Einstellung des Browsers zu verhindern. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen von Facebook vollumfänglich nutzbar sind.
              </p>
              <p>
                Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von der Facebook Ireland Ltd. verarbeiteten Daten findet sich in der Datenrichtlinie von{' '}
                <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener">
                  Facebook
                </a>
                {' '}und{' '}
                <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener">
                  Instagram
                </a>
                .
              </p>
            </section>
            <div className="closing" style={{ marginTop: 'var(--space-16)' }}>
              <div className="closing__text">
                <h2 className="closing__title" style={{ margin: '0', padding: '0', border: '0' }}>
                  Noch Fragen zum Datenschutz?
                </h2>
                <p>
                  Kontaktieren Sie uns jederzeit per E-Mail für detaillierte Auskünfte.
                </p>
              </div>
              <div className="closing__actions">
                <a className="btn btn--primary btn--sm" href="mailto:info@vendori.eu">
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
