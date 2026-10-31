import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, MessageCircle, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { propertyEnquiryUrl } from '../utils/whatsapp'

export default function PropertyDetails({ property }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = property.images?.length ? property.images : []
  const activeImage = images[activeIndex] ?? null

  return (
    <article className="min-h-screen bg-warm-white pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="container-site">
        {/* Breadcrumb Navigation back to main and properties */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium md:text-sm">
          <Link to="/" className="text-charcoal/60 transition-colors hover:text-navy">
            Home
          </Link>
          <ChevronRight size={14} className="text-charcoal/40" aria-hidden="true" />
          <Link to="/properties" className="text-charcoal/60 transition-colors hover:text-navy">
            Properties
          </Link>
          <ChevronRight size={14} className="text-charcoal/40" aria-hidden="true" />
          <span className="font-semibold text-navy truncate max-w-xs sm:max-w-md" aria-current="page">
            {property.name}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          to="/properties"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors duration-150 hover:text-gold"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to all properties
        </Link>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-[#E4E5E7] bg-light-grey shadow-sm">
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={
                    property.isDemo
                      ? `Photo for demo listing ${property.name}`
                      : `Photo representing ${property.name}`
                  }
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-charcoal/50">
                  Image coming soon
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`aspect-[4/3] overflow-hidden rounded border-2 transition-all duration-150 ${
                      index === activeIndex
                        ? 'border-gold shadow-sm scale-95'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {property.imageNote && (
              <p className="mt-3 text-xs text-charcoal/60 italic">{property.imageNote}</p>
            )}

            {/* Highlights Box */}
            <div className="mt-8 rounded-lg border border-[#E4E5E7] bg-white p-6 shadow-xs">
              <h2
                className="text-lg font-bold text-navy"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Property Overview
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                {property.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-light-grey pt-5 sm:grid-cols-3">
                <div className="rounded bg-light-grey/60 p-3">
                  <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Category</span>
                  <span className="mt-0.5 block text-sm font-semibold text-navy">{property.category}</span>
                </div>
                <div className="rounded bg-light-grey/60 p-3">
                  <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Location</span>
                  <span className="mt-0.5 block text-sm font-semibold text-navy truncate">{property.location}</span>
                </div>
                <div className="rounded bg-light-grey/60 p-3">
                  <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Price</span>
                  <span className="mt-0.5 block text-sm font-semibold text-gold-dark">{property.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Inquiry Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-xl border border-[#E4E5E7] bg-white p-6 shadow-md md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-navy/10 px-2.5 py-1 text-xs font-bold text-navy">
                  {property.category}
                </span>
                {property.isDemo && (
                  <span className="rounded bg-navy px-2.5 py-1 text-xs font-semibold tracking-wider text-white uppercase">
                    Demo Listing
                  </span>
                )}
              </div>

              <h1
                className="mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {property.name}
              </h1>

              <p className="mt-2.5 flex items-start gap-2 text-sm text-charcoal/80">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{property.location}</span>
              </p>

              <div className="mt-6 rounded-lg bg-navy/5 p-4">
                <span className="text-xs font-medium text-charcoal/60">Estimated Price</span>
                <div className="mt-1 text-2xl font-bold text-navy">{property.price}</div>
                <span className="text-[11px] text-charcoal/50">Terms and pricing subject to verification</span>
              </div>

              <dl className="mt-6 space-y-3.5 border-y border-[#E4E5E7] py-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal/65">Availability Status</dt>
                  <dd className="font-semibold text-navy">Contact for Availability</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal/65">Consultation & Site Visit</dt>
                  <dd className="font-semibold text-emerald-700">Free of Charge</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal/65">Advisory Provider</dt>
                  <dd className="font-semibold text-navy">Triedge Realty, Lucknow</dd>
                </div>
              </dl>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={propertyEnquiryUrl(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center !py-3.5 text-base shadow-md"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Direct Enquiry
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline w-full justify-center !py-3 text-sm"
                >
                  Request Site Visit via Form
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 border-t border-light-grey pt-5 text-xs text-charcoal/70">
                <div className="flex items-center gap-2 text-emerald-800">
                  <ShieldCheck size={16} className="shrink-0 text-emerald-600" />
                  <span>Direct developer & verified seller liaison</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-charcoal/75">
                  <CheckCircle2 size={16} className="shrink-0 text-gold" />
                  <span>Personalized guidance for paperwork & site walkthrough</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
