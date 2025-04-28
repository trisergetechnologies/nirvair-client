export default function ImpressumPage() {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Impressum</h1>
  
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-semibold mb-2">Nirvair</h2>
              <p className="whitespace-pre-wrap">
                Gurmeet Kaur Soni<br />
                Peter-Cornelius-Straße 5<br />
                55268 Nieder-Olm<br />
                Deutschland
              </p>
            </div>
  
            <div className="pt-4">
              <p>
                Telefon: <a href="tel:+4917645989154" className="text-blue-600 hover:underline">017645989154</a><br />
                Mail: <a href="mailto:nirvairgermany@gmail.com" className="text-blue-600 hover:underline">nirvairgermany@gmail.com</a>
              </p>
            </div>
  
            <div className="pt-6 mt-6 border-t border-gray-200">
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, 
                die Sie hier finden: {' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>.
              </p>
              <p>
                Wichtiger Hinweis: Die Plattform zur Online-Streitbeilegung (OS) wird zum 20.7.2025 endgültig eingestellt. 
                Die Einreichung von Beschwerden auf der OS-Plattform wird daher bereits am 20.3.2025 eingestellt. 
                Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht 
                verpflichtet und nicht bereit.
              </p>
            </div>
          </div>
  
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
            <a href="/" className="hover:underline">
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
        </div>
      </main>
    );
  }