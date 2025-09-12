// Fix: Changed 'use client;' to '"use client";' for correct Next.js syntax.
"use client";

import React, { useState, useEffect } from 'react';
import { MenuIcon, XMarkIcon } from './Icons';

interface HeaderProps {
    onSignUpClick: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive?: boolean }> = ({ href, children, isActive }) => (
    <a
      href={href}
      className={`relative text-gray-700 hover:text-primary-500 transition-colors font-semibold duration-300 group ${isActive ? 'text-primary-500 font-semibold' : ''}`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary-500 transform origin-left transition-transform duration-300 ease-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </a>
  );


const Header: React.FC<HeaderProps> = ({ onSignUpClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = (
      <>
        <NavLink href="#" isActive>Home</NavLink>
        <NavLink href="#">Journal</NavLink>
      </>
    );

  return (
    <>
    <header className={`
      ${isScrolled 
        ? 'fixed bg-white/80 backdrop-blur-sm shadow-md py-2' 
        : 'absolute bg-transparent py-6'}
      top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out px-6 sm:px-10 lg:px-16
    `}>
      <div className="container mx-auto flex justify-between items-center">
        <img src="/daysnap-logo.png" alt="DaySnap Logo" className="h-10 w-auto" />
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={onSignUpClick} className="bg-primary-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-primary-600 transition-colors shadow-md">
            Sign Up for Early Access
          </button>
          <a href="#" className="bg-white text-primary-500 font-semibold py-2 px-6 rounded-full border border-primary-300 hover:bg-primary-50 transition-colors shadow-sm">Partner with Daywell</a>
        </div>
        
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-800">
                <MenuIcon className="w-8 h-8" />
            </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    <div 
        className={`fixed inset-0 z-50 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
        aria-hidden={!isMenuOpen}
    >
        <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative z-10 bg-white h-full w-4/5 max-w-sm ml-auto p-8 shadow-xl">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-gray-600">
                <XMarkIcon className="w-8 h-8" />
            </button>
            <nav className="flex flex-col space-y-8 mt-16 text-xl">
               {navLinks}
            </nav>
            <div className="flex flex-col space-y-4 mt-12">
                <button onClick={onSignUpClick} className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-600 transition-colors shadow-md text-lg w-full">
                    Sign Up for Early Access
                </button>
                <a href="#" className="bg-white text-primary-500 font-semibold py-3 px-6 rounded-full border border-primary-300 hover:bg-primary-50 transition-colors shadow-sm text-lg w-full text-center">Partner with Daywell</a>
            </div>
        </div>
    </div>
    </>
  );
}

export default Header;