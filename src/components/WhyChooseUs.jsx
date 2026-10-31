import { BadgeCheck, UserRound, MapPinned, Compass } from 'lucide-react'

const FEATURES = [
  {
    icon: BadgeCheck,
    title: 'Verified Property Information',
    text: 'Receive clear, practical information about property options before you enquire further.',
  },
  {
    icon: UserRound,
    title: 'Personalised Property Assistance',
    text: 'Share your requirements and get help exploring options that may suit your needs.',
  },
  {
    icon: MapPinned,
    title: 'Convenient Site Visit Enquiries',
    text: 'Connect with us on WhatsApp to discuss site visits and property walkthroughs.',
  },
  {
    icon: Compass,
    title: 'Expert Property Guidance',
    text: 'Get thoughtful guidance through the property search process in Lucknow.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-warm-white">
      <div className="container-site">
        <div className="mb-10 max-w-2xl">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Why Choose Triedge Realty</h2>
          <p className="section-lead">
            A straightforward, approachable property consultancy experience focused on Lucknow.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-gold/35 pt-5">
              <Icon size={22} className="text-navy" strokeWidth={1.75} aria-hidden="true" />
              <h3
                className="mt-4 text-lg leading-snug text-navy"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
