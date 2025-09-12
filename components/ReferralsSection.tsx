import React from 'react';
import { ClockIcon } from './Icons';

const ReferralCard = ({ title, bonus, total }: { title:string; bonus:string; total:string }) => (
    <div className="bg-white rounded-2xl p-5 text-center shadow-lg w-64 mx-auto">
        <div className="flex justify-center mb-2">
            <div className="bg-primary-100 rounded-full p-3">
                <ClockIcon className="w-5 h-5 text-primary-500" />
            </div>
        </div>
        <p className="font-bold text-primary-500">{title}</p>
        <p className="text-gray-800 font-bold text-lg mt-1">{bonus}</p>
        <p className="text-gray-500 text-sm mt-2">{total}</p>
    </div>
);


const ReferralsSection = () => {
    return (
        <section 
            className="relative overflow-hidden pt-8 pb-5 bg-[url('/referrals-bg.png')] bg-cover bg-top bg-no-repeat"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative">
                 {/* Decorative dots for desktop */}
                 <div aria-hidden="true" className="absolute top-[60%] left-[4%] w-2 h-2 bg-gray-600 rounded-full hidden lg:block opacity-60"></div>
                 <div aria-hidden="true" className="absolute top-[45%] left-[48%] w-3 h-3 bg-lime-300 rounded-full hidden lg:block opacity-70"></div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Text Content */}
                    <div className="relative z-10 space-y-6 text-center lg:text-left">
                        <p className="font-semibold text-primary-500 tracking-wider">REFERRAL BOOST</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                            Unlock More with <span className="text-primary-500">Referrals</span>
                        </h2>
                        <p className="text-base text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Share your unique link after signing up. When your friends activate their accounts, you get permanent upgrades.
                        </p>
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <button className="bg-primary-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-600 transition shadow-lg shadow-primary-500/30">
                                Join Now
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Side: Cards */}
                    <div className="relative mt-12 lg:mt-0">
                        <img 
                            src="/referral-blob.svg"
                            alt="Decorative orange blob"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] max-w-none opacity-50"
                            aria-hidden="true"
                        />
                        
                        {/* Mobile view: stacked cards */}
                        <div className="relative z-10 lg:hidden flex flex-col items-center space-y-8">
                            <ReferralCard 
                                title="3 Referrals"
                                bonus="+2 Journals"
                                total="For a new total of 7 journals."
                            />
                            <ReferralCard 
                                title="10 Referrals"
                                bonus="+2 Shared Spaces"
                                total="For a new total of 5 spaces."
                            />
                        </div>

                        {/* Desktop view: absolute positioning for overlap */}
                        <div className="hidden lg:block relative h-[450px] w-full">
                            <div className="absolute top-[10%] left-[20%] z-10">
                                <ReferralCard 
                                    title="3 Referrals"
                                    bonus="+2 Journals"
                                    total="For a new total of 7 journals."
                                />
                            </div>
                            <div className="absolute top-[50%] left-[45%] z-10">
                                <ReferralCard 
                                    title="10 Referrals"
                                    bonus="+2 Shared Spaces"
                                    total="For a new total of 5 spaces."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReferralsSection;