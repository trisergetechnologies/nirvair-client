'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Payment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive animation variants
  const slideInVariants = {
    hidden: { 
      opacity: isMobile ? 0 : 0.5, 
      x: isMobile ? -20 : -50 
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

  const floatImage = {
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

  const hoverArrow = {
    hover: {
      x: isMobile ? 3 : 5,
      transition: {
        type: "spring",
        stiffness: isMobile ? 400 : 300
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl pt-20 sm:pb-20 px-6">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12'>

        {/* Image Section */}
        <motion.div 
          className='col-span-6 flex justify-center relative'
          initial={{ opacity: 0, x: isMobile ? -30 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "0px 0px -20% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl"
            animate="float"
            variants={floatImage as any}
            whileHover={!isMobile ? { scale: 1.02 } : {}}
          >
            <Image 
              src="/assets/payment/nirvair-vision.jpg" 
              alt="payment" 
              width={600} 
              height={500}
              className="object-cover w-full h-auto"
              priority
            />
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-b from-electricblue/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            )}
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className='col-span-6 flex flex-col justify-center mb-16 md:mb-32'
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -20% 0px" }}
        >
          <motion.h2 
            variants={slideInVariants}
            className='text-midnightblue text-3xl sm:text-4xl xl:text-5xl font-bold text-center lg:text-start leading-tight'
          >
            Ihre Vision, Unsere Technologie, Gemeinsamer Erfolg
          </motion.h2>
          
          <motion.p
            variants={slideInVariants}
            className='text-black text-base md:text-lg font-normal text-center lg:text-start opacity-75 mt-4 md:mt-6 leading-relaxed'
            transition={{ delay: 0.1 }}
          >
            Bei uns stehen Ihre Ziele im Mittelpunkt. Mit maßgeschneiderten Technologielösungen entwickeln wir individuelle Strategien für Ihren Erfolg.
          </motion.p>

          <motion.div
            className="mt-6 md:mt-8 mx-auto lg:mx-0"
            variants={slideInVariants}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href={'/about-us'} 
              className="text-electricblue text-lg font-medium flex items-center gap-2 group"
            >
              <span>Mehr erfahren</span>
              <motion.div 
                variants={hoverArrow}
                whileHover={!isMobile ? "hover" : ""}
              >
                <ArrowRightIcon className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default Payment;