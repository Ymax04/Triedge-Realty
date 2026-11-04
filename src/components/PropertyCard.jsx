import { Link } from 'react-router-dom'
import { MapPin, MessageCircle, Building, ShieldCheck, ArrowRight } from 'lucide-react'
import { propertyEnquiryUrl } from '../utils/whatsapp'

export default function PropertyCard({ property }) {
  const image = property.images?.[0]
  const imageAlt = `${property.name} - ${property.location} - Triedge Realty Lucknow`

  // Badge styling helper
  const getBadgeClass = (color) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-600 text-white border-emerald-500'
      case 'blue':
        return 'bg-sky-600 text-white border-sky-500'
      case 'gold':
      default:
        return 'bg-gold-dark text-white border-gold'
    }
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E4E5E7] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
      {/* Clean image container: Light background, NO black borders / letterboxing */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-charcoal/50">
            Image coming soon
          </div>
        )}

        {/* Dynamic Client Badges */}
        {property.badge && (
          <span
            className={`absolute top-3 left-3 rounded-md px-3 py-1 text-xs font-bold tracking-wide uppercase shadow-md ${getBadgeClass(
              property.badgeColor,
            )}`}
          >
            {property.badge}
          </span>
        )}

        {/* Category Pill */}
        <span className="absolute right-3 bottom-3 rounded-md bg-navy/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-xs">
          {property.category}
        </span>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Developer Attribution */}
        {property.developer && (
          <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-gold-dark uppercase">
            <Building size={13} aria-hidden="true" />
            <span>{property.developer}</span>
          </div>
        )}

        <h3
          className="text-xl font-bold leading-snug text-navy group-hover:text-navy-secondary"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {property.name}
        </h3>

        <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-charcoal/70 sm:text-sm">
          <MapPin size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
          <span>{property.location}</span>
        </p>

        {/* Key Specification / Unit Tags */}
        {property.configurations && property.configurations.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {property.configurations.map((cfg) => (
              <span
                key={cfg.unit}
                className="rounded bg-light-grey px-2 py-0.5 text-[11px] font-semibold text-navy"
              >
                {cfg.unit}
              </span>
            ))}
          </div>
        )}

        {property.investmentDetails && (
          <div className="mt-3 rounded-md bg-emerald-50 border border-emerald-200/60 p-2 text-xs font-semibold text-emerald-800">
            10% Assured Return · ₹47,400 / Month Payout
          </div>
        )}

        <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-charcoal/75 sm:text-sm">
          {property.description}
        </p>

        {/* Price & Status Row */}
        <div className="mt-5 flex items-baseline justify-between border-t border-light-grey pt-4">
          <div>
            <span className="block text-[11px] font-medium text-charcoal/60 uppercase">Pricing</span>
            <span className="text-base font-bold text-navy sm:text-lg">{property.price}</span>
          </div>
          <span className="text-xs font-semibold text-gold-dark">{property.availability}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2.5">
          <Link
            to={`/properties/${property.id}`}
            className="btn btn-outline flex-1 justify-center !py-2.5 text-xs font-bold"
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href={propertyEnquiryUrl(property)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp flex-1 justify-center !py-2.5 text-xs font-bold shadow-xs"
          >
            <MessageCircle size={15} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  )
}
