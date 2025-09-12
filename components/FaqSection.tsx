
"use client";

import React, { useState } from 'react';
import FaqItem from './FaqItem';

const faqs = [
    {
        question: "Who can apply?",
        answer: "Anyone—creators, coaches, teams, and businesses."
    },
    {
        question: "Is a review required?",
        answer: "Yes. One honest review (video, blog, or social thread) keeps your Lifetime plan active."
    },
    {
        question: "What does 'lifetime' mean?",
        answer: "Free renewal annually for as long as DaySnap operates."
    },
    {
        question: "Can I switch devices?",
        answer: "Yes, up to 3 active devices at a time."
    },
    {
        question: "Can I upgrade later?",
        answer: "You can add paid seats or premium features anytime."
    }
]

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative overflow-hidden  py-20">
             <img 
                src="/faq-bg.png" 
                alt="Decorative background" 
                className="absolute inset-0 w-full h-full object-cover -z-10" 
                aria-hidden="true"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="font-semibold text-primary-500 tracking-wider">GOT QUESTIONS?</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
                        Frequently Asked <span className="text-primary-500">Questions</span>
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-12">
                    {faqs.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            question={faq.question} 
                            answer={faq.answer} 
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;