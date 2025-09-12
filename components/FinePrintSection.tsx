import React from 'react';
import { CheckIcon } from './Icons';

const FinePrintSection = () => {
    const terms = [
        "Lifetime plan includes <strong>fair-use limits</strong> listed above.",
        "One account per person or business entity; <strong>non-transferable</strong>.",
        "Abuse (spam, scraping, reselling) may <strong>revoke access</strong>.",
        "We may adjust fair-use thresholds to <strong>prevent abuse</strong> with notice.",
        "One review is required within <strong>30 days</strong> of receiving your code."
    ];
    return (
        <section className="py-20 sm:py-24 bg-[#FBFBFB]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <p className="text-primary-500 font-semibold tracking-wider">TERMS & CONDITIONS</p>
                        <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4 leading-tight">
                            The Fine Print, <span className="text-primary-500">Simplified</span>
                        </h2>
                        <p className="text-base text-gray-600 max-w-md">
                           Here's a quick, human-readable summary of our lifetime offer terms.
                        </p>
                        <div className="pt-2">
                             <button className="bg-primary-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-600 transition shadow-lg shadow-primary-500/30">
                                Read Full Terms
                            </button>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-5">
                        {terms.map((term, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mt-0.5">
                                    <CheckIcon className="w-4 h-4" />
                                </div>
                                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: term }}></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinePrintSection;