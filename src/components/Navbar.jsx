import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'
import { BUSINESS } from '../data/properties'
import { generalEnquiryUrl } from '../utils/whatsapp'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'About', href: '/about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Contact', href: '/contact' },
]

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
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isLinkActive = (href) => {
    if (href === '/') return location.pathname === '/'
    if (href === '/properties') {
      return location.pathname === '/properties' || location.pathname.startsWith('/properties/')
    }
    return location.pathname === href
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          solid
            ? 'border-b border-white/10 bg-navy/95 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between md:h-[4.75rem]">
          {/* Logo - returns to main */}
          <Link
            to="/"
            className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-white md:text-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
            aria-label="Triedge Realty Home"
          >
            <span>Triedge</span>
            <span className="font-medium text-gold transition-colors group-hover:text-gold-light">
              Realty
            </span>
            <span className="ml-1 rounded bg-gold/20 border border-gold/40 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-gold-light">
              LUCKNOW
            </span>
          </Link>

          {/* Desktop Navigation with active indicator lines */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-indicator-link text-sm font-medium tracking-wide transition-colors ${
                    active ? 'active-nav-link text-white' : 'text-white/80 hover:text-white'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Phone & WhatsApp Quick Connect */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:+${BUSINESS.phoneRaw}`}
              className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/90 transition-colors hover:border-gold hover:text-gold md:inline-flex"
            >
              <Phone size={14} className="text-gold" aria-hidden="true" />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded bg-gold px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-gold-dark lg:inline-flex"
            >
              <MessageSquare size={14} aria-hidden="true" />
              Enquire
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-navy/60 backdrop-blur-xs transition-opacity duration-200 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-drawer"
          className={`absolute top-0 right-0 flex h-full w-[min(20rem,86vw)] flex-col bg-warm-white shadow-2xl transition-transform duration-200 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between border-b border-light-grey px-5 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 text-lg font-bold text-navy"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>Triedge</span>
              <span className="text-gold">Realty</span>
              <span className="ml-1 rounded bg-navy/10 border border-navy/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-navy">
                LUCKNOW
              </span>
            </Link>
            <button
              type="button"
              className="rounded p-1.5 text-charcoal/60 hover:bg-light-grey"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links with Active Indicator Line */}
          <nav className="flex flex-1 flex-col gap-1.5 px-3 py-4" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3.5 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? 'border-l-4 border-gold bg-gold/15 font-semibold text-navy'
                      : 'border-l-4 border-transparent text-charcoal/80 hover:bg-light-grey hover:text-navy'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Drawer Bottom Actions */}
          <div className="border-t border-light-grey px-5 py-5">
            <a
              href={`tel:+${BUSINESS.phoneRaw}`}
              className="mb-3.5 flex items-center gap-2.5 text-sm font-medium text-charcoal"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-navy">
                <Phone size={15} className="text-gold-dark" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[11px] text-charcoal/60 uppercase">Call Directly</span>
                <span className="text-sm font-semibold text-navy">{BUSINESS.phoneDisplay}</span>
              </div>
            </a>

            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center shadow-md"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}
