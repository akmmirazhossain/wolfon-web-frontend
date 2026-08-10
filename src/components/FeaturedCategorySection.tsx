'use client';

import React from 'react';
import { Product } from '../types';
import { DROP_SHOULDER_PRODUCTS } from '../data/mockData';
import { Eye, ClipboardList, Check } from 'lucide-react';

interface FeaturedCategorySectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToInquiryList: (product: Product) => void;
  inquiredProductIds?: string[];
}

export const FeaturedCategorySection: React.FC<FeaturedCategorySectionProps> = ({
  onSelectProduct,
  onAddToInquiryList,
  inquiredProductIds = [],
}) => {
  return (
    <section id="drop-shoulder" className="py-24 bg-[#121212] border-t border-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="font-hanken text-xs font-bold text-[#FFB800] tracking-[0.2em] uppercase">
            FEATURED GARMENT CATEGORY
          </span>
          <h2 className="font-anton text-4xl sm:text-6xl text-[#FFFFFF] tracking-tight uppercase">
            DROP SHOULDER T-SHIRTS
          </h2>
          {/* <p className="font-hanken text-sm sm:text-base text-[#c6c6c7]">
            Heavyweight oversized essentials engineered for streetwear brands & wholesale buyers.
          </p> */}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DROP_SHOULDER_PRODUCTS.map((product) => {
            const isInquired = inquiredProductIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-[#1c1b1b] border border-[#2C2C2C] group flex flex-col justify-between transition-all duration-300 hover:border-[#FFB800]"
              >
                {/* Product Image Box */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-[3/4] overflow-hidden bg-[#201f1f] cursor-pointer"
                >
                  {/* Tag Badge */}
                  {/* <div className="absolute top-3 left-3 z-10 bg-[#FFB800] text-[#121212] font-hanken text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1">
                    {product.tag}
                  </div> */}

                  {/* MOQ Pill */}
                  <div className="absolute top-3 right-3 z-10 bg-[#121212]/90 border border-[#2C2C2C] text-[#e5e2e1] font-hanken text-[10px] font-bold tracking-wider uppercase px-2 py-0.5">
                    MOQ: {product.moq.split('/')[0]}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center contrast-125 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 gap-2 pointer-events-none z-20">
                    {/* <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="pointer-events-auto w-full max-w-[200px] bg-[#121212] text-[#FFFFFF] border border-[#2C2C2C] py-2.5 px-3 hover:bg-[#FFB800] hover:text-[#121212] transition-colors cursor-pointer flex items-center justify-center space-x-2 font-anton text-xs tracking-wider uppercase"
                    >
                      <Eye className="w-4 h-4" />
                      <span>VIEW TECH SPECS</span>
                    </button> */}

                    {/* <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToInquiryList(product);
                      }}
                      className={`pointer-events-auto w-full max-w-[200px] py-2.5 px-3 font-anton tracking-wider text-xs uppercase transition-colors cursor-pointer flex items-center justify-center space-x-2 ${isInquired
                        ? 'bg-[#2a2a2a] text-[#FFB800] border border-[#FFB800]'
                        : 'bg-[#FFB800] text-[#121212] hover:bg-[#e0a200]'
                        }`}
                    >
                      {isInquired ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>ADDED TO QUOTE</span>
                        </>
                      ) : (
                        <>
                          <ClipboardList className="w-4 h-4" />
                          <span>ADD TO QUOTE LIST</span>
                        </>
                      )}
                    </button> */}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="pointer-events-auto w-full max-w-[200px] bg-[#121212] text-[#FFFFFF] border border-[#2C2C2C] py-2.5 px-3 hover:bg-[#FFB800] hover:text-[#121212] transition-colors cursor-pointer flex items-center justify-center space-x-2 font-anton text-xs tracking-wider uppercase"
                    >
                      <Eye className="w-4 h-4" />
                      <span>VIEW IMAGE</span>
                    </button>
                  </div>
                </div>

                {/* Product Info Bar */}
                <div className="p-5 border-t border-[#2C2C2C] bg-[#121212] flex flex-col justify-between space-y-2">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-anton text-lg sm:text-xl text-[#FFFFFF] tracking-wide uppercase hover:text-[#FFB800] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                  </div>

                  {/* <div className="pt-2 border-t border-[#2a2a2a] flex items-center justify-between text-[11px] font-hanken">
                    <span className="text-[#FFB800] font-bold uppercase">
                      MOQ: {product.moq}
                    </span>
                    <span className="text-[#c6c6c7]">
                      LEAD TIME: {product.leadTime}
                    </span>
                  </div> */}

                  {/* Available Colorways */}
                  <div className="pt-4 border-t border-[#2a2a2a] flex items-center space-x-2">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
