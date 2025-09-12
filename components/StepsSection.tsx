import React from 'react';

const StepCard = ({ number, title, description, iconSrc }: { number: string, title: string, description: string, iconSrc: string }) => (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden h-full text-left">
        {/* Background number */}
        <span className="absolute top-2.5 right-2.5 text-8xl font-extrabold text-gray-100/80 -z-0 select-none" aria-hidden="true">
            {number}
        </span>
        
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full">
            {/* Icon */}
            <div className="mb-5">
                 <img src={iconSrc} alt={`${title} icon`} className="w-14 h-14" />
            </div>
            
            {/* Text */}
            <div className="flex-grow">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
);


const StepsSection = () => {
    return (
        <section 
            className="py-20 sm:py-24 bg-[url('/steps-bg.png')] bg-cover bg-center bg-no-repeat"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="font-semibold text-primary-500 tracking-wider">HOW IT WORKS</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-4">
                    Your <span className="text-primary-500">Forever</span> Plan in 4 Simple Steps
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto mb-16">
                    We've made the process straightforward. Go from applicant to founding member in no time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   <StepCard number="01" iconSrc="/icon-step-1.svg" title="Sign up & Tell Us Your Story" description="Fill out the form and tell us how you'll use DaySnap." />
                   <StepCard number="02" iconSrc="/icon-step-2.svg" title="Get Your Lifetime Code" description="If approved, we'll email your unique code to unlock lifetime access." />
                   <StepCard number="03" iconSrc="/icon-step-3.svg" title="Use, Love & Review" description="Try DaySnap for 2-4 weeks, then post an honest public review." />
                   <StepCard number="04" iconSrc="/icon-step-4.svg" title="Keep It Forever" description="Your plan remains active for life, and you get featured as a founder." />
                </div>
            </div>
        </section>
    )
}

export default StepsSection;