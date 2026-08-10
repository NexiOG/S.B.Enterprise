import HeroSection from '@/components/home/HeroSection';
import CompanyIntro from '@/components/home/CompanyIntro';
import MainOfferings from '@/components/home/MainOfferings';
import TallySection from '@/components/home/TallySection';
import SupportSection from '@/components/home/SupportSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import NexiogSection from '@/components/home/NexiogSection';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import HomeFaqSection from '@/components/home/HomeFaqSection';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import HomeEnquirySection from '@/components/home/HomeEnquirySection';

export default function HomePage() {
  return (
    <>
      {/* 1. 4-Slide Interactive Hero Carousel (Dark Dual-Tone) */}
      <HeroSection />

      {/* 2. Operational Execution Pipeline (Warm Cream Light Dual-Tone) */}
      <CompanyIntro />

      {/* 3. Core Capabilities Bento Grid (Dark Dual-Tone) */}
      <MainOfferings />

      {/* 4. TallyPrime Licensing & Technical Matrix (Warm Cream Light Dual-Tone) */}
      <TallySection />

      {/* 5. Support Operations Queue & SLA Dashboard (Dark Dual-Tone) */}
      <SupportSection />

      {/* 6. Industries Served Vertical Solutions (Warm Cream Light Dual-Tone) */}
      <IndustriesSection />

      {/* 7. SBE Digital Software Studio (Dark Dual-Tone) */}
      <NexiogSection />

      {/* 8. Client Trust & Verified Testimonials (Warm Cream Light Dual-Tone) */}
      <ClientTestimonials />

      {/* 9. Homepage FAQ Accordion (Dark Dual-Tone) */}
      <HomeFaqSection />

      {/* 10. Interactive Google Map Location Desk (Warm Cream Light Dual-Tone) */}
      <GoogleMapSection />

      {/* 11. Contact & Interactive Enquiry Form (Dark Dual-Tone) */}
      <HomeEnquirySection />
    </>
  );
}
