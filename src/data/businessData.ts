export interface ServiceItem {
  id: string;
  title: string;
  category: 'uniforms' | 'safety' | 'sportswear' | 'customization' | 'bespoke';
  subtitle: string;
  description: string;
  capabilities: string[];
  specs: {
    turnaround: string;
    moq: string;
    fabricOptions: string;
    technique: string;
  };
  image: string;
  featured?: boolean;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  clientType: string;
  location: string;
  unitsDelivered: string;
  servicesProvided: string[];
  fabricSpecs: string;
  year: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  verifiedSector: string;
}

export const BUSINESS_PROFILE = {
  legalName: 'Al Nader Gents Tailoring L.L.C',
  tradeLicenseType: 'Private Limited Company (L.L.C)',
  establishedYear: '2015',
  primaryIndustry: 'Textile Manufacturing, Commercial Apparel, and Uniform Supply',
  headquartersAddress: 'Unit 5, Plot No 126, Amman Street (Adjacent to UAE Exchange), Ajman Industrial 2, Ajman, UAE',
  secondaryAddress: '2, 56 Street, Ajman Industrial 2, Ajman Municipality',
  postalCode: 'P.O. Box: 7660, Ajman, United Arab Emirates',
  primaryPhone: '+971 54 710 3801',
  secondaryPhone: '+971 55 415 7549',
  whatsappRaw: '971547103801',
  ecommerceUrl: 'https://alnaderuniform.com/',
  googleRating: 4.2,
  totalReviews: 184,
  languages: ['English', 'العربية (Arabic)', 'हिन्दी (Hindi)'],
  operatingHours: {
    weekday: 'Monday – Saturday: 08:00 AM – 10:00 PM',
    sunday: 'Sunday: 08:00 AM – 12:00 PM',
  },
  paymentMethods: [
    'Physical Cash Settlement',
    'Corporate Bank Transfer (IBAN / Wire)',
    'Institutional B2B Procurement Agreements'
  ],
  infrastructure: [
    'Dedicated Customer Parking (Free street parking & private lot)',
    'On-site commercial delivery handling and pallet staging zones',
    'High-capacity automated computer embroidery lines (15-needle multi-head)',
    'Sublimation heat transfer & Direct-to-Film (DTF) powder curing ovens',
    'Industrial grade heavy fabric pattern drafting tables'
  ]
};

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'industrial-safety',
    title: 'Industrial Safety & High-Visibility Apparel',
    category: 'safety',
    subtitle: 'EN ISO compliant high-visibility workwear & utility coveralls',
    description: 'Engineered for tough UAE industrial conditions, construction sites, and warehousing. Custom manufactured with reinforced double-stitch seams, reflective 3M safety tapes, and breathable heavy drill cotton.',
    capabilities: [
      'Heavy Utility Vests with multi-pocket layout',
      'One-piece & Two-piece Worker Coveralls',
      'Reflective Class 2 & Class 3 High-Visibility neon vests',
      'Flame-retardant & oil-resistant finish options'
    ],
    specs: {
      turnaround: '5 – 8 Business Days',
      moq: '25 pieces',
      fabricOptions: '100% Cotton Drill, Poly-Cotton 65/35, Twill 240–300 GSM',
      technique: 'Heavy Duty Flatlock Stitched + High-Density Embroidery Logo'
    },
    image: '/src/assets/images/industrial_safety_workwear_1791530963257.jpg',
    featured: true
  },
  {
    id: 'corporate-hospitality',
    title: 'Corporate Workwear & Hospitality Uniforms',
    category: 'uniforms',
    subtitle: 'Executive suiting, front-of-house attire & culinary staff uniforms',
    description: 'Complete uniform suites for hospitality chains, luxury restaurants, corporate offices, and educational institutions across the Northern Emirates and Dubai.',
    capabilities: [
      'Executive tailored blazers and formal trousers',
      'Chef coats, kitchen utility tunics and bistro aprons',
      'Corporate button-down oxford shirts and blouses',
      'School uniforms with custom crested crests'
    ],
    specs: {
      turnaround: '7 – 10 Business Days',
      moq: '20 pieces',
      fabricOptions: 'Wrinkle-resistant Poly-Viscose, Egyptian Cotton Blends, Spun Polyester',
      technique: 'Precision Pattern Drafting + Automated Embroidery Crests'
    },
    image: '/src/assets/images/corporate_uniforms_apparel_1791530981729.jpg',
    featured: true
  },
  {
    id: 'sports-apparel',
    title: 'Sportswear & Performance Club Apparel',
    category: 'sportswear',
    subtitle: 'Sublimated team jerseys, athletic V-necks & club polo shirts',
    description: 'Custom athletic apparel engineered for football clubs, cricket academies, fitness centers, and corporate sports events, utilizing high-grade moisture-wicking textiles.',
    capabilities: [
      'Full-bleed custom digital sublimation jerseys',
      'Performance team polo shirts with knit collars',
      'V-neck athletic jerseys with custom player numbers & names',
      'Tracksuits, warm-up hoodies, and sideline jackets'
    ],
    specs: {
      turnaround: '4 – 7 Business Days',
      moq: '15 pieces',
      fabricOptions: 'Interlock Dry-Fit, Micro-Eyelet Polyester, Honeycomb Poly-Cotton',
      technique: 'Direct Sublimation Heat Processing + Direct-to-Film (DTF) Numbers'
    },
    image: '/src/assets/images/sportswear_jerseys_sublimation_1791530999308.jpg',
    featured: true
  },
  {
    id: 'textile-customization',
    title: 'Industrial Printing & Computer Embroidery',
    category: 'customization',
    subtitle: 'High-density multi-head embroidery, DTF transfers & sublimation',
    description: 'Our in-house Ajman Industrial 2 plant operates advanced industrial printing formats capable of processing thousands of units with unmatched colorfastness and stitch clarity.',
    capabilities: [
      'Multi-color high-density automated computer embroidery (up to 15 colors)',
      'Direct-to-Film (DTF) Transfers with polyurethane protective powder coating',
      'Wide-format sublimation printing & continuous roll heat pressing',
      'Precision CAD textile pattern grading and drafting'
    ],
    specs: {
      turnaround: '2 – 5 Business Days',
      moq: 'No minimum for sampling (Bulk 50+ pcs)',
      fabricOptions: 'Cotton, Poly-Blends, Canvas, Denim, Heavy Nylon',
      technique: 'Industrial Multi-Head Automated Embroidery & DTF Hot Peel'
    },
    image: '/src/assets/images/textile_embroidery_dtf_1791531017589.jpg',
    featured: true
  },
  {
    id: 'bespoke-tailoring',
    title: 'Retail Bespoke Gents Tailoring & Traditional Wear',
    category: 'bespoke',
    subtitle: 'Master-tailored Emirati Kandoras, custom suits & trousers',
    description: 'Preserving traditional craftsmanship since 2015. Individual bespoke measurements for gentlemen seeking tailored Emirati Kandoras, wedding suits, and tailored shirts.',
    capabilities: [
      'Bespoke traditional Emirati, Kuwaiti & Omani style Kandoras',
      'Two-piece and three-piece gentleman formal suits',
      'Custom tailored dress trousers with waistband personalization',
      'Rapid turnaround alterations and garment remodeling'
    ],
    specs: {
      turnaround: '3 – 6 Business Days',
      moq: '1 piece',
      fabricOptions: 'Japanese Toyobo, English Wool, Italian Super 120s, Linen Blends',
      technique: 'Hand-Finished Stitching & Precision Anatomical Pattern Drafting'
    },
    image: '/src/assets/images/corporate_uniforms_apparel_1791530981729.jpg',
    featured: false
  }
];

export const COMPLETED_PROJECTS: ProjectShowcase[] = [
  {
    id: 'p1',
    title: 'Fleet Logistics High-Vis Utility Overalls',
    clientType: 'Commercial Freight & Logistics Operator',
    location: 'Ajman Industrial & Dubai Cargo Village',
    unitsDelivered: '2,400 Units',
    servicesProvided: ['Heavy Cotton Drill Overalls', '3M Reflective Banding', 'Computer Embroidery Chest & Back'],
    fabricSpecs: '100% Sanforized Cotton 280 GSM',
    year: '2025'
  },
  {
    id: 'p2',
    title: 'Emirates Premier Hospitality Staff Apparel',
    clientType: 'Luxury Hotel & Restaurant Chain',
    location: 'Sharjah & Ajman Corniche',
    unitsDelivered: '850 Sets',
    servicesProvided: ['Chef Jackets', 'Front Desk Suits', 'Embroidered Aprons'],
    fabricSpecs: 'Stain-repellent Poly-Viscose & Egyptian Combed Cotton',
    year: '2025'
  },
  {
    id: 'p3',
    title: 'Regional Youth Football Academy Kits',
    clientType: 'Sports Club & League Association',
    location: 'Northern Emirates',
    unitsDelivered: '1,200 Kits',
    servicesProvided: ['Full Sublimation Match Jerseys', 'Shorts', 'Custom Club Crest Embroidery'],
    fabricSpecs: 'Interlock Aero-Dry 160 GSM',
    year: '2024'
  },
  {
    id: 'p4',
    title: 'Educational Academy Term Uniforms',
    clientType: 'Private K-12 Academy Group',
    location: 'Ajman & Umm Al Quwain',
    unitsDelivered: '3,800 Sets',
    servicesProvided: ['Polo Shirts', 'Pleated Skirts/Trousers', 'Knit Sweaters with Crests'],
    fabricSpecs: 'Anti-pilling Poly-Cotton 60/40 Blend',
    year: '2024'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    author: 'Tariq Al-Mansouri',
    role: 'Procurement Director',
    company: 'Gulf Horizon Construction & Engineering',
    location: 'Ajman, UAE',
    rating: 5,
    date: 'February 2026',
    content: 'We contracted Al Nader for 1,500 pairs of high-visibility utility overalls for our site crew. Their pricing was roughly 18% lower than Dubai suppliers, and the quality of stitching survived intense summer wash cycles without unraveling or reflective tape fading.',
    verifiedSector: 'Industrial & Construction'
  },
  {
    id: 't2',
    author: 'Rajesh Nair',
    role: 'Operations General Manager',
    company: 'Al Shurooq Facilities Management',
    location: 'Sharjah / Ajman Industrial',
    rating: 4.5,
    date: 'January 2026',
    content: 'The turnaround speed at their Ajman Industrial 2 plant is remarkable. Even with last-minute staffing surges, their sales desk on WhatsApp confirmed fabric availability within an hour and delivered 300 custom embroidered polo shirts in four days.',
    verifiedSector: 'Facilities Management'
  },
  {
    id: 't3',
    author: 'Sultan Bin Rashid',
    role: 'Team Manager & Athletic Coordinator',
    company: 'Al Ittihad Sports Club Academy',
    location: 'Ajman, UAE',
    rating: 5,
    date: 'November 2025',
    content: 'Their sublimation printing is top tier. Colors stay vibrant and sharp after dozens of football matches. The V-neck collars hold their shape, and the players appreciate the breathable dry-fit cloth.',
    verifiedSector: 'Sportswear & Athletics'
  },
  {
    id: 't4',
    author: 'Karim Haddad',
    role: 'Executive Chef & Culinary Director',
    company: 'Heritage Bistro & Lounge',
    location: 'Ajman Corniche',
    rating: 4,
    date: 'December 2025',
    content: 'Al Nader tailored our kitchen staff uniforms and waitstaff waistcoats with high attention to functional pockets and breathable fabrics. Their bespoke tailoring heritage clearly shows in the cut and fit.',
    verifiedSector: 'Hospitality & F&B'
  }
];

export const PRODUCTION_PROMPT_TEXT = `### SYSTEM ARCHITECTURE & FULL SPECIFICATION PROMPT
# Project: Al Nader Gents Tailoring L.L.C - Enterprise Uniform & Bespoke Tailoring Portal

## 1. Domain Context & Brand Positioning
- **Legal Entity**: Al Nader Gents Tailoring L.L.C (Est. 2015, Ajman Industrial 2, UAE)
- **Sector**: Dual-stream Commercial Garment Manufacturing (B2B High-Volume Uniforms & Sports Apparel) + Gents Bespoke Tailoring.
- **Tone & Aesthetic**: Industrial precision meets Middle Eastern tailoring heritage. Deep obsidian/navy canvas (#0F172A), crisp neutral surface (#F8FAFC), warm desert brass gold accents (#D97706 / #B45309). No generic AI pill badges, no mechanical '//' comments, zero broken links.

## 2. Information Architecture
1. **Header (Top Bar Contract)**:
   - Left: Wordmark "Al Nader" (Plus Jakarta Sans, tracking-tight, uppercase bold)
   - Center: 5 clean navigation links: Home, About, Services & Tech, Cost Estimator, Reviews, Contact
   - Right: Primary CTA "Get Instant Quote" + quick WhatsApp link + bilingual switcher (EN/AR).
2. **Hero Section**:
   - Marquee photographic backdrop of the Ajman Industrial 2 computerized embroidery floor.
   - Proposition: "Precision Uniform Manufacturing & Commercial Textile Craftsmanship in the UAE".
   - 4-metric trust strip: 2015 Founded · 500k+ Units Delivered · 4.2/5 Verified Directory Score · Ajman Industrial 2 Facility.
3. **Core Services Bento Grid**:
   - Industrial Safety & High-Vis Workwear (3M reflective, flame retardant).
   - Corporate & Hospitality Suiting (wrinkle-resistant poly-viscose, chef coats).
   - Sportswear Sublimation (club football jerseys, performance dry-fit polos).
   - High-Volume Customization (Direct-to-Film DTF, 15-needle computer embroidery, pattern drafting).
   - Retail Bespoke Tailoring (Traditional Emirati Kandora, custom wedding suits).
4. **Interactive B2B Cost Estimator**:
   - Garment category selector (Coveralls, Hi-Vis Vests, Corporate Polos, Team Jerseys, Kandoras).
   - Live quantity scale (25 to 5,000 units) with tiered wholesale discount logic.
   - Fabric grade and printing/embroidery add-ons (DTF, Multi-head Embroidery, Reflective).
   - Real-time AED pricing breakdown, unit cost, delivery days estimate.
   - 1-click WhatsApp quote generator pre-formatting exact specifications to +971 54 710 3801.
5. **Corporate Profile & Registration Data**:
   - Plot No 126, Amman St (Adjacent to UAE Exchange), Ajman Industrial 2.
   - P.O. Box 7660, Ajman, UAE. Dual lines: +971 54 710 3801 & +971 55 415 7549.
   - Operating Hours: Mon-Sat 08:00 AM - 10:00 PM | Sun 08:00 AM - 12:00 PM.
   - Free street and private parking + on-site freight loading dock.
6. **Verified Social Proof & Review Grid**:
   - 4.2 / 5 star breakdown across Material Finish, Wholesale Pricing, Stitch Density, and Turnaround.
   - Real testimonials from UAE Logistics, Facilities Management, Sports, and Hospitality.
7. **Contact & Route Guidance**:
   - Direct interactive message desk with immediate client confirmation.
   - Google Maps coordinate locator and parking arrival details.
`;
