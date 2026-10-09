import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { PromptModal } from './components/PromptModal';
import { Footer } from './components/Footer';
import { MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_PROFILE } from './data/businessData';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [estimatorGarment, setEstimatorGarment] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEstimate = (serviceTitle: string) => {
    setEstimatorGarment(serviceTitle);
    scrollToSection('estimator');
  };

  return (
    <div className={`min-h-screen bg-neutral-50 text-neutral-900 ${lang === 'ar' ? 'rtl font-sans' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <Navbar
        onOpenPromptModal={() => setShowPromptModal(true)}
        onNavigate={scrollToSection}
        lang={lang}
        setLang={setLang}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onNavigateToEstimator={() => scrollToSection('estimator')}
          onNavigateToContact={() => scrollToSection('contact')}
          lang={lang}
        />

        {/* About Section */}
        <AboutSection lang={lang} />

        {/* Services & Machinery Section */}
        <ServicesSection
          onSelectServiceForEstimate={handleSelectServiceForEstimate}
          lang={lang}
        />

        {/* Interactive Bulk Cost Estimator */}
        <CostEstimator
          initialGarment={estimatorGarment}
          lang={lang}
        />

        {/* Testimonials & 4.2★ Public Score */}
        <TestimonialsSection lang={lang} />

        {/* Contact & Geolocation */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPromptModal={() => setShowPromptModal(true)}
        lang={lang}
      />

      {/* Master Prompt Specification Modal */}
      <PromptModal
        isOpen={showPromptModal}
        onClose={() => setShowPromptModal(false)}
      />

      {/* Floating Quick WhatsApp Contact Button */}
      <a
        href={`https://wa.me/${BUSINESS_PROFILE.whatsappRaw}?text=Hello%20Al%20Nader%20Tailoring,%20I%20am%20inquiring%20about%20uniform%20manufacturing`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg transition-transform hover:scale-105"
        title="WhatsApp Direct Sales Desk"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Desk (+971 54 710 3801)</span>
      </a>
    </div>
  );
}
