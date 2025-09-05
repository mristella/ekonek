'use client';

import Header from '@/components/header';
import Hero from '@/components/home-page/hero';
import About from '@/components/home-page/about';
import SDGs from '@/components/home-page/sdg';
import HowItWorks from '@/components/home-page/how-it-works';
import Impact from '@/components/home-page/impact';
import FocusAreas from '@/components/home-page/focus-areas';
import Partners from '@/components/home-page/partners';
import CallToAction from '@/components/home-page/call-to-action';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
  <>
      <Header />
      <main>
      <Hero />
      <About />
      <SDGs />
      <HowItWorks />
      <Impact />
      <FocusAreas />
      <Partners />
      <CallToAction />
    </main>
      <Footer />
    </>
  );
}
