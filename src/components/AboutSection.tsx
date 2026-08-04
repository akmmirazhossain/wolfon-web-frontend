import React from 'react';
import { ABOUT_STORY } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#121212] border-t border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-hanken text-xs font-bold text-[#FFB800] tracking-[0.2em] uppercase">
              {ABOUT_STORY.eyebrow}
            </span>

            <h2 className="font-anton text-5xl sm:text-6xl lg:text-7xl text-[#FFFFFF] tracking-tight uppercase leading-[0.95]">
              {ABOUT_STORY.headline}
            </h2>

            <div className="space-y-4 font-hanken text-sm sm:text-base text-[#c6c6c7] leading-relaxed font-normal">
              <p>{ABOUT_STORY.p1}</p>
              <p>{ABOUT_STORY.p2}</p>
              <p>{ABOUT_STORY.p3}</p>
            </div>
          </div>

          {/* Right Factory Image Column */}
          <div className="lg:col-span-6 border border-[#2C2C2C] bg-[#1c1b1b] p-3">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#201f1f]">
              <img
                src={ABOUT_STORY.editorialImage}
                alt="Wolfon Editorial Streetwear"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-[#121212]/90 border border-[#2C2C2C] px-3 py-1.5 font-hanken text-[10px] text-[#9e8f78] uppercase tracking-widest">
                GARMENT MANUFACTURING FACILITY • BANGLADESH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
