'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LogisticsSolution = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive animation variants
  const slideInVariants = {
    hidden: { opacity: isMobile ? 0 : 0.5, y: isMobile ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isMobile ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    float: {
      y: isMobile ? [0, 5] : [-8, 8],
      transition: {
        duration: isMobile ? 4 : 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1: Problem Statement */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-24 md:mb-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px 0px -20% 0px", amount: 0.1 }}
      >
        <motion.div 
          className="col-span-6 flex flex-col justify-center"
          variants={slideInVariants}
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-midnightblue mb-6">
            <span className="text-blue-600">Probleme im Lager?</span> Wir sind für Sie da!
          </h2>
          
          <div className="space-y-3">
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
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex-shrink-0 mt-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                </div>
                <p className="font-medium text-base md:text-lg text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="col-span-6 relative"
          variants={slideInVariants}
          transition={{ delay: 0.2 }}
        >
          <div className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
            <Image 
              src="/assets/logistics/warehouse.jpg" 
              alt="Warehouse challenges" 
              width={600} 
              height={500}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Section 2: Solution Showcase */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px 0px -20% 0px", amount: 0.1 }}
      >
        <motion.div 
          className="col-span-6 order-last lg:order-first relative"
          variants={slideInVariants}
        >
          <motion.div 
            className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl"
            animate="float"
            variants={floatAnimation}
          >
            <Image 
              src="/assets/logistics/logistic.jpg" 
              alt="Logistics solution" 
              width={600} 
              height={500}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="col-span-6 flex flex-col justify-center"
          variants={slideInVariants}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-midnightblue mb-6">
            <span className="text-midnightblue">Smarte Logistik</span> - Revolutionieren Sie Ihr Lager!
          </h2>

          <p className="text-base md:text-lg text-gray-800 mb-6 md:mb-8">
            Transformieren Sie Ihr Lager mit der KI-gesteuerten SmartLogiX-Lösung. Echtzeit-Tracking, automatisierte Workflows und Predictive Analytics optimieren Bestände, senken Kosten und steigern Effizienz. Zukunftssichere Logistik – intelligenter, schneller, nahtlos.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogisticsSolution;