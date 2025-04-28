'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const People = () => {
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div id="product">
      <div className="mx-auto max-w-7xl px-6">
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20'>
          <motion.div 
            className='col-span-6 flex justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInVariants}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src="/assets/people/aboutus.png" 
              alt="about us" 
              width={1000} 
              height={805} 
              className='rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300'
            />
          </motion.div>

          <motion.div 
            className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h1 
              variants={slideInVariants}
              className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'
            >
              Technologie vereinfachen, Wirkung für die Welt verstärken.
            </motion.h1>
            
            <motion.h3 
              variants={slideInVariants}
              className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nirvair ist ein zukunftsorientiertes Unternehmen für Softwareentwicklung und digitale Transformation, das sich der Aufgabe verschrieben hat, Ideen in wirkungsvolle Innovationen zu verwandeln.
            </motion.h3>
            
            <motion.div variants={slideInVariants}>
              <Link 
                href={'/about-us'} 
                className="text-electricblue text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0 hover:gap-3 transition-all duration-300"
              >
                Mehr erfahren 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
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