import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LOGO_FOOTER } from '../data/mockData';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenTermsModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] border-t border-[#2C2C2C] text-[#c6c6c7] font-hanken text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#2C2C2C]">
          {/* Brand Identity */}
          <div className="lg:col-span-4 ">
            <a href="#" className="inline-block">
              <img
                src={LOGO_FOOTER}
                alt="WOLFON Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="font-hanken text-xs text-[#FFB800] uppercase tracking-widest  pl-0.5">
              STRENGTH IN EVERY STITCH.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-hanken font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 uppercase tracking-wider text-[11px]">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-[#FFB800] transition-colors">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#FFB800] transition-colors">
                  ABOUT US
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('drop-shoulder')} className="hover:text-[#FFB800] transition-colors">
                  COLLECTIONS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#FFB800] transition-colors">
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-hanken font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-4">
              PRODUCT CATEGORIES
            </h4>
            <ul className="space-y-2 uppercase tracking-wider text-[11px]">
              <li><button onClick={() => scrollToSection('drop-shoulder')} className="hover:text-[#FFB800]">T-SHIRTS</button></li>
              <li><button onClick={() => scrollToSection('upcoming')} className="hover:text-[#FFB800]">POLO SHIRTS</button></li>
              <li><button onClick={() => scrollToSection('upcoming')} className="hover:text-[#FFB800]">DROPPED SEAM T-SHIRTS</button></li>
              <li><button onClick={() => scrollToSection('upcoming')} className="hover:text-[#FFB800]">HOODIES</button></li>
              <li><button onClick={() => scrollToSection('upcoming')} className="hover:text-[#FFB800]">SWEATSHIRTS</button></li>
              <li><button onClick={() => scrollToSection('upcoming')} className="hover:text-[#FFB800]">JACKETS</button></li>
            </ul>
          </div>

          {/* Customer Info & Contact */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="font-hanken font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-3">
                CUSTOMER INFORMATION
              </h4>
              <ul className="space-y-2 uppercase tracking-wider text-[11px]">
                <li>
                  <button onClick={onOpenPrivacyModal} className="hover:text-[#FFB800]">
                    PRIVACY POLICY
                  </button>
                </li>
                <li>
                  <button onClick={onOpenTermsModal} className="hover:text-[#FFB800]">
                    TERMS & CONDITIONS
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-hanken font-bold text-[#FFFFFF] uppercase tracking-widest text-xs mb-2">
                CONTACT US
              </h4>
              <div className="text-[11px] space-y-1 text-[#9e8f78]">
                <div>AHAD HOSSAIN</div>
                <div>Head of Business Development & Client Management</div>
                <div className="text-[#e5e2e1] flex items-center gap-1.5">
                  <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-4 h-auto inline-block" />
                  <span>+49-176-57877318</span>
                </div>
                <div className="text-[#e5e2e1]">ahad@wolfonstyle.com</div>
                <div>Augsburg, Germany</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-hanken text-[11px] text-[#9e8f78] uppercase tracking-wider">
          <div className="flex items-center space-x-6">
            <span className="font-bold text-[#FFFFFF]">FOLLOW US</span>
            <a
              href="https://www.facebook.com/wolfonstyle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 hover:text-[#FFB800]"
            >
              <span>FACEBOOK</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/company/wolfonstyle.com/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 hover:text-[#FFB800]"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span>© 2026 WOLFON. STRENGTH IN EVERY STITCH.</span>
            <span className="block sm:inline sm:ml-4 text-[10px] ">DEVELOPED BY EPICODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
