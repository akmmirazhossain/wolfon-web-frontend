'use client';

import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] border border-[#2C2C2C] max-w-2xl w-full p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl space-y-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FFFFFF] hover:text-[#FFB800] p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="border-b border-[#2C2C2C] pb-4">
          <span className="font-hanken text-[10px] font-bold text-[#FFB800] uppercase tracking-widest block">
            WOLFON LEGAL PROTOCOL
          </span>
          <h3 className="font-anton text-3xl text-[#FFFFFF] uppercase">
            {type === 'privacy' ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
          </h3>
        </div>

        <div className="font-hanken text-xs text-[#c6c6c7] space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Data Collection:</strong> Wolfon respects user privacy. We collect minimal customer information required exclusively to process order fulfillment, manufacturing quotes, and drop updates.
              </p>
              <p>
                <strong>2. Data Usage:</strong> Customer data is never sold or distributed to unauthorized third parties. All transactional communications are handled through encrypted, secure network protocols.
              </p>
              <p>
                <strong>3. Contact:</strong> For data access or deletion requests, contact ahad@wolfonstyle.com.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Wholesale & Retail Terms:</strong> Orders placed with Wolfon are subject to garment production specifications, minimum order quantity (MOQ) agreements, and international shipping protocols.
              </p>
              <p>
                <strong>2. Quality Standards:</strong> Every garment undergoes strict quality inspection at our manufacturing facility in Bangladesh. Returns for defect items are accepted within 30 days of delivery.
              </p>
              <p>
                <strong>3. Private Label Rights:</strong> Clients procuring customized product supply retain full proprietary rights over their brand labels and logos.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-[#2C2C2C]">
          <button
            onClick={onClose}
            className="bg-[#FFB800] text-[#121212] font-anton text-xs px-6 py-2.5 uppercase hover:bg-[#e0a200]"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
