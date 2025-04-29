import { motion } from 'framer-motion';

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.3, 0.1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3,
        repeat: Infinity,
        repeatType: 'mirror',
        repeatDelay: 0.5
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className='bg-header pt-10'>
      <div className="mx-auto max-w-7xl sm:pb-24 px-6 pt-[85px]">
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <motion.div 
            className='col-span-7 flex flex-col justify-evenly relative'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className='text-midnightblue text-2xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'
              variants={childVariants}
            >
              Wertegeleitet, technologiebasiert, wirkungsorientiert.
            </motion.h1>

            <motion.h3 
              className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'
              variants={childVariants}
            >
              Nirvair entwickelt zukunftssichere digitale Lösungen mit Präzision, Qualität und modernster Technologie - deutsche Ingenieurexzellenz für Ihre digitale Transformation.
            </motion.h3>

            <motion.div 
              className='pt-8 mx-auto lg:mx-0'
              variants={childVariants}
            >
              <a href='#contactSection'>
                <motion.button 
                  className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue"
                  variants={buttonVariants as any}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Kontakt
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner;