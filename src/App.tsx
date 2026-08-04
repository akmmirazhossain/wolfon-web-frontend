'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Product, UpcomingDrop, InquiryItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { FeaturedCategorySection } from './components/FeaturedCategorySection';
import { UpcomingDropsSection } from './components/UpcomingDropsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { SubscribeModal } from './components/SubscribeModal';
import { B2BQuoteModal } from './components/B2BQuoteModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  // Inquiry / Quote Basket State
  const [inquiryList, setInquiryList] = useState<InquiryItem[]>([]);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedUpcomingDrop, setSelectedUpcomingDrop] = useState<UpcomingDrop | null>(null);
  const [isB2BModalOpen, setIsB2BModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Inquiry List Operations
  const handleAddToInquiryList = (
    product: Product,
    quantity: number = 250,
    color?: string,
    notes?: string
  ) => {
    const chosenColor = color || product.colors[0]?.name || 'Standard';

    setInquiryList((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === chosenColor
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].estimatedQuantity = quantity;
        if (notes) updated[existingIdx].customNotes = notes;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          estimatedQuantity: quantity,
          selectedColor: chosenColor,
          customNotes: notes,
        },
      ];
    });

    setIsInquiryOpen(true);
  };

  const handleUpdateQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveInquiryItem(index);
      return;
    }
    setInquiryList((prev) => {
      const updated = [...prev];
      updated[index].estimatedQuantity = newQty;
      return updated;
    });
  };

  const handleRemoveInquiryItem = (index: number) => {
    setInquiryList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearInquiryList = () => {
    setInquiryList([]);
  };

  const handleCapabilitySelect = () => {
    setIsB2BModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e5e2e1] font-hanken selection:bg-[#FFB800] selection:text-[#121212]">
      {/* Fixed Navbar */}
      <Navbar
        inquiryCount={inquiryList.length}
        onOpenInquiryList={() => setIsInquiryOpen(true)}
        onOpenB2B={() => setIsB2BModalOpen(true)}
        activeSection="hero"
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExplore={() => {
            const el = document.getElementById('drop-shoulder');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenB2B={() => setIsB2BModalOpen(true)}
        />

        {/* Our Capabilities */}
        <CapabilitiesSection onSelectCapability={handleCapabilitySelect} />

        {/* Featured Garment Catalog: Drop Shoulder T-Shirts */}
        <FeaturedCategorySection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToInquiryList={(product) => handleAddToInquiryList(product)}
          inquiredProductIds={inquiryList.map((item) => item.product.id)}
        />

        {/* Upcoming Drops & Production Lines */}
        <UpcomingDropsSection
          onNotifyDrop={(drop) => setSelectedUpcomingDrop(drop)}
        />

        {/* Why Choose Wolfon */}
        <WhyChooseSection />

        {/* About Us / Our Story */}
        <AboutSection />

        {/* Initiate Contact & Scale Your Vision */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setLegalModalType('privacy')}
        onOpenTermsModal={() => setLegalModalType('terms')}
      />

      {/* Garment Specification & Bulk Quote Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToInquiryList={(product, qty, color, notes) =>
          handleAddToInquiryList(product, qty, color, notes)
        }
        onDirectQuoteInquiry={() => {
          setIsB2BModalOpen(true);
        }}
      />

      {/* B2B Quote Basket Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        inquiryList={inquiryList}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveInquiryItem}
        onClearList={handleClearInquiryList}
      />

      {/* Subscribe / Tech Pack Download Modal */}
      <SubscribeModal
        drop={selectedUpcomingDrop}
        onClose={() => setSelectedUpcomingDrop(null)}
      />

      {/* B2B / Manufacturing Inquiry Modal */}
      <B2BQuoteModal
        isOpen={isB2BModalOpen}
        onClose={() => setIsB2BModalOpen(false)}
      />

      {/* Privacy / Terms Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
