import React from 'react';

const FeatureCard = ({ iconSrc, title, description }: { iconSrc: string, title: string, description: string }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-5">
        <img src={iconSrc} alt={`${title} icon`} className="w-[50px] h-[50px] flex-shrink-0" />
        <div>
            <h3 className="font-bold text-base text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

const FeaturesSection = () => {
  return (
    <section 
      className="py-20 sm:py-24 bg-[url('/features-bg.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-y-16 lg:gap-x-16 items-center">
          
          {/* Left Column: Feature Cards */}
          <div className="space-y-8 lg:order-first order-last">
            <div className="max-w-md">
                <FeatureCard 
                    iconSrc="/icon-lifetime-plan.svg"
                    title="Lifetime Plan"
                    description="Up to 2 devices, 5 activities, and unlimited daily snaps under a fair-use policy."
                />
            </div>
            <div className="max-w-md ml-auto lg:ml-40">
                <FeatureCard 
                    iconSrc="/icon-collaboration-tools.svg"
                    title="Collaboration Tools"
                    description="Get 2 shared spaces to collaborate with your team, clients, or community."
                />
            </div>
            <div className="max-w-md">
                <FeatureCard 
                    iconSrc="/icon-exclusive-perks.svg"
                    title="Exclusive Perks"
                    description="Receive a founding member badge on your profile and get featured on our wall of founders."
                />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6 text-center lg:text-left lg:order-last order-first">
            <p className="font-semibold text-primary-500 tracking-wider">FEATURES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              An Exclusive Plan for <span className="text-primary-500">Founders</span>
            </h2>
            <p className="text-base text-gray-600 max-w-lg mx-auto lg:mx-0">
              As a founding member, you get an exclusive plan with powerful features designed to help you grow with us. Here's everything included.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button className="bg-primary-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-600 transition shadow-lg shadow-primary-500/30">
                Get The Deal
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;