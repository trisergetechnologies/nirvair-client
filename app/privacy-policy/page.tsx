export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 sm:p-8 md:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Verantwortlicher */}
            <section>
              <h2 className="font-semibold text-lg mb-4">Verantwortlicher für die Datenverarbeitung ist:</h2>
              <p className="mb-2">
                Gurmeet Kaur Soni<br />
                Peter-Cornelius-Straße 5<br />
                55268 Nieder-Olm<br />
                Deutschland<br />
                <a href="mailto:nirvairgermany@gmail.com" className="text-blue-600 hover:underline">
                  info@nirvair.de
                </a>
              </p>
            </section>

            {/* Einleitung */}
            <section>
              <p className="mb-6">
                Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. 
                Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="font-semibold text-lg mb-4">1. Zugriffsdaten und Hosting</h2>
              <p className="mb-4">
                Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Aufruf einer Webseite 
                speichert der Webserver lediglich automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der angeforderten Datei, 
                Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) 
                enthält und den Abruf dokumentiert. Diese Zugriffsdaten werden ausschließlich zum Zwecke der Sicherstellung eines 
                störungsfreien Betriebs der Seite sowie der Verbesserung unseres Angebots ausgewertet. Dies dient der Wahrung unserer 
                im Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an einer korrekten Darstellung unseres 
                Angebots gemäß <strong>Art. 6 Abs. 1 S. 1 lit. f DSGVO</strong>. Alle Zugriffsdaten werden spätestens einen Monat nach 
                Ende Ihres Seitenbesuchs gelöscht.
              </p>

              <h3 className="font-semibold mt-6 mb-2">Hosting</h3>
              <p className="mb-4">
                Die Dienste zum Hosting und zur Darstellung der Webseite werden teilweise durch unsere Dienstleister im Rahmen einer 
                Verarbeitung in unserem Auftrag erbracht. Soweit im Rahmen der vorliegenden Datenschutzerklärung nichts anderes erläutert 
                wird, werden alle Zugriffsdaten sowie alle Daten, die in dafür vorgesehenen Formularen auf dieser Webseite erhoben werden, 
                auf ihren Servern verarbeitet. Bei Fragen zu unseren Dienstleistern und der Grundlage unserer Zusammenarbeit mit ihnen 
                wenden Sie sich bitte an die in dieser Datenschutzerklärung beschriebenen Kontaktmöglichkeit.
              </p>

              <p className="mb-4">
                Unsere Dienstleister sitzen und/oder verwenden Server in diesen Ländern: Brasilien, Indien<br />
                Für diese Länder liegt kein Angemessenheitsbeschluss der Europäischen Kommission vor. Unsere Zusammenarbeit mit ihnen 
                stützt sich auf diese Garantien: Standarddatenschutzklauseln der Europäischen Kommission
              </p>

              <p>
                Unsere Dienstleister sitzen und/oder verwenden Server in folgenden Ländern, für die die Europäische Kommission durch 
                Beschluss ein angemessenes Datenschutzniveau festgestellt hat: Vereinigtes Königreich
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-semibold text-lg mb-4">5. Kontaktmöglichkeiten und Ihre Rechte</h2>
              
              <h3 className="font-semibold mt-4 mb-2">5.1 Ihre Rechte</h3>
              <p className="mb-4">
                Als Betroffener haben Sie folgende Rechte:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-4">
                <li>gemäß Art. 15 DSGVO das Recht, in dem dort bezeichneten Umfang Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 16 DSGVO das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 17 DSGVO das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die weitere Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information; zur Erfüllung einer rechtlichen Verpflichtung; aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li>
                <li>gemäß Art. 18 DSGVO das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird; die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen; wir die Daten nicht mehr benötigen, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;</li>
                <li>gemäß Art. 20 DSGVO das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                <li>gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.</li>
              </ol>

              <h3 className="font-semibold mt-6 mb-2">5.2 Kontaktmöglichkeiten</h3>
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, 
                Einschränkung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen oder Widerspruch gegen eine bestimmte 
                Datenverwendung wenden Sie sich bitte direkt an uns über die Kontaktdaten in unserem Impressum.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <a 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}