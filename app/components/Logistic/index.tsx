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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Warehouse Woes?</span> We've Got Your Back!
          </h2>
          
          <div className="space-y-3 ">
            {[
              "Losing track of inventory across multiple locations?",
              "Wasting hours on manual data entry and reporting?",
              "Struggling with inefficient picking routes?",
              "Need real-time visibility but don't know where to start?"
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
        className="grid grid-cols-1 lg:grid-cols-12 gap-20"
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
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="text-blue-600">Smart Logistics</span> - Your Warehouse Revolution
          </motion.h2>

          <motion.p 
            variants={slideInVariants}
            className="text-lg text-gray-800 mb-8"
          >
            Transformieren Sie Ihr Lager mit der KI-gesteuerten SmartLogiX-Lösung. Echtzeit-Tracking, automatisierte Workflows und Predictive Analytics optimieren Bestände, senken Kosten und steigern Effizienz. Zukunftssichere Logistik – intelligenter, schneller, nahtlos.
          </motion.p>

          {/* <div className="space-y-6">
            {[
              { 
                title: "Real-Time Inventory", 
                desc: "Track every SKU across all locations with 99.9% accuracy",
                icon: "📊"
              },
              { 
                title: "AI Optimization", 
                desc: "Reduce picking time by 40% with smart route algorithms",
                icon: "🤖"
              },
              { 
                title: "Seamless Integration", 
                desc: "Works with your existing ERP and shipping systems",
                icon: "🔄"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                variants={slideInVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            whileHover="hover"
            className="mt-8"
            variants={slideInVariants}
          >
            {/* <button className="px-8 py-3 bg-blue-600 text-black rounded-lg flex items-center gap-2 group">
              <span>Request Demo</span>
              <motion.div variants={hoverArrow}>
                <ArrowRightIcon className="h-5 w-5" />
              </motion.div>
            </button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogisticsSolution;