export default function Datenschutzerklärung() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 border-b border-gray-200 pb-4">
        Datenschutzerklärung
      </h1>
      <p className="italic text-gray-500 mt-2">Gültig ab April 2025</p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-700">1. Erhobene Daten</h2>
          <p className="mt-2 text-gray-600">
            Wir können folgende grundlegende Informationen erfassen, wenn Sie unsere Website besuchen:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
            <li>Technische Daten (IP-Adresse, Browsertyp, Geräteinformationen)</li>
            <li>Nutzungsdaten (besuchte Seiten, Verweildauer)</li>
            <li>Kontaktinformationen, die Sie freiwillig angeben</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">2. Verwendung der Daten</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
            <li>Verbesserung und Wartung unserer Website</li>
            <li>Beantwortung von Anfragen und Supportleistungen</li>
            <li>Analyse der Websitenutzung zur Optimierung</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">3. Weitergabe von Daten</h2>
          <p className="mt-2 text-gray-600">
            Wir verkaufen oder teilen Ihre persönlichen Daten nicht mit Dritten, außer:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
            <li>Wenn gesetzlich vorgeschrieben</li>
            <li>An Dienstleister, die uns beim Betrieb der Website unterstützen</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">4. Cookies</h2>
          <p className="mt-2 text-gray-600">
            Wir verwenden essentielle Cookies für die Website-Funktionalität. Sie können Cookies in Ihren Browser-Einstellungen deaktivieren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">5. Ihre Rechte</h2>
          <p className="mt-2 text-gray-600">
            Sie können Auskunft über oder Löschung Ihrer persönlichen Daten verlangen, indem Sie uns kontaktieren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">6. Kontakt</h2>
          <p className="mt-2 text-gray-600">
            Bei Fragen zum Datenschutz kontaktieren Sie uns unter:<br />
            <span className="font-medium">Nirvair</span><br />
            Email: nirvairofficial@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">7. Änderungen dieser Richtlinie</h2>
          <p className="mt-2 text-gray-600">
            Wir können diese Richtlinie gelegentlich aktualisieren. Die aktualisierte Version wird hier veröffentlicht.
          </p>
        </section>
      </div>
    </div>
  );
}