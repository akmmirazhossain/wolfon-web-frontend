'use client';

import React from 'react';
import { UpcomingDrop } from '../types';
import { X } from 'lucide-react';

interface SubscribeModalProps {
  drop: UpcomingDrop | null;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ drop, onClose }) => {
  if (!drop) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 sm:top-2 sm:right-2 text-[#FFFFFF] hover:text-[#FFB800] bg-[#121212]/80 border border-[#2C2C2C] p-1.5 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative border border-[#2C2C2C] overflow-hidden bg-[#1c1b1b]">
          <img
            src={drop.image}
            alt={drop.title}
            className="w-full h-auto max-h-[85vh] object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3 bg-[#121212]/90 border border-[#2C2C2C] px-3 py-1.5 font-hanken text-[11px] text-[#FFFFFF] uppercase tracking-widest">
            {drop.title}
          </div>
          <div className="absolute bottom-3 right-3 bg-[#FFB800] text-[#121212] font-hanken text-[10px] font-extrabold px-2 py-0.5 uppercase">
            {drop.releaseDate}
          </div>
        </div>
      </div>
    </div>
  );
};