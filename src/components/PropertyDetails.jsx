import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  MapPin,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Building,
  Calendar,
  Percent,
  FileCheck,
  ShieldAlert,
  Sparkles,
  Maximize2,
  X,
} from 'lucide-react'
import { propertyEnquiryUrl } from '../utils/whatsapp'

export default function PropertyDetails({ property }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const images = property.images?.length ? property.images : []
  const activeImage = images[activeIndex] ?? null

  const getBadgeClass = (color) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-600 text-white'
      case 'blue':
        return 'bg-sky-600 text-white'
      case 'gold':
      default:
        return 'bg-gold-dark text-white'
    }
  }

  return (
    <article className="min-h-screen bg-warm-white pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="container-site">
        {/* Breadcrumb Navigation */}
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
          {/* Left Column: Image Viewer (Clean presentation, NO black bars) */}
          <div className="lg:col-span-7">
            {/* Main Showcase Frame: Soft light gradient, perfectly fits posters and landscape images */}
            <div className="relative flex min-h-[380px] max-h-[580px] items-center justify-center overflow-hidden rounded-xl border border-[#E4E5E7] bg-gradient-to-b from-slate-50 to-slate-100/90 p-3 sm:p-5 shadow-sm">
              {activeImage ? (
                <div className="relative flex h-full w-full items-center justify-center">
                  <img
                    src={activeImage}
                    alt={`${property.name} display`}
                    className="max-h-[540px] w-auto max-w-full rounded-lg object-contain shadow-md transition-all duration-300"
                  />
                  {/* Click to Expand / View Full Brochure */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-navy/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xs transition-colors hover:bg-navy"
                  >
                    <Maximize2 size={13} />
                    <span>View Full Image</span>
                  </button>
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center text-charcoal/50">
                  Image coming soon
                </div>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2.5 sm:grid-cols-5">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`aspect-[4/3] overflow-hidden rounded-lg border-2 bg-slate-100 p-0.5 transition-all duration-150 ${
                      index === activeIndex
                        ? 'border-gold shadow-sm scale-95'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full rounded object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {property.imageNote && (
              <p className="mt-3 text-xs text-charcoal/60 italic">{property.imageNote}</p>
            )}

            {/* Comprehensive Project Overview */}
            <div className="mt-8 rounded-xl border border-[#E4E5E7] bg-white p-6 shadow-xs md:p-8">
              <h2
                className="text-xl font-bold text-navy"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Project Overview & Specifications
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                {property.description}
              </p>

              {/* Developer & Type Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-light-grey pt-5 sm:grid-cols-3">
                <div className="rounded-lg bg-light-grey/60 p-3.5">
                  <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Developer</span>
                  <span className="mt-0.5 block text-sm font-bold text-navy truncate">
                    {property.developer || 'Triedge Realty'}
                  </span>
                </div>
                <div className="rounded-lg bg-light-grey/60 p-3.5">
                  <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Project Type</span>
                  <span className="mt-0.5 block text-sm font-semibold text-navy truncate">
                    {property.projectType || property.category}
                  </span>
                </div>
                <div className="rounded-lg bg-light-grey/60 p-3.5">
                  <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Location</span>
                  <span className="mt-0.5 block text-sm font-semibold text-navy truncate">
                    {property.location}
                  </span>
                </div>
              </div>

              {/* Configurations List if available */}
              {property.configurations && property.configurations.length > 0 && (
                <div className="mt-6 border-t border-light-grey pt-6">
                  <h3 className="text-base font-bold text-navy">Available Configurations</h3>
                  <div className="mt-3 space-y-2.5">
                    {property.configurations.map((cfg) => (
                      <div
                        key={cfg.unit}
                        className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-warm-white p-3.5 text-sm"
                      >
                        <span className="font-semibold text-navy">{cfg.unit}</span>
                        <span className="font-bold text-gold-dark">{cfg.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Assured Return Breakdown (Ekana Business Centre) */}
              {property.investmentDetails && (
                <div className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50/70 p-5 md:p-6">
                  <div className="flex items-center gap-2 text-emerald-900">
                    <Percent size={20} className="text-emerald-700" />
                    <h3 className="text-base font-bold">10% Assured Return Investment Plan</h3>
                  </div>
                  <p className="mt-1 text-xs text-emerald-800">
                    Advertised official investment return details:
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-md bg-white p-3 shadow-xs">
                      <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Investment</span>
                      <span className="mt-0.5 block text-base font-bold text-navy">
                        {property.investmentDetails.amount}
                      </span>
                    </div>
                    <div className="rounded-md bg-white p-3 shadow-xs">
                      <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Assured Return</span>
                      <span className="mt-0.5 block text-base font-bold text-emerald-700">
                        {property.investmentDetails.assuredReturn}
                      </span>
                    </div>
                    <div className="rounded-md bg-white p-3 shadow-xs">
                      <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Monthly Payout</span>
                      <span className="mt-0.5 block text-base font-bold text-navy">
                        {property.investmentDetails.monthlyReturn}
                      </span>
                    </div>
                    <div className="rounded-md bg-white p-3 shadow-xs">
                      <span className="block text-[11px] font-bold text-charcoal/60 uppercase">Yearly Payout</span>
                      <span className="mt-0.5 block text-base font-bold text-navy">
                        {property.investmentDetails.yearlyReturn}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] font-medium text-emerald-900">
                    * Investment Period: {property.investmentDetails.period}
                  </p>
                </div>
              )}

              {/* Additional Listed Charges Table */}
              {property.additionalCharges && (
                <div className="mt-6 border-t border-light-grey pt-6">
                  <h3 className="text-base font-bold text-navy">Additional Listed Charges</h3>
                  <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-light-grey text-navy">
                        <tr>
                          <th className="p-3 font-semibold">Charge Head</th>
                          <th className="p-3 font-semibold text-right">Rate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {property.additionalCharges.map((item) => (
                          <tr key={item.charge} className="hover:bg-slate-50">
                            <td className="p-3 font-medium text-charcoal">{item.charge}</td>
                            <td className="p-3 font-bold text-navy text-right">{item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* RERA Details */}
              {property.reraDetails && (
                <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-xs">
                  <div className="flex items-center gap-2 font-bold text-amber-950">
                    <FileCheck size={16} className="text-amber-700" />
                    <span>Official RERA Registration Details</span>
                  </div>
                  <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                    <div>
                      <span className="text-charcoal/70">Project RERA:</span>{' '}
                      <span className="font-mono font-bold text-navy">{property.reraDetails.project}</span>
                    </div>
                    <div>
                      <span className="text-charcoal/70">Promoter RERA:</span>{' '}
                      <span className="font-mono font-bold text-navy">{property.reraDetails.promoter}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Highlights */}
              {property.highlights && (
                <div className="mt-6 border-t border-light-grey pt-6">
                  <h3 className="text-base font-bold text-navy">Key Highlights</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {property.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/80">
                        <Sparkles size={15} className="mt-0.5 text-gold shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Amenities */}
              {property.amenities && (
                <div className="mt-6 border-t border-light-grey pt-6">
                  <h3 className="text-base font-bold text-navy">Amenities & Facilities</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {property.amenities.map((am) => (
                      <span
                        key={am}
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-charcoal"
                      >
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span>{am}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Pricing & Inquiry Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-xl border border-[#E4E5E7] bg-white p-6 shadow-md md:p-8">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {property.badge && (
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-xs ${getBadgeClass(
                      property.badgeColor,
                    )}`}
                  >
                    {property.badge}
                  </span>
                )}
                <span className="rounded-md bg-navy/10 px-2.5 py-1 text-xs font-bold text-navy">
                  {property.category}
                </span>
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

              {/* Price Banner */}
              <div className="mt-6 rounded-xl bg-navy/5 p-4 border border-navy/10">
                <span className="text-xs font-semibold text-charcoal/60 uppercase">Pricing / Investment</span>
                <div className="mt-1 text-2xl font-bold text-navy">{property.price}</div>
                {property.possession && (
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-charcoal/70">
                    <Calendar size={13} className="text-gold" />
                    <span>Targeted Possession: {property.possession}</span>
                  </div>
                )}
              </div>

              <dl className="mt-6 space-y-3 border-y border-[#E4E5E7] py-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal/65">Availability Status</dt>
                  <dd className="font-semibold text-navy">{property.availability}</dd>
                </div>
                {property.developer && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-charcoal/65">Developer</dt>
                    <dd className="font-semibold text-navy">{property.developer}</dd>
                  </div>
                )}
                {property.bsp && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-charcoal/65">Basic Selling Price (BSP)</dt>
                    <dd className="font-semibold text-navy">{property.bsp}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="text-charcoal/65">Consultation & Site Visit</dt>
                  <dd className="font-semibold text-emerald-700">Free of Charge</dd>
                </div>
              </dl>

              {/* WhatsApp Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={propertyEnquiryUrl(property)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center !py-3.5 text-sm font-bold shadow-md"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Connect on WhatsApp
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline w-full justify-center !py-3 text-xs font-bold"
                >
                  Schedule Guided Site Visit
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 border-t border-light-grey pt-5 text-xs space-y-2 text-charcoal/75">
                <div className="flex items-center gap-2 text-emerald-800">
                  <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                  <span>Direct developer liaison with official documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={16} className="shrink-0 text-gold" />
                  <span>On-ground walkthrough assistance in Lucknow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Image Zoom Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-[92vw] overflow-auto rounded-xl bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-navy/80 p-2 text-white hover:bg-navy"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <img
              src={activeImage}
              alt=""
              className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </article>
  )
}
