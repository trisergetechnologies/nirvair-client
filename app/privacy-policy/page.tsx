export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>

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
                nirvairgermany@gmail.com
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

          {/* Continue with other sections following the same pattern */}

          {/* Section 5 */}
          <section>
            <h2 className="font-semibold text-lg mb-4">5. Kontaktmöglichkeiten und Ihre Rechte</h2>
            
            <h3 className="font-semibold mt-4 mb-2">5.1 Ihre Rechte</h3>
            <p className="mb-4">
              Als Betroffener haben Sie folgende Rechte:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-4">
              <li>gemäß Art. 15 DSGVO das Recht, in dem dort bezeichneten Umfang Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
              {/* Add other list items */}
            </ol>

            <h3 className="font-semibold mt-6 mb-2">5.2 Kontaktmöglichkeiten</h3>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, 
              Einschränkung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen oder Widerspruch gegen eine bestimmte 
              Datenverwendung wenden Sie sich bitte direkt an uns über die Kontaktdaten in unserem Impressum.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <a href="/" className="hover:underline">
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}