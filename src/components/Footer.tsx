import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/businessData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPromptModal: () => void;
  lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPromptModal,
  lang,
}) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Corporate Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-neutral-950 font-bold text-base">
                N
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                AL NADER GENTS TAILORING L.L.C
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Established in 2015 as a Private Limited Company in the industrial sector of Ajman, UAE. Providing high-volume commercial uniform manufacturing, sportswear development, high-density embroidery, and bespoke tailoring across the Emirates.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p>
                <strong>License:</strong> Private Limited Company (L.L.C) · Est. 2015
              </p>
              <p>
                <strong>Postal Registry:</strong> P.O. Box: 7660, Ajman, United Arab Emirates
              </p>
              <p>
                <strong>Portal:</strong>{' '}
                <a
                  href={BUSINESS_PROFILE.ecommerceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  alnaderuniform.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Mirror */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Al Nader
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Services & Machinery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('estimator')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Bulk Cost Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Client Reviews (4.2★)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Core Manufacturing Sectors */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Apparel Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>· Industrial High-Vis Vests & Utility Coveralls</li>
              <li>· Corporate Office Suiting & Oxford Shirts</li>
              <li>· School Uniforms & Crested Knitwear</li>
              <li>· Hospitality Chef Coats & Waitstaff Attire</li>
              <li>· Sportswear Sublimation Club Jerseys</li>
              <li>· Direct-to-Film (DTF) & Powder Coating</li>
              <li>· Automated 15-Needle Computer Embroidery</li>
              <li>· Bespoke Traditional Emirati Kandoras</li>
            </ul>
          </div>

          {/* Operating Hours & Contact Desk */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Operations & Booking Desk
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{BUSINESS_PROFILE.operatingHours.weekday}</p>
                  <p className="text-neutral-500">{BUSINESS_PROFILE.operatingHours.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-neutral-300">
                  Unit 5, Plot 126, Amman St (Adjacent to UAE Exchange), Ajman Industrial 2
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-mono">{BUSINESS_PROFILE.primaryPhone}</p>
                  <p className="text-neutral-400 font-mono">{BUSINESS_PROFILE.secondaryPhone}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPromptModal}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer underline flex items-center gap-1"
                >
                  <span>View Full Architectural Prompt Specification</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} Al Nader Gents Tailoring L.L.C. All rights reserved. Registered in Ajman Industrial 2, UAE.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>English · العربية · हिन्दी</span>
            <span>·</span>
            <span>Customer Parking & Loading Docks Available</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
