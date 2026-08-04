'use client';

import React, { useState } from 'react';
import { InquiryItem } from '../types';
import { X, Trash2, ArrowRight, CheckCircle2, ShieldCheck, ClipboardList, Send } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryList: InquiryItem[];
  onUpdateQty: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearList: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  inquiryList,
  onUpdateQty,
  onRemoveItem,
  onClearList,
}) => {
  const [step, setStep] = useState<'list' | 'form' | 'success'>('list');
  const [buyerInfo, setBuyerInfo] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    destinationPort: '',
    targetDelivery: '30-45 Days',
    additionalRequirements: '',
  });

  if (!isOpen) return null;

  const totalUnits = inquiryList.reduce((sum, item) => sum + item.estimatedQuantity, 0);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onClearList();
    }, 1500);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
      >
        <div className="w-screen max-w-lg bg-[#121212] border-l border-[#2C2C2C] flex flex-col justify-between shadow-2xl relative">
          {/* Header */}
          <div className="p-6 border-b border-[#2C2C2C] flex items-center justify-between bg-[#1c1b1b]">
            <div className="flex items-center space-x-3">
              <ClipboardList className="w-5 h-5 text-[#FFB800]" />
              <span className="font-anton text-xl sm:text-2xl text-[#FFFFFF] tracking-wide uppercase">
                {step === 'list' && 'BULK QUOTE BASKET'}
                {step === 'form' && 'COMPANY & SHIPPING DETAILS'}
                {step === 'success' && 'INQUIRY SUBMITTED'}
              </span>
              <span className="bg-[#2a2a2a] text-[#FFB800] font-anton text-xs px-2 py-0.5">
                ({inquiryList.length} STYLES)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#FFFFFF] hover:text-[#FFB800] cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {step === 'list' && (
              <>
                {/* B2B Banner */}
                <div className="bg-[#1c1b1b] border border-[#FFB800]/50 p-4 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-anton text-[#FFB800] uppercase">
                    <span>DIRECT FACTORY QUOTATION</span>
                  </div>
                  <p className="font-hanken text-xs text-[#c6c6c7]">
                    Select garment styles and target quantities. Our Business Development team provides FOB / CIF pricing & sample dispatch specs.
                  </p>
                </div>

                {inquiryList.length === 0 ? (
                  <div className="py-20 text-center space-y-4">
                    <ClipboardList className="w-12 h-12 text-[#514532] mx-auto" />
                    <p className="font-anton text-2xl text-[#514532] uppercase">
                      QUOTE BASKET IS EMPTY
                    </p>
                    <p className="font-hanken text-xs text-[#9e8f78] max-w-xs mx-auto">
                      Explore our Heavyweight Garment Catalog to add styles to your manufacturing quote list.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 divide-y divide-[#2C2C2C]">
                    {inquiryList.map((item, idx) => (
                      <div key={idx} className="pt-4 first:pt-0 flex space-x-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-24 object-cover bg-[#1c1b1b] border border-[#2C2C2C]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between">
                              <h4 className="font-anton text-lg text-[#FFFFFF] uppercase">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(idx)}
                                className="text-[#9e8f78] hover:text-[#FFB800] p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="font-hanken text-xs text-[#9e8f78] uppercase mt-0.5">
                              COLOR: <span className="text-[#FFFFFF]">{item.selectedColor || 'Standard'}</span> | {item.product.gsm} GSM
                            </p>
                            {item.customNotes && (
                              <p className="font-hanken text-[11px] text-[#FFB800] italic mt-1">
                                Note: {item.customNotes}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#2a2a2a]">
                            <span className="font-hanken text-xs text-[#9e8f78]">TARGET UNITS:</span>
                            <div className="flex items-center space-x-2">
                              {[100, 250, 500, 1000].map((qtyVal) => (
                                <button
                                  key={qtyVal}
                                  onClick={() => onUpdateQty(idx, qtyVal)}
                                  className={`px-2 py-1 text-[10px] font-anton transition-colors ${
                                    item.estimatedQuantity === qtyVal
                                      ? 'bg-[#FFB800] text-[#121212]'
                                      : 'bg-[#1c1b1b] text-[#c6c6c7] border border-[#2C2C2C] hover:border-[#FFB800]'
                                  }`}
                                >
                                  {qtyVal}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {step === 'form' && (
              <form id="inquiry-form" onSubmit={handleSubmitInquiry} className="space-y-4">
                <div className="bg-[#1c1b1b] p-4 border border-[#2C2C2C] space-y-2">
                  <div className="font-anton text-sm text-[#FFFFFF] uppercase">INQUIRY SUMMARY</div>
                  <div className="flex justify-between text-xs font-hanken text-[#c6c6c7]">
                    <span>Total Garment Styles</span>
                    <span className="text-[#FFFFFF] font-bold">{inquiryList.length} Styles</span>
                  </div>
                  <div className="flex justify-between text-xs font-hanken text-[#c6c6c7]">
                    <span>Estimated Total Production</span>
                    <span className="text-[#FFB800] font-bold">{totalUnits} Units</span>
                  </div>
                  <div className="flex justify-between text-xs font-hanken text-[#c6c6c7]">
                    <span>Manufacturing Origin</span>
                    <span className="text-[#FFFFFF]">Bangladesh Factory</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-hanken text-xs font-bold uppercase text-[#FFFFFF] mb-1">
                        COMPANY / BRAND *
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerInfo.companyName}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, companyName: e.target.value })}
                        placeholder="Brand Name"
                        className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-hanken text-xs font-bold uppercase text-[#FFFFFF] mb-1">
                        CONTACT NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerInfo.contactName}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, contactName: e.target.value })}
                        placeholder="Full Name"
                        className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-hanken text-xs font-bold uppercase text-[#FFFFFF] mb-1">
                        BUSINESS EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={buyerInfo.email}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
                        placeholder="buyer@brand.com"
                        className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-hanken text-xs font-bold uppercase text-[#FFFFFF] mb-1">
                        PHONE / WHATSAPP
                      </label>
                      <input
                        type="text"
                        value={buyerInfo.phone}
                        onChange={(e) => setBuyerInfo({ ...buyerInfo, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-hanken text-xs font-bold uppercase text-[#FFFFFF] mb-1">
                      DESTINATION COUNTRY / PORT (FOR FOB / CIF QUOTE)
                    </label>
                    <input
                      type="text"
                      value={buyerInfo.destinationPort}
                      onChange={(e) => setBuyerInfo({ ...buyerInfo, destinationPort: e.target.value })}
                      placeholder="e.g. Hamburg, Germany or Los Angeles, USA"
                      className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-hanken text-xs font-bold uppercase text-[#FFFFFF] mb-1">
                      ADDITIONAL TECH PACK OR PACKAGING NOTES
                    </label>
                    <textarea
                      rows={2}
                      value={buyerInfo.additionalRequirements}
                      onChange={(e) => setBuyerInfo({ ...buyerInfo, additionalRequirements: e.target.value })}
                      placeholder="Specify neck tags, custom washes, polybag packing, or barcode requirements..."
                      className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none resize-none"
                    />
                  </div>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#FFB800] mx-auto animate-pulse" />
                <h3 className="font-anton text-3xl text-[#FFFFFF] uppercase">
                  BULK QUOTE REQUEST SENT!
                </h3>
                <p className="font-hanken text-xs text-[#c6c6c7] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-[#FFFFFF]">{buyerInfo.contactName || 'Valued Partner'}</span>. Ahad Hossain (Head of Business Development) will review your {totalUnits} unit garment request and send direct factory FOB pricing & swatch dispatch details to <span className="text-[#FFB800]">{buyerInfo.email || 'your email'}</span> within 24 hours.
                </p>
                <div className="bg-[#1c1b1b] border border-[#2C2C2C] p-4 font-hanken text-xs text-[#9e8f78] uppercase">
                  INQUIRY REF: #WLF-B2B-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {inquiryList.length > 0 && (
            <div className="p-6 border-t border-[#2C2C2C] bg-[#1c1b1b] space-y-3">
              {step === 'list' && (
                <>
                  <div className="flex items-center justify-between font-anton text-lg text-[#FFFFFF]">
                    <span>TOTAL ESTIMATED UNITS</span>
                    <span className="text-[#FFB800]">{totalUnits} PCS</span>
                  </div>
                  <button
                    onClick={() => setStep('form')}
                    className="w-full bg-[#FFB800] text-[#121212] font-anton text-lg tracking-widest py-4 uppercase hover:bg-[#e0a200] transition-colors cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>PROCEED TO SUBMIT INQUIRY</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {step === 'form' && (
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setStep('list')}
                    className="w-1/3 bg-[#121212] border border-[#2C2C2C] text-[#FFFFFF] font-anton text-sm py-3 uppercase hover:border-[#FFB800]"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    form="inquiry-form"
                    className="w-2/3 bg-[#FFB800] text-[#121212] font-anton text-base tracking-widest py-3 uppercase hover:bg-[#e0a200] cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT QUOTE REQUEST</span>
                  </button>
                </div>
              )}

              {step === 'success' && (
                <button
                  onClick={() => {
                    setStep('list');
                    onClose();
                  }}
                  className="w-full bg-[#FFB800] text-[#121212] font-anton text-base tracking-widest py-4 uppercase hover:bg-[#e0a200]"
                >
                  RETURN TO CATALOG
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
