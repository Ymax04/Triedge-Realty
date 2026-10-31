import { useEffect, useMemo, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { categories, properties } from '../data/properties'
import { categoryEnquiryUrl } from '../utils/whatsapp'
import PropertyCard from './PropertyCard'

export default function PropertyGrid() {
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    const onFilter = (event) => {
      setActiveCategory(event.detail || '')
    }
    window.addEventListener('filter-category', onFilter)
    return () => window.removeEventListener('filter-category', onFilter)
  }, [])

  const filtered = useMemo(() => {
    if (!activeCategory) return properties
    return properties.filter((p) => p.categoryId === activeCategory)
  }, [activeCategory])

  return (
    <section id="properties" className="section-pad bg-warm-white">
      <div className="container-site">
        <div className="mb-10 max-w-2xl">
          <span className="section-eyebrow">Browse Property Categories</span>
          <h2 className="section-title">Choose a Property Type</h2>
          <p className="section-lead">
            Browse categories and featured listings, then enquire on WhatsApp for pricing and
            availability.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('')}
            className={`rounded px-3.5 py-2 text-sm font-medium transition-colors ${
              !activeCategory
                ? 'bg-navy text-white'
                : 'bg-light-grey text-charcoal hover:bg-navy/10'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded px-3.5 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-navy text-white'
                  : 'bg-light-grey text-charcoal hover:bg-navy/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="group relative overflow-hidden border border-[#E4E5E7] bg-navy"
            >
              <img
                src={cat.image}
                alt={`Illustrative photo for ${cat.name}`}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover opacity-70 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3
                  className="text-xl text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-white/75">{cat.description}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    className="btn bg-white !px-3.5 !py-2 text-xs !text-navy hover:!bg-warm-white"
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    View Related
                  </button>
                  <a
                    href={categoryEnquiryUrl(cat.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !px-3.5 !py-2 text-xs"
                  >
                    <MessageCircle size={13} aria-hidden="true" />
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3
              className="text-2xl text-navy"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Featured Listings
            </h3>
            <p className="mt-1 text-sm text-charcoal/65">
              {activeCategory
                ? `Showing listings in ${categories.find((c) => c.id === activeCategory)?.name || 'this category'}`
                : 'Including confirmed and demo sample listings'}
            </p>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D5D6D8] bg-light-grey/60 px-6 py-12 text-center">
            <p className="text-charcoal/70">
              No listings in this category yet. Enquire on WhatsApp and we will help you explore
              available options.
            </p>
            <a
              href={categoryEnquiryUrl(
                categories.find((c) => c.id === activeCategory)?.name || 'property options',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mt-5"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-charcoal/50">
          Demo listings and illustrative photographs are for presentation only. Contact Triedge
          Realty for verified property details.
        </p>
      </div>
    </section>
  )
}
