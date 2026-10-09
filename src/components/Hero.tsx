import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Factory, Award, MapPin } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/businessData';

interface HeroProps {
  onNavigateToEstimator: () => void;
  onNavigateToContact: () => void;
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToEstimator,
  onNavigateToContact,
  lang,
}) => {
  return (
    <section id="home" className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Visual background image with high-contrast measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_tailoring_factory_1791530943850.jpg"
          alt="Al Nader commercial uniform manufacturing and automated embroidery plant in Ajman Industrial 2"
          className="w-full h-full object-cover object-center brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl">
          {/* Quiet, unboxed kicker without pill enclosures */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4">
            <span>Al Nader Gents Tailoring L.L.C</span>
            <span aria-hidden="true">·</span>
            <span>Ajman Industrial 2</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2015</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none text-balance">
            {lang === 'en' ? (
              <>
                Commercial Uniform Manufacturing & Precision Textile Craft
              </>
            ) : (
              <>
                تصنيع الزي الموحد وخياطة الأزياء الرجالية الراقية في الإمارات
              </>
            )}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            {lang === 'en' ? (
              <>
                From corporate fleets and industrial safety workwear to custom sports apparel and high-density computer embroidery. Operating from our industrial manufacturing plant on Amman Street, Ajman Industrial 2, supplying high-volume contracts across the Emirates.
              </>
            ) : (
              <>
                من زي العمل الصناعي والشركات إلى الملابس الرياضية والتطريز الآلي عالي الدقة. نقدم عقود توريد وتفصيل مخصصة من مقرنا في منطقة عجمان الصناعية 2 لكافة إمارات الدولة.
              </>
            )}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onNavigateToEstimator}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>{lang === 'en' ? 'Launch Bulk Order Estimator' : 'حاسبة طلبيات الجملة'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${BUSINESS_PROFILE.whatsappRaw}?text=Hello%20Al%20Nader%20Tailoring,%20I%20am%20looking%20for%20a%20commercial%20uniform%20quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 backdrop-blur-xs whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'en' ? 'Direct WhatsApp Desk' : 'محادثة المبيعات واتساب'}</span>
            </a>

            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg text-neutral-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              <span>{lang === 'en' ? 'Visit Showroom' : 'زيارة المعرض'}</span>
            </button>
          </div>

          {/* Facility Location Quick Detail */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Unit 5, Plot No 126, Amman St (Adjacent to UAE Exchange), Ajman Industrial 2</span>
          </div>
        </div>
      </div>

      {/* 4-column KPI strip below the hero split */}
      <div className="relative z-10 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">2015</p>
                <p className="text-xs text-neutral-400 font-medium">Established in Ajman</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">500,000+</p>
                <p className="text-xs text-neutral-400 font-medium">Garments Manufactured</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">4.2 / 5.0</p>
                <p className="text-xs text-neutral-400 font-medium">Public Directory Rating</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">Ajman Ind. 2</p>
                <p className="text-xs text-neutral-400 font-medium">Free Parking & Loading Bay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
