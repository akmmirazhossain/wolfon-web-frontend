'use client';

import React from 'react';
import { UpcomingDrop } from '../types';
import { UPCOMING_DROPS } from '../data/mockData';
import { Bell } from 'lucide-react';

interface UpcomingDropsSectionProps {
  onNotifyDrop: (drop: UpcomingDrop) => void;
}

export const UpcomingDropsSection: React.FC<UpcomingDropsSectionProps> = ({ onNotifyDrop }) => {
  return (
    <section id="upcoming" className="py-24 bg-[#121212] border-t border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight uppercase mb-12">
          UPCOMING DROPS
        </h2>

        {/* 5 Grid items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {UPCOMING_DROPS.map((drop) => (
            <div
              key={drop.id}
              onClick={() => onNotifyDrop(drop)}
              className="bg-[#1c1b1b] border border-[#2C2C2C] group flex flex-col justify-between cursor-pointer hover:border-[#FFB800] transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#201f1f]">
                {/* <div className="absolute top-2.5 left-2.5 z-10 bg-[#FFB800] text-[#121212] font-hanken text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5">
                  {drop.tag}
                </div> */}

                <img
                  src={drop.image}
                  alt={drop.title}
                  className="w-full h-full object-cover object-center contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Notify Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
                  <Bell className="w-8 h-8 text-[#FFB800] mb-2 animate-bounce" />
                  <span className="font-anton text-xs text-[#FFFFFF] tracking-widest uppercase">
                    NOTIFY ME ON RELEASE
                  </span>
                  <span className="font-hanken text-[10px] text-[#FFB800] mt-1">
                    {drop.releaseDate}
                  </span>
                </div>
              </div>

              {/* Title bar */}
              <div className="p-4 border-t border-[#2C2C2C] bg-[#121212]">
                <h3 className="font-anton text-base sm:text-lg text-[#FFFFFF] tracking-wide uppercase group-hover:text-[#FFB800] transition-colors">
                  {drop.title}
                </h3>
                <p className="font-hanken text-[11px] text-[#9e8f78] uppercase mt-0.5">
                  {drop.category}
                </p>

                {/* Available Colorways */}
                <div className="flex items-center space-x-2 mt-3">
                  <span
                    className="w-4 h-4 rounded-full border border-[#353534]"
                    style={{ backgroundColor: '#FFFFFF' }}
                    title="White"
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-[#353534]"
                    style={{ backgroundColor: '#000000' }}
                    title="Black"
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-[#353534]"
                    style={{ backgroundColor: '#5C4033' }}
                    title="Brown"
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-[#353534]"
                    style={{ backgroundColor: '#808080' }}
                    title="Gray"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
