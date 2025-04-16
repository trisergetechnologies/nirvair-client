"use client"
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [isGerman, setIsGerman] = useState(true);

  const toggleLanguage = () => {
    setIsGerman((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-black">
      {/* Translate Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={toggleLanguage}
          className="bg-electricblue text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-blue-600 transition"
        >
          {isGerman ? 'English anzeigen' : 'Deutsch anzeigen'}
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6">
        {isGerman ? 'Datenschutzerklärung' : 'Privacy Policy'}
      </h1>

      <p className="mb-6 opacity-75">
        {isGerman ? 'Gültig ab: [Datum einfügen]' : 'Effective Date: [Insert Date]'}
      </p>

      {/** SECTION 1 **/}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {isGerman ? '1. Verantwortliche Stelle' : '1. Data Controller'}
        </h2>
        <p className="opacity-75">
          {isGerman ? (
            <>
              Die verantwortliche Stelle im Sinne des Datenschutzrechts ist:
              <br />[Ihr Firmenname]<br />[Firmenadresse]<br />[Stadt, Postleitzahl]<br />[E-Mail-Adresse]<br />[Telefonnummer]
            </>
          ) : (
            <>
              The data controller for the purposes of data protection law is:
              <br />[Your Company Name]<br />[Company Address]<br />[City, Postal Code]<br />[Email Address]<br />[Phone Number]
            </>
          )}
        </p>
      </section>

      {/** SECTION 2 **/}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {isGerman ? '2. Erhebung personenbezogener Daten' : '2. Collection of Personal Data'}
        </h2>
        <ul className="list-disc list-inside opacity-75">
          {isGerman ? (
            <>
              <li><strong>Technische Daten:</strong> IP-Adressen, Browsertyp, Betriebssystem usw.</li>
              <li><strong>Kontaktdaten:</strong> Name, E-Mail-Adresse und Informationen, die Sie uns senden.</li>
              <li><strong>Nutzungsdaten:</strong> Informationen zur Nutzung der Website.</li>
            </>
          ) : (
            <>
              <li><strong>Technical Data:</strong> IP addresses, browser type, operating system, etc.</li>
              <li><strong>Contact Data:</strong> Name, email address, and message contents.</li>
              <li><strong>Usage Data:</strong> Information about how the website is used.</li>
            </>
          )}
        </ul>
      </section>

      {/** SECTION 3 - 12 **/}
      {[...Array(10)].map((_, i) => (
        <section className="mb-8" key={i}>
          <h2 className="text-xl font-semibold mb-2">
            {isGerman ? `Abschnitt ${i + 3}` : `Section ${i + 3}`}
          </h2>
          <p className="opacity-75">
            {isGerman
              ? 'Deutscher Beispieltext für Abschnitt ' + (i + 3) + '.'
              : 'English sample text for section ' + (i + 3) + '.'}
          </p>
        </section>
      ))}

      {/** CONTACT SECTION AGAIN (Section 12) **/}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {isGerman ? '12. Kontakt' : '12. Contact Us'}
        </h2>
        <p className="opacity-75">
          {isGerman ? (
            <>
              Wenn Sie Fragen oder Bedenken zu dieser Datenschutzerklärung oder der Verarbeitung Ihrer personenbezogenen Daten haben, kontaktieren Sie uns bitte unter:<br />
              [Ihr Firmenname]<br />[Firmenadresse]<br />[E-Mail-Adresse]<br />[Telefonnummer]
            </>
          ) : (
            <>
              If you have any questions or concerns regarding this Privacy Policy or how we handle your personal data, please contact us at:<br />
              [Your Company Name]<br />[Company Address]<br />[Email Address]<br />[Phone Number]
            </>
          )}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
