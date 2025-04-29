"use client";
import dynamic from 'next/dynamic';
// import Banner from './components/Banner/index';
import Business from './components/Business/index';
import Features from './components/Features/index';
import Logistic from './components/Logistic/index';
import Payment from './components/Payment/index';
import People from './components/People/index';

const Banner = dynamic(()=>import('./components/Banner'))

export default function Home() {


  return (
    <div>
        <Banner />
        <People />
        <Features />
        <Business />
        <Payment />
        <Logistic />
    </div>
  );
}