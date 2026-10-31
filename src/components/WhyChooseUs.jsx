import { Link } from 'react-router-dom'
import { BadgeCheck, UserRound, MapPinned, Compass, ArrowRight } from 'lucide-react'

const FEATURES = [
  {
    icon: BadgeCheck,
    title: 'Verified Property Information',
    text: 'Receive clear, practical information and authentic developer details before deciding to visit.',
  },
  {
    icon: UserRound,
    title: 'Personalised Property Assistance',
    text: 'Share your budget and requirements to get curated options matching your exact lifestyle needs.',
  },
  {
    icon: MapPinned,
    title: 'Convenient Site Visits',
    text: 'Schedule hassle-free site visits with our local representatives for guided walkthroughs.',
  },
  {
    icon: Compass,
    title: 'Expert Market Guidance',
    text: 'Benefit from deep knowledge of Lucknow corridors including Gomti Nagar, Raebareli Road, & Shaheed Path.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-warm-white">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">The Triedge Realty Advantage</h2>
            <p className="section-lead">
              A transparent, dependable real estate consultancy designed around your peace of mind in Lucknow.
            </p>
          </div>

          <Link
            to="/why-us"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold transition-colors"
          >
            <span>Explore All Advantages</span>
            <ArrowRight size={16} className="text-gold" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-lg border border-[#E4E5E7] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-gold/15 group-hover:text-gold-dark">
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3
                className="mt-4 text-lg font-bold leading-snug text-navy"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
