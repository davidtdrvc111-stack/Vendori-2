'use client';

import React from 'react';
import { StickyHeader } from '@/sections/sticky_header';
import { FooterSection } from '@/sections/footer_section';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { motion, useScroll, useSpring } from 'framer-motion';

export function DatenschutzContent() {
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

Die „Session"-Cookies werden gelöscht, wenn der Nutzer seinen Browser schließt. Die "Persistente"-Cookies werden automatisiert nach 12 Monaten gelöscht. Diese Frist ist je nach Cookie unterschiedlich, überschreitet jedoch nicht eine Frist von 12 Monaten.

b) Beseitigungsmöglichkeit

Der Nutzer kann die Installation der Cookies durch eine entsprechende Einstellung des Browsers verhindern oder einschränken. Bereits gespeicherte Cookies können ebenfalls jederzeit gelöscht werden. Die Einstellungen hierzu sind vom jeweiligen Browser abhängig. Sollte der Nutzer die Installation der Cookies verhindern oder einschränken, kann dies dazu führen, dass nicht sämtliche Funktionen der Website vollumfänglich nutzbar sind.

Kontaktanfragen

Im Falle einer Kontaktaufnahme des Nutzers werden die bei dieser Gelegenheit eingegebenen personenbezogenen Daten des Nutzers zur Bearbeitung der Anfrage genutzt.

Dient die Kontaktanfrage der Erfüllung eines Vertrages oder der Durchführung vorvertraglicher Maßnahmen, wie beispielsweise eine Preisanfrage, so ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO.

Die Daten des Nutzers werden gelöscht, sofern die Anfrage des Nutzers abschließend beantwortet wurde und keine gesetzlichen Aufbewahrungspflichten, wie z.B. bei einer anschließenden Vertragsabwicklung, entgegenstehen.

Rechtsgrundlage kann auch eine Einwilligung des Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO sein.

Eine erteilte Einwilligung für die Kontaktanfrage kann der Nutzer nach Art. 7 Abs. 3 DSGVO jederzeit durch eine Mitteilung an den Anbieter widerrufen. Die im Zusammenhang verarbeiteten Daten werden gelöscht, sobald ihre Verarbeitung nicht mehr erforderlich ist.

Amazon Cloudfront

Der Anbieter setzt für die Abrufgeschwindigkeit, die Gestaltung und die Darstellung der angebotenen Inhalte das Content Delivery Network (CDN) „Cloudfront" ein.

„Cloudfront" ist ein Dienst der Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg, einem Tochterunternehmen der Amazon Web Services Inc., 410 Terry Avenue North, Seattle, WA 98109-5210.

Cloudfront stellt Duplikate von Daten einer Website auf verschiedenen weltweit verteilten Amazon Web Services (AWS) Servern zur Verfügung. Dadurch wird eine schnellere Ladezeit der Website, eine höhere Ausfallsicherheit und ein erhöhter Schutz vor Datenverlust erreicht. Dies führt dazu, dass der jeweilige Server, auch außerhalb der EU, die IP-Adresse des Nutzers erfasst.

Rechtsgrundlage für den Einsatz dieser Technologie ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität und der Ladegeschwindigkeit der Website.

Mehr über die Datenschutzmaßnahmen von Amazon Web Services, insbesondere in Bezug auf eine Verarbeitung außerhalb der EU:

https://aws.amazon.com/de/compliance/germany-data-protection/

Die aktuelle Datenschutzerklärung von Amazon Web Services:

https://aws.amazon.com/de/privacy/

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
            <BreadcrumbJsonLd items={[{ name: 'Datenschutz', url: 'https://vendori.eu/datenschutz' }]} />
            <Breadcrumb items={[{ label: 'Datenschutzerklärung' }]} />

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
                                href="mailto:info@vendori.eu"
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
