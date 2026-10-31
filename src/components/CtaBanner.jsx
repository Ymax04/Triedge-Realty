import { Link } from 'react-router-dom'
import { MessageCircle, Mail } from 'lucide-react'
import { CTA_IMAGE } from '../data/properties'
import { generalEnquiryUrl } from '../utils/whatsapp'

export default function CtaBanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy py-16 md:py-24">
      <img
        src={CTA_IMAGE.src}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        style={{ height: '100%', maxWidth: 'none' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />

      <div className="container-site relative z-10 max-w-2xl text-center">
        <span className="mb-3 inline-block text-xs font-bold tracking-[0.18em] text-gold uppercase">
          Find Your Dream Property
        </span>
        <h2
          className="text-2xl font-bold leading-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Looking For Your Perfect Property in Lucknow?
        </h2>
        <p className="mx-auto mt-4 text-base leading-relaxed text-white/90 md:text-lg">
          Let Triedge Realty help you explore the right property opportunities. Get in touch with us
          today for genuine listings, honest advisory, and site visits.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href={generalEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp min-w-[11.5rem] shadow-lg"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Us
          </a>

          <Link
            to="/contact"
            className="btn min-w-[11.5rem] bg-white text-navy font-bold shadow-lg hover:bg-warm-white transition-all"
          >
            <Mail size={17} className="text-gold" aria-hidden="true" />
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  )
}
