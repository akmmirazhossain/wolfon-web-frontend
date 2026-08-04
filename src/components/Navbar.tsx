'use client';

import React, { useState, useEffect } from 'react';
import { ClipboardList, Menu, X, FileText } from 'lucide-react';
import { LOGO_HORIZONTAL } from '../data/mockData';

interface NavbarProps {
  inquiryCount: number;
  onOpenInquiryList: () => void;
  onOpenB2B: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  inquiryCount,
  onOpenInquiryList,
  onOpenB2B,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#2C2C2C] ${
        scrolled ? 'bg-[#121212]/95 backdrop-blur-md py-4' : 'bg-[#121212] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none"
        >
          <img
            src={LOGO_HORIZONTAL}
            alt="WOLFON"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-hanken tracking-[0.15em] uppercase font-bold text-[#e5e2e1]">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-[#FFB800] transition-colors cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            className="hover:text-[#FFB800] transition-colors cursor-pointer"
          >
            CAPABILITIES
          </button>
          <button
            onClick={() => scrollToSection('drop-shoulder')}
            className="hover:text-[#FFB800] transition-colors cursor-pointer"
          >
            GARMENT CATALOG
          </button>
          <button
            onClick={() => scrollToSection('upcoming')}
            className="hover:text-[#FFB800] transition-colors cursor-pointer"
          >
            UPCOMING DROPS
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#FFB800] transition-colors cursor-pointer"
          >
            OUR STORY
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#FFB800] transition-colors cursor-pointer"
          >
            CONTACT & B2B
          </button>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4 text-[#FFFFFF]">
          {/* Quote List Badge Button */}
          <button
            onClick={onOpenInquiryList}
            aria-label="B2B Quote Basket"
            className="relative px-3 py-1.5 bg-[#1c1b1b] border border-[#2C2C2C] hover:border-[#FFB800] text-[#FFFFFF] hover:text-[#FFB800] transition-all cursor-pointer flex items-center space-x-2 text-[11px] font-hanken font-bold tracking-wider uppercase"
          >
            <ClipboardList className="w-4 h-4 stroke-[1.8] text-[#FFB800]" />
            <span className="hidden sm:inline">QUOTE BASKET</span>
            {inquiryCount > 0 && (
              <span className="bg-[#FFB800] text-[#121212] font-anton text-[10px] w-4 h-4 flex items-center justify-center font-bold">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Primary CTA: B2B Quote Modal */}
          <button
            onClick={onOpenB2B}
            className="inline-flex items-center space-x-1 px-4 py-2 bg-[#FFB800] text-[#121212] text-[11px] font-anton tracking-widest uppercase hover:bg-[#e0a200] transition-all cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>REQUEST B2B QUOTE</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-1.5 text-[#FFFFFF] hover:text-[#FFB800] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#2C2C2C] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-sm font-hanken tracking-widest uppercase font-bold text-[#e5e2e1]">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-1 hover:text-[#FFB800]"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className="text-left py-1 hover:text-[#FFB800]"
            >
              CAPABILITIES
            </button>
            <button
              onClick={() => scrollToSection('drop-shoulder')}
              className="text-left py-1 hover:text-[#FFB800]"
            >
              GARMENT CATALOG
            </button>
            <button
              onClick={() => scrollToSection('upcoming')}
              className="text-left py-1 hover:text-[#FFB800]"
            >
              UPCOMING DROPS
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-1 hover:text-[#FFB800]"
            >
              ABOUT US / OUR STORY
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-1 hover:text-[#FFB800]"
            >
              CONTACT & PRIVATE LABEL
            </button>
          </nav>
          <div className="pt-4 border-t border-[#2C2C2C] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiryList();
              }}
              className="w-full bg-[#1c1b1b] border border-[#2C2C2C] text-[#FFFFFF] font-anton py-3 tracking-widest uppercase text-sm hover:border-[#FFB800] flex items-center justify-center space-x-2"
            >
              <ClipboardList className="w-4 h-4 text-[#FFB800]" />
              <span>VIEW QUOTE BASKET ({inquiryCount})</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenB2B();
              }}
              className="w-full bg-[#FFB800] text-[#121212] font-anton py-3 tracking-widest uppercase text-sm hover:bg-[#e0a200]"
            >
              INITIATE B2B QUOTE INQUIRY
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
