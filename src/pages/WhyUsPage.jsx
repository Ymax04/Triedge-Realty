import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  BadgeCheck,
  UserRound,
  MapPinned,
  Compass,
  CheckCircle,
  XCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { generalEnquiryUrl } from '../utils/whatsapp'

const ADVANTAGES = [
  {
    icon: BadgeCheck,
    title: 'Verified Property Information',
    subtitle: 'Zero false promises, accurate developer metrics',
    description:
      'We thoroughly verify listings, approvals, and builder histories before presenting properties to you. You receive authentic square footage, genuine pricing, and transparent timelines.',
    points: ['Verified developer credentials', 'Clear pricing without hidden surcharges', 'True layout & floor plan details'],
  },
  {
    icon: UserRound,
    title: 'Personalised Advisory & Matching',
    subtitle: 'Tailored strictly to your lifestyle & budget',
    description:
      'We do not push one-size-fits-all inventory. Whether you are looking for an upscale 3 BHK in Gomti Nagar or a commercial plot along Raebareli Road, we listen first and recommend only suitable opportunities.',
    points: ['Custom shortlist based on your budget', 'Family-centric lifestyle evaluation', 'Investment return & appreciation analysis'],
  },
  {
    icon: MapPinned,
    title: 'Convenient Site Walkthroughs',
    subtitle: 'On-demand site visits with zero pressure',
    description:
      'Experience properties in person. We coordinate convenient site visits, provide guided walkthroughs of developments like Omaxe Metro City, and point out ground realities including road connectivity and upcoming infrastructure.',
    points: ['Flexible weekend & weekday slots', 'Guided inspection of amenities & construction', 'Objective neighbourhood insights'],
  },
  {
    icon: Compass,
    title: 'Local Lucknow Market Mastery',
    subtitle: 'Deep corridor expertise across Lucknow',
    description:
      'Lucknow real estate is expanding rapidly. We track prime corridors including Shaheed Path, Sultanpur Road, Raebareli Road, Aliganj, and Gomti Nagar Extension so you get first-mover advantages on high-growth developments.',
    points: ['Real-time price trend insights', 'Future infrastructure awareness (Metro, Outer Ring Road)', 'High rental yield & resale guidance'],
  },
]

const COMPARISON = [
  {
    feature: 'Property Verification',
    triedge: 'Thoroughly checked for authenticity and developer approvals',
    traditional: 'Often unverified listings to capture contacts',
  },
  {
    feature: 'Communication Style',
    triedge: 'Direct WhatsApp accessibility, no spam calls',
    traditional: 'Persistent telemarketing calls and aggressive push',
  },
  {
    feature: 'Consultation Fee',
    triedge: 'Free transparent initial guidance and site visits',
    traditional: 'Unclear upfront commissions and surprise charges',
  },
  {
    feature: 'Client Focus',
    triedge: 'Matching your genuine requirements and budget',
    traditional: 'Pushing whichever builder offers highest incentive',
  },
]

export default function WhyUsPage() {
  useEffect(() => {
    document.title = 'Why Choose Us | Triedge Realty - Lucknow'
  }, [])

  return (
    <div className="bg-warm-white">
      {/* Page Header */}
      <PageHeader
        title="Why Choose Triedge Realty"
        subtitle="We combine local Lucknow real estate expertise with transparent, customer-first property guidance."
      />

      {/* Main Advantage Breakdown */}
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our Pillars</span>
            <h2 className="section-title">Built On Trust, Transparency & Service</h2>
            <p className="section-lead mx-auto">
              Discover how our client-first model ensures a seamless, worry-free real estate experience.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {ADVANTAGES.map(({ icon: Icon, title, subtitle, description, points }, idx) => (
              <div
                key={title}
                className={`grid items-center gap-8 rounded-2xl border border-[#E4E5E7] bg-white p-8 shadow-xs md:p-10 lg:grid-cols-12 lg:gap-12 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:col-span-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                    <Icon size={32} className="text-gold-dark" />
                  </div>
                  <h3
                    className="mt-5 text-2xl font-bold text-navy"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold-dark">{subtitle}</p>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
                    {description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm font-medium text-charcoal">
                        <CheckCircle size={17} className="text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-pad bg-light-grey/60">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Comparison</span>
            <h2 className="section-title">The Triedge Realty Difference</h2>
            <p className="section-lead mx-auto">
              How our approach stacks up against traditional real estate brokers in Lucknow.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-[#E4E5E7] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E4E5E7] bg-navy text-white">
                    <th className="p-4 font-semibold sm:px-6">Feature</th>
                    <th className="p-4 font-semibold sm:px-6 text-gold">Triedge Realty</th>
                    <th className="p-4 font-semibold sm:px-6 text-white/70">Typical Broker</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E5E7]">
                  {COMPARISON.map((row) => (
                    <tr key={row.feature} className="transition-colors hover:bg-light-grey/40">
                      <td className="p-4 font-bold text-navy sm:px-6">{row.feature}</td>
                      <td className="p-4 sm:px-6 text-charcoal font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle size={16} className="mt-0.5 text-emerald-600 shrink-0" />
                          <span>{row.triedge}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:px-6 text-charcoal/70">
                        <div className="flex items-start gap-2">
                          <XCircle size={16} className="mt-0.5 text-red-400 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-navy py-16 text-center text-white">
        <div className="container-site max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Experience the Triedge Advantage Today
          </h2>
          <p className="mt-3 text-white/80">
            Let us help you find the right property in Lucknow with zero stress and complete transparency.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/properties" className="btn bg-white text-navy font-bold hover:bg-warm-white">
              <span>Explore Listings</span>
              <ArrowRight size={16} className="text-gold" />
            </Link>
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={16} />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
