import { Link } from 'react-router-dom'
import { MapPin, MessageCircle } from 'lucide-react'
import { propertyEnquiryUrl } from '../utils/whatsapp'

export default function PropertyCard({ property }) {
  const image = property.images?.[0]
  const imageAlt = property.isDemo
    ? `Illustrative photo for demo listing: ${property.name}`
    : `Illustrative photo representing ${property.name}`

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#E4E5E7] bg-white transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-light-grey">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-charcoal/50">
            Image coming soon
          </div>
        )}
        {property.isDemo && (
          <span className="absolute top-3 left-3 bg-navy/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
            Demo Listing
          </span>
        )}
        <span className="absolute right-3 bottom-3 bg-warm-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy">
          {property.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl leading-snug text-navy" style={{ fontFamily: 'var(--font-display)' }}>
          {property.name}
        </h3>
        <p className="mt-2 flex items-start gap-1.5 text-sm text-charcoal/70">
          <MapPin size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
          <span>{property.location}</span>
        </p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/75">
          {property.description}
        </p>
        <p className="mt-4 text-sm font-semibold text-navy">
          Price: <span className="text-gold">{property.price}</span>
        </p>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link to={`/properties/${property.id}`} className="btn btn-outline flex-1 !py-2.5 text-sm">
            View Details
          </Link>
          <a
            href={propertyEnquiryUrl(property)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp flex-1 !py-2.5 text-sm"
          >
            <MessageCircle size={15} aria-hidden="true" />
            Enquire
          </a>
        </div>
      </div>
    </article>
  )
}
