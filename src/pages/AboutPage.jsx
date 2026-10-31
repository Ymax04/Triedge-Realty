import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Target, Award, Users, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { ABOUT_IMAGE, BUSINESS } from '../data/properties'
import { generalEnquiryUrl } from '../utils/whatsapp'

const VALUES = [
  {
    icon: Shield,
    title: 'Integrity & Transparency',
    desc: 'No hidden agendas, inflated prices, or misleading brochures. We provide clear, factual property details upfront.',
  },
  {
    icon: Target,
    title: 'Client-Centric Matchmaking',
    desc: 'We prioritize your specific lifestyle and budget requirements rather than pushing generic inventory.',
  },
  {
    icon: Award,
    title: 'Lucknow Corridor Expertise',
    desc: 'Deep local knowledge of prime zones including Gomti Nagar Extension, Raebareli Road, Shaheed Path, and Aliganj.',
  },
  {
    icon: Users,
    title: 'End-to-End Assistance',
    desc: 'From initial WhatsApp consultation to scheduled on-site walkthroughs and documentation advice.',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share Your Requirements',
    desc: 'Tell us your budget, preferred locality in Lucknow, and property type (apartment, villa, plot, or commercial).',
  },
  {
    step: '02',
    title: 'Curated Options Review',
    desc: 'Receive handpicked, verified listings with transparent pricing and developer background.',
  },
  {
    step: '03',
    title: 'Guided Site Visits',
    desc: 'Walk through properties with our consultation team to inspect actual construction quality and location amenities.',
  },
  {
    step: '04',
    title: 'Informed Decision Making',
    desc: 'Get unhurried, honest advice to finalize the right deal with confidence and peace of mind.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Triedge Realty - Lucknow'
  }, [])

  return (
    <div className="bg-warm-white">
      {/* Subpage Header Banner with breadcrumb */}
      <PageHeader
        title="About Triedge Realty"
        subtitle="Empowering homebuyers and investors across Lucknow with honest, transparent, and personalized property consultancy."
      />

      {/* Main Story Section */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-navy/90 p-4 text-white backdrop-blur-md">
              <p className="text-xs font-semibold tracking-wider text-gold uppercase">
                Triedge Realty · Lucknow
              </p>
              <p className="mt-1 text-sm font-medium text-white/90">
                Helping individuals & families discover the right address in Uttar Pradesh.
              </p>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title">A Modern Approach to Lucknow Real Estate</h2>
            <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
              Triedge Realty was founded to bring clarity and ease to the Lucknow property market.
              Whether you are searching for your family's dream villa, a high-yield commercial space,
              or a strategic plot near key development corridors, finding the right property should be
              an inspiring journey — not a stressful one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              We operate with a simple philosophy: understand what our clients genuinely need, provide
              honest insights on location pros and cons, and offer direct access via WhatsApp for
              instant support without long waits or aggressive sales tactics.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-light-grey pt-6">
              <div>
                <p className="text-3xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>
                  100%
                </p>
                <p className="mt-1 text-xs font-semibold text-charcoal/60 uppercase">
                  Verified Property Details
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold" style={{ fontFamily: 'var(--font-display)' }}>
                  Fast
                </p>
                <p className="mt-1 text-xs font-semibold text-charcoal/60 uppercase">
                  WhatsApp Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-pad bg-light-grey/60">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">What Drives Triedge Realty</h2>
            <p className="section-lead mx-auto">
              We adhere to the highest standards of professional ethics and personalized attention.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-[#E4E5E7] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Icon size={24} className="text-gold-dark" />
                </div>
                <h3
                  className="mt-4 text-lg font-bold text-navy"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Advisory Flow */}
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-title">Our 4-Step Consultation Process</h2>
            <p className="section-lead mx-auto">
              Clear, transparent, and designed to save you time and hassle.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-[#E4E5E7] bg-white p-6 shadow-xs"
              >
                <span className="text-4xl font-black text-navy/10" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.step}
                </span>
                <h3
                  className="mt-2 text-base font-bold text-navy"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="container-site max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Explore Properties in Lucknow?
          </h2>
          <p className="mt-3 text-white/80">
            Browse our latest inventory or connect with our consultants for customized recommendations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/properties" className="btn bg-white text-navy font-bold hover:bg-warm-white">
              <span>View Listings</span>
              <ArrowRight size={16} className="text-gold" />
            </Link>
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
