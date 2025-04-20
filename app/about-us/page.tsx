import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
    <div>
      <Head>
        <title>About Nirvair - Our Story, Vision, and Values</title>
        <meta name="description" content="Learn about Nirvair's mission, values, and the team behind our innovative solutions." />
      </Head>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-black py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Über Nirvair</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Innovative Lösungen für ein besseres Morgen
            </p>
          </div>
        </div>
        
        {/* Our Story Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex-shrink-0">
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
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-400 p-6 rounded-lg shadow-lg">
                  <img 
                    src="/assets/aboutUs/office.jpg" 
                    alt="Nirvair office space" 
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-translucentwhite py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Unser Kern</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-white">
                Unternehmen und Einzelpersonen durch innovative Technologielösungen zu befähigen, Komplexität zu vereinfachen, die Produktivität zu steigern und nachhaltiges Wachstum voranzutreiben.
                </p>
              </div>
              
              <div className="bg-blue p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-white">
                Eine globale Führungsrolle in unserem Bereich einzunehmen, anerkannt für unser Engagement für Exzellenz, Innovation und die Schaffung eines bedeutungsvollen Einflusses auf das Leben unserer Kunden und Gemeinschaften.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6 bg-gray-50 flex-shrink-0">
          <div className="container mx-auto max-w-6xl " >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Unser Wert</h2>
            
            <div className="grid md:grid-cols-3 gap-8 ">
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ">
                  <div className="flex items-center mb-4 ">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 ">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              The visionary minds driving Nirvair's success and innovation forward.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  position: "Founder & CEO",
                  bio: "With over 15 years of industry experience, Rahul founded Nirvair with a vision to revolutionize the sector.",
                  img: "/images/team/rahul-sharma.jpg"
                },
                {
                  name: "Priya Patel",
                  position: "Chief Technology Officer",
                  bio: "Technology evangelist with expertise in building scalable, secure systems for global enterprises.",
                  img: "/images/team/priya-patel.jpg"
                },
                {
                  name: "Arjun Mehta",
                  position: "Chief Operations Officer",
                  bio: "Operations specialist focused on delivering excellence through streamlined processes and team empowerment.",
                  img: "/images/team/arjun-mehta.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-600 text-black">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Bereit, den Nirvair-Unterschied kennenzulernen?</h2>
            <p className="text-xl mb-8">
            Schließen Sie sich Hunderten zufriedener Kunden an, die uns für innovative Lösungen vertrauen.
            </p>
            <a href='#contactSection'><button  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors duration-300">
            Kontaktieren Sie uns
            </button></a>
          </div>
        </section>
      </div>
    </>
  );
}