import React from 'react';

interface CtaSectionProps {
    onClaimClick: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onClaimClick }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative lg:w-3/4 mx-auto bg-primary-500 text-white text-center p-12 rounded-3xl overflow-hidden">
                    <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/10 rounded-full" aria-hidden="true"></div>
                    <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-white/10 rounded-full" aria-hidden="true"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Trade One Review for a <br /> Lifetime Plan?
                        </h2>
                        <p className="text-base text-primary-100 max-w-3xl mx-auto mb-8">
                            This is a limited-time offer for our founding members. <br /> Claim your spot now.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button onClick={onClaimClick} className="w-full sm:w-auto bg-white text-primary-500 font-bold py-3 px-8 rounded-xl hover:bg-primary-50 transition shadow-md">
                                Claim Lifetime Access
                            </button>
                            <button className="w-full sm:w-auto border-2 border-primary-300 text-white font-semibold py-3 px-8 rounded-xl hover:bg-primary-400 hover:border-primary-400 transition">
                                Read Full Terms
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaSection;