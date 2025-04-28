"use client";
import { useEffect, useState } from 'react';
import Banner from './components/Banner/index';
import Business from './components/Business/index';
import Features from './components/Features/index';
import Payment from './components/Payment/index';
import People from './components/People/index';
import Logistic from './components/Logistic/index';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if all content is loaded
    const handleLoad = () => setLoading(false);
    
    // Set minimum load time for better UX (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      {/* {loading && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )} */}

      {/* <main className={loading ? 'invisible' : 'visible'}> */}
        <Banner />
        <People />
        <Features />
        <Business />
        <Payment />
        <Logistic />
      {/* </main> */}
    </div>
  );
}