import Banner from './components/Banner/index';
import Business from './components/Business/index';
import Features from './components/Features/index';
import Payment from './components/Payment/index';
import People from './components/People/index';
import Pricing from './components/Pricing/index';


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Banner />

      {/* About Us */}
      <People />

      {/* Services */}
      <Features />

      {/* Why Choose Us */}
      <Business />

      {/* Our Vision */}
      <Payment />

      {/* Testimonials */}
      <Pricing />
    </main>
  )
}
