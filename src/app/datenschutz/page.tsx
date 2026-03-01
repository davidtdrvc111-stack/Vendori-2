'use client';

import React from 'react';
import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Privacy() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const content = `Datenschutz

__________________________

A. Datenschutzerklärung für Webseite
B. Datenschutzrichtlinie für Social-Media-Auftritte
_______________________________________________________________



A. Datenschutzerklärung für Webseite

Wir verarbeiten personenbezogene Daten (nachfolgend „Daten“) der Nutzer nur, soweit dies zur Bereitstellung einer funktionsfähigen und komfortablen Website sowie unserer Inhalte und Leistungen erforderlich ist.

Als „Verarbeitung“ gilt die Erhebung, Nutzung, Weitergabe und/oder Speicherung. Als „personenbezogene Daten“ gelten nach der EU-Datenschutzgrundverordnung (nachfolgend „DSGVO“) grundsätzlich alle Daten, mit denen eine natürliche Person identifiziert werden kann. Die genauen Definitionen der Begrifflichkeiten sind in Art. 4 DSGVO bestimmt.

Nachstehende Ausführungen informieren Sie insbesondere über die Art, den Umfang, den Zweck, die Dauer und die Rechtsgrundlage der Verarbeitung von personenbezogenen Daten über dessen Zwecke und Mittel der Verarbeitung wir allein oder gemeinsam mit anderen entscheiden, sowie über die von uns zur Optimierung und Nutzungsqualität gegebenenfalls eingesetzten Komponenten Dritter, die in eigener Verantwortung Daten verarbeiten:

_________________________________________

I. Informationen zum Verantwortlichen
II. Rechte des Nutzers
III. Informationen zur Datenverarbeitung
_________________________________________



I. Informationen zum Verantwortlichen

Der Verantwortliche (nachfolgend „Anbieter“) im Sinne der DSGVO und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:

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

5. eine Beschwerde bei der Aufsichtsbehörde nach Art. 77 DSGVO einzureichen, falls der Nutzer der Ansicht ist, dass die Verarbeitung seiner Daten durch den Anbieter gegen die DSGVO verstößt.

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

Die Verarbeitung dient dem berechtigten Interesse des Verantwortlichen an einer Verbesserung der Funktionalität der Website sowie der Erfüllung gesetzlicher Vorgaben und beruht auf der Rechtsgrundlage des Art. 6 Abs. 1 lit. f DSGVO.

Die „Session“-Cookies werden gelöscht, wenn der Nutzer seinen Browser schließt. Die "Persistente"-Cookies werden automatisiert nach 12 Monaten gelöscht. Diese Frist ist je nach Cookie unterschiedlich, überschreitet jedoch nicht eine Frist von 12 Monaten.

b) Cookies von Drittanbietern

Gegebenenfalls werden auf der Webseite des Anbieters auch Cookies von Drittanbietern eingesetzt. Bei diesen Drittanbietern handelt es sich um Partnerunternehmen, mit denen der Anbieter zum Zwecke der Werbung, Analyse oder der Funktionalitäten der Website zusammenwirkt. Sollte dies der Fall sein, werden die Zwecke und Rechtsgrundlagen der entsprechenden Verarbeitungen in den nachfolgenden Ausführungen wiedergegeben.

c) Beseitigungsmöglichkeit

Der Nutzer kann die Installation der Cookies durch eine entsprechende Einstellung des Browsers verhindern oder einschränken. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen der Website vollumfänglich nutzbar sind.

Vertragsabwicklung

a) Verarbeitung

Die vom Nutzer zum Zwecke eines Waren- oder Dienstleistungserwerbs angegebenen personenbezogenen Daten werden vom Anbieter zum Zwecke der Vertragsabwicklung verarbeitet. Die Angaben der Daten sind zum Vertragsschluss erforderlich; ohne die Bereitstellung der Daten ist der Vertragsschluss nicht möglich. Rechtsgrundlage für la Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO. Nach vollständiger Abwicklung des Vertrages werden die Daten des Nutzers mit Rücksicht auf steuer- und handelsrechtliche Aufbewahrungsfristen gelöscht.

b) Weitergabe

Die personenbezogenen Daten des Nutzers werden im Rahmen der Vertragsabwicklung an das mit der Lieferung beauftragte Transportunternehmen, an den Finanzdienstleister oder den Shop-Software-dienstleister weitergegeben, soweit dies zur Vertragsabwicklung, Lieferung oder Bezahlung der Ware erforderlich ist. Rechtsgrundlage für die Weitergabe der Daten ist hierbei Art. 6 Abs. 1 lit. b DSGVO.

c) Hinweis zu PayPal

Im Falle der Auswahl der Zahlungsdienstleister PayPal durch den Kunden, kann es bei bestimmten und ebenfalls vom Kunden ausgewählten Zahlungsarten zu Bonitätsabfragen durch PayPal kommen. Näheres zu der Verarbeitung der personenbezogenen Daten des Kunden durch PayPal unter

https://www.paypal.com/de/webapps/mpp/ua/privacy-full

d) Hinweis zu Kauf auf Rechnung/ SEPA Lastschrift

Im Falle der Auswahl der Zahlungsarten Kauf auf Rechnung und SEPA Lastschrift durch den Kunden werden die personenbezogenen Daten des Nutzers durch den Zahlungsdienstleister Unzer E-Com GmbH, Heidelberg, zu einer Identitäts- und Bonitätsprüfung verwendet.

Näheres zu der Verarbeitung der personenbezogenen Daten des Kunden durch Unzer unter

https://www.unzer.com/de/datenschutz/

Kundenkonto

Sollte der Nutzer sich zu einem Kundenkonto bei dem Anbieter registrieren, werden die im Zuge dieser Registrierung eingegebenen Daten (z.B. Name, Anschrift, E-Mail-Adresse) ausschließlich für die Erfüllung eines Vertrages oder der Durchführung vorvertraglicher Maßnahmen sowie zur generellen Verwaltung der Kundenbeziehung (z.B. Abruf bisheriger Bestellungen oder Merkzettelfunktion) erhoben und gespeichert. Mit der Registrierung werden zudem die IP-Adresse und das Datum sowie die Uhrzeit der Registrierung gespeichert. Eine Weitergabe an Dritte erfolgt nicht.

Rechtsgrundlage ist bei Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO. Im Rahmen des Registrierungsvorgangs wird ggf. die Einwilligung des Nutzers zur vorstehenden Verarbeitung eingeholt und auf diese Datenschutzerklärung verwiesen. Die so erhobenen Daten werden ausschließlich für den vorgenannten Zweck verwendet. Eine Weitergabe an Dritte erfolgt nicht.

Dient die Eröffnung des Kundenkontos der Erfüllung eines Vertrages oder der Durchführung vorvertraglicher Maßnahmen, so ist zusätzliche Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.

Eine erteilte Einwilligung für das Kundenkonto kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter widerrufen. Die im Zusammenhang verarbeiteten Daten werden gelöscht, sobald ihre Verarbeitung nicht mehr erforderlich ist. Sind die Daten zur Erfüllung eines Vertrages oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, werden die Daten des Nutzers mit Ablauf der steuer- und handelsrechtlichen Aufbewahrungsfristen gelöscht.

Kontaktanfragen

Im Falle einer Kontaktaufnahme des Nutzers werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt.

Dient die Kontaktanfrage der Erfüllung eines Vertrages oder der Durchführung vorvertraglicher Maßnahmen, wie beispielsweise eine Preisanfrage, so ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.

Die Daten des Nutzers werden gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.

Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO sein.

Eine erteilte Einwilligung für die Kontaktanfrage kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter widerrufen. Die im Zusammenhang verarbeiteten Daten werden gelöscht, sobald ihre Verarbeitung nicht mehr erforderlich ist.

Direktwerbung

Der Anbieter behält es sich vor, die anlässlich einer Bestellung erhobenen Daten ggf. für eine Direktwerbung per E-Mail oder postalisch gemäß § 7 Abs. 3 UWG zu nutzen, wenn der Nutzer dieser Nutzung nicht widerspricht. Die Direktwerbung umfasst ausschließlich Angebote zu ähnlichen Produkten oder Leistungen, wie den bereits vom Nutzer beim Anbieter erworbenen Produkten oder Leistungen. Rechtsgrundlage ist in diesem Fall Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an dem wirtschaftlichen Interesse des Absatzes sowie Verbesserung seiner Serviceleistungen.

Produktbewertungen

Über die Bewertungsfunktion der Website hat der Nutzer die Möglichkeit eine Produktbewertung auf der Website zu veröffentlichen. Hierbei wird der Beitrag, der Zeitpunkt der Einreichung des Beitrages und der von dem Nutzer angegebene „Name“ bzw. „Pseudonym“ vom Anbieter verarbeitet und veröffentlicht.

Rechtsgrundlage ist Art. 6 Abs. 1 lit. a. DSGVO. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter für die Zukunft widerrufen.

Zudem wird auch die IP-Adresse und E-Mail Adresse des Nutzers vom Anbieter verarbeitet. Die Verarbeitung erfolgt aufgrund des berechtigten Interesses des Anbieters für den Fall, dass von dem Beitrag des Nutzers in die Rechte Dritter eingegriffen wird und/oder widerrechtliche Inhalte abgesetzt werden.

Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der ggf. notwendigen Rechtsverteidigung.

Besuchs-Analyse und Newsletter über Emarsys

a) Anmeldung

Sollte sich der Nutzer für den kostenlosen Newsletter des Anbieters anmelden, werden die in der Eingabemaske abgefragten Daten (E-Mail-Adresse) durch einen Dienstleister - siehe nachfolgend Versand - verarbeitet. Zudem werden die IP-Adresse und das Datum sowie die Uhrzeit der Anmeldung gespeichert. Im Rahmen des Anmeldevorgangs werden die Einwilligung des Nutzers eingeholt sowie die Inhalte konkret umschrieben. Gleichzeitig wird auf diese Datenschutzerklärung verwiesen.

b) Versand

Zum Versand von Newslettern setzt der Anbieter „Emarsys“ ein. Bei „Emarsys“ handelt es sich um eine Dienstleistung der Firma Emarsys eMarketing Systems GmbH, München.

Weitere Informationen zum Datenschutz bei Emarsys:

https://www.emarsys.com/de/datenschutzrichtlinie/

c) Besucher- und Newsletter-Analyse

Die vom Anbieter über „Emarsys“ versandten Newsletter enthalten Technologien anhand derer der Anbieter in den Analysen erkennen kann, ob und wann eine E-Mail geöffnet wurde sowie welche Links in dem Newsletter von dem Nutzer gefolgt wurde.

Emarsys setzt zudem Cookies ein. Diese Cookies werden dazu genutzt, um den Nutzer wiederzuerkennen, so dass die Bewegungen auf der Website des Anbieters erkannt werden können und der Erfolg bestimmter Marketing-Maßnahmen erfasst werden können.

Die vom Anbieter über „Emarsys“ versandten Newsletter enthalten auch Technologien anhand derer der Anbieter in den Analysen erkennen kann, ob und wann eine E-Mail geöffnet wurde sowie welche Links in dem Newsletter von dem Nutzer gefolgt wurde.

Diese Analyse-Daten werden vom Anbieter neben den technischen Daten (Systemdaten und IP-Adresse) gespeichert, damit die Newsletter optimal auf die Wünsche und Interessen des Nutzers ausgerichtet werden können. Demnach werden die somit erhobenen Daten genutzt, um die Qualität der Newsletter ständig zu verbessern.

d) Rechtsgrundlage

Rechtsgrundlage für den Versand des Newsletters und die Analyse ist Art. 6 Abs. 1 lit. a. DSGVO.

e) Widerruf

Die Einwilligung in Bezug auf die Verarbeitung der Daten anlässlich der Newsletteranmeldung kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter oder durch den im Newsletter enthaltenen Abmeldelink für die Zukunft widerrufen.

Die Einwilligung in Bezug auf die Analyse-Cookies kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch die Einstellungen in der Cookie-Verwaltung für die Zukunft widerrufen.

Webanalyse Hotjar

Diese Website benutzt Hotjar, einen Webanalienst der Firma Hotjar Ltd., Level 2, St Julians Business Centre, 3, Elia Zammit Street, St Julians STJ 1000, Malta, Europe, nachfolgend „Hotjar“.

Durch den Einsatz von Hotjar kann der Anbieter mit Einwilligung des Nutzers z.B. Mausbewegungen und -Klicks eines anonymisierten Besuchers protokollieren und auswerten. Außerdem werden mittels Hotjar Informationen zum Betriebssystem, Browser, eingehende und ausgehende Verweise (Links), geografische Herkunft, sowie Auflösung und Art des vom Besucher eingesetzten Endgeräts zu statistischen Zwecken ausgewertet. Zudem ermöglicht es Hotjar dem Anbieter auch ein Feedback direkt von den Nutzern der Website einzuholen.

Die Einwilligung hierzu kann der Nutzer jederzeit durch die Einstellungen in der Cookie-Verwaltung für die Zukunft widerrufen.

Näheres hierzu auch in der Datenschutzerklärung von Hotjar: https://www.hotjar.com/privacy

belboon - Affiliate

Der Anbieter nutzt das Werbenetzwerk von belboon. belboon ist ein Produkt der belboon GmbH, Weinmeisterstr. 12-14, 10178 Berlin.

Das Netzwerk ermöglicht es dem Anbieter eigene Werbung auf Webseiten Dritter oder Werbung Dritter auf seiner eigenen Webseite zu platzieren.

Sollte der Nutzer aufgrund der Bewerbung auf der Website des Anbieters die Angebote oder Leistungen des Dritten in Anspruch nehmen (Kauf oder Auftrag), so erhält der Anbieter eine „Vermittlungsgebühr“. Folgt der Nutzer über eine Webseite Dritter den Angeboten des Anbieters auf dessen Webseite und kommt es zu einem Kauf oder Auftrag, so erhält der Dritte eine sog. „Vermittlungsgebühr“.

Um die erfolgreiche Vermittlung zu erfassen, werden auf der Webseite des Anbieters sog. „affilinet-Tracking-Cookies“ zur korrekten Erfassung der Vermittlungen eingesetzt. Diese „affilinet-Tracking-Cookies“ haben eine Lebensdauer von 90 Tagen und speichern keinerlei personenbezogene Daten. Vielmehr werden lediglich die Identifikationsnummer des vermittelnden oder vermittelten Anbieters wie auch die Ordnungsnummer des vom Nutzer angeklickten Werbemittels (z.B. Banner oder Textlink) erfasst.

Diese Informationen werden zur Zahlungsabwicklung zwischen dem Anbieter und dem Dritten benötigt. Die Partner-Identifikationsnummer dient bei Abschluss einer Transaktion der Zuordnung der an den vermittelnden Partner zu zahlender Provision.

Der Einsatz der Cookies erfolgt aufgrund einer Einwilligung des Nutzers. Die Einwilligung hierzu kann der Nutzer jederzeit durch die Einstellungen in der Cookie-Verwaltung für die Zukunft widerrufen.

Google Tag-Manager

Zur Einbindung verschiedener Funktionen auf der Webseite, setzt der Anbieter den Google Tag-Manager ein. Der Google Tag-Manager ist ein Produkt der Firma Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend "Google".

Der Google Tag-Manager hat einzig die Funktion bestimmte Inhalte auf die Webseite des Anbieters einzuspielen und die Verwaltung dieser Funktionen durch den Anbieter auf einer von Google zur Verfügung gestellten Oberfläche zu ermöglichen.

Bei dem Aufruf der Webseite werden daher die Funktionen von einem Server von Google, der sich auch in den USA befinden kann, geladen. Hierbei muss der Server die IP-Adresse des Nutzers verarbeiten um die Funktionen zu übermitteln.

Die entsprechenden Funktionen werden in der Datenschutzerklärung des Anbieters abschließend aufgezählt. Die ggf. für diese Funktionen nicht erteilten Einwilligungen durch den Nutzer werden auch bei Einsatz des Google Tag-Manager beachtet.

_________________________

Die USA verfügen gegenwärtig nach Ansicht der Datenschutzaufsichtsbehörden allerdings nicht über ein angemessenes Datenschutzniveau. Es bestehen zwischen dem Anbieter und Google allerdings sogenannte Standardvertragsklauseln:

https://privacy.google.com/businesses/compliance/#!#gdpr

Jedoch sind dies privatrechtliche Vereinbarungen und haben daher keine direkte Auswirkungen auf die Zugriffsmöglichkeiten der Behörden in den USA.

_________________________

Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Optimierung und dem wirtschaftlichen Betrieb der Website.



Google-Analytics

Diese Website benutzt Google-Analytics, einen Webanalysedienst der Firma Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend "Google".

Google-Analytics dient dem Anbieter zur Analyse der Benutzung der Website. Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch die Einstellungen in der Cookie-Verwaltung auf der Webseite für die Zukunft widerrufen.

Informationen, beispielsweise Zeit, Ort und Häufigkeit des Webseiten-Besuchs des Nutzers einschließlich seiner IP-Adresse, werden an einen Server von Google in den USA übertragen und dort gespeichert.

_________________________

Die USA verfügen gegenwärtig nach Ansicht der Datenschutzaufsichtsbehörden allerdings nicht über ein angemessenes Datenschutzniveau. Es bestehen zwischen dem Anbieter und Google allerdings sogenannte Standardvertragsklauseln:

https://privacy.google.com/businesses/compliance/#!#gdpr

Jedoch sind dies privatrechtliche Vereinbarungen und haben daher keine direkte Auswirkungen auf die Zugriffsmöglichkeiten der Behörden in den USA.

_________________________

Der Anbieter nutzt hierbei Google-Analytics mit einer Anonymisierungsfunktion. Durch diesen Zusatz wird IP-Adresse in diesem Fall von Google schon innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt.

Google wird die dadurch erhobenen Daten dazu verwenden, den Besuch der Website durch den Nutzer auszuwerten und Reports über die Websiteaktivitäten für den Anbieter zusammenzustellen. Zudem werden die Daten genutzt, um weitere mit der Websitenutzung und der Internetnutzung verbundenen Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.

Google wird, nach eigenen Angaben, in keinem Fall die IP-Adresse des Nutzers mit anderen Daten von Google in Verbindung bringen. Weitergehende Informationen, insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung, bietet Google unter dem nachfolgenden Link an:

https://www.google.com/intl/de/policies/privacy/partners

Google bietet zudem für die gängigsten Browser ein Deaktivierungs-Add-On an, welches dem Nutzer mehr Kontrolle darüber gibt, welche Daten von Google zu der vom Nutzer aufgerufenen Website erfasst werden. Das Add-On teilt dem JavaScript (ga.js) von Google Analytics mit, dass keine Informationen zum Website-Besuch an Google Analytics übermittelt werden sollen. Das Deaktivierungs-Add-On für Browser von Google Analytics verhindert aber nicht, dass Informationen an den Anbieter oder an andere von dem Anbieter gegebenenfalls eingesetzten und in dieser Datenschutzerklärung aufgeführten Webanalyse-Services übermittelt werden. Weitere Informationen zur Installation des Browser-Add-On sind unter nachfolgendem Link abrufbar:

Browser-Add-On zur Deaktivierung von Google Analytics:

https://tools.google.com/dlpage/gaoptout?hl=de



Google Ads mit Conversion-Tracking

Der Anbieter nutzt ferner die Google-Werbe-Komponente „Google Ads“ und in diesem Zusammenhang das sog. Conversion-Tracking. Google Conversion-Tracking ist ein Produkt der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend „Google“.

Klickt der Nutzer auf eine von Google geschaltete Anzeige, wird aufgrund der Einbindung des Conversion-Tracking ein Cookie durch Google auf dem Endgerät des Nutzers gespeichert. Diese sog. "Conversion-Cookies" verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifikation des Nutzers.

Besucht der Nutzer innerhalb der Cookie-Lebensdauer bestimmte Seiten der Website des Anbieters, kann sowohl Google als auch der Anbieter erkennen, dass der Nutzer auf eine der vom Anbieter bei Google platzierten Anzeigen geklickt hat und zur Website des Anbieters weitergeleitet wurde.

Die mit Hilfe der "Conversion-Cookies" eingeholten Informationen dienen Google dazu, Besuchs-Statistiken für den Anbieter zu erstellen. Es ist zudem nicht auszuschließen, dass Google diese Daten auf einem Server in den USA verarbeitet.

_________________________

Die USA verfügen gegenwärtig nach Ansicht der Datenschutzaufsichtsbehörden allerdings nicht über ein angemessenes Datenschutzniveau. Es bestehen zwischen dem Anbieter und Google allerdings sogenannte Standardvertragsklauseln:

https://privacy.google.com/businesses/compliance/#!#gdpr

Jedoch sind dies privatrechtliche Vereinbarungen und have daher keine direkte Auswirkung auf die Zugriffsmöglichkeiten der Behörden in den USA.

_________________________

Der Anbieter erhält dadurch die Information über die Gesamtanzahl der Nutzer, die auf seine Anzeige geklickt haben und zudem, welche Seiten seiner Website vom jeweiligen Nutzer im Anschluss aufgerufen wurden. Der Anbieter bzw. andere über "Google-Ads" Werbende erhalten jedoch keinerlei Informationen, mit denen sich Nutzer persönlich identifizieren lassen.

Der Einsatz des Conversion-Tracking dient dem Anbieter zur zielgerichteten Bewerbung seiner Leistungen. Grundlage ist hierbei eine Einwilligung des Nutzers. Die Einwilligung hierzu kann der Nutzer jederzeit durch Einstellungen in der Cookie-Verwaltung für die Zukunft widerrufen.

Weitergehende Informationen, insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung, bietet Google unter den nachfolgenden Links an:

https://services.google.com/sitestats/de.html
http://www.google.com/policies/technologies/ads/
http://www.google.de/policies/privacy/



Remarketing- oder "Ähnliche Zielgruppen"-Komponente von Google

Der Anbieter nutzt ferner die Remarketing- oder "Ähnliche Zielgruppen"-Funktion der Firma Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend "Google".

Diese Komponente ermöglicht es dem Anbieter, eine personalisierte und interessenbezogene Werbung auf Webseiten Dritter, die an dem Werbe-Netzwerk bei Google teilnehmen, zu platzieren.

Um diese zielgerichtete Werbung zu ermöglichen, wird bei dem Besuch der Webseite des Anbieters bei einer Einwilligung des Nutzers durch Google ein Cookie mit einer Zahlenfolge über den Browser des Nutzers gespeichert.

Über dieses Cookie werden die Besuche der Webseite sowie anonymisierte Daten über die Nutzung der Webseite erfasst. Es erfolgt hierbei keine Weitergabe von personenbezogenen Daten.

Die Einwilligung hierzu kann der Nutzer jederzeit durch Einstellungen in der Cookie-Verwaltung für die Zukunft widerrufen.

Besucht der Nutzer nachfolgend eine andere Webseite im Google Werbe-Netzwerk, werden ihm ggf. Werbeeinblendungen angezeigt, die unter Umständen die zuvor auf der Website des Anbieters aufgerufenen Produkt- und Informationsbereiche berücksichtigen.

Außerdem kann Google unter Umständen durch sog. "Cross-Device-Marketing" das Nutzungsverhalten über mehrere Endgeräte hinweg verfolgen und ist dadurch in der Lage personalisierte Werbung geräteübergreifend einzublenden. Voraussetzung hierfür ist allerdings, dass der Nutzer einer Verknüpfung der Browserverläufe mit seinem bestehenden Google-Account zugestimmt hat.

Weiterführende Informationen zu Google Remarketing bietet Google unter dem nachfolgenden Link an:

https://www.google.com/privacy/ads/



YouTube

Der Anbieter setzt auf der Website zur Darstellung von Videosequenzen ein Tool des Unternehmens Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend "Google" ein.

Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch die Einstellungen in der Cookie-Verwaltung auf der Webseite für die Zukunft widerrufen. Der Anbieter setzt YouTube mit der von YouTube angebotenen Option "erweiterter Datenschutzmodus" ein.

Besucht der Nutzer eine Seite, die über ein eingebettetes Video verfügt, wird eine Verbindung zu den Google -Servern in den USA hergestellt und dabei der Inhalt durch Mitteilung an den Browser des Nutzers auf der Internetseite dargestellt. Hierzu wird von Google zumindest die IP-Adresse, das Datum, die Uhrzeit und die vom Nutzer besuchte Seite verarbeitet. Auch führt dies zu einer Verbindungsaufnahme mit dem Google Double-Click Werbe-Netzwerk. Ist der Nutzer gleichzeitig bei YouTube eingeloggt, werden die Verbindungsinformationen dem Mitgliedskonto des Nutzers bei YouTube zugeordnet.

_________________________

Die USA verfügen gegenwärtig nach Ansicht der Datenschutzaufsichtsbehörden allerdings nicht über ein angemessenes Datenschutzniveau. Es bestehen zwischen dem Anbieter und Google allerdings sogenannte Standardvertragsklauseln:

https://privacy.google.com/businesses/compliance/#!#gdpr

Jedoch sind dies privatrechtliche Vereinbarungen und haben daher keine direkte Auswirkung auf die Zugriffsmöglichkeiten der Behörden in den USA.

_________________________

Laut Google werden im "erweiterten Datenschutzmodus" keine Informationen über die Nutzer auf der Website gespeichert, es sei denn, diese sehen sich das eingebundene Video an.

Will der Nutzer verhindern, dass Google die gesammelten Informationen unmittelbar seinem Benutzerkonto zuordnet, muss sich der Nutzer vor dem Besuch der Website bei YouTube ausloggen. Zudem besteht die Möglichkeit, das Benutzerkonto entsprechend zu konfigurieren.

Zur Funktionalität und Analyse werden von Google auch dauerhafte Cookies eingesetzt.

Nähere Informationen zur Erhebung und Nutzung der Daten durch Google sowie über die diesbezüglichen Rechte und Möglichkeiten zum Schutz der Privatsphäre des Nutzers sind in den Datenschutzhinweisen von Google enthalten:

https://policies.google.com/privacy



Google Maps

Zur Anfahrtsbeschreibung setzt der Anbieter die Komponente "Google Maps" der Firma Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend „Google“, ein.

Bei Aufruf einer Seite die über die Komponente "Google Maps" verfügt, wird eine Verbindung zu einem Server zu Google zur Darstellung der Karte aufgebaut. Durch die Verbindung kann Google erkennen, von welcher Website eine Anfrage gesendet wird und an welche IP-Adresse die Darstellung der Anfahrt übermittelt wird.

Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung hierzu kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch die Einstellungen in der Cookie-Verwaltung auf der Webseite für die Zukunft widerrufen.

_________________________

Die USA verfügen gegenwärtig nach Ansicht der Datenschutzaufsichtsbehörden allerdings nicht über ein angemessenes Datenschutzniveau. Es bestehen zwischen dem Anbieter und Google allerdings sogenannte Standardvertragsklauseln:

https://privacy.google.com/businesses/compliance/#!#gdpr

Jedoch sind dies privatrechtliche Vereinbarungen und haben daher keine direkte Auswirkungen auf die Zugriffsmöglichkeiten der Behörden in den USA.

_________________________

Die Nutzung von "Google Maps" und der über "Google Maps" erlangten Informationen erfolgt gemäß den Google-Nutzungsbedingungen sowie der zusätzlichen Geschäftsbedingungen für Google Maps.

Weitergehende Informationen, insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung, bietet Google unter den nachfolgenden Links an:

https://policies.google.com/privacy




Microsoft - Bing Ads

Diese Website setzt zum Remarketing und zur Abschlussverfolgung "Bing Ads" ein. "Bing Ads" ist ein Produkt der Firma Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA, nachfolgend "Microsoft" und nutz die sog. universelle Ereignisnachverfolgung (UEN).

Klickt der Nutzer auf eine vom Anbieter bei der Suchmaschine Bing geschalteten Anzeige, wird aufgrund der Einbindung der Trackingtechnologie von Microsoft ein Cookie auf dem Endgerät des Nutzers gespeichert. Diese sog. "Tracking-Cookies" verlieren nach 180 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifikation des Nutzers.

Besucht der Nutzer bestimmte Seiten der Website des Anbieters und das Cookie ist noch nicht abgelaufen, kann sowohl Microsoft als auch der Anbieter im Falle einer Einwilligung des Nutzers erkennen, dass der Nutzer auf eine der vom Anbieter bei Bing platzierten Anzeigen geklickt hat und zur Website des Anbieters weitergeleitet wurde.

Die mit Hilfe des "Tracking-Cookies" eingeholten Informationen dienen Microsoft dazu, Besuchs-Statistiken für den Anbieter zu erstellen. Der Anbieter erhält dadurch die Information über die Gesamtanzahl der Nutzer, die auf seine Anzeige geklickt haben und zudem, welche Seiten seiner Website vom jeweiligen Nutzer im Anschluss aufgerufen wurden. Der Anbieter bzw. andere über "Bing ADs" Werbende erhalten jedoch keinerlei Informationen, mit denen sich Nutzer persönlich identifizieren lassen.

Außerdem kann Microsoft unter Umständen durch so genanntes Cross-Device-Tracking das Nutzungsverhalten über mehrere Endgeräte hinweg verfolgen und ist dadurch in der Lage personalisierte Werbung geräteübergreifend einzublenden.

Sollte der Nutzer seine Einwilligung in Bezug auf diese Verarbeitung widersprechen wollen, so besteht die Möglichkeit, die Installation der Cookies durch eine entsprechende Einstellung in der Cookie-Verwaltung der Webseite wieder zu blockieren.

Zudem kann der Nutzer die personalisierte Werbung in seinem Microsoft-Account, falls vorhanden, unter http://choice.microsoft.com/de-de/opt-out ändern.

Nähere Informationen zu Bing Ads: https://help.bingads.microsoft.com/#apex/3/de/53056/2

Datenschutzbestimmungen von Microsoft: https://privacy.microsoft.com/de-de/privacystatement



Suchfunktion doofinder

Um den Nutzer schnelle und komfortable Suchmöglichkeiten anzubieten, setzt der Anbieter die Suchtechnologie des Anbieters „doofinder“ ein. „doofinder“ ist ein Produkt der DooFinder S.L., Madrid 28037, Rufino Gonzàlez 23 bis, 1° 1, Spanien.

Zur Ausführung der Suche und der Anzeige der Suchergebnisse nimmt der vom Nutzer verwendete Browser Verbindung zu den Servern von doofinder auf. Durch die Verbindung kann doofinder erkennen, von welcher Website eine Anfrage gesendet wird und an welche IP-Adresse die Darstellung der Suchergebnisse übermittelt wird.

Rechtgrundlage bezüglich dem Einsatz und der dadurch erfolgenden Datenverarbeitung ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Optimierung der Website.

Weitergehende Informationen bietet doofinder unter den nachfolgenden Links an:

https://www.doofinder.com/de/privacy-policy



Trusted Shops

Zur Anzeige unseres Trusted Shops Gütesiegels und der gegebenenfalls gesammelten Bewertungen sowie zum Angebot der Trusted Shops Produkte für Käufer nach einer Bestellung ist auf dieser Webseite das Trusted Shops Trustbadge eingebunden.

Dies dient der Wahrung unserer im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer optimalen Vermarktung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO. Das Trustbadge und die damit beworbenen Dienste sind ein Angebot der Trusted Shops GmbH, Subbelrather Str. 15C, 50823 Köln.

Bei dem Aufruf des Trustbadge speichert der Webserver automatisch ein sogenanntes Server-Logfile, das z.B. Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert. Diese Zugriffsdaten werden nicht ausgewertet und spätestens sieben Tagen nach Ende Ihres Seitenbesuchs automatisch überschrieben.

Weitere personenbezogene Daten werden lediglich an Trusted Shops übertragen, soweit Sie hierzu eingewilligt haben, sich nach Abschluss einer Bestellung für die Nutzung von Trusted Shops Produkten entscheiden oder sich bereits für die Nutzung registriert haben. In diesem Fall gilt die zwischen Ihnen und Trusted Shops getroffene vertragliche Vereinbarung.



Amazon Cloudfront

Der Anbieter setzt für die Abrufgeschwindigkeit, die Gestaltung und die Darstellung der angebotenen Inhalte das Content Delivery Network (CDN) „Cloudfront“ ein.

„Cloudfront“ ist ein Dienst der Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg, einem Tochterunternehmen der Amazon Web Services Inc., 410 Terry Avenue North, Seattle, WA 98109-5210.

Cloudfront stellt Duplikate von Daten einer Website auf verschiedenen weltweit verteilten Amazon Web Services (AWS) Servern zur Verfügung. Dadurch wird eine schnellere Ladezeit der Website, eine höhere Ausfallsicherheit und ein erhöhter Schutz vor Datenverlust erreicht. Dies führt dazu, dass der jeweilige Server, auch außerhalb der EU, die IP-Adresse des Nutzers erfasst.

Rechtsgrundlage für den Einsatz dieser Technologie ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität und der Ladegeschwindigkeit der Website.

Mehr über die Datenschutzmaßnahmen von Amazon Web Services, insbesondere in Bezug auf eine Verarbeitung außerhalb der EU:

https://aws.amazon.com/de/compliance/germany-data-protection/

Die aktuelle Datenschutzerklärung von Amazon Web Services:

https://aws.amazon.com/de/privacy/



Um die Ausführung des Java-Script Code insgesamt zu verhindern, kann der Nutzer einen Java-Script-Blocker installieren (z.B. www.noscript.net oder www.ghostery.com). Sollte der Nutzer die Ausführung des Java-Script Code verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen der Website vollumfänglich nutzbar sind.



Einbindung Social-Media

Der Anbieter setzt auf der Website eine Verlinkung auf die nachstehend aufgeführten sozialen Netzwerke ein.

Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität der Website.

Die Einbindung der Plugins erfolgt dabei über eine verlinkte Grafik. Erst durch einen klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.

Nach der Weiterleitung des Kunden werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuches des Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über einen „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss sich der Nutzer vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu konfigurieren.

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



Einbindung Produktinformationen über loadbee

Zur Darstellung der Produktinformationen nutzt der Anbieter „loadbee“. „loadbee“ ist ein Produkt der loadbee GmbH, Karlsruher Straße 3, 70771 Leinfelden-Echterdingen.

Ruft der Nutzer eine Produktseite auf, wird eine Verbindung zu den Servern von loadbee, zur Darstellung der gewünschten Produktinformationen, hergestellt. loadbee verarbeitet zur Darstellung der Produkte im Browser des Nutzers dessen IP-Adresse sowie Informationen dazu, welche von loadbee bereitgestellten Produktinformationen angezeigt werden. Nach dem Ende des Seitenbesuchs, wird die IP-Adresse gelöscht.

Der Einsatz von loadbee beruht auf dem berechtigten Interesse des Anbieters an einer optimalen Vermarktung seiner Angebote gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO.

Weitergehende Informationen bietet loadbee unter dem nachfolgenden Link an:

https://www.loadbee.com/datenschutzerklaerung/



_______________________________________________________________



B. Datenschutzrichtlinie für Social-Media-Auftritte

Zur Bewerbung unserer Produkte und Leistungen sowie zur Kommunikation mit Interessenten oder Kunden nutzen wir sog. Social-Media-Plattformen.

Nachstehende Ausführungen informieren Sie insbesondere über die Art, den Umfang, den Zweck, die Dauer und die Rechtsgrundlage der Verarbeitung von personenbezogenen Daten, wenn Sie eine unserer Firmenpräsentation auf einer Social-Media-Plattform besuchen oder darüber mit uns in Kontakt treten.

Als „Verarbeitung“ gilt die Erhebung, Nutzung, Weitergabe und/oder Speicherung. Als „personenbezogene Daten“ gelten nach der Datenschutzgrundverordnung (nachfolgend „DSGVO“) grundsätzlich alle Daten, mit denen eine natürliche Person identifiziert werden kann. Die genauen Definitionen der Begrifflichkeiten sind in Art. 4 DSGVO bestimmt.

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

- nachfolgend „Anbieter“ genannt -

mit dem nachfolgend jeweils genannten Plattformbetreiber gemeinsam i.S.d. Art. 26 DSGVO verantwortlich.



Facebook und Instagram

Auf der Social-Media-Plattform „facebook“ und „Instagram“ ist der Anbieter gemeinsam mit der

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

Bei dem Aufruf des Onlineauftrittes des Anbieters auf der Plattform „facebook“ and „Instagram“ werden von der Facebook Ireland Ltd. als Betreiberin beider Plattformen in der EU Daten des Nutzers (z.B. persönliche Informationen, IP-Adresse etc.) verarbeitet. Diese Daten des Nutzers dienen dem Anbieter zu statistischen Informationen über die Inanspruchnahme seiner Firmenpräsenz auf „facebook“ und „Instagram“.

Die Facebook Ireland Ltd. nutzt diese Daten insbesondere zu Marktforschungs- und Werbezwecken sowie zur Erstellung von Profilen der Nutzer. Anhand dieser Profile ist es der Facebook Ireland Ltd. beispielsweise möglich, die Nutzer innerhalb und außerhalb von „facebook“ und „Instagram“ interessenbezogen zu bewerben. Ist der Nutzer zum Zeitpunkt des Aufrufes in seinem Account auf „facebook“ oder „Instagram“ eingeloggt, kann die Facebook Ireland Ltd. zudem die Daten mit dem jeweiligen Nutzerkonto verknüpfen.

Im Falle einer Kontaktaufnahme des Nutzers mit dem Anbieter über „facebook“ oder „Instagram“ werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt. Die Daten des Nutzers werden beim Anbieter gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.

Zur Verarbeitung der Daten werden von der Facebook Ireland Ltd. ggf. auch Cookies gesetzt.

Sollte der Nutzer mit dieser Verarbeitung nicht einverstanden sein, so besteht die Möglichkeit, die Installation der Cookies durch eine entsprechende Einstellung des Browsers zu verhindern. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Bei Flash-Cookies lässt sich die Verarbeitung nicht über die Einstellungen des Browsers unterbinden, sondern durch die entsprechende Einstellung des Flash-Players. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen von facebook vollumfänglich nutzbar sind.

Näheres zu den Verarbeitungstätigkeiten, deren Unterbindung und zur Löschung der von der Facebook Ireland Ltd. verarbeiteten Daten finden sich in der Datenrichtlinie von „facebook“ und „Instagram“:

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
                    <span key={index} className="block mt-16 mb-8 first:mt-0">
                        <span className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white font-[family-name:var(--font-space-grotesk)] tracking-tight">
                            {renderLineContent(line)}
                        </span>
                        <div className="h-1.5 w-16 bg-primary-600 rounded-full mt-3" />
                    </span>
                );
            }

            if (isSubHeader) {
                return (
                    <span key={index} className="block mt-10 mb-5 font-black text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-[family-name:var(--font-space-grotesk)]">
                        {renderLineContent(line)}
                    </span>
                );
            }

            return <span key={index}>{renderLineContent(line)}{'\n'}</span>;
        });
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-700 font-[family-name:var(--font-inter)] relative scroll-smooth selection:bg-primary-500/30">
            {/* Reading Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[100] origin-left"
                style={{ scaleX }}
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

            <div className="relative pt-32 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    {/* Hero Header */}
                    <header className="mb-20 space-y-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-600/20 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-widest font-[family-name:var(--font-space-grotesk)]"
                        >
                            Rechtliche Bestimmungen
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 dark:text-white font-[family-name:var(--font-space-grotesk)] leading-[0.95] tracking-tighter"
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
                            <h5 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-white">
                                Noch Fragen zum Datenschutz?
                            </h5>
                            <p className="text-neutral-400 text-sm">
                                Kontaktieren Sie uns jederzeit per E-Mail für detaillierte Auskünfte.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:info@vendori.eu"
                                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black text-sm transition-all hover:scale-105 shadow-xl shadow-primary-600/20 active:scale-95 whitespace-nowrap"
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
