import React from 'react';

interface HeroSectionProps {
    onClaimClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onClaimClick }) => {
  return (
    <section 
      className="pt-40 pb-20 bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#414141]">
              Get Lifetime<br />
              <span className="text-primary-500">Access to DaySnap</span><br />
              for Early Feedback
            </h1>
            <div className="w-10 h-1.5 bg-primary-500 rounded-full"></div>
            <p className="text-base text-gray-600 max-w-md">
              <strong className="text-[#414141] block">Instead of paying $XX/yr later,</strong>
              <span>join now for free lifetime access. Limited spots for our founding members.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                onClick={onClaimClick} 
                className="w-full sm:w-auto bg-primary-500 text-white font-bold py-3 px-8 rounded-full hover:bg-primary-600 transition-transform hover:scale-105 shadow-lg shadow-primary-500/30 text-center"
              >
                Claim Lifetime Access
              </button>
              <button className="w-full sm:w-auto bg-white text-[#414141] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-md hover:shadow-lg border border-gray-200 text-center">
                How It Works
              </button>
            </div>
          </div>
          <div>
            <div className="max-w-xl mx-auto">
              <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/JuUIxNXwGPo" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;