"use client";

import React, { useState } from 'react';
import ApplicationModal from '../components/ApplicationModal';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StepsSection from '../components/StepsSection';
import ReferralsSection from '../components/ReferralsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import FinePrintSection from '../components/FinePrintSection';
import CtaSection from '../components/CtaSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="text-gray-800 font-sans antialiased">
      {isModalOpen && <ApplicationModal onClose={closeModal} />}
      
      <div className={`${isModalOpen ? 'blur-sm' : ''}`}>
        <div className="relative">
          <Header onSignUpClick={openModal} />
          <HeroSection onClaimClick={openModal} />
        </div>
        <main>
          <FeaturesSection />
          <StepsSection />
          <ReferralsSection />
          <TestimonialsSection />
          <FaqSection />
          <FinePrintSection />
          <CtaSection onClaimClick={openModal} />
        </main>
      </div>
    </div>
  );
}