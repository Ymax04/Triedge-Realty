import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '../data/properties'
import { generalEnquiryUrl } from '../utils/whatsapp'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'About', href: '/#about' },
  { label: 'Properties', href: '/#properties' },
  { label: 'Contact', href: '/#contact' },
]

function scrollToHash(hash) {
  const id = hash.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const solid = scrolled || open || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToHash(location.hash))
    }
  }, [location])

  const handleNavClick = (event, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        event.preventDefault()
        scrollToHash(href.slice(1))
        window.history.replaceState(null, '', href)
      }
      setOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          solid ? 'border-b border-white/10 bg-navy/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link
            to="/#home"
            onClick={(e) => handleNavClick(e, '/#home')}
            className="text-lg font-semibold tracking-tight text-white md:text-xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Triedge <span className="font-medium text-gold">Realty</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:+${BUSINESS.phoneRaw}`}
              className="hidden items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-gold md:inline-flex"
            >
              <Phone size={15} className="text-gold" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-navy/50 transition-opacity duration-200 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-drawer"
          className={`absolute top-0 right-0 flex h-full w-[min(19rem,84vw)] flex-col bg-warm-white shadow-xl transition-transform duration-200 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-light-grey px-5 py-4">
            <span
              className="text-base font-semibold text-navy"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Triedge <span className="text-gold">Realty</span>
            </span>
            <button
              type="button"
              className="p-1 text-charcoal/50"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded px-3 py-3 text-sm font-medium text-charcoal hover:bg-light-grey"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-light-grey px-5 py-5">
            <a
              href={`tel:+${BUSINESS.phoneRaw}`}
              className="mb-3 flex items-center gap-2 text-sm text-charcoal/80"
            >
              <Phone size={15} className="text-gold" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}
