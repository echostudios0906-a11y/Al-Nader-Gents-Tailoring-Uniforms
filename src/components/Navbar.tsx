import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, Globe, Menu, X, FileText } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/businessData';

interface NavbarProps {
  onOpenPromptModal: () => void;
  onNavigate: (sectionId: string) => void;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPromptModal,
  onNavigate,
  lang,
  setLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: lang === 'en' ? 'About' : 'من نحن' },
    { id: 'services', label: lang === 'en' ? 'Services' : 'الخدمات' },
    { id: 'estimator', label: lang === 'en' ? 'Cost Estimator' : 'حاسبة التكلفة' },
    { id: 'testimonials', label: lang === 'en' ? 'Reviews' : 'التقييمات' },
    { id: 'contact', label: lang === 'en' ? 'Contact' : 'تواصل معنا' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar for Corporate Trust and Quick Channels */}
      <div className="bg-neutral-900 text-neutral-300 text-xs border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[13px]">
            <a
              href={`tel:${BUSINESS_PROFILE.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Desk: {BUSINESS_PROFILE.primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              <span>Ajman Industrial 2 · Mon–Sat 8AM–10PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={onOpenPromptModal}
              className="flex items-center gap-1 text-neutral-300 hover:text-amber-400 transition-colors text-xs font-medium cursor-pointer"
              title="View full architectural prompt specification"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>System Prompt</span>
            </button>
            <span className="text-neutral-700">|</span>
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1 text-xs font-semibold text-neutral-200 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <a
              href={`https://wa.me/${BUSINESS_PROFILE.whatsappRaw}?text=Hello%20Al%20Nader%20Tailoring,%20I%20would%20like%20to%20inquire%20about%20uniform%20manufacturing`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-900/60 text-emerald-300 hover:bg-emerald-800/80 transition-colors text-xs font-medium border border-emerald-700/50"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (Adheres strictly to Top Bar Contract: 3 zones separated by gap-8) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center text-amber-400 font-bold text-lg shadow-xs group-hover:bg-amber-600 transition-colors">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-neutral-900 whitespace-nowrap">
                AL NADER
              </span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold -mt-1">
                Gents Tailoring & Uniforms
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean nav links (single-line, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer border-b-2 border-transparent hover:border-amber-600"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('estimator')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold tracking-wide uppercase text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer border border-neutral-800"
            >
              {lang === 'en' ? 'Get Instant Quote' : 'احسب التكلفة فوراً'}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 rounded-md hover:bg-neutral-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-neutral-50 rounded-lg cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('estimator')}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-neutral-900 rounded-lg"
              >
                {lang === 'en' ? 'Bulk Cost Estimator' : 'حاسبة التكلفة'}
              </button>
              <a
                href={`https://wa.me/${BUSINESS_PROFILE.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                WhatsApp Sales Desk (+971 54 710 3801)
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
