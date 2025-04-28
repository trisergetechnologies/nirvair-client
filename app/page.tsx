'use client';
import { motion } from 'framer-motion';
import Banner from './components/Banner/index';
import Business from './components/Business/index';
import Features from './components/Features/index';
import Logistic from './components/Logistic/index';
import Payment from './components/Payment/index';
import People from './components/People/index';

// Animation variants for page transitions
const sectionVariants = {
  offscreen: { 
    opacity: 0, 
    y: 50,
    transition: {
      duration: 0.5
    }
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "-100px" }}
        variants={sectionVariants}
      >
        <People />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "-100px" }}
        variants={sectionVariants}
      >
        <Features />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "-100px" }}
        variants={sectionVariants}
      >
        <Business />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "-100px" }}
        variants={sectionVariants}
      >
        <Payment />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "-100px" }}
        variants={sectionVariants}
      >
        <Logistic />
      </motion.div>
    </div>
  );
}