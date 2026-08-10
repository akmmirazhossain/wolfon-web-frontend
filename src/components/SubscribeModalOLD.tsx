'use client';

import React, { useState } from 'react';
import { UpcomingDrop } from '../types';
import { X, BellRing, CheckCircle2, FileText } from 'lucide-react';

interface SubscribeModalProps {
  drop: UpcomingDrop | null;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ drop, onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  React.useEffect(() => {
    if (drop) {
      setEmail('');
      setSubscribed(false);
    }
  }, [drop]);

  if (!drop) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] border border-[#2C2C2C] max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FFFFFF] hover:text-[#FFB800]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#FFB800]/10 border border-[#FFB800] flex items-center justify-center text-[#FFB800]">
            <BellRing className="w-5 h-5" />
          </div>
          <div>
            <span className="font-hanken text-[10px] font-bold text-[#FFB800] uppercase tracking-widest block">
              B2B SPEC SHEET & NOTIFICATION
            </span>
            <h3 className="font-anton text-2xl text-[#FFFFFF] uppercase">
              {drop.title}
            </h3>
          </div>
        </div>

        <div className="relative aspect-[16/9] border border-[#2C2C2C] overflow-hidden bg-[#1c1b1b]">
          <img
            src={drop.image}
            alt={drop.title}
            className="w-full h-full object-cover grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-2 left-2 bg-[#FFB800] text-[#121212] font-hanken text-[10px] font-extrabold px-2 py-0.5 uppercase">
            STATUS: {drop.releaseDate}
          </div>
        </div>

        {subscribed ? (
          <div className="bg-[#1c1b1b] border border-[#FFB800] p-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#FFB800] mx-auto" />
            <h4 className="font-anton text-xl text-[#FFFFFF] uppercase">
              INQUIRY REGISTERED
            </h4>
            <p className="font-hanken text-xs text-[#c6c6c7]">
              We have dispatched the technical specs and sample swatch catalog for <span className="text-[#FFFFFF]">{drop.title}</span> to <span className="text-[#FFB800]">{email}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-2 text-xs font-hanken font-bold text-[#FFB800] uppercase underline tracking-widest"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-hanken text-xs text-[#c6c6c7] leading-relaxed">
              Enter your business email address to receive the full tech pack specification sheet, fabric swatch options, and MOQ schedule for {drop.title}.
            </p>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#FFB800] text-[#121212] font-anton text-base tracking-widest py-3.5 uppercase hover:bg-[#e0a200] transition-colors cursor-pointer flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>GET TECH SPEC SHEET & SWATCHES</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
