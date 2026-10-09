import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Send, 
  Printer, 
  Check, 
  HelpCircle, 
  ArrowRight, 
  FileCheck, 
  Building, 
  Phone, 
  Sparkles,
  Info
} from 'lucide-react';
import { BUSINESS_PROFILE } from '../data/businessData';

interface CostEstimatorProps {
  initialGarment?: string;
  lang: 'en' | 'ar';
}

interface GarmentType {
  id: string;
  name: string;
  category: string;
  basePrice: number; // in AED
  minMoq: number;
}

const GARMENT_OPTIONS: GarmentType[] = [
  { id: 'coverall', name: 'Industrial Safety Coverall (Heavy Duty)', category: 'Safety', basePrice: 48, minMoq: 25 },
  { id: 'vest', name: 'High-Vis Utility Multi-Pocket Vest', category: 'Safety', basePrice: 22, minMoq: 25 },
  { id: 'polo', name: 'Classic Pique Cotton / Poly Polo Shirt', category: 'Corporate', basePrice: 28, minMoq: 20 },
  { id: 'shirt', name: 'Executive Oxford Button-Down Shirt', category: 'Corporate', basePrice: 42, minMoq: 20 },
  { id: 'suit', name: 'Executive Two-Piece Formal Suit', category: 'Corporate', basePrice: 165, minMoq: 10 },
  { id: 'jersey', name: 'Athletic Sports Jersey (Sublimated)', category: 'Sportswear', basePrice: 34, minMoq: 15 },
  { id: 'chef', name: 'Hospitality Chef Coat & Bistro Apron Set', category: 'Hospitality', basePrice: 52, minMoq: 15 },
  { id: 'kandora', name: 'Bespoke Emirati Tailored Kandora', category: 'Bespoke', basePrice: 110, minMoq: 1 },
];

export const CostEstimator: React.FC<CostEstimatorProps> = ({ initialGarment, lang }) => {
  const quantityInputId = useId();
  const fabricSelectId = useId();
  const notesTextareaId = useId();
  const [selectedGarmentId, setSelectedGarmentId] = useState<string>(() => {
    if (initialGarment) {
      const match = GARMENT_OPTIONS.find(g => g.name.toLowerCase().includes(initialGarment.toLowerCase()));
      if (match) return match.id;
    }
    return 'coverall';
  });

  const [quantity, setQuantity] = useState<number>(100);
  const [fabricGrade, setFabricGrade] = useState<'standard' | 'heavy' | 'flame' | 'dryfit' | 'luxury'>('heavy');
  const [addEmbroidery, setAddEmbroidery] = useState<boolean>(true);
  const [addDtfBack, setAddDtfBack] = useState<boolean>(false);
  const [addReflectiveTape, setAddReflectiveTape] = useState<boolean>(true);
  const [addNameTag, setAddNameTag] = useState<boolean>(false);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  // RFP Form State
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [rfpSubmitted, setRfpSubmitted] = useState(false);

  const selectedGarment = GARMENT_OPTIONS.find(g => g.id === selectedGarmentId) || GARMENT_OPTIONS[0];

  // Pricing Algorithm (UAE AED B2B Wholesale Market standard)
  let unitBase = selectedGarment.basePrice;

  // Fabric adjustment
  if (fabricGrade === 'heavy') unitBase += 8;
  if (fabricGrade === 'flame') unitBase += 20;
  if (fabricGrade === 'dryfit') unitBase += 6;
  if (fabricGrade === 'luxury') unitBase += 45;

  // Decoration additions
  let decorationPerUnit = 0;
  if (addEmbroidery) decorationPerUnit += 6;
  if (addDtfBack) decorationPerUnit += 7;
  if (addReflectiveTape) decorationPerUnit += 6;
  if (addNameTag) decorationPerUnit += 4;

  let unitSubtotal = unitBase + decorationPerUnit;

  // Volume discount tiers
  let discountPercent = 0;
  if (quantity >= 50 && quantity < 150) discountPercent = 10;
  else if (quantity >= 150 && quantity < 500) discountPercent = 18;
  else if (quantity >= 500 && quantity < 1500) discountPercent = 25;
  else if (quantity >= 1500) discountPercent = 32;

  const discountedUnit = unitSubtotal * (1 - discountPercent / 100);
  let totalEstimate = discountedUnit * quantity;

  if (isExpress) {
    totalEstimate *= 1.15; // 15% rush turn surcharge
  }

  const finalUnitPrice = totalEstimate / quantity;
  const originalTotal = (unitSubtotal * quantity) * (isExpress ? 1.15 : 1.0);
  const totalSavings = originalTotal - totalEstimate;

  const estimatedDays = isExpress
    ? (quantity > 500 ? '4 – 6 Business Days' : '3 – 4 Business Days')
    : (quantity > 500 ? '8 – 12 Business Days' : '6 – 8 Business Days');

  // WhatsApp Pre-formatting
  const generateWhatsAppMessage = () => {
    const summary = `*Inquiry: Al Nader Bulk Uniform Estimate*
- *Garment*: ${selectedGarment.name}
- *Quantity*: ${quantity} pieces
- *Fabric Grade*: ${fabricGrade.toUpperCase()}
- *Embroidery Crest*: ${addEmbroidery ? 'YES' : 'NO'}
- *DTF Print*: ${addDtfBack ? 'YES' : 'NO'}
- *Reflective 3M Tape*: ${addReflectiveTape ? 'YES' : 'NO'}
- *Turnaround*: ${isExpress ? 'EXPRESS (3-5 Days)' : 'Standard (7-10 Days)'}
- *Estimated Unit Price*: ~AED ${finalUnitPrice.toFixed(2)}
- *Estimated Total*: ~AED ${Math.round(totalEstimate).toLocaleString()}
- *Company*: ${companyName || 'Corporate Client'}
- *Location*: UAE Delivery`;

    return encodeURIComponent(summary);
  };

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone || !companyName) return;
    setRfpSubmitted(true);
  };

  return (
    <section id="estimator" className="py-20 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <span>B2B Wholesale Portal</span>
            <span aria-hidden="true">·</span>
            <span>Live AED Calculator</span>
            <span aria-hidden="true">·</span>
            <span>Volume Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Interactive Bulk Garment Manufacturing Cost Estimator
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Calculate estimated manufacturing and customization rates for enterprise apparel orders. Direct wholesale pricing from our Ajman Industrial 2 plant, with instant WhatsApp order transmission.
          </p>
        </div>

        {/* Two-Column Grid: Configurator & Real-time Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator Controls */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-md space-y-8">
            
            {/* Step 1: Select Garment Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                01. Select Garment or Uniform Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {GARMENT_OPTIONS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => {
                      setSelectedGarmentId(g.id);
                      if (quantity < g.minMoq) setQuantity(g.minMoq);
                    }}
                    className={`p-3 rounded-lg text-left transition-all border text-xs cursor-pointer ${
                      selectedGarmentId === g.id
                        ? 'bg-neutral-800 border-amber-500 text-white shadow-xs'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-white">{g.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span>{g.category}</span>
                      <span className="font-mono text-amber-400 font-bold">from AED {g.basePrice}/pc</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Order Quantity & Volume Discount Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor={quantityInputId} className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  02. Order Volume (Units)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">Selected:</span>
                  <span className="text-base font-extrabold text-amber-400 tabular-nums font-mono">
                    {quantity.toLocaleString()} pcs
                  </span>
                  {discountPercent > 0 && (
                    <span className="text-xs font-bold text-emerald-400">
                      ({discountPercent}% Wholesale Discount)
                    </span>
                  )}
                </div>
              </div>

              <input
                id={quantityInputId}
                type="range"
                min="20"
                max="2500"
                step="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-neutral-800 rounded-lg cursor-pointer"
              />

              {/* Volume scale indicators */}
              <div className="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono tabular-nums">
                <span>20 pcs (MOQ)</span>
                <span>100 pcs (10% off)</span>
                <span>500 pcs (25% off)</span>
                <span>2,500+ pcs (32% off)</span>
              </div>
            </div>

            {/* Step 3: Fabric Standard Selection */}
            <div>
              <label htmlFor={fabricSelectId} className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                03. Textile Specification & Fabric Grade
              </label>
              <select
                id={fabricSelectId}
                value={fabricGrade}
                onChange={(e) => setFabricGrade(e.target.value as any)}
                className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs font-medium focus:border-amber-500 focus:outline-hidden"
              >
                <option value="standard">Standard Poly-Cotton 65/35 (200 GSM, Easy-Care, Durable)</option>
                <option value="heavy">Heavy Sanforized Cotton Drill (280–300 GSM, High Tear Resistance) [+AED 8]</option>
                <option value="flame">Flame-Retardant & Chemical Repellent Industrial Grade [+AED 20]</option>
                <option value="dryfit">Performance Interlock Aero-Dry / Moisture Wicking [+AED 6]</option>
                <option value="luxury">Luxury Toyobo Japanese / Super 120s European Wool Blend [+AED 45]</option>
              </select>
            </div>

            {/* Step 4: Industrial Decoration & Customization Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                04. Machine Customization & Branding Options
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                <label className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addEmbroidery}
                    onChange={(e) => setAddEmbroidery(e.target.checked)}
                    className="mt-0.5 rounded-sm accent-amber-500 w-4 h-4"
                  />
                  <div>
                    <p className="font-semibold text-white">Computer Embroidery Logo</p>
                    <p className="text-[11px] text-neutral-400">High-density 15-needle chest crest (+AED 6/pc)</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addDtfBack}
                    onChange={(e) => setAddDtfBack(e.target.checked)}
                    className="mt-0.5 rounded-sm accent-amber-500 w-4 h-4"
                  />
                  <div>
                    <p className="font-semibold text-white">Direct-to-Film (DTF) Back Print</p>
                    <p className="text-[11px] text-neutral-400">Vibrant full-color logo transfer (+AED 7/pc)</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addReflectiveTape}
                    onChange={(e) => setAddReflectiveTape(e.target.checked)}
                    className="mt-0.5 rounded-sm accent-amber-500 w-4 h-4"
                  />
                  <div>
                    <p className="font-semibold text-white">3M Reflective Safety Banding</p>
                    <p className="text-[11px] text-neutral-400">Certified Class 2 hi-vis stripes (+AED 6/pc)</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addNameTag}
                    onChange={(e) => setAddNameTag(e.target.checked)}
                    className="mt-0.5 rounded-sm accent-amber-500 w-4 h-4"
                  />
                  <div>
                    <p className="font-semibold text-white">Individual Employee Name Tags</p>
                    <p className="text-[11px] text-neutral-400">Direct stitched personalization (+AED 4/pc)</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Step 5: Turnaround Urgency */}
            <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white uppercase">Express Turnaround Priority</p>
                <p className="text-[11px] text-neutral-400">Accelerate completion to 3–5 business days</p>
              </div>
              <button
                type="button"
                onClick={() => setIsExpress(!isExpress)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
                  isExpress ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300'
                }`}
              >
                {isExpress ? 'Express Enabled (+15%)' : 'Standard Schedule'}
              </button>
            </div>

          </div>

          {/* Right Column: Real-time Live Quotation Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-amber-500/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                    Itemized Order Estimate
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {selectedGarment.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-neutral-400 block">Currency</span>
                  <span className="text-xs font-bold text-neutral-200">AED (Dirhams)</span>
                </div>
              </div>

              {/* Price Figures */}
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-neutral-400">Estimated Unit Price:</span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-white tabular-nums font-mono">
                      AED {finalUnitPrice.toFixed(2)}
                    </span>
                    <span className="text-xs text-neutral-500 block">per unit</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold uppercase text-neutral-300 block">Total Manufacturing Run</span>
                    <span className="text-xs text-neutral-500 tabular-nums">{quantity} custom garments</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-amber-400 tabular-nums font-mono">
                      AED {Math.round(totalEstimate).toLocaleString()}
                    </span>
                    {totalSavings > 0 && (
                      <span className="text-[11px] text-emerald-400 font-semibold block tabular-nums">
                        You save AED {Math.round(totalSavings).toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Summary Breakdown List */}
              <div className="space-y-2 text-xs text-neutral-300 border-t border-neutral-800 pt-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Production Turnaround:</span>
                  <span className="font-semibold text-white">{estimatedDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Fabric Composition:</span>
                  <span className="font-semibold text-white capitalize">{fabricGrade} Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Quality Standard:</span>
                  <span className="font-semibold text-white">Pre-shrunk, Reinforced Seams</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Facility Dispatch:</span>
                  <span className="font-semibold text-white">Ajman Ind. 2 / UAE Delivery</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_PROFILE.whatsappRaw}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp Desk</span>
                </a>

                <p className="text-center text-[11px] text-neutral-500">
                  Transfers directly to our sales coordinator on +971 54 710 3801. No commitment required.
                </p>
              </div>

            </div>

            {/* Request Formal Commercial Invoice / RFP Form */}
            <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>Request Written B2B Invoice / Tender RFP</span>
              </h4>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Need a formal signed quote on Al Nader L.L.C letterhead for corporate banking approvals? Submit your corporate details:
              </p>

              {rfpSubmitted ? (
                <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold">RFP Request Received</p>
                    <p className="text-emerald-400/90 mt-0.5">
                      Our commercial billing desk will generate the PDF estimate for <strong>{companyName}</strong> and message you on <strong>{contactPhone}</strong> within 2 business hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRfpSubmit} className="space-y-3 text-xs">
                  <div>
                    <input
                      type="text"
                      placeholder="Company / Entity Name (e.g. Apex Logistics UAE)"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Officer Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-hidden"
                    />
                    <input
                      type="tel"
                      placeholder="UAE Mobile / WhatsApp"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <textarea
                      id={notesTextareaId}
                      rows={2}
                      placeholder="Special sizing ratios, delivery location, or specific embroidery artwork notes..."
                      className="w-full p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-hidden resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Submit for Official Corporate Quotation
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
