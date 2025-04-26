'use client';
import { BeakerIcon, ChartBarIcon, CloudArrowUpIcon, CommandLineIcon, CpuChipIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

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
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold text-black text-center my-10"
        >
          Unsere Leistungen und Kompetenzen
        </motion.h3>

        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-black opacity-60 text-lg font-normal text-center"
        >
          Bei Nirvair sind wir auf die Entwicklung wirkungsvoller digitaler Produkte...
        </motion.h5>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Aboutdata.map((item, i) => (
            <motion.div
              key={i}
              variants={slideInVariants}
              className="bg-white rounded-2xl p-5 featureShadow hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="mb-2"
                variants={floatAnimation}
                animate="float"
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-black mt-5">
                {item.heading}
              </h3>
              
              <h4 className="text-lg font-normal text-black opacity-50 my-2">
                {item.paragraph}
              </h4>

              <div className="absolute inset-0 bg-gradient-to-b from-electricblue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;