import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/features/time.svg",
    heading: "Software Product",
    paragraph:
      "Bereitstellung und Umsetzung von End-to-End-Entwicklungslösungen, die Unternehmen mit innovativen, skalierbaren und hochwertigen digitalen Produkten stärken.",
  },
  {
    imgSrc: "/assets/features/signal.svg",
    heading: "Digital Marketing",
    paragraph:
      "Umfassende Digitalmarketing-Dienstleistungen zur Steigerung von Markenbekanntheit, Engagement und Wachstum durch SEO, Social Media, Inhalte, Analysen und performancebasierte Strategien.",
  },
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "Cloud Solutions",
    paragraph:
      "Robust cloud product services offering scalable infrastructure, secure storage, seamless integration, and enhanced performance to drive business efficiency and innovation.",
  },
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "Data Driven Solutions",
    paragraph:
      "Datengetriebene Lösungen, die Unternehmen mit umsetzbaren Erkenntnissen, fortschrittlicher Analytik, KI-Integration und intelligenter Entscheidungsfindung für optimiertes Wachstum und Leistung stärken.",
  },
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "AI|ML Solutions",
    paragraph:
      "AI/ML-Lösungsdienste bieten intelligente Automatisierung, prädiktive Analytik und individuelle Modellentwicklung zur Förderung von Innovation, Effizienz und smarteren Geschäftsentscheidungen.",
  },
  {
    imgSrc: "/assets/features/dollar.svg",
    heading: "Support & Security",
    paragraph:
      "Umfassende Sicherheits- und Support-Dienste, die Datenschutz, Systemzuverlässigkeit, kontinuierliche Überwachung und fachkundige Unterstützung für reibungslose und sichere Geschäftsabläufe gewährleisten.",
  },
];

const Features = () => {
  return (
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
        Unsere Leistungen und Kompetenzen
        </h3>
        <h5 className="text-black opacity-60 text-lg font-normal text-center">
        Bei Nirvair sind wir auf die Entwicklung wirkungsvoller digitaler Produkte in einer Vielzahl von Technologiebereichen spezialisiert. Unsere bereichsübergreifende Expertise garantiert skalierbare, innovative und zukunftssichere Lösungen, die auf Ihre Ziele zugeschnitten sind.
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {Aboutdata.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 featureShadow">
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={55}
                height={55}
                className="mb-2"
              />
              <h3 className="text-2xl font-semibold text-black mt-5">
                {item.heading}
              </h3>
              <h4 className="text-lg font-normal text-black opacity-50 my-2">
                {item.paragraph}
              </h4>
              <Link
                href={"/"}
                className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2"
              >
                { /*Learn more{" "} 
                <Image
                  src="/assets/people/arrow-right.svg"
                  alt="arrow-right"
                  width={24}
                  height={24}
                />
                 */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
