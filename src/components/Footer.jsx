import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Youtube, ArrowRight } from 'lucide-react'
import { BUSINESS, categories } from '../data/properties'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Why Choose Us', href: '/why-us' },
  { label: 'About Us', href: '/about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        {/* Brand Information */}
        <div className="md:col-span-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-white hover:opacity-95"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span>Triedge</span>
            <span className="text-gold">Realty</span>
            <span className="rounded bg-white/10 border border-white/25 px-2 py-0.5 text-[11px] font-black uppercase tracking-widest text-gold-light">
              LUCKNOW
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Real estate consultancy in Lucknow helping clients explore premium residential, villa,
            and commercial property opportunities with clear, personalized assistance.
          </p>
          <a
            href={BUSINESS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 transition-all hover:border-gold hover:text-gold hover:bg-white/10"
          >
            <Youtube size={16} className="text-red-400" aria-hidden="true" />
            <span>{BUSINESS.youtubeLabel}</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <ArrowRight
                    size={12}
                    className="text-gold opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Property Categories */}
        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">
            Property Categories
          </p>
          <ul className="mt-4 space-y-2.5">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/properties?category=${cat.id}`}
                  className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <span className="text-gold/60 transition-colors group-hover:text-gold">•</span>
                  <span>{cat.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Contact */}
        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">Contact</p>
          <ul className="mt-4 space-y-3.5 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>{BUSINESS.location}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`tel:+${BUSINESS.phoneRaw}`}
                className="font-medium text-white transition-colors hover:text-gold"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`mailto:${BUSINESS.email}`}
                className="break-all transition-colors hover:text-white"
              >
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        <div className="container-site flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {year} Triedge Realty. All rights reserved. Lucknow, Uttar Pradesh.</p>
          <div className="flex items-center gap-4 text-white/70">
            <Link to="/" className="hover:text-gold transition-colors">
              Main Home
            </Link>
            <span>•</span>
            <Link to="/properties" className="hover:text-gold transition-colors">
              Browse Listings
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
