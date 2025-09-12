// Fix: Changed 'use client;' to '"use client";' for correct Next.js syntax.
"use client";

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-start">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.065 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

const testimonials = [
    {
        name: "Sarah M.",
        title: "Wellness Creator",
        quote: "DaySnap keeps my audience engaged without overproduced content. The visual diary is pure genius for accountability.",
        imageUrl: "/avatar-sarah.png"
    },
    {
        name: "James L.",
        title: "Fitness Studio Owner",
        quote: "Our team finally shares wins consistently. It's been a game-changer for morale and celebrating small victories.",
        imageUrl: "/avatar-james.png"
    },
    {
        name: "Ralph Edwards",
        title: "College Student",
        quote: "DaySnap keeps my audience engaged without overproduced content. The visual diary is pure genius for accountability.",
        imageUrl: "/avatar-ralph.png"
    }
];

const TestimonialCard = ({ name, title, quote, imageUrl, isActive }: { name: string, title: string, quote: string, imageUrl: string, isActive: boolean }) => (
    <div className={`transition-all duration-300 ease-in-out transform ${isActive ? 'scale-100 bg-primary-50 shadow-2xl z-10' : 'scale-90 bg-white shadow-lg opacity-80'} p-6 rounded-2xl text-left w-full max-w-sm mx-auto`}>
        <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary-500" />
        <h4 className="font-bold text-lg text-gray-900">{name}</h4>
        <p className="text-gray-500 mb-4 text-sm">{title}</p>
        <StarRating rating={5} />
        <p className="text-gray-600 mt-4 text-sm leading-relaxed">{quote}</p>
    </div>
);

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    // This logic ensures the carousel loops correctly
    const getDisplayedTestimonials = () => {
        const testimonialCount = testimonials.length;
        if (testimonialCount === 0) return [];
        
        const prevIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
        const nextIndex = (currentIndex + 1) % testimonialCount;

        return [
            testimonials[prevIndex],
            testimonials[currentIndex],
            testimonials[nextIndex],
        ];
    }
    
    const displayedTestimonials = getDisplayedTestimonials();


    return (
        <section className="bg-white py-20 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-primary-500 font-semibold tracking-wider">SOCIAL PROOF</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
                    What Our First Users Are <span className="text-primary-500">Saying</span>
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto mb-16">
                    Trusted by creators, coaches, and teams building healthier routines together.
                </p>

                <div className="relative flex items-center justify-center">
                    <button onClick={handlePrev} className="absolute left-0 -translate-x-1/2 z-20 bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primary-600 transition">
                        <span className="sr-only">Previous testimonial</span>
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 md:gap-x-6 items-center w-full max-w-5xl mx-auto">
                        {/* Left Card (hidden on mobile) */}
                        <div className="hidden lg:block">
                             {displayedTestimonials.length > 0 && <TestimonialCard {...displayedTestimonials[0]} isActive={false} />}
                        </div>
                        {/* Center Card (active) */}
                        <div>
                            {displayedTestimonials.length > 1 && <TestimonialCard {...displayedTestimonials[1]} isActive={true} />}
                        </div>
                        {/* Right Card (hidden on mobile) */}
                        <div className="hidden lg:block">
                             {displayedTestimonials.length > 2 && <TestimonialCard {...displayedTestimonials[2]} isActive={false} />}
                        </div>
                    </div>

                    <button onClick={handleNext} className="absolute right-0 translate-x-1/2 z-20 bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primary-600 transition">
                        <span className="sr-only">Next testimonial</span>
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;