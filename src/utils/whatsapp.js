import { WHATSAPP_NUMBER } from '../data/properties'

const BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function buildWhatsAppUrl(message) {
  return `${BASE_URL}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

export function generalEnquiryMessage() {
  return 'Hello Triedge Realty, I am looking for property options in Lucknow. Please help me with the available properties.'
}

export function propertyEnquiryMessage(property) {
  return `Hello Triedge Realty, I am interested in ${property.name}, ${property.location}. Please share the pricing, availability and further details.`
}

export function categoryEnquiryMessage(categoryName) {
  return `Hello Triedge Realty, I am interested in ${categoryName} in Lucknow. Please share the available options and further details.`
}

export function contactFormMessage({ name, phone, preference, message }) {
  return [
    'Hello Triedge Realty,',
    '',
    'I would like to enquire about a property.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Property preference: ${preference || 'Not specified'}`,
    `Message: ${message}`,
  ].join('\n')
}

export const generalEnquiryUrl = () => buildWhatsAppUrl(generalEnquiryMessage())
export const propertyEnquiryUrl = (property) =>
  buildWhatsAppUrl(propertyEnquiryMessage(property))
export const categoryEnquiryUrl = (categoryName) =>
  buildWhatsAppUrl(categoryEnquiryMessage(categoryName))
