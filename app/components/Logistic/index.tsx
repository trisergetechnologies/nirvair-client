'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LogisticsSolution = () => {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const floatAnimation = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hoverArrow = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1: Problem Statement */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { 
            transition: { staggerChildren: 0.2 } 
          }
        }}
      >
        <motion.div 
          className="col-span-6 flex flex-col justify-center"
          variants={slideInVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-midnightblue mb-6">
            <span className="text-blue-600">Probleme im Lager?</span> Wir sind für Sie da!
          </h2>
          
          <div className="space-y-3 ">
            {[
              "Verlieren Sie den Überblick über Ihren Lagerbestand an mehreren Standorten?",
              "Verschwenden Sie Stunden mit manueller Dateneingabe und Berichterstattung?",
              "Kämpfen Sie mit ineffizienten Kommissionierwegen?",
              "Brauchen Sie Echtzeit-Transparenz, wissen aber nicht, wo Sie anfangen sollen?"
            ].map((text, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-0"
                variants={slideInVariants}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
                <p className="font-medium text-lg text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="col-span-6 relative"
          variants={floatAnimation}
          animate="float"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/logistics/warehouse.jpg" 
              alt="Warehouse challenges" 
              width={600} 
              height={500}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Section 2: Solution Showcase */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="col-span-6 order-last lg:order-first relative"
          variants={floatAnimation}
          animate="float"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/logistics/logistic.jpg" 
              alt="Logistics solution" 
              width={600} 
              height={500}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
          </div>
        </motion.div>

        <motion.div 
          className="col-span-6 flex flex-col justify-center"
          variants={{
            visible: { 
              transition: { staggerChildren: 0.2 } 
            }
          }}
        >
          <motion.h2 
            variants={slideInVariants}
            className="text-4xl sm:text-5xl font-bold text-midnightblue mb-6"
          >
            <span className="text-midnightblue">Smarte Logistik</span> - Revolutionieren Sie Ihr Lager!
          </motion.h2>

          <motion.p 
            variants={slideInVariants}
            className="text-lg text-gray-800 mb-8"
          >
            Transformieren Sie Ihr Lager mit der KI-gesteuerten SmartLogiX-Lösung. Echtzeit-Tracking, automatisierte Workflows und Predictive Analytics optimieren Bestände, senken Kosten und steigern Effizienz. Zukunftssichere Logistik – intelligenter, schneller, nahtlos.
          </motion.p>

          <motion.div
            whileHover="hover"
            className="mt-8"
            variants={slideInVariants}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogisticsSolution;