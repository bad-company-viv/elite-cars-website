import React from 'react';
import HeroSection from '@/components/HeroSection';
import FleetSection from '@/components/FleetSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <HeroSection />
      <FleetSection />
      <WhyChooseUs />
      <ExperienceSection />
      <TestimonialsSection />
      <BookingSection />
    </div>
  );
}
