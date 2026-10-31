import { useState } from 'react'
import { Phone, MapPin, Building2, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import { BUSINESS } from '../data/properties'
import { contactFormMessage, generalEnquiryUrl, openWhatsApp } from '../utils/whatsapp'

const MAP_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Omaxe Metro City, Kalli Paschim, Raebareli Road, Lucknow')

const INITIAL = { name: '', phone: '', preference: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (!/^[\d+\-\s()]{8,15}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.'
    if (!form.message.trim()) next.message = 'Please share a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    openWhatsApp(
      contactFormMessage({
        name: form.name.trim(),
        phone: form.phone.trim(),
        preference: form.preference.trim(),
        message: form.message.trim(),
      }),
    )
  }

  const fieldClass =
    'w-full rounded border border-[#D8D9DB] bg-white px-3.5 py-3 text-sm text-charcoal outline-none transition-colors duration-150 focus:border-navy'

  return (
    <section id="contact" className="section-pad bg-light-grey pb-28 md:pb-24">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="section-title">Contact Triedge Realty</h2>
          <p className="section-lead">
            Have questions about a property or looking for something specific? Connect with us
            directly.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-charcoal/80">
            <li className="flex items-start gap-3">
              <Building2 size={18} className="mt-0.5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Business</p>
                <p>{BUSINESS.name}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Location</p>
                <p>{BUSINESS.location}</p>
                <a
                  href={MAP_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline"
                >
                  Omaxe Metro City on Google Maps
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Phone</p>
                <a href={`tel:+${BUSINESS.phoneRaw}`} className="hover:text-navy">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy">Email</p>
                <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-navy">
                  {BUSINESS.email}
                </a>
              </div>
            </li>
          </ul>

          <a
            href={generalEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp mt-8"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>

        <div className="border border-[#E4E5E7] bg-white p-6 md:p-8 lg:col-span-7">
          <h3 className="text-xl text-navy" style={{ fontFamily: 'var(--font-display)' }}>
            Send an Enquiry
          </h3>
          <p className="mt-1 text-sm text-charcoal/65">
            Your message opens in WhatsApp — no registration required.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                  className={fieldClass}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                  Phone number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  className={fieldClass}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="preference" className="mb-1.5 block text-sm font-medium text-navy">
                  Property preference
                </label>
                <select
                  id="preference"
                  name="preference"
                  value={form.preference}
                  onChange={update('preference')}
                  className={fieldClass}
                >
                  <option value="">Select an option</option>
                  <option value="Residential Plots">Residential Plots</option>
                  <option value="Residential Projects">Residential Projects</option>
                  <option value="Independent Houses">Independent Houses</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Commercial Properties">Commercial Properties</option>
                  <option value="Other / Not sure">Other / Not sure</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  className={`${fieldClass} resize-y`}
                  placeholder="Share what you are looking for..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-700">{errors.message}</p>}
              </div>
            </div>

            <button type="submit" className="btn btn-whatsapp mt-5 w-full sm:w-auto">
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
