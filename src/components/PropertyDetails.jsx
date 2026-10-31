import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, MessageCircle } from 'lucide-react'
import { propertyEnquiryUrl } from '../utils/whatsapp'

export default function PropertyDetails({ property }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = property.images?.length ? property.images : []
  const activeImage = images[activeIndex] ?? null

  return (
    <article className="bg-warm-white">
      <div className="container-site py-8 md:py-12">
        <Link
          to="/#properties"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-navy/70 transition-colors duration-150 hover:text-navy"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to properties
        </Link>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-light-grey">
              {activeImage ? (
                <img
                  src={activeImage}
                  alt={
                    property.isDemo
                      ? `Illustrative gallery image for demo listing ${property.name}`
                      : `Illustrative gallery image for ${property.name}`
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
                    className={`aspect-[4/3] overflow-hidden border-2 transition-colors duration-150 ${
                      index === activeIndex ? 'border-navy' : 'border-transparent'
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
              <p className="mt-3 text-xs text-charcoal/50">{property.imageNote}</p>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-light-grey px-2.5 py-1 text-xs font-semibold text-navy">
                {property.category}
              </span>
              {property.isDemo && (
                <span className="bg-navy px-2.5 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                  Demo Listing
                </span>
              )}
            </div>

            <h1
              className="mt-4 text-3xl leading-tight text-navy md:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {property.name}
            </h1>

            <p className="mt-3 flex items-start gap-2 text-charcoal/75">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              {property.location}
            </p>

            <dl className="mt-6 space-y-3 border-y border-[#E4E5E7] py-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/60">Price</dt>
                <dd className="font-semibold text-navy">{property.price}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/60">Availability</dt>
                <dd className="font-medium text-navy">{property.availability}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/60">Category</dt>
                <dd className="font-medium text-navy">{property.category}</dd>
              </div>
            </dl>

            <p className="mt-6 text-base leading-relaxed text-charcoal/80">{property.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={propertyEnquiryUrl(property)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <Link to="/#contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
