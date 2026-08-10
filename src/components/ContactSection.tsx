'use client';

import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/mockData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#121212] border-t border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6 pt-4">
            <h2 className="font-anton text-5xl sm:text-6xl lg:text-7xl text-[#FFFFFF] tracking-tight uppercase leading-[0.95]">
              {CONTACT_INFO.headline}
            </h2>

            <div className="space-y-4 font-hanken text-sm sm:text-base text-[#c6c6c7] leading-relaxed font-normal max-w-xl">
              <p>{CONTACT_INFO.p1}</p>
              <p>{CONTACT_INFO.p2}</p>
            </div>
          </div>

          {/* Right Contact Card Form */}
          <div className="lg:col-span-6 bg-[#1c1b1b] border border-[#2C2C2C] p-8 sm:p-10 relative">
            {/* Box Header */}
            <div className="flex items-center justify-between border-b border-[#2C2C2C] pb-6 mb-6">
              <h3 className="font-anton text-3xl sm:text-4xl text-[#FFFFFF] tracking-wide uppercase">
                INITIATE CONTACT
              </h3>
              <ArrowUpRight className="w-8 h-8 text-[#FFB800]" />
            </div>

            {/* Direct Contact Person Meta */}
            <div className="mb-8 font-hanken text-xs space-y-1 text-[#c6c6c7]">
              <div className="font-bold text-[#FFFFFF] tracking-wider text-sm uppercase">
                {CONTACT_INFO.contactPerson}
              </div>
              <div className="text-[#9e8f78]">{CONTACT_INFO.role}</div>
              <div className="text-[#e5e2e1] pt-1 flex items-center gap-2">
                <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-4 h-auto inline-block" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="text-[#FFB800]">{CONTACT_INFO.email}</div>
              <div className="text-[#9e8f78]">{CONTACT_INFO.location}</div>
            </div>

            {submitted ? (
              <div className="bg-[#121212] border border-[#FFB800] p-6 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#FFB800] mx-auto" />
                <h4 className="font-anton text-2xl text-[#FFFFFF] uppercase">
                  MESSAGE TRANSMITTED
                </h4>
                <p className="font-hanken text-xs text-[#c6c6c7]">
                  Thank you for reaching out, {formData.name}. Our business development team will respond to {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-2 text-xs font-hanken font-bold text-[#FFB800] uppercase underline tracking-widest cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-hanken text-xs font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name or company"
                    className="w-full bg-[#121212] border-b border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] font-hanken text-sm px-3 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-hanken text-xs font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#121212] border-b border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] font-hanken text-sm px-3 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-hanken text-xs font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Bulk Order / Private Label Supply"
                    className="w-full bg-[#121212] border-b border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] font-hanken text-sm px-3 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-hanken text-xs font-bold tracking-widest uppercase text-[#FFFFFF] mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, quantity requirement, or product specifications..."
                    className="w-full bg-[#121212] border-b border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] font-hanken text-sm px-3 py-2.5 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFB800] text-[#121212] font-anton text-lg tracking-widest py-4 uppercase hover:bg-[#e0a200] transition-colors cursor-pointer mt-4"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
