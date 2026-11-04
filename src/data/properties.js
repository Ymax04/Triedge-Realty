/**
 * PROPERTY DATA LAYER
 * --------------------
 * Real verified client properties for Triedge Realty, Lucknow.
 */

export const WHATSAPP_NUMBER = '919794503222'

export const BUSINESS = {
  name: 'Triedge Realty',
  location: 'Lucknow, Uttar Pradesh',
  phoneDisplay: '+91 97945 03222',
  phoneRaw: '919794503222',
  email: 'sharmaankit2502@gmail.com',
  youtube: 'https://www.youtube.com/@PropertyConsultant30',
  youtubeLabel: '@PropertyConsultant30',
}

const IMG = {
  hero: '/uploads/site/hero.jpg',
  about: '/uploads/site/about.jpg',
  cta: '/uploads/site/cta.jpg',
  // Verified Property Uploads
  rishitaLiving: '/uploads/properties/rishita-mulberry-living.jpg',
  rishitaKitchen: '/uploads/properties/rishita-mulberry-kitchen.jpg',
  rishitaTower: '/uploads/properties/rishita-mulberry-tower.jpg',
  omaxeFloors: '/uploads/properties/omaxe-independent-floors.jpg',
  ekanaCentre: '/uploads/properties/ekana-business-centre.jpg',
  // Sky Om City Uploads
  skyomPillars: '/uploads/properties/skyom-pillars.jpg',
  skyomPark: '/uploads/properties/skyom-park.jpg',
  skyomTrellis: '/uploads/properties/skyom-trellis.jpg',
  skyomCostChart: '/uploads/properties/skyom-cost-chart.jpg',
  skyomAreaChart: '/uploads/properties/skyom-area-chart.jpg',
  // Supporting visuals
  omaxe1: '/uploads/properties/omaxe-1.jpg',
  omaxe2: '/uploads/properties/omaxe-2.jpg',
  plot1: '/uploads/properties/plot-1.jpg',
  commercial1: '/uploads/properties/commercial-1.jpg',
}

export const HERO_IMAGE = {
  src: IMG.hero,
  alt: 'Triedge Realty - Lucknow Real Estate Consultancy',
  isIllustrative: false,
}

export const ABOUT_IMAGE = {
  src: IMG.rishitaLiving,
  alt: 'Modern luxury interior in Lucknow - Triedge Realty',
  isIllustrative: false,
}

export const CTA_IMAGE = {
  src: IMG.cta,
  alt: 'Triedge Realty Properties Lucknow',
  isIllustrative: false,
}

export const categories = [
  {
    id: 'residential-plots',
    name: 'Residential Plots & Villas',
    description:
      'Awas Vikas approved residential plots and custom luxury villas along Lucknow Mohanlalganj corridor.',
    image: IMG.skyomPillars,
  },
  {
    id: 'commercial',
    name: 'Commercial & Business Centres',
    description:
      'High-yield commercial spaces, retail opportunities, and luxury business suites with assured returns in Lucknow.',
    image: IMG.ekanaCentre,
  },
  {
    id: 'apartments',
    name: 'Luxury Residential Apartments',
    description:
      'Premium 2 BHK + S & 3 BHK + S luxury apartments with modern amenities in prime Lucknow locations.',
    image: IMG.rishitaLiving,
  },
  {
    id: 'independent-floors',
    name: 'Independent Floors',
    description:
      'Low-rise G+4 independent floors offering exclusivity, spacious layouts, and gated community lifestyle.',
    image: IMG.omaxeFloors,
  },
]

export const properties = [
  {
    id: 'sky-om-city',
    name: 'Sky Om City',
    badge: 'Awas Vikas Approved',
    badgeColor: 'emerald',
    developer: 'Sky Om Developers',
    location: 'Mohanlalganj, Lucknow, Uttar Pradesh',
    category: 'Residential Plots & Villas',
    categoryId: 'residential-plots',
    projectType: 'Residential Plots & Luxury Villas',
    price: 'Plots ₹6,000/sq.ft · Villas from ₹49 Lakhs',
    availability: 'Contact for Availability',
    featured: true,
    isDemo: false,
    mapQuery: 'Mohanlalganj, Lucknow',
    approvalDetails: {
      awasVikas: 'Awas Vikas Approved (as informed by client)',
      rera: 'RERA Approved (Registration Number to be confirmed)',
    },
    propertyOptions: [
      {
        type: 'Residential Plots',
        rate: '₹6,000 per sq. ft.',
        details: 'Multiple plot sizes available (728 to 1,802+ sq. ft.) ready for residential construction.',
      },
      {
        type: 'Luxury Custom Villas',
        rate: 'Starting ₹49 Lakhs',
        details: 'G+1 and G+2 customized architectural villa construction options tailored to your plan.',
      },
    ],
    configurations: [
      { unit: 'Residential Plots', price: '₹6,000 / sq. ft.', status: 'Available' },
      { unit: 'Custom Luxury Villas', price: 'Starting ₹49 Lakhs', status: 'Available' },
      { unit: '728 sq. ft. Plot / Villa', price: 'Cost from ₹18.41 L', status: 'Available' },
      { unit: '956 sq. ft. Plot / Villa', price: 'Cost from ₹23.86 L', status: 'Available' },
      { unit: '1,300 sq. ft. Plot / Villa', price: 'Cost from ₹30.00 L', status: 'Available' },
      { unit: '1,464 sq. ft. Plot / Villa', price: 'Cost from ₹35.08 L', status: 'Available' },
      { unit: '1,802 sq. ft. Plot / Villa', price: 'Cost from ₹44.52 L', status: 'Available' },
    ],
    villaCosts: [
      { plotArea: '728 sq. ft.', groundFloor: '₹18.41 L', firstFloor: '₹29.37 L', secondFloor: 'Not Available' },
      { plotArea: '956 sq. ft.', groundFloor: '₹23.86 L', firstFloor: '₹41.25 L', secondFloor: '₹48.65 L' },
      { plotArea: '1,300 sq. ft.', groundFloor: '₹30.00 L', firstFloor: '₹50.00 L', secondFloor: '₹65.23 L' },
      { plotArea: '1,464 sq. ft.', groundFloor: '₹35.08 L', firstFloor: '₹53.35 L', secondFloor: '₹68.20 L' },
      { plotArea: '1,802 sq. ft.', groundFloor: '₹44.52 L', firstFloor: '₹74.17 L', secondFloor: '₹98.40 L' },
    ],
    builtUpArea: [
      { plotArea: '728 sq. ft.', groundFloor: '558 sq. ft.', firstFloor: '1,068 sq. ft.', secondFloor: '—' },
      { plotArea: '956 sq. ft.', groundFloor: '723 sq. ft.', firstFloor: '1,500 sq. ft.', secondFloor: '1,769 sq. ft.' },
      { plotArea: '1,300 sq. ft.', groundFloor: '909 sq. ft.', firstFloor: '1,818 sq. ft.', secondFloor: '2,372 sq. ft.' },
      { plotArea: '1,464 sq. ft.', groundFloor: '1,063 sq. ft.', firstFloor: '1,940 sq. ft.', secondFloor: '2,480 sq. ft.' },
      { plotArea: '1,802 sq. ft.', groundFloor: '1,349 sq. ft.', firstFloor: '2,697 sq. ft.', secondFloor: '3,578 sq. ft.' },
    ],
    paymentStages: [
      { stage: 'Advance at Work Order', percent: '10%' },
      { stage: 'Within 30 Days', percent: '10%' },
      { stage: 'Earth Excavation', percent: '7.5%' },
      { stage: 'PCC Foundation', percent: '7.5%' },
      { stage: 'RCC Foundation', percent: '7.5%' },
      { stage: 'Plinth Beam', percent: '7.5%' },
      { stage: 'First Slab Casting', percent: '7.5%' },
      { stage: 'Second Slab Casting', percent: '7.5%' },
      { stage: 'Third Slab Casting', percent: '7.5%' },
      { stage: 'Brickwork', percent: '7.5%' },
      { stage: 'Services Installation', percent: '7.5%' },
      { stage: 'Plaster Work', percent: '7.5%' },
      { stage: 'Painting', percent: '2.5%' },
      { stage: 'Villa Handover', percent: '2.5%' },
    ],
    villaSpecifications: [
      {
        room: 'Bedrooms',
        features: 'Vitrified tile flooring, premium plastic emulsion wall paint, cove false ceiling as per design, AC provision with copper piping.',
      },
      {
        room: 'Bathrooms',
        features: 'Anti-skid ceramic tile flooring, ceramic wall tiles up to ceiling height, OBD ceiling paint, POP/Grid false ceiling, Jaquar / Hindware / Cera or equivalent sanitaryware.',
      },
      {
        room: 'Balconies',
        features: 'Anti-skid ceramic tile flooring, waterproof exterior wall & ceiling paint, MS railing or classical concrete balusters.',
      },
      {
        room: 'Electrical Fittings',
        features: 'Concealed copper wiring, premium modular switches, lights and fans provided, TV provisions in bedrooms, living/dining and family lounge.',
      },
    ],
    amenities: [
      'Awas Vikas Approved',
      'Grand Classical Entrance Pillars',
      'Landscaped Green Parks with Art Sculptures',
      'Wide Tree-Lined Township Roads',
      'Custom Villa Construction',
      '24×7 Security & Gated Perimeter',
      'Reliable Water & Electricity Network',
      'Kids Play Zone',
    ],
    highlights: [
      'Prime Location in Mohanlalganj, Lucknow',
      'Awas Vikas Approved Township',
      'Plots at ₹6,000/sq.ft & Custom Villas Starting ₹49 Lakhs',
      'Flexible 14-Stage Construction Linked Payment Plan',
      'Grand Classical Architectural Entrance & Green Enclaves',
      'Premium Fixtures (Jaquar / Hindware / Cera Equivalent)',
    ],
    description:
      'Sky Om City in Mohanlalganj, Lucknow is a prestigious Awas Vikas approved township offering premium residential plots and bespoke luxury villas. Plots are offered at ₹6,000 per sq. ft., and custom luxury villas start at ₹49 Lakhs with Ground, First, and Second Floor options. The township features monumental classical pillar gateways, manicured parks, modern underground utilities, and an investor-friendly 14-stage construction payment plan. Connect with Triedge Realty on WhatsApp for layout maps and site visits.',
    images: [
      IMG.skyomPillars,
      IMG.skyomPark,
      IMG.skyomTrellis,
      IMG.skyomCostChart,
      IMG.skyomAreaChart,
    ],
    imageNote: 'Actual verified photographs of Sky Om City entrance, parks, and official specifications charts.',
  },
  {
    id: 'rishita-mulberry-heights',
    name: 'Rishita Mulberry Heights',
    badge: 'Best Deal',
    badgeColor: 'gold',
    developer: 'Rishita Developers',
    location: 'Sushant Golf City, Lucknow, Uttar Pradesh',
    category: 'Luxury Residential Apartments',
    categoryId: 'apartments',
    projectType: 'Luxury Residential Apartments',
    price: 'Starting ₹1.11 Cr',
    availability: 'Contact for Availability',
    featured: true,
    isDemo: false,
    mapQuery: 'Rishita Mulberry Heights, Sushant Golf City, Lucknow',
    configurations: [
      { unit: '2 BHK + S (Servant Room)', price: 'Starting ₹1.11 Cr', status: 'Available' },
      { unit: '3 BHK + S (Servant Room)', price: 'Starting ₹1.75 Cr', status: 'Available' },
    ],
    amenities: [
      'Clubhouse',
      'Swimming Pool',
      'Fully Equipped Gym',
      'Landscaped Gardens',
      'Kids Play Area',
      '24×7 Security & CCTV',
      'Ample Car Parking',
      'Power Backup',
    ],
    description:
      'Rishita Mulberry Heights is a landmark luxury residential enclave in Lucknow offering meticulously planned 2 BHK + S and 3 BHK + S apartments. Featuring contemporary modular interiors, state-of-the-art clubhouse, swimming pool, manicured gardens, and comprehensive 24×7 security. Perfect for families seeking luxury, comfort, and prime connectivity in Lucknow.',
    images: [IMG.rishitaLiving, IMG.rishitaKitchen, IMG.rishitaTower],
    imageNote: 'Actual verified photographs of Rishita Mulberry Heights (Tower & Model Suite).',
  },
  {
    id: 'ekana-business-centre',
    name: 'Ekana Business Centre (EBC)',
    badge: '10% Assured Return',
    badgeColor: 'emerald',
    developer: 'Ekana Sportz City Private Limited',
    location: 'Ekana Sportz City, Lucknow, Uttar Pradesh',
    category: 'Commercial & Business Centres',
    categoryId: 'commercial',
    projectType: 'Commercial Business Centre',
    propertyCategory: 'Commercial / Retail / Luxury Suites',
    hospitalityPartner: 'Oakwood Suites by Ascott',
    suiteType: 'Luxury Suite with Balcony',
    bsp: '₹14,000 per sq. ft.',
    launchDate: '27 July 2025',
    price: '₹56,00,000 (10% Assured Return)',
    availability: 'Pre-Launch & Booking Open',
    featured: true,
    isDemo: false,
    mapQuery: 'Ekana Sportz City, Gomti Nagar Extension, Lucknow',
    investmentDetails: {
      amount: '₹56,00,000',
      assuredReturn: '10%',
      yearlyReturn: '₹5,68,000',
      monthlyReturn: '₹47,400',
      period: '3 Years or Possession',
    },
    additionalCharges: [
      { charge: 'Maintenance Security', amount: '₹100 / sq. ft.' },
      { charge: 'EEC & Fire Fighting', amount: '₹100 / sq. ft.' },
      { charge: 'EDC', amount: '₹100 / sq. ft.' },
      { charge: 'Total Listed Charges', amount: '₹300 / sq. ft.' },
    ],
    reraDetails: {
      project: 'UPRERAPRJ546851/07/2025',
      promoter: 'UPRERAPRM132321',
    },
    highlights: [
      'Premium Commercial Business Centre in Lucknow',
      'Luxury Suites with Private Balcony',
      'World-Class Hospitality Partner: Oakwood Suites by Ascott',
      'Retail High-Street & Corporate Investment Spaces',
      '10% Advertised Assured Return (₹47,400 / month payout)',
      'Multiple Investor Payment Plans Available',
      'Located Adjacent to Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium',
    ],
    amenities: [
      'Oakwood Suites Hospitality',
      'Luxury Suites with Balcony',
      'Retail Shopping Arcade',
      'Corporate Meeting Lounges',
      'High-Speed Elevators',
      'Central Climate Control',
      '24×7 Multi-Tier Security',
      'Dedicated Valet & Ample Parking',
    ],
    description:
      'Ekana Business Centre (EBC) is a premier commercial destination situated within Ekana Sportz City, Lucknow. The project brings luxury business suites with balconies managed by international hospitality leader Oakwood Suites by Ascott, alongside high-end retail opportunities. Featuring an attractive 10% advertised assured return (₹47,400 monthly / ₹5,68,000 yearly for 3 years or possession) with full RERA compliance.',
    images: [IMG.ekanaCentre, IMG.commercial1],
    imageNote: 'Official advertisement specifications and project promotional flyer.',
  },
  {
    id: 'omaxe-independent-floors',
    name: 'Omaxe Independent Floors',
    badge: 'Premium Deal',
    badgeColor: 'gold',
    developer: 'Omaxe',
    location: 'Near Ring Road, Raebareli Road, Lucknow',
    category: 'Independent Floors',
    categoryId: 'independent-floors',
    projectType: 'Independent Floors',
    price: '₹1.13 Crore onwards',
    possession: '2030',
    paymentPlan: 'Flexible Payment Plan',
    availability: 'Available',
    featured: true,
    isDemo: false,
    mapQuery: 'Omaxe Independent Floors, Raebareli Road, Lucknow',
    configurations: [
      { unit: '3 BHK Independent Floors', status: 'Available', price: '₹1.13 Cr Onwards' },
      { unit: '4 BHK Independent Floors', status: 'Available', price: 'Contact for Pricing' },
    ],
    amenities: [
      'Clubhouse',
      'Fully Equipped Gym',
      'Swimming Pool',
      'Landscaped Parks',
      'Kids Play Area',
      'Walking & Jogging Track',
      '24×7 Security & CCTV',
      'Ample Parking',
    ],
    highlights: [
      'Spacious 3 BHK & 4 BHK Independent Floors',
      'Low-Rise G+4 Living with Enhanced Privacy',
      'High-Class Amenities & Dedicated Green Parks',
      'Convenient Ring Road & Raebareli Road Connectivity',
      'Possession Target: 2030 with Flexible Payment Schemes',
    ],
    description:
      'Omaxe Independent Floors delivers luxury, comfort, and exclusivity along the vibrant Raebareli Road and Ring Road corridor in Lucknow. Featuring expansive 3 BHK and 4 BHK low-rise floors starting from ₹1.13 Crore onwards with targeted possession by 2030. Enjoy clubhouse facilities, swimming pool, jogging tracks, and flexible payment plans backed by Omaxe’s legacy.',
    images: [IMG.omaxeFloors, IMG.omaxe2],
    imageNote: 'Official advertisement specifications and architectural brochure.',
  },
  {
    id: 'omaxe-palm-city',
    name: 'Omaxe Palm City',
    badge: 'Coming Soon',
    badgeColor: 'blue',
    developer: 'Omaxe',
    location: 'Near Outer Ring Road, Kalli Paschim, Lucknow',
    category: 'Independent Floors',
    categoryId: 'independent-floors',
    projectType: 'Independent Floors',
    projectStructure: 'G+4 Structure',
    price: 'Contact for Price',
    availability: 'Coming Soon',
    featured: true,
    isDemo: false,
    mapQuery: 'Omaxe Palm City, Kalli Paschim, Lucknow',
    highlights: [
      'Upcoming Low-Rise G+4 Independent Floors',
      'Prime Location Near Outer Ring Road, Kalli Paschim',
      'Developed by Omaxe — A Trusted Real Estate Brand',
      'High Appreciation Growth Corridor in Lucknow',
      'Pre-Launch Enquiries & Priority Allotment Open',
    ],
    amenities: [
      'G+4 Independent Floor Layout',
      'Outer Ring Road Proximity',
      'Gated Community with 24×7 Security',
      'Landscaped Open Greens',
      'Dedicated Car Parking',
      'Modern Infrastructure',
    ],
    description:
      'Omaxe Palm City is an upcoming residential landmark offering low-rise G+4 independent floors located near Outer Ring Road at Kalli Paschim, Lucknow. Designed for those who value privacy, open spaces, and strategic city connectivity. Contact Triedge Realty on WhatsApp for early project updates, floor plans, and pre-launch pricing.',
    images: [IMG.omaxeFloors, IMG.omaxe1],
    imageNote: 'Official advertisement specifications and project overview.',
  },
]

export function getPropertyById(id) {
  return properties.find((property) => property.id === id) ?? null
}

export function getFeaturedProperties() {
  return properties.filter((property) => property.featured)
}

export function getPropertiesByCategory(categoryId) {
  if (!categoryId) return properties
  return properties.filter((property) => property.categoryId === categoryId)
}
