// Fix: Changed 'use client;' to '"use client";' for correct Next.js syntax.
"use client";

import React, { useState } from 'react';
import { UserIcon, AtSymbolIcon, ChevronDownIcon, GlobeAltIcon, CheckIcon, XMarkIcon as XMarkIconSolid } from './Icons';

interface ApplicationModalProps {
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ onClose }) => {
  const [role, setRole] = useState('Influencer');
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const roles = ['Individual', 'Influencer', 'Coach', 'Business', 'Student'];

  const [country, setCountry] = useState('Pakistan');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countries = ['Pakistan', 'United States', 'United Kingdom', 'Canada', 'Australia'];

  const [reviewPlatforms, setReviewPlatforms] = useState({
    youtube: true,
    blog: true,
    linkedin: true,
    instagram: true,
    x: false,
    other: true,
  });

  const handlePlatformChange = (platform: keyof typeof reviewPlatforms) => {
    setReviewPlatforms(prev => ({ ...prev, [platform]: !prev[platform] }));
  };

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setIsRoleOpen(false);
  };

  const handleCountrySelect = (selectedCountry: string) => {
    setCountry(selectedCountry);
    setIsCountryOpen(false);
  };

  // Fix: Handle form submission via onSubmit for robustness and accessibility.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form data submission here.
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Submit Your <span className="text-primary-500">Application</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">Full Name</label>
              <div className="relative">
                <input id="fullName" type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition" />
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
              <div className="relative">
                <input id="email" type="email" placeholder="email@example.com" className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition" />
                <AtSymbolIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* I am a... Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
              <button type="button" onClick={() => setIsRoleOpen(!isRoleOpen)} className="w-full bg-white border border-gray-300 rounded-lg p-3 text-left flex justify-between items-center">
                <span className={role === 'Influencer' ? 'text-white bg-primary-500 px-3 py-1 rounded-md -ml-1' : ''}>{role}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${isRoleOpen ? 'rotate-180' : ''}`} />
              </button>
              {isRoleOpen && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                  {roles.map((r) => (
                    <li key={r} onClick={() => handleRoleSelect(r)} className={`p-3 cursor-pointer hover:bg-primary-100 ${role === r ? 'bg-primary-500 text-white hover:bg-primary-600' : ''} ${r === 'Individual' ? 'rounded-t-lg' : ''} ${r === 'Student' ? 'rounded-b-lg' : ''}`}>
                      {r}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Country Dropdown */}
            <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                 <button type="button" onClick={() => setIsCountryOpen(!isCountryOpen)} className="w-full bg-white border border-gray-300 rounded-lg p-3 text-left flex justify-between items-center">
                    <span>{country}</span>
                    <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                 </button>
                {isCountryOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                    {countries.map((c) => (
                        <li key={c} onClick={() => handleCountrySelect(c)} className="p-3 cursor-pointer hover:bg-primary-100 first:rounded-t-lg last:rounded-b-lg">{c}</li>
                    ))}
                    </ul>
                )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="website">Website or Social Handle</label>
            <div className="relative">
              <input id="website" type="text" placeholder="coolwebsite.com" className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition" />
              <GlobeAltIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Where will you post your review?</label>
            <div className="flex flex-wrap gap-4">
              {Object.entries(reviewPlatforms).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <button type="button" onClick={() => handlePlatformChange(key as keyof typeof reviewPlatforms)} className={`w-6 h-6 rounded border flex items-center justify-center mr-2 transition ${value ? 'bg-primary-500 border-primary-500' : 'bg-white border-gray-300'}`}>
                    {value && <CheckIcon className="w-4 h-4 text-white" />}
                    {!value && key === 'x' && <XMarkIconSolid className="w-4 h-4 text-gray-400"/>}
                  </button>
                  <span className="capitalize">{key}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="usage">How will you use DaySnap?</label>
            <textarea id="usage" rows={4} placeholder="Tell us more about your goals..." className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition"></textarea>
          </div>

          <button type="submit" className="w-full bg-primary-500 text-white font-bold py-4 rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30 text-lg">
            Submit & Get My Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;