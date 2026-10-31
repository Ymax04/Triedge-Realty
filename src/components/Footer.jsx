import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Youtube } from 'lucide-react'
import { BUSINESS, categories } from '../data/properties'

const QUICK_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'About', href: '/#about' },
  { label: 'Properties', href: '/#properties' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()

  const handleNavClick = (event, href) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      event.preventDefault()
      document.getElementById(href.slice(2))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }
  }

  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Triedge <span className="text-gold">Realty</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Real estate consultancy in Lucknow helping clients explore residential and property
            opportunities with clear, personalised assistance.
          </p>
          <a
            href={BUSINESS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-sm text-white/80 transition-colors hover:border-gold hover:text-gold"
          >
            <Youtube size={16} aria-hidden="true" />
            {BUSINESS.youtubeLabel}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">
            Property Categories
          </p>
          <ul className="mt-4 space-y-2.5">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to="/#properties"
                  onClick={(e) => handleNavClick(e, '/#properties')}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              {BUSINESS.location}
            </li>
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:+${BUSINESS.phoneRaw}`} className="hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Serving Lucknow, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  )
}
