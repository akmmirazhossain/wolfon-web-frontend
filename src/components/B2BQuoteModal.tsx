'use client';

import React, { useState } from 'react';
import { X, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

interface B2BQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BQuoteModal: React.FC<B2BQuoteModalProps> = ({ isOpen, onClose }) => {

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    serviceType: 'Private Label Manufacturing',
    moq: '100 - 500 pcs',
    gsmPreference: 'Heavyweight',
    fabricType: '100% Cotton',
    fabricColor: '#000000',
    notes: ''
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/b2b-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to send');

      setSubmitted(true);
    } catch (err) {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;



  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] border border-[#2C2C2C] max-w-2xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FFFFFF] hover:text-[#FFB800] p-1 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#2C2C2C]">
          <div className="w-10 h-10 bg-[#FFB800] flex items-center justify-center text-[#121212]">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="font-hanken text-[10px] font-bold text-[#FFB800] uppercase tracking-widest block">
              B2B & PRIVATE LABEL SUPPLY
            </span>
            <h3 className="font-anton text-2xl sm:text-3xl text-[#FFFFFF] uppercase">
              WHOLESALE & MANUFACTURING INQUIRY
            </h3>
          </div>
        </div>

        {submitted ? (
          <div className="bg-[#1c1b1b] border border-[#FFB800] p-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#FFB800] mx-auto" />
            <h4 className="font-anton text-2xl text-[#FFFFFF] uppercase">
              INQUIRY RECEIVED
            </h4>
            <p className="font-hanken text-xs text-[#c6c6c7] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#FFFFFF]">{form.name}</span> from <span className="text-[#FFB800]">{form.company || 'your brand'}</span>.
              Ahad Hossain (Head of Business Development & Client Management) will send a tailored catalog, sample swatches specification, and pricing quote to <span className="text-[#FFB800]">{form.email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#FFB800] text-[#121212] font-anton text-sm px-8 py-3 uppercase hover:bg-[#e0a200]"
              >
                BACK TO OVERVIEW
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="font-hanken text-sm text-[#c6c6c7]">
              Leverage Wolfon&apos;s direct factory infrastructure in Bangladesh. We produce custom heavyweight garments, knitting and dying, private label tagging, and raw fabric shipments worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  COMPANY / BRAND NAME *
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="e.g. Apex Apparel Studio"
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                />
              </div>

              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  CONTACT PERSON *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  BUSINESS EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                />
              </div>

              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  PHONE / WHATSAPP *
                </label>
                <input
                  type="text"
                  value={form.phone}
                  required
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  SERVICE TYPE
                </label>
                <select
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                >
                  <option>Wolfon Product Supply</option>
                  <option>Custom Private Label</option>
                  <option>Raw Material Supply</option>
                </select>
              </div>

              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  ESTIMATED MOQ (QUANTITY)
                </label>
                <select
                  value={form.moq}
                  onChange={(e) => setForm({ ...form, moq: e.target.value })}
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                >
                  <option>100 - 500 pcs</option>
                  <option>500 - 2,000 pcs</option>
                  <option>2,000 - 10,000 pcs</option>
                  <option>10,000+ pcs</option>
                </select>
              </div>

              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  FABRIC GSM
                </label>
                <select
                  value={form.gsmPreference}
                  onChange={(e) => setForm({ ...form, gsmPreference: e.target.value })}
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                >
                  <option>Lightweight</option>
                  <option>Midweight</option>
                  <option>Heavyweight</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  FABRIC TYPE
                </label>
                <select
                  value={form.fabricType}
                  onChange={(e) => setForm({ ...form, fabricType: e.target.value })}
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none"
                >
                  <option>100% Cotton</option>
                  <option>Combed Cotton</option>
                  <option>Organic Cotton</option>
                  <option>Cotton Blend</option>
                  <option>100% Polyester</option>
                  <option>French Terry</option>
                  <option>Fleece</option>
                  <option>Piqué Cotton</option>
                  <option>Jersey Knit</option>
                  <option>Rib Knit</option>
                  <option>Spandex Blend</option>
                </select>
              </div>

              <div>
                <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                  FABRIC COLOR
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={form.fabricColor}
                    onChange={(e) => setForm({ ...form, fabricColor: e.target.value })}
                    placeholder="#000000"
                    pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
                    className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none font-mono"
                  />
                  <input
                    type="color"
                    value={/^#([A-Fa-f0-9]{6})$/.test(form.fabricColor) ? form.fabricColor : '#000000'}
                    onChange={(e) => setForm({ ...form, fabricColor: e.target.value })}
                    className="w-11 h-[38px] bg-[#1c1b1b] border border-[#353534] cursor-pointer shrink-0"
                    title="Pick a color"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-hanken text-sm font-bold uppercase text-[#FFFFFF] mb-1.5">
                ADDITIONAL SPECIFICATIONS
              </label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Mention custom wash, embroidery, screen-printing, woven neck labels, or custom packaging..."
                className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-3 outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[10px] text-[#9e8f78] uppercase font-hanken">
                <ShieldCheck className="w-4 h-4 text-[#FFB800]" />
                <span>DIRECT FACTORY COSTING • BANGLADESH SUPPLY CHAIN</span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-[#FFB800] text-[#121212] font-anton text-base tracking-widest px-8 py-3.5 uppercase hover:bg-[#e0a200] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'SENDING...' : 'REQUEST B2B QUOTE'}
              </button>
              {submitError && (
                <p className="text-red-400 text-xs font-hanken mt-2">{submitError}</p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
