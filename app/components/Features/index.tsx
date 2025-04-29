'use client';
import { BeakerIcon, ChartBarIcon, CloudArrowUpIcon, CommandLineIcon, CpuChipIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface datatype {
  icon: React.ReactNode;
  heading: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    icon: <CommandLineIcon className="h-14 w-14 text-electricblue" />,
    heading: "Software Product",
    paragraph: "Bereitstellung und Umsetzung von End-to-End-Entwicklungslösungen...",
  },
  {
    icon: <ChartBarIcon className="h-14 w-14 text-electricblue" />,
    heading: "Digital Marketing",
    paragraph: "Umfassende Digitalmarketing-Dienstleistungen zur Steigerung...",
  },
  {
    icon: <CloudArrowUpIcon className="h-14 w-14 text-electricblue" />,
    heading: "Cloud Solutions",
    paragraph: "Robuste Cloud-Produktdienste mit skalierbarer Infrastruktur...",
  },
  {
    icon: <CpuChipIcon className="h-14 w-14 text-electricblue" />,
    heading: "Data Driven Solutions",
    paragraph: "Datengetriebene Lösungen, die Unternehmen mit umsetzbaren Erkenntnissen...",
  },
  {
    icon: <BeakerIcon className="h-14 w-14 text-electricblue" />,
    heading: "AI|ML Solutions",
    paragraph: "AI/ML-Lösungsdienste bieten intelligente Automatisierung...",
  },
  {
    icon: <LockClosedIcon className="h-14 w-14 text-electricblue" />,
    heading: "Support & Security",
    paragraph: "Umfassende Sicherheits- und Support-Dienste...",
  },
];

const Features = () => {
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

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: isMobile ? 0 : 0.2
      }
    }
  };

  const floatAnimation = {
    float: {
      y: isMobile ? [0, 5] : [-8, 8],
      transition: {
        duration: isMobile ? 3 : 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "0px 0px -20% 0px" }}
          className="text-4xl sm:text-5xl font-semibold text-black text-center my-10"
        >
          Unsere Leistungen und Kompetenzen
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -20% 0px" }}
          className="text-black opacity-60 text-lg font-normal text-center"
        >
          Bei Nirvair sind wir auf die Entwicklung wirkungsvoller digitaler Produkte...
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -20% 0px", amount: 0.1 }}
        >
          {Aboutdata.map((item, i) => (
            <motion.div
              key={i}
              variants={slideInVariants}
              className="bg-white rounded-2xl p-5 featureShadow hover:shadow-xl transition-shadow duration-300 group"
              whileHover={!isMobile ? { y: -8 } : {}}
            >
              <motion.div
                className="mb-2"
                animate="float"
                variants={floatAnimation as any}
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-black mt-4">
                {item.heading}
              </h3>
              
              <p className="text-lg font-normal text-black opacity-50 mt-2">
                {item.paragraph}
              </p>

              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-b from-electricblue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;