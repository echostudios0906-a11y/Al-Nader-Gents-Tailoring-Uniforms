import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Shirt, 
  Trophy, 
  Printer, 
  Scissors, 
  Check, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronRight,
  Clock,
  PackageCheck
} from 'lucide-react';
import { SERVICES_CATALOG, COMPLETED_PROJECTS, ServiceItem } from '../data/businessData';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
  lang: 'en' | 'ar';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimate,
  lang,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'safety', label: 'Industrial Safety' },
    { id: 'uniforms', label: 'Corporate & Hospitality' },
    { id: 'sportswear', label: 'Sportswear & Sublimation' },
    { id: 'customization', label: 'Embroidery & DTF' },
    { id: 'bespoke', label: 'Bespoke Tailoring' },
  ];

  const filteredServices = activeFilter === 'all'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <span>Technical Operations</span>
              <span aria-hidden="true">·</span>
              <span>In-House Manufacturing</span>
              <span aria-hidden="true">·</span>
              <span>Ajman Facility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 text-balance">
              Industrial Textile Manufacturing & Customization Capabilities
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Equipped with heavy industrial printing formats, multi-head computer embroidery lines, and precision pattern drafting tables to serve bulk institutional contracts and bespoke requirements.
            </p>
          </div>

          {/* Interactive filter tabs (clean segmented controls per Constitution, NOT pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-lg border border-neutral-200 shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden flex flex-col hover:border-neutral-300 transition-all hover:shadow-sm"
            >
              {/* Media Asset with measured scrim */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3">
                      Production Specs & Inclusions
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-700">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Spec Box */}
                  <div className="bg-white p-3.5 rounded-lg border border-neutral-200 text-xs text-neutral-600 space-y-1.5 mb-6">
                    <div className="flex justify-between">
                      <span className="font-semibold text-neutral-700">Turnaround:</span>
                      <span className="text-neutral-900 font-medium">{service.specs.turnaround}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-neutral-700">Minimum Order (MOQ):</span>
                      <span className="text-neutral-900 font-medium">{service.specs.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-neutral-700">Textile Standard:</span>
                      <span className="text-neutral-900 font-medium truncate max-w-[220px]" title={service.specs.fabricOptions}>
                        {service.specs.fabricOptions}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectServiceForEstimate(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
                  >
                    <span>Configure Order in Estimator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-900 underline cursor-pointer"
                  >
                    Full Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Printing & Machine Capabilities Spotlight */}
        <div className="bg-neutral-950 text-white rounded-2xl p-8 lg:p-12 border border-neutral-800 mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Technical Machinery Infrastructure
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Industrial Garment Decoration & Printing Plant
            </h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Equipped with high-volume industrial decoration hardware in Ajman Industrial 2 to ensure rapid batch consistency and superior wash test longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <Printer className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Direct-to-Film (DTF)</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Industrial digital print engines with automatic hot-melt polyurethane powder shaker and infrared tunnel curing for stretchable, razor-sharp transfers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <Layers className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Sublimation Printing</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Wide-format dye-sublimation ink on imported transfer paper, infused via pneumatic rotary calenders for permanent, non-fading athletic sportswear graphics.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Computer Embroidery</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Multi-head 15-needle computerized embroidery machines with automated thread tensioning, producing up to 1,200 stitches/minute for luxury crests and logos.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <Scissors className="w-6 h-6 text-amber-400 mb-3" />
              <h4 className="text-base font-bold text-white mb-1.5">Precision CAD Drafting</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Computer-aided grading and large-format automated vacuum pattern tables for repeatable sizing tolerance across massive 5,000+ garment manufacturing runs.
              </p>
            </div>
          </div>
        </div>

        {/* Services Done / Major Projects Delivered Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                <span>Services Done</span>
                <span aria-hidden="true">·</span>
                <span>Verified Contracts</span>
                <span aria-hidden="true">·</span>
                <span>B2B Supply</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Recent Enterprise Garment Deliveries
              </h3>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              Selected commercial supply contracts manufactured and fulfilled from our Ajman Industrial 2 plant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPLETED_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>{proj.location}</span>
                    <span className="font-semibold text-amber-700">{proj.year}</span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 mb-1.5">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-neutral-600 mb-4 font-medium">
                    {proj.clientType}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {proj.servicesProvided.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-neutral-700">
                        <PackageCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Volume:</span>
                  <span className="font-bold text-neutral-900 tabular-nums">{proj.unitsDelivered}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for viewing deep technical specifications */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
            <div className="relative h-48 bg-neutral-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black cursor-pointer"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                  {selectedService.category}
                </span>
                <h3 className="text-xl font-bold">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-neutral-700 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase text-neutral-900 mb-2">Technical Capabilities</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {selectedService.capabilities.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Production Timeframe:</span>
                  <span className="font-medium text-neutral-900">{selectedService.specs.turnaround}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Batch Minimum:</span>
                  <span className="font-medium text-neutral-900">{selectedService.specs.moq}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Fabric Composition:</span>
                  <span className="font-medium text-neutral-900">{selectedService.specs.fabricOptions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Decoration Technique:</span>
                  <span className="font-medium text-neutral-900">{selectedService.specs.technique}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForEstimate(title);
                  }}
                  className="flex-1 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Configure In Cost Estimator
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-3 border border-neutral-300 text-neutral-700 text-xs font-semibold rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
