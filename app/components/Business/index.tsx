'use client';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Business = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const floatImage = {
    float: {
      y: [-15, 15, -15],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

        {/* Text Content */}
        <motion.div 
          className='col-span-6 flex flex-col justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 
            variants={slideInVariants}
            transition={{ duration: 0.6 }}
            className='text-midnightblue text-4xl sm:text-5xl font-bold text-center lg:text-start lh-143'
          >
            Warum wir die richtige Wahl für Sie sind
          </motion.h2>
          
          <motion.h3
            variants={slideInVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'
          >
            Uns zu wählen bedeutet, mit einem Team zusammenzuarbeiten, das Ihre technologischen Herausforderungen in Chancen verwandelt. Wir liefern präzise entwickelte Lösungen, unübertroffenen Support und messbare Ergebnisse – denn Ihr Erfolg ist unser höchster Maßstab.
          </motion.h3>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 mx-auto lg:mx-0 flex flex-col items-center group"
          >
            <span className="text-electricblue text-lg font-medium mb-2">
              Jetzt kontaktieren
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownCircleIcon className="h-8 w-8 text-electricblue group-hover:text-blue-600 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className='col-span-6 flex justify-center mt-10 lg:mt-0'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <iframe src="https://lottie.host/embed/bb2ecf58-36db-4ff7-a44c-3e9bc1cfef77/3JlaYj1gAL.lottie"></iframe>
        </motion.div>

      </div>
    </div>
  )
}

export default Business;