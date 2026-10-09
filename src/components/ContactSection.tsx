import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CreditCard, 
  Car, 
  Send, 
  Check, 
  ExternalLink,
  Building,
  Languages
} from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/businessData';

interface ContactSectionProps {
  lang: 'en' | 'ar';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Uniform Bulk Order');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <span>Direct Communications Desk</span>
            <span aria-hidden="true">·</span>
            <span>Ajman Industrial 2</span>
            <span aria-hidden="true">·</span>
            <span>Bilingual Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
            Connect with Al Nader Manufacturing & Booking Desk
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Reach our procurement coordinators directly via phone, WhatsApp Business, or visit our Ajman Industrial 2 showroom. Service desk is fluent in English, Arabic, and Hindi.
          </p>
        </div>

        {/* Main Grid: Contact Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Access Details & Operational Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Booking Desk Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Primary Booking & Sales Lines</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start justify-between p-3.5 bg-white rounded-xl border border-neutral-200">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-neutral-500 block">Primary Booking Desk</span>
                    <a
                      href={`tel:${BUSINESS_PROFILE.primaryPhone.replace(/\s+/g, '')}`}
                      className="text-base font-extrabold text-neutral-900 hover:text-amber-700 transition-colors tabular-nums font-mono"
                    >
                      {BUSINESS_PROFILE.primaryPhone}
                    </a>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Voice & WhatsApp
                  </span>
                </div>

                <div className="flex items-start justify-between p-3.5 bg-white rounded-xl border border-neutral-200">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-neutral-500 block">Secondary Sales Line</span>
                    <a
                      href={`tel:${BUSINESS_PROFILE.secondaryPhone.replace(/\s+/g, '')}`}
                      className="text-base font-extrabold text-neutral-900 hover:text-amber-700 transition-colors tabular-nums font-mono"
                    >
                      {BUSINESS_PROFILE.secondaryPhone}
                    </a>
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                    Direct Line
                  </span>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS_PROFILE.whatsappRaw}?text=Hello%20Al%20Nader%20Tailoring,%20I%20would%20like%20to%20discuss%20a%20commercial%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Business Chat</span>
                </a>
              </div>
            </div>

            {/* Physical Geolocation Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xs space-y-4 text-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Headquarters & Facility Geolocation</span>
              </h3>

              <div className="space-y-2 text-neutral-700">
                <p className="font-semibold text-neutral-900">
                  {BUSINESS_PROFILE.headquartersAddress}
                </p>
                <p className="text-neutral-500">
                  Secondary Reference: {BUSINESS_PROFILE.secondaryAddress}
                </p>
                <p className="text-neutral-500 font-mono">
                  Postal Registry: {BUSINESS_PROFILE.postalCode}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 space-y-2 text-neutral-600">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated customer parking (Free street and private customer lot)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Mon – Sat: 08:00 AM – 10:00 PM | Sun: 08:00 AM – 12:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-neutral-700 shrink-0" />
                  <span>Languages: English · Arabic (العربية) · Hindi (हिन्दी)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-neutral-700 shrink-0" />
                  <span>Payment: Cash, Corporate Bank Transfer (IBAN), B2B Procurement Agreements</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Ajman+Industrial+2+Amman+Street+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inbound Contact & Quotation Dispatcher */}
          <div className="lg:col-span-7 bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              Send an Inbound Procurement Inquiry
            </h3>
            <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
              Have sample garments to replicate, or need a tender quotation for your enterprise staff? Fill out the form below and our manufacturing desk will respond promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-800">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Inquiry Dispatched to Al Nader Desk</span>
                </div>
                <p>
                  Thank you, <strong>{name}</strong>. Your message regarding <strong>{subject}</strong> has been logged in our corporate queue. We will contact you at <strong>{phone}</strong> within 2 hours during operational hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-emerald-800 underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abdullah Salem"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Corporate Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="procurement@company.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full p-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                    >
                      <option value="Industrial Safety Uniforms">Industrial Safety Uniforms (Coveralls / Vests)</option>
                      <option value="Corporate Fleet & Office Suiting">Corporate Fleet & Office Suiting</option>
                      <option value="School Uniform Supply Contract">School Uniform Supply Contract</option>
                      <option value="Sports Apparel & Sublimation Kits">Sports Apparel & Sublimation Kits</option>
                      <option value="DTF & High-Volume Embroidery">DTF & High-Volume Embroidery Only</option>
                      <option value="Bespoke Kandora / Suits">Bespoke Kandora / Gentleman Suits</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Order Details, Estimated Quantities & Timeline
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify target quantities (e.g. 250 coveralls with logo embroidery), preferred fabric specifications, or sample requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>

                  <span className="text-[11px] text-neutral-500">
                    Direct reply from Ajman sales desk within 2 hours
                  </span>
                </div>
              </form>
            )}

            {/* Direct Visit Directions Helper */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Directions to Showroom & Loading Bay
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Located on <strong>Amman Street in Ajman Industrial 2</strong>, directly adjacent to the UAE Exchange branch. For delivery trucks and heavy freight, access via 2, 56 Street for direct loading dock access. Customer vehicles have reserved parking immediately in front of Unit 5.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
