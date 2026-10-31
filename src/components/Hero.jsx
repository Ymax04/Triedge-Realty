import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { HERO_IMAGE, categories } from '../data/properties'

export default function Hero() {
  const [category, setCategory] = useState('')
  const [open, setOpen] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const dropdownRef = useRef(null)

  const selectedLabel =
    categories.find((item) => item.id === category)?.name || 'Select a category'

  const scrollTo = (id, categoryId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (categoryId) {
      window.dispatchEvent(new CustomEvent('filter-category', { detail: categoryId }))
    }
  }

  const chooseCategory = (id) => {
    setCategory(id)
    setOpen(false)
    if (id) scrollTo('properties', id)
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

      {/* Soft readable overlay — not too dark, not too loud */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(23,43,69,0.45)_0%,rgba(23,43,69,0.72)_70%,rgba(23,43,69,0.82)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/25" aria-hidden="true" />

      <div className="container-site relative z-10 flex w-full flex-col items-center px-1 pt-28 pb-14 text-center md:pt-32 md:pb-20">
        <div className="mx-auto w-full max-w-2xl">
          <p className="mb-4 text-[0.7rem] font-medium tracking-[0.18em] text-[#D4C4A0] uppercase sm:text-xs">
            Triedge Realty · Lucknow
          </p>

          <h1
            className="text-[2.1rem] leading-[1.15] font-semibold text-[#F7F6F3] sm:text-4xl md:text-[2.85rem]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Find a Space That Fits Your Future.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-[#E8E6E1]/90 sm:text-base md:text-lg">
            Explore residential and commercial real estate opportunities across Lucknow with
            personalised property assistance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="btn btn-primary min-w-[10.5rem] bg-[#F7F6F3] !text-navy hover:!bg-white"
              onClick={() => scrollTo('properties')}
            >
              Explore Listings
            </button>
            <button
              type="button"
              className="btn min-w-[10.5rem] border border-[#F7F6F3]/55 bg-transparent text-[#F7F6F3] hover:border-[#F7F6F3] hover:bg-white/10"
              onClick={() => scrollTo('contact')}
            >
              Contact Us
            </button>
          </div>

          <div className="mx-auto mt-10 w-full max-w-md border-t border-white/12 pt-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#D4C4A0]/85 uppercase">
              Browse Property Categories
            </p>
            <p className="mt-2 text-sm text-[#E8E6E1]/80">Choose a property type</p>

            <div ref={dropdownRef} className="relative mt-3 text-left">
              <button
                type="button"
                id="hero-category"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded border border-white/20 bg-[#172B45]/75 px-3.5 py-3 text-sm text-[#F7F6F3] shadow-lg outline-none backdrop-blur-md transition-colors duration-150 hover:border-[#D4C4A0]/45 focus-visible:border-[#D4C4A0]"
              >
                <span className={category ? 'text-[#F7F6F3]' : 'text-[#F7F6F3]/65'}>
                  {selectedLabel}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#D4C4A0] transition-transform duration-150 ${
                    open ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {open && (
                <ul
                  role="listbox"
                  aria-labelledby="hero-category"
                  className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded border border-white/15 bg-[#1B3050] py-1.5 shadow-2xl"
                >
                  <li>
                    <button
                      type="button"
                      role="option"
                      aria-selected={!category}
                      onClick={() => chooseCategory('')}
                      className="w-full px-3.5 py-2.5 text-left text-sm text-[#F7F6F3]/70 transition-colors duration-150 hover:bg-white/10 hover:text-[#F7F6F3]"
                    >
                      Select a category
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
                          className={`w-full px-3.5 py-2.5 text-left text-sm transition-colors duration-150 ${
                            active
                              ? 'bg-white/10 text-[#F7F6F3]'
                              : 'text-[#EDEAE4] hover:bg-white/10 hover:text-[#F7F6F3]'
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
