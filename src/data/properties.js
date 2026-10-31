/**
 * PROPERTY DATA LAYER
 * --------------------
 * Replace text and image paths here. Keep images in /public/uploads/.
 * Prefer compressed JPG/WebP under ~200–300KB for free hosting.
 *
 * Hero / site images  → public/uploads/site/
 * Property images     → public/uploads/properties/
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

/**
 * Local illustrative placeholders. Replace files in public/uploads/
 * with real photos — keep the same filenames OR update these paths.
 */
const IMG = {
  hero: '/uploads/site/hero.jpg',
  about: '/uploads/site/about.jpg',
  cta: '/uploads/site/cta.jpg',
  omaxe1: '/uploads/properties/omaxe-1.jpg',
  omaxe2: '/uploads/properties/omaxe-2.jpg',
  apartment1: '/uploads/properties/apartment-1.jpg',
  apartment2: '/uploads/properties/apartment-2.jpg',
  plot1: '/uploads/properties/plot-1.jpg',
  plot2: '/uploads/properties/plot-2.jpg',
  house1: '/uploads/properties/house-1.jpg',
  house2: '/uploads/properties/house-2.jpg',
  commercial1: '/uploads/properties/commercial-1.jpg',
  opportunity1: '/uploads/properties/opportunity-1.jpg',
}

export const HERO_IMAGE = {
  src: IMG.hero,
  alt: 'Illustrative residential property photograph — replace with client photo',
  isIllustrative: true,
}

export const ABOUT_IMAGE = {
  src: IMG.about,
  alt: 'Illustrative interior photograph — replace with client photo',
  isIllustrative: true,
}

export const CTA_IMAGE = {
  src: IMG.cta,
  alt: 'Illustrative property photograph',
  isIllustrative: true,
}

export const categories = [
  {
    id: 'residential-plots',
    name: 'Residential Plots',
    description: 'Explore residential plot opportunities across Lucknow.',
    image: IMG.plot1,
  },
  {
    id: 'residential-projects',
    name: 'Residential Projects',
    description: 'Discover residential project options suited to your needs.',
    image: IMG.omaxe1,
  },
  {
    id: 'independent-houses',
    name: 'Independent Houses',
    description: 'Enquire about independent house opportunities in Lucknow.',
    image: IMG.house1,
  },
  {
    id: 'apartments',
    name: 'Apartments',
    description: 'Browse apartment options and request current availability.',
    image: IMG.apartment1,
  },
  {
    id: 'commercial-properties',
    name: 'Commercial Properties',
    description: 'Ask about commercial property opportunities in Lucknow.',
    image: IMG.commercial1,
  },
  {
    id: 'new-opportunities',
    name: 'New Property Opportunities',
    description: 'Stay informed about new property opportunities as they arise.',
    image: IMG.opportunity1,
  },
]

export const properties = [
  {
    id: 'omaxe-metro-city',
    name: 'Omaxe Metro City',
    location: 'Kalli Paschim, Raebareli Road, Lucknow',
    category: 'Residential Projects',
    categoryId: 'residential-projects',
    price: 'On Request',
    availability: 'Contact for Availability',
    description:
      'Explore property opportunities at Omaxe Metro City, located along Raebareli Road in Lucknow. Contact Triedge Realty for current availability and property details.',
    images: [IMG.omaxe1, IMG.omaxe2],
    imageNote:
      'Illustrative photographs — not actual photos of Omaxe Metro City. Replace with client-provided images.',
    featured: true,
    isDemo: false,
    mapQuery: 'Omaxe Metro City, Kalli Paschim, Raebareli Road, Lucknow',
  },
  {
    id: 'demo-gomti-nagar-apartment',
    name: 'Residential Apartment Opportunity',
    location: 'Gomti Nagar, Lucknow',
    category: 'Apartments',
    categoryId: 'apartments',
    price: 'On Request',
    availability: 'Contact for Availability',
    description:
      'A sample listing for demonstration purposes. Enquire with Triedge Realty to discuss apartment options in Lucknow.',
    images: [IMG.apartment1, IMG.apartment2],
    imageNote: 'Illustrative / DEMO listing photographs. Not a confirmed inventory item.',
    featured: false,
    isDemo: true,
    mapQuery: 'Gomti Nagar, Lucknow',
  },
  {
    id: 'demo-raebareli-road-plot',
    name: 'Residential Plot Opportunity',
    location: 'Raebareli Road Corridor, Lucknow',
    category: 'Residential Plots',
    categoryId: 'residential-plots',
    price: 'On Request',
    availability: 'Contact for Availability',
    description:
      'A sample listing for demonstration purposes. Contact Triedge Realty for guidance on residential plot opportunities.',
    images: [IMG.plot1, IMG.plot2],
    imageNote: 'Illustrative / DEMO listing photographs. Not a confirmed inventory item.',
    featured: false,
    isDemo: true,
    mapQuery: 'Raebareli Road, Lucknow',
  },
  {
    id: 'demo-aliganj-house',
    name: 'Independent House Opportunity',
    location: 'Aliganj, Lucknow',
    category: 'Independent Houses',
    categoryId: 'independent-houses',
    price: 'On Request',
    availability: 'Contact for Availability',
    description:
      'A sample listing for demonstration purposes. Reach out to Triedge Realty to explore independent house options in Lucknow.',
    images: [IMG.house1, IMG.house2],
    imageNote: 'Illustrative / DEMO listing photographs. Not a confirmed inventory item.',
    featured: false,
    isDemo: true,
    mapQuery: 'Aliganj, Lucknow',
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
