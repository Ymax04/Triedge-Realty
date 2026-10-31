import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react'
import { HERO_IMAGE, categories } from '../data/properties'

export default function Hero() {
  const [category, setCategory] = useState('')
  const [open, setOpen] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const selectedLabel =
    categories.find((item) => item.id === category)?.name || 'Select a category'

  const chooseCategory = (id) => {
    setCategory(id)
    setOpen(false)
    if (id) {
      navigate(`/properties?category=${id}`)
    } else {
      navigate('/properties')
    }
  }

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-navy"
    >
      {!imgFailed && (
        <img
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ height: '100%', maxWidth: 'none' }}
          fetchPriority="high"
          decoding="async"
          onError={() => setImgFailed(true)}
        />
      )}

      {/* High-contrast readable overlays */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,43,69,0.55)_0%,rgba(23,43,69,0.8)_70%,rgba(23,43,69,0.92)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/35" aria-hidden="true" />

      <div className="container-site relative z-10 flex w-full flex-col items-center px-4 pt-28 pb-16 text-center md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-2xl">
          {/* Eyebrow badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/80 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#E8CE99] uppercase shadow-lg backdrop-blur-md">
            <span>Triedge Realty</span>
            <span className="text-gold">•</span>
            <span>Lucknow</span>
          </div>

          {/* Main Hero Heading */}
          <h1
            className="text-[2.25rem] font-bold leading-[1.18] text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Find a Space That <span className="text-gold">Fits Your Future.</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg md:text-xl">
            Explore residential and commercial real estate opportunities across Lucknow with
            personalised property assistance.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              to="/properties"
              className="btn min-w-[11.5rem] bg-white text-navy font-bold shadow-xl hover:bg-warm-white hover:scale-[1.02] transition-all"
            >
              Explore Listings
              <ArrowRight size={17} className="text-gold" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="btn min-w-[11.5rem] border-2 border-white/80 bg-navy/50 text-white font-semibold backdrop-blur-md hover:border-white hover:bg-white hover:text-navy transition-all"
            >
              <MessageSquare size={16} aria-hidden="true" />
              Contact Us
            </Link>
          </div>

          {/* Category Dropdown Navigation */}
          <div className="mx-auto mt-10 w-full max-w-md border-t border-white/20 pt-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#E8CE99] uppercase">
              Browse Property Categories
            </p>
            <p className="mt-1.5 text-sm text-white/80">Choose a property type to view listings</p>

            <div ref={dropdownRef} className="relative mt-3 text-left">
              <button
                type="button"
                id="hero-category"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-md border border-white/30 bg-navy/85 px-4 py-3 text-sm font-medium text-white shadow-xl outline-none backdrop-blur-md transition-colors duration-150 hover:border-gold focus-visible:border-gold"
              >
                <span className={category ? 'text-white' : 'text-white/80'}>
                  {selectedLabel}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gold transition-transform duration-150 ${
                    open ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {open && (
                <ul
                  role="listbox"
                  aria-labelledby="hero-category"
                  className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-md border border-white/20 bg-navy-secondary py-1.5 shadow-2xl backdrop-blur-lg"
                >
                  <li>
                    <button
                      type="button"
                      role="option"
                      aria-selected={!category}
                      onClick={() => chooseCategory('')}
                      className="w-full px-4 py-2.5 text-left text-sm font-medium text-white/80 transition-colors duration-150 hover:bg-navy-soft hover:text-white"
                    >
                      All Categories
                    </button>
                  </li>
                  {categories.map((item) => {
                    const active = category === item.id
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={active}
                          onClick={() => chooseCategory(item.id)}
                          className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                            active
                              ? 'bg-gold/20 text-gold'
                              : 'text-white/90 hover:bg-navy-soft hover:text-white'
                          }`}
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
