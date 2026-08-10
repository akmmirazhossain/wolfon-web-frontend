'use client';

import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/mockData';
import { ArrowRight, FileText } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onOpenB2B: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenB2B }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-end pt-28 pb-16 overflow-hidden bg-[#121212]">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.bgImage}
          alt="Wolfon Premium Apparel Collection"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125 transition-all duration-1000 ease-in-out scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlays for text legibility and editorial mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/70 via-[#121212]/20 to-transparent" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-block bg-[#121212]/90 border border-[#FFB800]/50 px-3 py-1">
            <span className="font-hanken text-[11px] sm:text-xs font-bold text-[#FFB800] tracking-[0.2em] uppercase">
              {slide.eyebrow}
            </span>
          </div>

          {/* Headline - Anton typography */}
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#FFFFFF] leading-[0.92] uppercase">
            {slide.title}
          </h1>

          {/* Subtext */}
          <p className="font-hanken text-base sm:text-lg text-[#c6c6c7] max-w-xl leading-relaxed font-normal">
            {slide.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="inline-flex items-center space-x-3 bg-[#FFB800] text-[#121212] font-anton text-base tracking-widest px-8 py-4 uppercase hover:bg-[#e0a200] transition-colors cursor-pointer group"
            >
              <span>VIEW GARMENT CATALOG</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenB2B}
              className="inline-flex items-center space-x-2 bg-[#1c1b1b] border border-[#2C2C2C] text-[#FFFFFF] hover:border-[#FFB800] hover:text-[#FFB800] font-anton text-base tracking-widest px-6 py-4 uppercase transition-colors cursor-pointer"
            >
              <FileText className="w-5 h-5 text-[#FFB800]" />
              <span>REQUEST BULK QUOTE</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicators / Bar */}
        <div className="mt-16 sm:mt-20 flex items-center space-x-3 border-t border-[#2C2C2C] pt-6 max-w-md">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-16 bg-[#FFB800]' : 'w-8 bg-[#2C2C2C] hover:bg-[#514532]'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
