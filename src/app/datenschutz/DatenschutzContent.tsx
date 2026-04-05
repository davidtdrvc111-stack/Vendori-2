'use client';

import React, { useEffect } from 'react';
import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { motion } from 'framer-motion';

export function DatenschutzContent() {
    // Scroll progress with CSS (fallback for older browsers via useEffect)
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = window.scrollY / scrollHeight;
            document.documentElement.style.setProperty('--scroll-progress', String(progress));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const content = `Datenschutz

__________________________

A. Datenschutzerklärung für Webseite
B. Datenschutzrichtlinie für Social-Media-Auftritte
_______________________________________________________________



A. Datenschutzerklärung für Webseite

Wir verarbeiten personenbezogene Daten (nachfolgend „Daten") der Nutzer nur, soweit dies zur Bereitstellung einer funktionsfähigen und komfortablen Website sowie unserer Inhalte und Leistungen erforderlich ist.

Als „Verarbeitung" gilt die Erhebung, Nutzung, Weitergabe und/oder Speicherung. Als „personenbezogene Daten" gelten nach der EU-Datenschutzgrundverordnung (nachfolgend „DSGVO") grundsätzlich alle Daten, mit denen eine natürliche Person identifiziert werden kann. Die genauen Definitionen der Begrifflichkeiten sind in Art. 4 DSGVO bestimmt.

Nachstehende Ausführungen informieren Sie insbesondere über die Art, den Umfang, den Zweck, die Dauer und die Rechtsgrundlage der Verarbeitung von personenbezogenen Daten über dessen Zwecke und Mittel der Verarbeitung wir allein oder gemeinsam mit anderen entscheiden, sowie über die von uns zur Optimierung und Nutzungsqualität gegebenenfalls eingesetzten Komponenten Dritter, die in eigener Verantwortung Daten verarbeiten:

_________________________________________

I. Informationen zum Verantwortlichen
II. Rechte des Nutzers
III. Informationen zur Datenverarbeitung
_________________________________________



I. Informationen zum Verantwortlichen

Der Verantwortliche (nachfolgend „Anbieter") im Sinne der DSGVO und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:

VENDORi GmbH
Hahnenfeldstr. 25
69429 Waldbrunn

Tel : + 49 (0) 6274 9278157
Email : info@vendori.eu



II. Rechte des Nutzers

Der Nutzer hat in Bezug auf die vom Anbieter nachfolgend wiedergegebene Verarbeitung seiner personenbezogenen Daten das Recht,

1. eine Bestätigung darüber zu verlangen, ob die ihn betreffenden Daten verarbeitet werden und auf genaue Auskunft über diese Daten sowie auf weitere Informationen und Kopien der Daten entsprechend Art. 15 DSGVO;

2. die unverzügliche Berichtigung der ihn betreffenden unrichtigen Daten oder die Vervollständigung dieser Daten gemäß Art. 16 DSGVO zu verlangen;

3. zu verlangen, dass die ihn betreffende Daten gemäß Art. 17 DSGVO unverzüglich gelöscht werden, alternativ, falls beispielsweise eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, eine Einschränkung der Verarbeitung der Daten nach Maßgabe des Art. 18 DSGVO zu verlangen;

4. dass er die ihn betreffenden und von ihm bereitgestellten Daten nach Maßgabe des Art. 20 DSGVO erhält und deren Übermittlung an andere Verantwortliche zu fordern;

5. eine Beschwerde bei der zuständigen Aufsichtsbehörde nach Art. 77 DSGVO einzureichen, falls der Nutzer der Ansicht ist, dass die Verarbeitung seiner Daten durch den Anbieter gegen die DSGVO verstößt. Die zuständige Aufsichtsbehörde ist:

Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW)
Lautenschlagerstraße 20
70173 Stuttgart
Tel: +49 711 615541-0
E-Mail: poststelle@lfdi.bwl.de
https://www.baden-wuerttemberg.datenschutz.de/

_________________________

6. Der Nutzer kann grundsätzlich der künftigen Verarbeitung der ihn betreffenden Daten, welche durch einen Verantwortlichen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, jederzeit nach Maßgabe des Art. 21 DSGVO widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.

_________________________

7. Der Anbieter ist zudem verpflichtet, jede Berichtigung oder Löschung der personenbezogenen Daten oder eine Einschränkung der Verarbeitung, die aufgrund von Artikel 16 DSGVO, Artikel 17 Absatz 1 DSGVO und Artikel 18 DSGVO erfolgt, allen Empfängern der Daten mitzuteilen, denen die Daten von ihm offengelegt wurden. Die Verpflichtung besteht nicht für den Fall, dass diese Mitteilung sich als unmöglich erweist oder mit einem unverhältnismäßigen Aufwand verbunden ist. Dem Nutzer steht das Recht auf Auskunft bezüglich dieser Empfänger zu.



III. Informationen zur Datenverarbeitung

Soweit nachfolgend zu den einzelnen Datenverarbeitungen keine detaillierten Angaben erfolgen, werden die vom Anbieter verarbeiteten Daten des Nutzers gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.

Serverdaten

Aus kommunikations- und sicherheitstechnischen Gründen werden während des Besuches der Website u.a. folgende Daten, die der Internet-Browser des Nutzers an den Anbieter bzw. an seinen Webspace-Provider übermittelt, erhoben (sogenannte Serverlogfiles):

- Browsertyp und -version;
- verwendetes Betriebssystem;
- Website, von der der Nutzer auf die Website des Anbieters gewechselt hat (Referrer URL);
- Website, die der Nutzer besucht;
- Datum und Uhrzeit des Zugriffs;
- Internet-Protokoll-(IP)-Adresse des Nutzers.

Die Daten werden zudem vorübergehend gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage für die vorübergehende Speicherung ist Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses an der Verbesserung der Stabilität, Funktionalität und Sicherheit der Website.

Nach spätestens sieben Tagen werden die Daten gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.

Cookies

a) Cookies

Der Verantwortliche verwendet auf seiner Website sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die der vom Nutzer eingesetzte Internet-Browser auf dem Endgerät ablegt und speichert. Diese Cookies verarbeiten im individuellen Umfang bestimmte Informationen des Nutzers, wie beispielsweise Browser- und Standortdaten und IP-Adresswerte.

Der Einsatz erlaubt es dem Verantwortlichen seine Website bedienfreundlicher, effektiver und sicherer zu gestalten.

Die "Persistente"-Cookies erlauben es der Webseite, den Nutzer über seinen Browser bei einem zeitnahen wiederholten Besuch der Webseite wiederzuerkennen um die schon vorgenommene Einstellung des Nutzers in Bezug auf die Cookies nicht nochmals darzustellen bzw. abzufragen.

Technisch notwendige Cookies werden auf Basis des berechtigten Interesses des Verantwortlichen an einem sicheren und funktionsfähigen Betrieb der Website verarbeitet (Art. 6 Abs. 1 lit. f DSGVO). Für analytische und Marketing-Cookies ist die Rechtsgrundlage die ausdrückliche Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG. Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.

Die „Session"-Cookies werden gelöscht, wenn der Nutzer seinen Browser schließt. Die "Persistente"-Cookies werden automatisiert nach 12 Monaten gelöscht. Diese Frist ist je nach Cookie unterschiedlich, überschreitet jedoch nicht eine Frist von 12 Monaten.

b) Übersicht der eingesetzten Cookies

Folgende Tabelle gibt Ihnen eine Übersicht über alle auf dieser Website eingesetzten Cookies:

| Cookie-Name | Anbieter | Zweck | Kategorie | Laufzeit | Rechtsgrundlage |
|------------|---------|-------|-----------|---------|-----------------|
| vendori_cookie_consent | VENDORi GmbH (First-Party) | Speichert die Cookie-Einstellungen des Nutzers (necessary, analytics, marketing, timestamp, version) im localStorage | Notwendig | 12 Monate | Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) |
| _ga | Google Ireland Limited | Eindeutige Benutzer-ID zur Unterscheidung von Website-Besuchern (Google Analytics 4) | Analytisch | 2 Jahre | Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung) |
| _ga_* | Google Ireland Limited | Speichert Session-Informationen und Zeitstempel (Google Analytics 4) | Analytisch | 2 Jahre | Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung) |
| _clck | Microsoft Corporation | Eindeutige Benutzer-ID für Microsoft Clarity zur Session-Zuordnung | Analytisch | 1 Jahr | Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung) |
| _clsk | Microsoft Corporation | Verbindet mehrere Seitenaufrufe eines Nutzers zu einer einzelnen Clarity-Session | Analytisch | 1 Tag | Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung) |
| CLID | Microsoft Corporation | Microsoft Clarity User-ID zur plattformübergreifenden Zuordnung | Analytisch | 1 Jahr | Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung) |

c) Beseitigungsmöglichkeit

Der Nutzer kann die Installation der Cookies durch eine entsprechende Einstellung des Browsers verhindern oder einschränken. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen der Website vollumfänglich nutzbar sind.

Google Analytics 4

Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google").

Google Analytics verwendet Cookies, um das Nutzerverhalten zu analysieren und die Website-Nutzung auszuwerten. Die durch die Cookies erzeugten Informationen über die Benutzung dieser Website (einschließlich der IP-Adresse) werden an einen Server von Google übertragen und dort gespeichert.

Verarbeitete Daten:
- IP-Adresse (anonymisiert)
- Besuchte Seiten und Verweildauer
- Browsertyp und -version
- Betriebssystem
- Referrer-URL (zuvor besuchte Seite)
- Datum und Uhrzeit des Zugriffs
- Geräteinformationen (Desktop, Mobil, Tablet)

IP-Anonymisierung: Wir haben die IP-Anonymisierung („anonymize_ip: true") aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb der EU vor der Übermittlung gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.

Datenübermittlung in Drittländer: Google verarbeitet die Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage von Art. 46 Abs. 2 lit. c DSGVO (Standardvertragsklauseln) sowie zusätzlichen Garantien gemäß Art. 46 Abs. 3 lit. a DSGVO.

Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung). Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.

Zweck: Analyse der Website-Nutzung, Verbesserung der Benutzerfreundlichkeit und Optimierung unserer Inhalte.

Speicherdauer: Die Cookies werden nach maximal 2 Jahren automatisch gelöscht. Server-seitige Daten werden von Google nach 14 Monaten automatisch gelöscht.

Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de
Opt-Out: Sie können die Erfassung durch Google Analytics verhindern, indem Sie die Analytics-Cookies in den Cookie-Einstellungen deaktivieren oder ein Browser-Add-on installieren: https://tools.google.com/dlpage/gaoptout?hl=de

Microsoft Clarity

Diese Website nutzt Microsoft Clarity, einen Webanalysedienst der Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA („Microsoft").

Microsoft Clarity verwendet Cookies und andere Technologien, um Session-Aufzeichnungen und Heatmaps zu erstellen. Diese helfen uns zu verstehen, wie Nutzer mit unserer Website interagieren.

Verarbeitete Daten:
- Mausbewegungen, Klicks und Scroll-Verhalten
- Besuchte Seiten und Verweildauer
- IP-Adresse (anonymisiert)
- Browsertyp und -version
- Betriebssystem und Geräteinformationen
- Referrer-URL

Hinweis: Microsoft Clarity zeichnet KEINE Tastatureingaben in Formularfeldern auf. Passwörter, Kreditkartendaten und andere sensible Eingaben werden nicht erfasst.

Datenübermittlung in Drittländer: Microsoft verarbeitet die Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage von Art. 46 Abs. 2 lit. c DSGVO (Standardvertragsklauseln).

Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG (Einwilligung). Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden.

Zweck: Verbesserung der Benutzerfreundlichkeit durch Analyse des Nutzerverhaltens, Identifikation von Usability-Problemen und Optimierung der Website-Navigation.

Speicherdauer: Die Daten werden nach maximal 1 Jahr automatisch gelöscht.

Datenschutzerklärung von Microsoft: https://privacy.microsoft.com/de-de/privacystatement
Opt-Out: Sie können die Erfassung durch Microsoft Clarity verhindern, indem Sie die Analytics-Cookies in den Cookie-Einstellungen deaktivieren.

Kontaktanfragen

Im Falle einer Kontaktaufnahme des Nutzers werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt.

Dient die Kontaktanfrage der Erfüllung eines Vertrages oder der Durchführung vorvertraglicher Maßnahmen, wie beispielsweise eine Preisanfrage, so ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.

Die Daten des Nutzers werden gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.

Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO sein.

Eine erteilte Einwilligung für die Kontaktanfrage kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter widerrufen. Die im Zusammenhang verarbeiteten Daten werden gelöscht, sobald ihre Verarbeitung nicht mehr erforderlich ist.

Speicherdauer für Kontaktanfragen

Wir speichern Ihre Kontaktdaten nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist:

1. Allgemeine Anfragen (Informationen, Fragen):
   30 Tage nach abschließender Beantwortung

2. Angebotsanfragen ohne Vertragsabschluss:
   6 Monate nach letzter Kommunikation (für mögliche Rückfragen)

3. Geschäftliche Korrespondenz mit Vertragsabschluss:
   6 Jahre nach Ende des Geschäftsjahres gemäß HGB § 257 Abs. 1 Nr. 2 (Aufbewahrungspflicht für Geschäftsbriefe)

   Hinweis: In diesem Fall ist eine vorzeitige Löschung auf Ihr Verlangen nicht möglich (Art. 17 Abs. 3 lit. b DSGVO - gesetzliche Aufbewahrungspflicht). Die Daten werden jedoch nach Ablauf der Frist automatisch gelöscht.

4. Technische Logs (n8n-Workflow, Vercel-Server):
   7 Tage nach der Anfrage

Sie können jederzeit die Löschung Ihrer Daten beantragen. Wir prüfen dann, ob einer Löschung gesetzliche Aufbewahrungspflichten entgegenstehen.

Spam- und Missbrauchsschutz (Rate-Limiting)

Zum Schutz vor Spam und automatisierten Missbrauchsversuchen setzen wir ein Rate-Limiting-System ein, das die Anzahl der Kontaktanfragen pro IP-Adresse begrenzt (maximal 5 Anfragen pro Minute).

Dabei werden folgende Daten vorübergehend verarbeitet:
- IP-Adresse des Nutzers
- Zeitstempel der Anfragen

Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im Schutz unserer IT-Infrastruktur vor Überlastung und Missbrauch sowie im Schutz vor Spam.

Die Daten werden ausschließlich im Arbeitsspeicher (In-Memory) gespeichert und automatisch nach spätestens 1 Stunde gelöscht. Es erfolgt keine dauerhafte Speicherung.

Vercel (Hosting)

Die Website wird auf der Infrastruktur der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden Serverlogdaten (inkl. IP-Adresse) durch Vercel verarbeitet. Vercel verarbeitet diese Daten als Auftragsverarbeiter gemäß Art. 28 DSGVO. Die Datenübermittlung in die USA erfolgt auf Grundlage von Standardvertragsklauseln (Standard Contractual Clauses, SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen: https://vercel.com/legal/privacy-policy

Webhook-Verarbeitung (n8n)

Im Zuge der Bearbeitung von Kontaktanfragen werden die übermittelten Daten (Name, E-Mail-Adresse, Nachricht) über einen Webhook an unseren eigenen Server weitergeleitet, um die anschließende E-Mail-Kommunikation zu ermöglichen.

Wir betreiben n8n als selbst-gehostete Lösung auf einem Server der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland.

Hetzner agiert hierbei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Mit Hetzner wurde ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen.

Die Verarbeitung erfolgt ausschließlich auf Servern in Deutschland (Rechenzentrum Nürnberg/Falkenstein). Es findet keine Übermittlung in Drittländer statt.

Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b bzw. lit. a DSGVO. Die Daten werden ausschließlich zur Bearbeitung der Anfrage verwendet und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (max. 6 Jahre nach HGB § 257).

Weitere Informationen: https://www.hetzner.com/de/rechtliches/datenschutz

E-Mail-Versand (Gmail/Google Workspace)

Der Versand von E-Mails (Kontaktbestätigungen, Antworten auf Anfragen) erfolgt über Gmail, bereitgestellt von Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.

Verarbeitete Daten:
- E-Mail-Adresse des Absenders
- Name (falls angegeben)
- E-Mail-Inhalt (Nachricht)

Google agiert hierbei als Auftragsverarbeiter gemäß Art. 28 DSGVO. Mit Google wurde ein Auftragsverarbeitungsvertrag (Data Processing Agreement) abgeschlossen.

Die Datenverarbeitung erfolgt ausschließlich auf Servern in der EU (Dublin, Irland). Es findet keine Übermittlung in Drittländer statt.

Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung/Kommunikation)
Speicherdauer: Siehe "Speicherdauer für Kontaktanfragen" (oben)

Weitere Informationen:
Google Workspace Datenschutzerklärung: https://workspace.google.com/intl/de/terms/dpa_terms.html

Einbindung Social-Media

Der Anbieter setzt auf der Website eine Verlinkung auf die nachstehend aufgeführten sozialen Netzwerke ein.

Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität der Website.

Die Einbindung der Plugins erfolgt dabei über eine verlinkte Grafik. Erst durch einen klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.

Nach der Weiterleitung des Kunden werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuches des Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über einen „Teilen"-Button des jeweiligen Netzwerks, können diese Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss sich der Nutzer vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu konfigurieren.

Folgende soziale Netzwerke sind vom Anbieter verlinkt:

Facebook - Betreiber innerhalb der EU: Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Datenschutzerklärung:
https://www.facebook.com/policy.php

Instagram - Betreiber innerhalb der EU: Facebool Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Datenschutzerklärung:
https://help.instagram.com/519522125107875

Twitter - Betreiber innerhalb der EU: Twitter International Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Ireland. Datenschutzerklärung:
https://twitter.com/de/privacy

Pinterest - Betreiber innerhalb der EU: Pinterest Europe Ltd., Palmerston House, 2nd Floor Fenian, Street, Dublin 2, Ireland. Datenschutzerklärung:
https://policy.pinterest.com/de/privacy-policy

YouTube - Betreiber innerhalb der EU: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Datenschutzerklärung:
https://policies.google.com/privacy?hl=de&gl=de

_______________________________________________________________



B. Datenschutzrichtlinie für Social-Media-Auftritte

Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden nutzen wir sog. Social-Media-Plattformen.

Nachstehende Ausführungen informieren Sie insbesondere über die Art, den Umfang, den Zweck, die Dauer und die Rechtsgrundlage der Verarbeitung von personenbezogenen Daten, wenn Sie eine unserer Firmenpräsentation auf einer Social-Media-Plattform besuchen oder darüber mit uns in Kontakt treten.

Als „Verarbeitung" gilt die Erhebung, Nutzung, Weitergabe und/oder Speicherung. Als „personenbezogene Daten" gelten nach der Datenschutzgrundverordnung (nachfolgend „DSGVO") grundsätzlich alle Daten, mit denen eine natürliche Person identifiziert werden kann. Die genauen Definitionen der Begrifflichkeiten sind in Art. 4 DSGVO bestimmt.

_________________________________________

I. Informationen zu den gemeinsamen Verantwortlichen
II. Rechte des Nutzers
III. Informationen zur Datenverarbeitung
_________________________________________



I. Informationen zu den gemeinsamen Verantwortlichen

Für alle nachstehend genannten Social-Media-Plattformen ist die

VENDORi GmbH
Hahnenfeldstr. 25
69429 Waldbrunn

Tel : + 49 (0) 6274 9278157
Email : info@vendori.eu

- nachfolgend „Anbieter" genannt -

mit dem nachfolgend jeweils genannten Plattformbetreiber gemeinsam i.S.d. Art. 26 DSGVO verantwortlich.



Facebook und Instagram

Auf der Social-Media-Plattform „facebook" und „Instagram" ist der Anbieter gemeinsam mit der

Facebook Ireland Ltd.
4 Grand Canal Square
Grand Canal Harbour
Dublin 2 Ireland

verantwortlich.

Der Datenschutzbeauftragte von facebook kann über ein Kontaktformular erreicht werden:

https://www.facebook.com/help/contact/540977946302970

Die gemeinsam Verantwortlichen haben in einer Vereinbarung die jeweiligen Verpflichtungen aus der DSGVO geregelt. Diese Vereinbarung ist unter dem folgenden Link abrufbar:

https://www.facebook.com/legal/terms/page_controller_addendum

_________________________



II. Rechte des Nutzers

Ungeachtet der Einzelheiten der Vereinbarung können Sie Ihre Rechte im Rahmen der DSGVO bei und gegenüber jedem einzelnen der Verantwortlichen geltend machen.

Der Nutzer hat in Bezug auf die von den Verantwortlichen nachfolgend wiedergegebene Verarbeitung seiner personenbezogenen Daten das Recht,

1. eine Bestätigung darüber zu verlangen, ob die ihn betreffenden Daten verarbeitet werden und auf genaue Auskunft über diese Daten sowie auf weitere Informationen und Kopien der Daten entsprechend Art. 15 DSGVO;

2. die unverzügliche Berichtigung der ihn betreffenden unrichtigen Daten oder die Vervollständigung dieser Daten gemäß Art. 16 DSGVO zu verlangen;

3. zu verlangen, dass die ihn betreffende Daten gemäß Art. 17 DSGVO unverzüglich gelöscht werden, alternativ, falls beispielsweise eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, eine Einschränkung der Verarbeitung der Daten nach Maßgabe des Art. 18 DSGVO zu verlangen;

4. dass er die ihn betreffenden und von ihm bereitgestellten Daten nach Maßgabe des Art. 20 DSGVO erhält sowie das weitere Recht deren Übermittlung an andere Verantwortliche zu fordern;

5. eine Beschwerde bei der Aufsichtsbehörde nach Art. 77 DSGVO einzureichen, falls der Nutzer der Ansicht ist, dass die Verarbeitung seiner Daten durch einen Verantwortlichen gegen die DSGVO verstößt.

_________________________

6. Der Nutzer kann grundsätzlich der künftigen Verarbeitung der ihn betreffenden Daten, welche durch einen Verantwortlichen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, jederzeit nach Maßgabe des Art. 21 DSGVO widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.

_________________________

7. Der Verantwortliche ist zudem verpflichtet, jede Berichtigung oder Löschung der personenbezogenen Daten oder eine Einschränkung der Verarbeitung, die aufgrund von Artikel 16 DSGVO, Artikel 17 Absatz 1 DSGVO und Artikel 18 DSGVO erfolgt, allen Empfängern der Daten mitzuteilen, denen die Daten offengelegt wurden. Die Verpflichtung besteht nicht für den Fall, dass diese Mitteilung sich als unmöglich erweist oder mit einem unverhältnismäßigen Aufwand verbunden ist. Dem Nutzer steht das Recht auf Auskunft bezüglich dieser Empfänger zu.



III. Informationen zur Datenverarbeitung

Zur Bewerbung seiner Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden betreibt der Anbieter eine Firmenpräsenz auf der/den nachfolgende(n) Plattform(en).

Rechtsgrundlage für die dadurch erfolgende und nachfolgend für jede Plattform wiedergegebene Verarbeitung von personenbezogenen Daten ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Analyse, der Kommunikation sowie dem Absatz und der Bewerbung seiner Produkte und Leistungen.

Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO gegenüber dem Plattformbetreiber sein. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Plattformbetreiber für die Zukunft widerrufen.



Facebook und Instagram

Bei dem Aufruf des Onlineauftrittes des Anbieters auf der Plattform „facebook" and „Instagram" werden von der Facebook Ireland Ltd. als Betreiberin beider Plattformen in der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse etc.) verarbeitet. Diese Daten des Nutzers dienen dem Anbieter zu statistischen Informationen über die Inanspruchnahme seiner Firmenpräsenz auf „facebook" und „Instagram".

Die Facebook Ireland Ltd. nutzt diese Daten insbesondere zu Marktforschungs- und Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und außerhalb von „facebook" und „Instagram" interessenbezogen zu bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf „facebook" oder „Instagram" eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.

Im Falle einer Kontaktaufnahme des Nutzers mit dem Anbieter über „facebook" oder „Instagram" werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden beim Anbieter gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.

Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf. auch Cookies gesetzt.

Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die Installation der Cookies durch eine entsprechende Einstellung des Browsers zu verhindern. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen von facebook vollumfänglich nutzbar sind.

Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von der Facebook Ireland Ltd. verarbeiteten Daten finden sich in der Datenrichtlinie von „facebook" und „Instagram":

https://www.facebook.com/privacy/explanation

https://help.instagram.com/519522125107875`;

    // Function to render text with highlighed headers and functional links
    const formatContent = (text: string) => {
        const renderLineContent = (content: string) => {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const parts = content.split(urlRegex);
            return parts.map((part, i) => {
                if (part.match(urlRegex)) {
                    return (
                        <a
                            key={i}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline font-medium break-all transition-all duration-300 decoration-primary-600/30 underline-offset-4"
                            aria-label={`${part} (öffnet in neuem Tab)`}
                        >
                            {part}
                        </a>
                    );
                }
                return part;
            });
        };

        return text.split('\n').map((line, index) => {
            const trimmedLine = line.trim();

            // Remove dashes line
            if (trimmedLine.startsWith('____') || trimmedLine.startsWith('----')) {
                return null;
            }

            // Pattern for main headers (A., B., I., II., III.)
            const isMainHeader = /^[A-Z]\.\s+/.test(trimmedLine) || /^[IVX]+\.\s+/.test(trimmedLine);

            // Pattern for subheaders (Serverdaten, Cookies, a), etc.)
            const isSubHeader = (
                trimmedLine.length > 0 &&
                trimmedLine.length < 60 &&
                !trimmedLine.endsWith('.') &&
                !trimmedLine.includes(';') &&
                !trimmedLine.includes('://') &&
                !/^\d+\./.test(trimmedLine) &&
                !trimmedLine.startsWith('-')
            ) || /^[a-z]\)\s+/.test(trimmedLine);

            if (isMainHeader) {
                return (
                    <h2 key={index} className="block mt-16 mb-8 first:mt-0">
                        <span className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white font-display font-bold tracking-tight">
                            {renderLineContent(line)}
                        </span>
                        <div className="h-1.5 w-16 bg-primary-600 rounded-full mt-3" />
                    </h2>
                );
            }

            if (isSubHeader) {
                return (
                    <h3 key={index} className="block mt-10 mb-5 font-black text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-display font-bold">
                        {renderLineContent(line)}
                    </h3>
                );
            }

            return <span key={index}>{renderLineContent(line)}{'\n'}</span>;
        });
    };

    return (
        <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-700 font-[family-name:var(--font-inter)] relative scroll-smooth selection:bg-primary-500/30">
            {/* Reading Progress Indicator - CSS-only */}
            <div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[100] origin-left transition-transform duration-100"
                style={{ transform: `scaleX(var(--scroll-progress, 0))` }}
            />

            {/* Premium Background Layer */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.08),transparent_50%)]" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-500/10 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -120, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-purple-500/10 blur-[120px] rounded-full"
                />
            </div>

            <StickyHeader />
            <div className="hidden">
                <Breadcrumb items={[{ label: 'Datenschutzerklärung' }]} />
            </div>

            <div className="relative pt-32 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    {/* Hero Header */}
                    <header className="mb-20 space-y-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-widest font-display font-bold"
                        >
                            Rechtliche Bestimmungen
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white font-display font-bold leading-[0.95] tracking-tighter"
                        >
                            Datenschutz<br />
                            <span className="text-primary-600">Erklärung.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Hier finden Sie alle Informationen zur Datenverarbeitung bei der VENDORi GmbH.
                        </motion.p>
                    </header>

                    {/* Main Content Card */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white dark:bg-zinc-900/50 backdrop-blur-3xl border border-neutral-200 dark:border-white/5 rounded-[48px] shadow-2xl shadow-neutral-200/50 dark:shadow-none overflow-hidden"
                    >
                        {/* Glass grain overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url('/noise.png')` }} />

                        <div className="p-8 md:p-12 lg:p-20">
                            <div className="whitespace-pre-wrap text-neutral-700 dark:text-neutral-400 leading-[1.8] text-base md:text-lg font-light tracking-wide selection:bg-primary-600 selection:text-white">
                                {formatContent(content)}
                            </div>
                        </div>
                    </motion.section>

                    {/* Footer Help */}
                    <div className="mt-20 p-12 rounded-[40px] bg-neutral-900 dark:bg-zinc-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl">
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold font-display font-bold text-white">
                                Noch Fragen zum Datenschutz?
                            </h2>
                            <p className="text-neutral-400 text-sm">
                                Kontaktieren Sie uns jederzeit per E-Mail für detaillierte Auskünfte.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/kontakt"
                                className="px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white rounded-2xl font-black text-sm transition-all hover:scale-105 shadow-xl shadow-primary-700/20 active:scale-95 whitespace-nowrap"
                            >
                                Jetzt Kontaktieren
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
