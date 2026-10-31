import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import { HelpCircle } from 'lucide-react'

const FAQS = [
  {
    q: 'How does a property consultation work?',
    a: 'You can connect directly via WhatsApp or submit your requirements using the form above. We will review your budget and preferred locality, then share verified property options matching your needs.',
  },
  {
    q: 'Is there any fee for initial consultation or site visits?',
    a: 'No. Our initial property consultations, requirement analysis, and scheduled site visits in Lucknow are completely complimentary.',
  },
  {
    q: 'Which areas of Lucknow do you specialize in?',
    a: 'We specialize in high-growth corridors including Raebareli Road (Omaxe Metro City, Kalli Paschim), Gomti Nagar Extension, Shaheed Path, Sultanpur Road, and established zones like Aliganj.',
  },
  {
    q: 'Can you help with home loan or registry paperwork?',
    a: 'Yes, we guide you through developer documentation, RERA compliance verification, and coordinate with leading banking partners for home loan sanctions.',
  },
]

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us | Triedge Realty - Lucknow'
  }, [])

  return (
    <div className="bg-warm-white">
      {/* Subpage Header Banner with breadcrumbs to get back to main */}
      <PageHeader
        title="Contact Triedge Realty"
        subtitle="We're here to answer all your property questions, schedule site visits, and guide your real estate journey in Lucknow."
      />

      {/* Main Contact Section */}
      <Contact />

      {/* FAQ Section */}
      <section className="section-pad border-t border-[#E4E5E7] bg-white">
        <div className="container-site max-w-4xl">
          <div className="text-center">
            <span className="section-eyebrow">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-lead mx-auto">
              Quick answers about our consultation process and property assistance in Lucknow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FAQS.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl border border-[#E4E5E7] bg-warm-white p-6 shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3
                      className="text-base font-bold text-navy"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
