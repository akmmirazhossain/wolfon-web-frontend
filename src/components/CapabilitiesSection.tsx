import React from 'react';
import { CAPABILITIES } from '../data/mockData';
import { Package, Scissors, Layers } from 'lucide-react';

interface CapabilitiesSectionProps {
  onSelectCapability?: (id: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package':
        return <Package className="w-6 h-6 text-[#FFB800]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#FFB800]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#FFB800]" />;
      default:
        return <Package className="w-6 h-6 text-[#FFB800]" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-[#121212] border-t border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight uppercase mb-12">
          OUR CAPABILITIES
        </h2>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability && onSelectCapability(cap.id)}
              className="bg-[#1c1b1b] border border-[#2C2C2C] p-8 hover:border-[#FFB800] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon box */}
                <div className="w-12 h-12 bg-[#2a2a2a] flex items-center justify-center border border-[#353534] group-hover:border-[#FFB800] group-hover:bg-[#FFB800]/10 transition-colors">
                  {getIcon(cap.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="font-anton text-2xl sm:text-3xl text-[#FFFFFF] tracking-wide uppercase group-hover:text-[#FFB800] transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="font-hanken text-sm text-[#c6c6c7] leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>

              {/* Bottom detail link */}
              <div className="mt-8 pt-4 border-t border-[#2a2a2a] flex items-center justify-between text-xs font-hanken font-bold tracking-widest text-[#9e8f78] uppercase group-hover:text-[#FFB800]">
                <span>EXPLORE SERVICES</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
