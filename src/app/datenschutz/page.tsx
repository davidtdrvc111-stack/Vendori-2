// Datenschutzerklärung auf Basis des Textes der IT-Recht Kanzlei (Online-Shop-Datenschutz.txt, Stand 23.11.2026),
// am 23.11.2026 auf den tatsächlichen Stand von vendori.eu reduziert: nur zutreffende Module (wörtlich),
// Nummerierung angepasst; Textänderungen: Cookie-Tool speichert im localStorage statt in einem Cookie;
// Widerspruchsrecht (8.2) in normaler Schreibweise als hervorgehobener Kasten statt in Großbuchstaben.
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
            <p className="page-hero__meta">
              Stand: 23.11.2026, 17:08:25
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
                <a href="#ds-1">
                  1) Einleitung und Kontaktdaten des Verantwortlichen
                </a>
              </li>
              <li>
                <a href="#ds-2">
                  2) Datenerfassung beim Besuch unserer Website
                </a>
              </li>
              <li>
                <a href="#ds-3">
                  3) Hosting &amp; Content-Delivery-Network
                </a>
              </li>
              <li>
                <a href="#ds-4">
                  4) Cookies
                </a>
              </li>
              <li>
                <a href="#ds-5">
                  5) Kontaktaufnahme
                </a>
              </li>
              <li>
                <a href="#ds-6">
                  6) Webanalysedienste
                </a>
              </li>
              <li>
                <a href="#ds-7">
                  7) Tools und Sonstiges
                </a>
              </li>
              <li>
                <a href="#ds-8">
                  8) Rechte des Betroffenen
                </a>
              </li>
              <li>
                <a href="#ds-9">
                  9) Dauer der Speicherung personenbezogener Daten
                </a>
              </li>
            </ol>
          </nav>
          <div className="prose">
            <section aria-labelledby="ds-1">
              <h2 id="ds-1">
                1) Einleitung und Kontaktdaten des Verantwortlichen
              </h2>
              <p>
                <strong>
                  1.1
                </strong>
                {' '}Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <p>
                <strong>
                  1.2
                </strong>
                {' '}Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist VENDORi GmbH, Hahnenfeldstr. 25, 69429 Waldbrunn, Deutschland, Tel.: +49 (0) 6274 92 78 157, E-Mail:{' '}
                <a href="mailto:info@vendori.eu">
                  info@vendori.eu
                </a>
                . Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </section>
            <section aria-labelledby="ds-2">
              <h2 id="ds-2">
                2) Datenerfassung beim Besuch unserer Website
              </h2>
              <p>
                <strong>
                  2.1
                </strong>
                {' '}Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
              </p>
              <ul>
                <li>
                  Unsere besuchte Website
                </li>
                <li>
                  Datum und Uhrzeit zum Zeitpunkt des Zugriffes
                </li>
                <li>
                  Menge der gesendeten Daten in Byte
                </li>
                <li>
                  Quelle/Verweis, von welchem Sie auf die Seite gelangten
                </li>
                <li>
                  Verwendeter Browser
                </li>
                <li>
                  Verwendetes Betriebssystem
                </li>
                <li>
                  Verwendete IP-Adresse (ggf.: in anonymisierter Form)
                </li>
              </ul>
              <p>
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
              </p>
              <p>
                <strong>
                  2.2
                </strong>
                {' '}Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
              </p>
            </section>
            <section aria-labelledby="ds-3">
              <h2 id="ds-3">
                3) Hosting &amp; Content-Delivery-Network
              </h2>
              <p>
                Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir einen Anbieter, der seine Leistungen selbst oder durch ausgewählte Sub-Unternehmer ausschließlich auf Servern innerhalb der Europäischen Union erbringt.
              </p>
              <p>
                Sämtliche auf unserer Website erhobenen Daten werden auf diesen Servern verarbeitet, sofern nicht im Nachstehenden für spezifische Datenverarbeitungen abweichende Datenempfänger genannt sind.
              </p>
              <p>
                Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
              </p>
            </section>
            <section aria-labelledby="ds-4">
              <h2 id="ds-4">
                4) Cookies
              </h2>
              <p>
                Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Sofern sogenannte &quot;Session-Cookies&quot; gesetzt werden, werden diese nach Schließen des Browsers automatisch wieder gelöscht. Sofern persistente Cookies gesetzt werden, verbleiben diese länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen. Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
              </p>
              <p>
                Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
              </p>
              <p>
                Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.
              </p>
            </section>
            <section aria-labelledby="ds-5">
              <h2 id="ds-5">
                5) Kontaktaufnahme
              </h2>
              <p>
                Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden – ausschließlich zum Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im dafür erforderlichen Umfang – personenbezogene Daten verarbeitet.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gelöscht, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>
            <section aria-labelledby="ds-6">
              <h2 id="ds-6">
                6) Webanalysedienste
              </h2>
              <h3>
                6.1 Google Analytics 4
              </h3>
              <p>
                Diese Website benutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland (&quot;Google&quot;), der eine Analyse Ihrer Benutzung unserer Website ermöglicht.
              </p>
              <p>
                Standardmäßig werden beim Besuch der Website durch Google Analytics 4 Cookies gesetzt, die als kleine Textbausteine auf Ihrem Endgerät abgelegt werden und bestimmte Informationen erheben. Zum Umfang dieser Informationen gehört auch Ihre IP-Adresse, die allerdings von Google um die letzten Ziffern gekürzt wird, um eine direkte Personenbeziehbarkeit auszuschließen.
              </p>
              <p>
                Die Informationen werden an Server von Google übertragen und dort weiterverarbeitet. Dabei sind auch Übermittlungen an Google LLC mit Sitz in den USA möglich.
              </p>
              <p>
                Google nutzt die erhobenen Informationen in unserem Auftrag, um Ihre Nutzung der Website auszuwerten, Reports über die Websiteaktivitäten für uns zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte und gekürzte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die im Rahmen der Nutzung von Google Analytics 4 erhobenen Daten werden für die Dauer von maximal 14 Monaten gespeichert und anschließend gelöscht.
              </p>
              <p>
                Alle vorstehend beschriebenen Verarbeitungen, insbesondere das Setzen von Cookies auf dem verwendeten Endgerät, erfolgen nur, wenn Sie uns hierfür Ihre ausdrückliche Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO erteilt haben.
              </p>
              <p>
                Ohne Ihre Einwilligung unterbleibt der Einsatz von Google Analytics 4 während Ihres Seitenbesuchs. Sie können Ihre erteilte Einwilligung mit Wirkung für die Zukunft jederzeit widerrufen. Um Ihr Widerrufsrecht auszuüben, deaktivieren Sie bitte diesen Dienst über das auf der Website bereitgestellte „Cookie-Consent-Tool“.
              </p>
              <p>
                Wir haben mit Google einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
              </p>
              <p>
                Weitere rechtliche Hinweise zu Google Analytics 4 finden Sie unter{' '}
                <a href="https://business.safety.google/intl/de/privacy/" target="_blank" rel="noopener noreferrer">
                  https://business.safety.google/intl/de/privacy/
                </a>
                ,{' '}
                <a href="https://policies.google.com/privacy?hl=de&amp;gl=de" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy?hl=de&amp;gl=de
                </a>
                {' '}und unter{' '}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/technologies/partner-sites
                </a>
              </p>
              <h4>
                Demografische Merkmale
              </h4>
              <p>
                Soweit die spezielle Funktion „demografische Merkmale“ innerhalb von Google Analytics 4 aktiviert ist, können darüber Statistiken erstellt werden, die Aussagen über das Alter, Geschlecht und Interessen von Seitenbesuchern treffen. Dies geschieht durch die Analyse von Werbung und Informationen von Drittanbietern. Dadurch können Zielgruppen für Marketingaktivitäten identifiziert werden. Die gesammelten Daten können jedoch keiner bestimmten Person zugeordnet werden und werden nach einer Speicherung für die Dauer von zwei Monaten gelöscht.
              </p>
              <h4>
                Google Signals
              </h4>
              <p>
                Als Erweiterung zu Google Analytics 4 kann auf dieser Website Google Signals verwendet werden, um geräteübergreifende Berichte erstellen zu lassen. Wenn Sie personalisierte Anzeigen aktiviert haben und Ihre Geräte mit Ihrem Google-Konto verknüpft haben, kann Google vorbehaltlich Ihrer Einwilligung zur Nutzung von Google Analytics gem. Art. 6 Abs. 1 lit. a DSGVO Ihr Nutzungsverhalten geräteübergreifend analysieren und Datenbankmodelle, unter anderem zu geräteübergreifenden Conversions, erstellen. Wir erhalten keine personenbezogenen Daten von Google, sondern nur Statistiken. Wenn Sie die geräteübergreifende Analyse stoppen möchten, können Sie die Funktion &quot;Personalisierte Werbung&quot; in den Einstellungen Ihres Google-Kontos deaktivieren. Folgen Sie dazu den Anweisungen auf dieser Seite:{' '}
                <a href="https://support.google.com/My-Ad-Center-Help/answer/12155764?hl=de" target="_blank" rel="noopener noreferrer">
                  https://support.google.com/My-Ad-Center-Help/answer/12155764?hl=de
                </a>
              </p>
              <p>
                Weitere Informationen zu Google Signals finden Sie unter folgendem Link:{' '}
                <a href="https://support.google.com/analytics/answer/7532985?hl=de" target="_blank" rel="noopener noreferrer">
                  https://support.google.com/analytics/answer/7532985?hl=de
                </a>
              </p>
              <p>
                Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus sicherstellt.
              </p>
              <h3>
                6.2 Microsoft Clarity
              </h3>
              <p>
                Diese Website nutzt den Webanalysedienst des folgenden Anbieters: Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399 USA
              </p>
              <p>
                Mithilfe von Cookies und/oder vergleichbaren Technologien (Tracking-Pixel, Web-Beacons, Algorithmen zum Auslesen von Endgeräte- und Browserinformationen) erhebt und speichert der Dienst pseudonymisierte Besucherdaten, darunter Informationen des verwendeten Endgeräts wie die IP-Adresse und Browserinformationen, um sie für statistische Analysen des Nutzungsverhaltens auf unserer Website auszuwerten und pseudonymisierte Nutzungsprofile zu erstellen. Unter anderem ist so die Auswertung von Bewegungsmustern (sog. Heatmaps) möglich, welche die Dauer von Seitenbesuchen sowie Interaktionen mit Seiteninhalten (z. B. Texteingaben, Scrollen, Klicks und Mouse-Overs) aufzeigen. Die Pseudonymisierung schließt eine direkte Personenbeziehbarkeit grundsätzlich aus. Eine Zusammenführung mit auf andere Weise erhobenen Klardaten zu Ihrer Person findet nicht statt.
              </p>
              <p>
                Alle oben beschriebenen Verarbeitungen, insbesondere das Auslesen oder Speichern von Informationen auf dem verwendeten Endgerät, werden nur dann vollzogen, wenn Sie uns gemäß Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdrückliche Einwilligung erteilt haben. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie diesen Dienst in dem auf der Webseite bereitgestellten „Cookie-Consent-Tool“ deaktivieren.
              </p>
              <p>
                Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
              </p>
              <p>
                Für Datenübermittlungen in die USA hat sich der Anbieter dem EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das auf Basis eines Angemessenheitsbeschlusses der Europäischen Kommission die Einhaltung des europäischen Datenschutzniveaus&nbsp;sicherstellt.
              </p>
            </section>
            <section aria-labelledby="ds-7">
              <h2 id="ds-7">
                7) Tools und Sonstiges
              </h2>
              <h4>
                Cookie-Consent-Tool
              </h4>
              <p>
                Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen für einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein sog. „Cookie-Consent-Tool“. Das „Cookie-Consent-Tool“ wird Nutzern bei Seitenaufruf in Form einer interaktiven Benutzeroberfläche angezeigt, auf welcher sich per Häkchensetzung Einwilligungen für bestimmte Cookies und/oder cookie-basierte Anwendungen erteilen lassen. Hierbei werden durch den Einsatz des Tools alle einwilligungspflichtigen Cookies/Dienste nur dann geladen, wenn der jeweilige Nutzer entsprechende Einwilligungen per Häkchensetzung erteilt. So wird sichergestellt, dass nur im Falle einer erteilten Einwilligung derartige Cookies auf dem jeweiligen Endgerät des Nutzers gesetzt werden.
              </p>
              <p>
                Das Tool speichert Ihre Cookie-Präferenzen technisch notwendig im lokalen Speicher Ihres Browsers (localStorage). Personenbezogene Nutzerdaten werden hierbei grundsätzlich nicht verarbeitet.
              </p>
              <p>
                Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder Protokollierung von Cookie-Einstellungen doch zur Verarbeitung personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einem rechtskonformen, nutzerspezifischen und nutzerfreundlichen Einwilligungsmanagement für Cookies und mithin an einer rechtskonformen Ausgestaltung unseres Internetauftritts.
              </p>
              <p>
                Weitere Rechtsgrundlage für die Verarbeitung ist ferner Art. 6 Abs. 1 lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der jeweiligen Nutzereinwilligung abhängig zu machen.
              </p>
              <p>
                Soweit erforderlich, haben wir mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
              </p>
              <p>
                Weitere Informationen zum Betreiber und den Einstellungsmöglichkeiten des Cookie-Consent-Tools finden Sie direkt in der entsprechenden Benutzeroberfläche auf unserer Website.
              </p>
            </section>
            <section aria-labelledby="ds-8">
              <h2 id="ds-8">
                8) Rechte des Betroffenen
              </h2>
              <p>
                <strong>
                  8.1
                </strong>
                {' '}Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:
              </p>
              <ul>
                <li>
                  Auskunftsrecht gemäß Art. 15 DSGVO;
                </li>
                <li>
                  Recht auf Berichtigung gemäß Art. 16 DSGVO;
                </li>
                <li>
                  Recht auf Löschung gemäß Art. 17 DSGVO;
                </li>
                <li>
                  Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;
                </li>
                <li>
                  Recht auf Unterrichtung gemäß Art. 19 DSGVO;
                </li>
                <li>
                  Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;
                </li>
                <li>
                  Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;
                </li>
                <li>
                  Recht auf Beschwerde gemäß Art. 77 DSGVO.
                </li>
              </ul>
              {/* Widerspruchsrecht nach Art. 21 Abs. 4 DSGVO: ausdrücklich und getrennt von anderen Informationen.
                  Wortlaut der IT-Recht Kanzlei, statt Großbuchstaben als hervorgehobener Kasten (besser lesbar, barrierearm). */}
              <h3 id="widerspruchsrecht">
                8.2 Widerspruchsrecht
              </h3>
              <div className="note note--block" role="note" aria-labelledby="widerspruchsrecht">
                <p>
                  Wenn wir im Rahmen einer Interessenabwägung Ihre personenbezogenen Daten aufgrund unseres überwiegenden berechtigten Interesses verarbeiten, haben Sie das jederzeitige Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen diese Verarbeitung Widerspruch mit Wirkung für die Zukunft einzulegen.
                </p>
                <p>
                  Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten. Eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir zwingende schutzwürdige Gründe für die Verarbeitung nachweisen können, die Ihre Interessen, Grundrechte und Grundfreiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.
                </p>
                <p>
                  Werden Ihre personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Sie können den Widerspruch wie oben beschrieben ausüben.
                </p>
                <p>
                  Machen Sie von Ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen Daten zu Direktwerbezwecken.
                </p>
              </div>
            </section>
            <section aria-labelledby="ds-9">
              <h2 id="ds-9">
                9) Dauer der Speicherung personenbezogener Daten
              </h2>
              <p>
                Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.
              </p>
              <p>
                Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausüben, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausüben.
              </p>
              <p>
                Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
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
            <p className="small">
              Copyright-Hinweis: Diese Datenschutzerklärung wurde von den Fachanwälten der IT-Recht Kanzlei erstellt und ist urheberrechtlich geschützt (
              <a href="https://www.it-recht-kanzlei.de" target="_blank" rel="noopener noreferrer">
                https://www.it-recht-kanzlei.de
              </a>
              )
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
