/**
 * PROPERTY DATA LAYER
 * --------------------
 * Real client properties for Triedge Realty, Lucknow.
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
  {
    id: 'residential-plots',
    name: 'Residential Plots',
    description:
      'Strategic plotted developments and investment parcels along fast-growing Lucknow highway corridors.',
    image: IMG.plot1,
  },
]

export const properties = [
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
