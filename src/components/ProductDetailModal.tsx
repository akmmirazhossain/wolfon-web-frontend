'use client';

import React, { useState } from 'react';
import { Product } from '../types';
import { X, ClipboardList, ShieldCheck, Factory, Layers, CheckCircle } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToInquiryList: (product: Product, quantity: number, color: string, notes: string) => void;
  onDirectQuoteInquiry: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToInquiryList,
  onDirectQuoteInquiry,
}) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(250);
  const [customNotes, setCustomNotes] = useState('');
  const [added, setAdded] = useState(false);

  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setQuantity(250);
      setCustomNotes('');
      setAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToInquiryList(product, quantity, selectedColor, customNotes);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#121212] border border-[#2C2C2C] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#1c1b1b] border border-[#2C2C2C] p-2 text-[#FFFFFF] hover:text-[#FFB800] hover:border-[#FFB800] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 gap-8 p-6 sm:p-10">
          {/* Left Column - Product Image & Tech Badges */}
          <div className="space-y-4">
            <div className="relative max-h-[75vh] bg-[#1c1b1b] border border-[#2C2C2C] overflow-hidden flex items-center justify-center">
              {/* <span className="absolute top-3 left-3 z-10 bg-[#FFB800] text-[#121212] font-hanken text-[10px] font-extrabold tracking-widest uppercase px-3 py-1">
                {product.tag}
              </span>
              <span className="absolute bottom-3 right-3 z-10 bg-[#121212]/90 border border-[#2C2C2C] text-[#e5e2e1] font-hanken text-[10px] font-bold tracking-wider uppercase px-3 py-1">
                FACTORY SAMPLE READY
              </span> */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full max-h-[75vh] object-contain filter contrast-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Specs badges */}
            {/* <div className="grid grid-cols-3 gap-2 text-center font-hanken text-[11px] text-[#9e8f78]">
              <div className="bg-[#1c1b1b] border border-[#2C2C2C] py-2.5 px-1">
                <span className="block font-bold text-[#FFFFFF]">{product.gsm} GSM</span>
                HEAVYWEIGHT KNIT
              </div>
              <div className="bg-[#1c1b1b] border border-[#2C2C2C] py-2.5 px-1">
                <span className="block font-bold text-[#FFFFFF]">PRE-SHRUNK</span>
                BIO-WASHED COTTON
              </div>
              <div className="bg-[#1c1b1b] border border-[#2C2C2C] py-2.5 px-1">
                <span className="block font-bold text-[#FFFFFF]">OVERSIZED</span>
                DROP SHOULDER FIT
              </div>
            </div> */}
          </div>

          {/* Right Column - Manufacturing Tech Specs (hidden for now) */}
          {/*
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="font-hanken text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-1">
                B2B GARMENT SPECIFICATION
              </div>
              <h2 className="font-anton text-3xl sm:text-4xl text-[#FFFFFF] tracking-wide uppercase">
                {product.name}
              </h2>

              <div className="mt-3 bg-[#1c1b1b] border border-[#2C2C2C] p-3 flex items-center justify-between font-hanken text-xs">
                <div>
                  <span className="text-[#9e8f78] block">MINIMUM ORDER (MOQ)</span>
                  <span className="font-bold text-[#FFB800] text-sm">{product.moq}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#9e8f78] block">SAMPLE LEAD TIME</span>
                  <span className="font-bold text-[#FFFFFF] text-sm">{product.leadTime}</span>
                </div>
              </div>

              <p className="mt-4 font-hanken text-xs sm:text-sm text-[#c6c6c7] leading-relaxed">
                {product.description}
              </p>

              <div className="mt-5 space-y-2 font-hanken text-xs border-t border-[#2C2C2C] pt-4">
                <div className="flex justify-between">
                  <span className="text-[#9e8f78]">FABRIC COMPOSITION:</span>
                  <span className="text-[#FFFFFF] font-medium">{product.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9e8f78]">GARMENT CUT & FIT:</span>
                  <span className="text-[#FFFFFF] font-medium">{product.fit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9e8f78]">AVAILABLE SIZES:</span>
                  <span className="text-[#FFFFFF] font-medium">{product.sizes.join(' • ')}</span>
                </div>
              </div>

              <div className="mt-5">
                <label className="block font-hanken text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-2">
                  FACTORY CUSTOMIZATION OPTIONS
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.customization.map((opt) => (
                    <span
                      key={opt}
                      className="bg-[#1c1b1b] border border-[#353534] text-[#FFB800] font-hanken text-[11px] px-2.5 py-1 uppercase"
                    >
                      ✓ {opt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="block font-hanken text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-2">
                  BASE COLORWAY: <span className="text-[#FFB800]">{selectedColor}</span>
                </label>
                <div className="flex items-center space-x-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-none border-2 transition-all cursor-pointer ${
                        selectedColor === c.name ? 'border-[#FFB800] scale-110' : 'border-[#353534]'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="block font-hanken text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-2">
                  ESTIMATED BULK ORDER QUANTITY (PCS)
                </label>
                <div className="flex items-center space-x-2">
                  {[100, 250, 500, 1000].map((qtyVal) => (
                    <button
                      key={qtyVal}
                      type="button"
                      onClick={() => setQuantity(qtyVal)}
                      className={`flex-1 py-2 font-anton text-xs uppercase transition-all cursor-pointer ${
                        quantity === qtyVal
                          ? 'bg-[#FFB800] text-[#121212] font-bold'
                          : 'bg-[#1c1b1b] text-[#FFFFFF] border border-[#2C2C2C] hover:border-[#FFB800]'
                      }`}
                    >
                      {qtyVal} PCS
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="block font-hanken text-xs font-bold uppercase tracking-widest text-[#FFFFFF] mb-1">
                  CUSTOM PRINTING / LABELING REQUIREMENTS (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. Screen print front chest + woven neck tag..."
                  className="w-full bg-[#1c1b1b] border border-[#353534] focus:border-[#FFB800] text-[#FFFFFF] text-xs p-2.5 outline-none"
                />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#2C2C2C]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  className="bg-[#1c1b1b] border border-[#2C2C2C] text-[#FFFFFF] hover:border-[#FFB800] hover:text-[#FFB800] font-anton text-sm tracking-widest py-3.5 uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2"
                >
                  {added ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-[#FFB800]" />
                      <span>ADDED TO QUOTE</span>
                    </>
                  ) : (
                    <>
                      <ClipboardList className="w-4 h-4 text-[#FFB800]" />
                      <span>ADD TO QUOTE LIST</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onDirectQuoteInquiry(product);
                  }}
                  className="bg-[#FFB800] text-[#121212] font-anton text-sm tracking-widest py-3.5 uppercase hover:bg-[#e0a200] transition-colors cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>REQUEST DIRECT QUOTE</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 font-hanken text-[10px] text-[#9e8f78] uppercase text-center">
                <div className="flex flex-col items-center">
                  <Factory className="w-4 h-4 text-[#FFB800] mb-1" />
                  <span>DIRECT FACTORY</span>
                </div>
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-4 h-4 text-[#FFB800] mb-1" />
                  <span>QUALITY AUDITED</span>
                </div>
                <div className="flex flex-col items-center">
                  <Layers className="w-4 h-4 text-[#FFB800] mb-1" />
                  <span>CUSTOM TECH PACKS</span>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};