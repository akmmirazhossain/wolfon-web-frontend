import React from 'react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#1c1b1b] border-t border-[#2C2C2C] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="font-hanken text-xs font-bold text-[#FFB800] tracking-[0.25em] uppercase">
          WHY CHOOSE WOLFON
        </span>
        <p className="font-hanken text-base sm:text-lg lg:text-xl text-[#e5e2e1] leading-relaxed font-normal">
          At Wolfon, we are committed to delivering premium-quality clothing that combines comfort, durability, and modern everyday style. Our garments are made from high-quality stretchable cotton and polyester blends, offering a soft, breathable feel and long-lasting performance. Proudly made in Bangladesh by skilled professionals, every product is crafted with attention to detail and offered at a fair price, backed by our commitment to customer satisfaction.
        </p>
      </div>
    </section>
  );
};
