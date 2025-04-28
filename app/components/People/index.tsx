'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const People = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        delayChildren: isMobile ? 0 : 0.3
      }
    }
  };

  const arrowBounce = {
    bounce: {
      x: isMobile ? [0, 3] : [0, 5, 0],
      transition: {
        duration: isMobile ? 1.2 : 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div id="product">
      <div className="mx-auto max-w-7xl px-6">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 lg:pt-32 lg:mt-20'>
          {/* Image Section */}
          <motion.div 
            className='col-span-6 flex justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -20% 0px" }}
            variants={slideInVariants}
          >
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl hover:shadow-xl transition-shadow">
              <Image 
                src="/assets/people/aboutus.png" 
                alt="about us" 
                width={1000} 
                height={805}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className='col-span-6 flex flex-col justify-center lg:pl-12 mt-10 lg:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -20% 0px" }}
            variants={staggerContainer}
          >
            <motion.h1 
              variants={slideInVariants}
              className='text-midnightblue text-3xl sm:text-4xl xl:text-5xl font-bold text-center lg:text-start leading-tight'
            >
              Technologie vereinfachen, Wirkung für die Welt verstärken.
            </motion.h1>
            
            <motion.p
              variants={slideInVariants}
              className='text-black text-base md:text-lg font-normal text-center lg:text-start opacity-75 mt-4 md:mt-6 leading-relaxed'
            >
              Nirvair ist ein zukunftsorientiertes Unternehmen für Softwareentwicklung und digitale Transformation, das sich der Aufgabe verschrieben hat, Ideen in wirkungsvolle Innovationen zu verwandeln.
            </motion.p>
            
            <motion.div 
              variants={slideInVariants}
              className="mt-6 md:mt-8"
            >
              <Link 
                href={'/about-us'} 
                className="text-electricblue text-lg font-medium flex gap-2 items-center mx-auto lg:mx-0 group"
              >
                <span>Mehr erfahren</span>
                <motion.span
                  animate="bounce"
                  variants={arrowBounce}
                >
                  <Image 
                    src="/assets/people/arrow-right.svg" 
                    alt="arrow-right" 
                    width={24} 
                    height={24}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default People;