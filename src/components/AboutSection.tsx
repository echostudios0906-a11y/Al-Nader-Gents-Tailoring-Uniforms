import React from 'react';
import { Building2, CheckCircle2, Clock, Globe2, Truck, ShieldAlert } from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/businessData';

interface AboutSectionProps {
  lang: 'en' | 'ar';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <span>Corporate Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2015</span>
            <span aria-hidden="true">·</span>
            <span>Northern Emirates Supply Chain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
            {lang === 'en'
              ? 'From Neighborhood Craftsmanship to Enterprise Textile Manufacturing'
              : 'من ورشة خياطة تقليدية إلى مصنع إنتاج نسيجي رائد في الإمارات'}
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            {lang === 'en' ? (
              <>
                Al Nader Gents Tailoring L.L.C is an established commercial tailoring and enterprise uniform manufacturer operating out of the industrial sector of Ajman, UAE. Founded in 2015 as a Private Limited Company, the firm has expanded its footprint into a trusted high-volume textile customization and corporate uniform supplier serving companies across the seven Emirates.
              </>
            ) : (
              <>
                تأسست شركة النادر للخياطة الرجالية ذ.م.م في عام 2015 في المنطقة الصناعية بعجمان، وتوسعت لتصبح مركزاً رئيسياً لتصنيع الزي الموحد وتوريد الملابس المهنية والرياضية لمئات المؤسسات في دولة الإمارات.
              </>
            )}
          </p>
        </div>

        {/* Dual Stream Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Stream 1: Enterprise Uniforms */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wide uppercase text-amber-700">Stream 01</span>
                <span className="text-xs text-neutral-500 font-medium">B2B Institutional Supply</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Commercial Uniform & Workwear Manufacturing
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Executing high-volume supply contracts for industrial safety apparel (high-vis vests, multi-pocket utility wear, flame-resistant coveralls), corporate fleet uniforms, school uniforms, and culinary hospitality attire with rigorous material consistency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sanforized industrial twill & drill cotton</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reinforced double & triple safety seams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tiered wholesale B2B pricing model</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Corporate banking (IBAN) & invoiced accounts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Primary Sector: Construction, Logistics & Hospitality</span>
              <span className="font-semibold text-neutral-700">MOQ: 20–25 Units</span>
            </div>
          </div>

          {/* Stream 2: Bespoke & Tailoring Craft */}
          <div className="lg:col-span-5 bg-neutral-900 text-white p-8 rounded-xl border border-neutral-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wide uppercase text-amber-400">Stream 02</span>
                <span className="text-xs text-neutral-400 font-medium">Artisanal Tailoring</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Bespoke Gents Tailoring & Traditional Wear
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Rooted in authentic Middle Eastern sartorial craft. Individual bespoke measurements for custom Emirati, Kuwaiti, and Omani Kandoras, executive suits, and bespoke formal trousers utilizing imported Japanese and European fabrics.
              </p>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Authentic Emirati collar & stitch profiling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Toyobo Japanese & Super 120s European wools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>On-site tailor fittings & alteration workshop</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>Showroom: Unit 5, Plot 126, Amman St</span>
              <span className="font-semibold text-amber-400">Individual Orders Welcome</span>
            </div>
          </div>
        </div>

        {/* Corporate Registry & Operational Specifications Table */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-neutral-100/70 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-neutral-700" />
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                Corporate Registration & Operational Specifications
              </h4>
            </div>
            <span className="text-xs text-neutral-500 font-mono">Ajman Chamber of Commerce Certified</span>
          </div>

          <div className="divide-y divide-neutral-100 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Legal Entity Name</span>
              <span className="md:col-span-2 font-medium text-neutral-900">{BUSINESS_PROFILE.legalName}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Establishment Year & Structure</span>
              <span className="md:col-span-2 font-medium text-neutral-900">
                Founded {BUSINESS_PROFILE.establishedYear} · {BUSINESS_PROFILE.tradeLicenseType}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Headquarters Address</span>
              <span className="md:col-span-2 font-medium text-neutral-900">
                {BUSINESS_PROFILE.headquartersAddress}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Secondary Geolocation</span>
              <span className="md:col-span-2 text-neutral-700">
                {BUSINESS_PROFILE.secondaryAddress} · Postal: {BUSINESS_PROFILE.postalCode}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Service Desk Languages</span>
              <div className="md:col-span-2 flex items-center gap-3 text-neutral-700">
                <Globe2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>English · Arabic (العربية) · Hindi (हिन्दी)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Operating Schedule</span>
              <div className="md:col-span-2 flex items-center gap-3 text-neutral-700">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <p>{BUSINESS_PROFILE.operatingHours.weekday}</p>
                  <p className="text-xs text-neutral-500">{BUSINESS_PROFILE.operatingHours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:px-6 hover:bg-neutral-50/50 transition-colors">
              <span className="text-xs font-semibold uppercase text-neutral-500">Logistical Access</span>
              <div className="md:col-span-2 flex items-center gap-3 text-neutral-700">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated customer parking (free street and private lot), plus on-site delivery staging and bulk pallet handling zones.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
