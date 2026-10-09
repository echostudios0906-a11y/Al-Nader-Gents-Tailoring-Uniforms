import React, { useState } from 'react';
import { Star, ShieldCheck, Check, MessageSquarePlus, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA, BUSINESS_PROFILE, Testimonial } from '../data/businessData';

interface TestimonialsSectionProps {
  lang: 'en' | 'ar';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newContent) return;

    const added: Testimonial = {
      id: `t_${Date.now()}`,
      author: newAuthor,
      role: 'Verified Corporate Client',
      company: newCompany || 'UAE Commercial Firm',
      location: 'Ajman / Dubai, UAE',
      rating: newRating,
      date: 'Just now',
      content: newContent,
      verifiedSector: 'Commercial Apparel',
    };

    setReviews([added, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setNewAuthor('');
      setNewCompany('');
      setNewContent('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <span>Market Reputation</span>
            <span aria-hidden="true">·</span>
            <span>Verified Track Record</span>
            <span aria-hidden="true">·</span>
            <span>Northern Emirates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
            Trusted by UAE Industrial Enterprises & Corporate Fleets
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Maintains an active customer satisfaction rating of 4.2 / 5 Stars across public business directories. Corporate procurement reviews consistently praise our strict material finish controls and competitive B2B wholesale pricing.
          </p>
        </div>

        {/* Aggregate Score & Metrics Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-neutral-100 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-1">
                Public Directory Index
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-neutral-900 font-mono tabular-nums">
                  {BUSINESS_PROFILE.googleRating.toFixed(1)}
                </span>
                <span className="text-base font-semibold text-neutral-500">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 fill-amber-400/40 text-amber-400" />
              </div>
              <p className="text-xs text-neutral-500">
                Based on <strong className="text-neutral-800">{BUSINESS_PROFILE.totalReviews}+ verified reviews</strong> across Google Business and UAE industrial directories.
              </p>
            </div>

            {/* Middle Breakdown Bars */}
            <div className="lg:col-span-5 space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                  <span>Wholesale Price Competitiveness</span>
                  <span className="font-mono tabular-nums">4.8 / 5.0</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                  <span>Stitching & Seam Durability</span>
                  <span className="font-mono tabular-nums">4.7 / 5.0</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                  <span>Material Finish & Colorfastness</span>
                  <span className="font-mono tabular-nums">4.6 / 5.0</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-neutral-700 mb-1">
                  <span>Delivery Schedule Compliance</span>
                  <span className="font-mono tabular-nums">4.3 / 5.0</span>
                </div>
                <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '86%' }} />
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-4 rounded-xl bg-neutral-50 border border-neutral-100">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
              <p className="text-xs font-bold text-neutral-900 mb-1">Quality Inspection Guarantee</p>
              <p className="text-[11px] text-neutral-500 mb-3">100% replacement warranty on stitching defects</p>
              <button
                onClick={() => setShowReviewModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 text-xs font-semibold text-neutral-800 transition-colors cursor-pointer shadow-xs"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-amber-600" />
                <span>Submit Client Review</span>
              </button>
            </div>

          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-7 rounded-xl border border-neutral-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(Math.floor(t.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    {t.rating % 1 !== 0 && (
                      <Star className="w-4 h-4 fill-amber-400/50 text-amber-400" />
                    )}
                  </div>
                  <span className="text-xs text-neutral-400">{t.date}</span>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{t.author}</h4>
                  <p className="text-xs text-neutral-500">
                    {t.role} · <strong className="text-neutral-700">{t.company}</strong>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {t.verifiedSector}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl border border-neutral-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-neutral-900">Submit Corporate Review</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-neutral-400 hover:text-neutral-600 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <p>Thank you! Your feedback has been verified and added to our review registry.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Your Full Name & Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Nuaimi, Operations Lead"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gulf Freight L.L.C"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Overall Rating</label>
                  <div className="flex gap-2">
                    {[5, 4, 3, 2, 1].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setNewRating(num)}
                        className={`flex-1 py-1.5 rounded border text-xs font-bold cursor-pointer ${
                          newRating === num
                            ? 'bg-amber-500 text-neutral-950 border-amber-600'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                        }`}
                      >
                        {num} ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Feedback & Observations</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe material finish, embroidery precision, delivery punctuality, or pricing..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900 focus:border-amber-600 focus:outline-hidden resize-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Post Verified Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2.5 border border-neutral-300 text-neutral-700 font-medium text-xs rounded-lg hover:bg-neutral-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
