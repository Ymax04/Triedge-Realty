import { MessageCircle } from 'lucide-react'
import { CTA_IMAGE } from '../data/properties'
import { generalEnquiryUrl } from '../utils/whatsapp'

export default function CtaBanner() {
  return (
    <section id="cta" className="relative overflow-hidden bg-navy py-16 md:py-20">
      <img
        src={CTA_IMAGE.src}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        style={{ height: '100%', maxWidth: 'none' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/75" aria-hidden="true" />

      <div className="container-site relative z-10 max-w-2xl text-center">
        <h2
          className="text-[1.75rem] leading-snug text-white md:text-[2.2rem]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Looking For Your Perfect Property?
        </h2>
        <p className="mx-auto mt-4 text-base leading-relaxed text-white/80">
          Let Triedge Realty help you explore the right property opportunities in Lucknow. Get in
          touch with us today for property details and personalised assistance.
        </p>
        <a
          href={generalEnquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp mt-8"
        >
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp Us
        </a>
      </div>
    </section>
  )
}
