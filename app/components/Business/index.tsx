'use client';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Business = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Responsive animation variants
  const slideInVariants = {
    hidden: { 
      opacity: isMobile ? 0 : 0.5, 
      x: isMobile ? -20 : -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    float: {
      y: isMobile ? [0, 8] : [-12, 12],
      transition: {
        duration: isMobile ? 4 : 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  const arrowBounce = {
    bounce: {
      y: isMobile ? [0, 6] : [0, 10, 0],
      transition: {
        duration: isMobile ? 1.2 : 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12'>

        {/* Text Content */}
        <motion.div 
          className='col-span-6 flex flex-col justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -20% 0px" }}
        >
          <motion.h2 
            variants={slideInVariants}
            className='text-midnightblue text-3xl sm:text-4xl xl:text-5xl font-bold text-center lg:text-start leading-tight'
          >
            Warum wir die richtige Wahl für Sie sind
          </motion.h2>
          
          <motion.p
            variants={slideInVariants}
            className='text-black text-base md:text-lg font-normal text-center lg:text-start opacity-75 mt-4 md:mt-6 leading-relaxed'
            transition={{ delay: 0.1 }}
          >
            Uns zu wählen bedeutet, mit einem Team zusammenzuarbeiten, das Ihre technologischen Herausforderungen in Chancen verwandelt.
          </motion.p>

          <motion.button
            onClick={scrollToContact}
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            className="mt-6 mx-auto lg:mx-0 flex flex-col items-center group"
          >
            <span className="text-electricblue text-lg font-medium mb-2">
              Jetzt kontaktieren
            </span>
            <motion.div
              animate="bounce"
              variants={arrowBounce}
            >
              <ArrowDownCircleIcon className="h-8 w-8 text-electricblue md:group-hover:text-blue-600 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Animation Section */}
        <motion.div 
          className='col-span-6 flex justify-center mt-10 lg:mt-0'
          initial={{ opacity: 0, x: isMobile ? 30 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "0px 0px -20% 0px" }}
          transition={{ duration: 0.6 }}
        >
          {!isMobile && <motion.div 
            className="w-full max-w-[500px]"
            animate="float"
            variants={floatAnimation}
          >
            <iframe 
              src="https://lottie.host/embed/bb2ecf58-36db-4ff7-a44c-3e9bc1cfef77/3JlaYj1gAL.lottie"
              className="w-full h-auto aspect-square rounded-lg md:rounded-xl shadow-md md:shadow-xl"
            />
          </motion.div>}
        </motion.div>

      </div>
    </div>
  )
}

export default Business;