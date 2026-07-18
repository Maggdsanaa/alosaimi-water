import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import LocationPicker from '@/components/sections/LocationPicker';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <LocationPicker />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
