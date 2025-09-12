
// Fix: Changed 'use client;' to '"use client";' for correct Next.js syntax.
"use client";

import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={isOpen}
            >
                <h4 className="text-lg font-semibold text-gray-800">{question}</h4>
                {isOpen ? <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <div className="text-gray-600 pr-8">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;