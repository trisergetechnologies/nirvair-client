'use client';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {
  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
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
    <div className="mx-auto max-w-7xl pt-20 sm:pb-20 px-6">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

        {/* Image Section */}
        <motion.div 
          className='col-span-6 flex justify-center relative group'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all"
            variants={floatImage}
            animate="float"
            whileHover={{ scale: 1.02 }}
            style={{ lineHeight: 0 }}
          >
            <Image 
              src="/assets/payment/nirvair-vision.jpg" 
              alt="payment" 
              width={600} 
              height={500}
              className="object-cover w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-electricblue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className='col-span-6 flex flex-col justify-center mb-32'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3 
              } 
            }
          }}
        >
          <motion.h2 
            variants={slideInVariants}
            className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'
          >
            Ihre Vision, Unsere Technologie, Gemeinsamer Erfolg
          </motion.h2>
          
          <motion.h3
            variants={slideInVariants}
            className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'
            transition={{ delay: 0.2 }}
          >
            Bei uns stehen Ihre Ziele im Mittelpunkt. Mit maßgeschneiderten Technologielösungen entwickeln wir individuelle Strategien für Ihren Erfolg. Von der Beratung bis zur Umsetzung begleiten wir Sie mit Expertise und Innovation – für messbare Ergebnisse.
          </motion.h3>

          <motion.div
            whileHover="hover"
            className="pt-4 mx-auto lg:mx-0"
          >
            <Link 
              href={'/about-us'} 
              className="text-electricblue text-lg font-medium flex gap-2 items-center"
            >
              <span>Mehr erfahren</span>
              <motion.div variants={hoverArrow}>
                <ArrowRightIcon className="h-6 w-6 transition-colors hover:text-blue-600" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default Payment;