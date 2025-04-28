'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Slower animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>About Nirvair - Our Story, Vision, and Values</title>
        <meta name="description" content="Learn about Nirvair's mission, values, and the team behind our innovative solutions." />
      </Head>
      
      <div className="py-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.div 
          className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-black py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div 
            className="container mx-auto px-6 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Über Nirvair
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Innovative Lösungen für ein besseres Morgen
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Our Story Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className="md:w-1/2 flex-shrink-0"
                variants={slideInLeft}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Unsere Geschichte</h2>
                <p className="text-gray-600 mb-4">
                Bei Nirvair sind wir leidenschaftlich daran interessiert, Technologien zu entwickeln, die Innovation vorantreiben und das Leben vereinfachen. Als zukunftsorientiertes Technologieunternehmen spezialisieren wir uns auf die Bereitstellung modernster Lösungen in den Bereichen Softwareentwicklung, digitale Transformation und IT-Beratung.
                </p>
                <p className="text-gray-600 mb-5">
                Unsere Mission ist es, Unternehmen mit skalierbarer, sicherer und intelligenter Technologie zu unterstützen – maßgeschneidert auf ihre individuellen Anforderungen. Mit einem Team kreativer Köpfe und Technologieexperten steht Nirvair an der Spitze des digitalen Zeitalters – verpflichtet zu Exzellenz, Integrität und Wirkung.
                </p>
                <p className="text-gray-600">
                Heute überschreiten wir weiterhin Grenzen und bleiben dabei unseren zentralen Werten treu: Integrität, Exzellenz, Kundenorientierung und Wertfokussierung.
                </p>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                variants={slideInRight}
              >
                <motion.div 
                  className="bg-gray-400 p-6 rounded-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.img 
                    src="/assets/aboutUs/office.jpg" 
                    alt="Nirvair office space" 
                    className="w-full h-auto rounded-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 0.4, duration: 1 }
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-translucentwhite py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8 }
              }}
              viewport={{ once: true }}
            >
              Unser Kern
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-blue p-8 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.9 }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.4 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="bg-white p-3 rounded-full mr-4"
                    whileHover={{ rotate: 20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-white">
                Unternehmen und Einzelpersonen durch innovative Technologielösungen zu befähigen, Komplexität zu vereinfachen, die Produktivität zu steigern und nachhaltiges Wachstum voranzutreiben.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-blue p-8 rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.9 }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.4 }
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="bg-white p-3 rounded-full mr-4"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 6,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-white">
                Eine globale Führungsrolle in unserem Bereich einzunehmen, anerkannt für unser Engagement für Exzellenz, Innovation und die Schaffung eines bedeutungsvollen Einflusses auf das Leben unserer Kunden und Gemeinschaften.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6 bg-gray-50 flex-shrink-0">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { duration: 1 }
              }}
              viewport={{ once: true }}
            >
              Unser Wert
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {[
                {
                  title: "Integrität",
                  description: "Wir führen unser Geschäft mit Ehrlichkeit und Transparenz und bauen Vertrauen zu allen Interessengruppen auf.",
                  icon: "M12 15l8-8m0 0h-8m8 0v8m-6-6a6 6 0 00-12 0"
                },
                {
                    title: "Innovation",
                    description: "Wir fördern Kreativität und kontinuierliche Verbesserung, um außergewöhnliche Lösungen zu liefern.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                  },
                  {
                    title: "Exzellenz",
                    description: "Wir streben in allem, was wir tun, nach den höchsten Standards und setzen Maßstäbe in unserer Branche.",
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  },
                  {
                    title: "Zusammenarbeit",
                    description: "Wir glauben an die Kraft von Teamarbeit und Partnerschaften, um größeren Erfolg zu erzielen.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  },
                  {
                    title: "Kundenorientierung",
                    description: "Wir hören zu, verstehen und liefern Lösungen, die auf die einzigartigen Bedürfnisse unserer Kunden zugeschnitten sind.",
                    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  },
                  {
                    title: "Nachhaltigkeit",
                    description: "Wir setzen uns für verantwortungsbewusste Geschäftspraktiken ein, die der Gesellschaft und der Umwelt zugutekommen.",
                    icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500"
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="bg-blue-100 p-2 rounded-full mr-4"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 px-6 bg-blue-600 text-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 1 }
          }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.2, duration: 0.8 }
              }}
            >
              Bereit, den Nirvair-Unterschied kennenzulernen?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.8 }
              }}
            >
              Schließen Sie sich Hunderten zufriedener Kunden an, die uns für innovative Lösungen vertrauen.
            </motion.p>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ 
                scale: 1,
                transition: { delay: 0.6, duration: 0.5 }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contactSection"><button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300">
                Kontaktieren Sie uns
              </button></a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}