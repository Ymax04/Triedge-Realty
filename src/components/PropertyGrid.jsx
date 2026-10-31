import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MessageCircle, ArrowRight, Search, SlidersHorizontal } from 'lucide-react'
import { categories, properties } from '../data/properties'
import { categoryEnquiryUrl } from '../utils/whatsapp'
import PropertyCard from './PropertyCard'

export default function PropertyGrid({ isHomePage = false }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = searchParams.get('category') || ''
  const [activeCategory, setActiveCategory] = useState(initialCat)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setActiveCategory(cat)
  }, [searchParams])

  const handleCategoryChange = (id) => {
    setActiveCategory(id)
    if (id) {
      setSearchParams({ category: id })
    } else {
      setSearchParams({})
    }
  }

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesCategory = !activeCategory || p.categoryId === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, searchQuery])

  // On Home page, we limit to 4 featured cards for preview
  const displayProperties = isHomePage ? filtered.slice(0, 4) : filtered

  return (
    <section id="properties" className="section-pad bg-warm-white">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              {isHomePage ? 'Featured Properties' : 'Explore Lucknow Real Estate'}
            </span>
            <h2 className="section-title">
              {isHomePage ? 'Explore Our Curated Listings' : 'All Available Properties'}
            </h2>
            <p className="section-lead">
              Browse categories and featured listings across Lucknow, then connect directly on
              WhatsApp for pricing, brochures, and site visits.
            </p>
          </div>

          {isHomePage && (
            <Link
              to="/properties"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold transition-colors"
            >
              <span>View All Properties ({properties.length})</span>
              <ArrowRight size={16} className="text-gold" aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Category Browsing Cards on Home Page */}
        {isHomePage && (
          <div className="my-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="group relative overflow-hidden rounded-lg border border-[#E4E5E7] bg-navy shadow-sm transition-all hover:shadow-lg"
              >
                <img
                  src={cat.image}
                  alt={`Photo for ${cat.name}`}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3
                    className="text-xl font-bold text-white drop-shadow-sm"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/80 line-clamp-2">{cat.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      to={`/properties?category=${cat.id}`}
                      className="btn bg-white !px-3 !py-1.5 text-xs font-bold !text-navy hover:!bg-warm-white transition-colors"
                    >
                      View Listings
                    </Link>
                    <a
                      href={categoryEnquiryUrl(cat.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost !px-3 !py-1.5 text-xs"
                    >
                      <MessageCircle size={13} aria-hidden="true" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Filter and Search Bar for the Properties page */}
        {!isHomePage && (
          <div className="my-8 rounded-xl border border-[#E4E5E7] bg-white p-4 shadow-xs md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-charcoal/40"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Search by name, location (e.g. Gomti Nagar, Raebareli Road)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-[#D5D6D8] bg-warm-white py-2.5 pr-4 pl-10 text-sm text-charcoal outline-none transition-colors focus:border-navy focus:bg-white"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-xs font-semibold text-charcoal/50 hover:text-charcoal"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Reset Filter Button if active */}
              {(activeCategory || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('')
                    setSearchQuery('')
                    setSearchParams({})
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark hover:underline"
                >
                  <SlidersHorizontal size={14} />
                  Reset all filters
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-light-grey pt-4">
              <span className="mr-2 text-xs font-bold text-charcoal/60 uppercase">Filter:</span>
              <button
                type="button"
                onClick={() => handleCategoryChange('')}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  !activeCategory
                    ? 'bg-navy text-white shadow-xs'
                    : 'bg-light-grey text-charcoal/80 hover:bg-navy/10'
                }`}
              >
                All Properties ({properties.length})
              </button>
              {categories.map((cat) => {
                const count = properties.filter((p) => p.categoryId === cat.id).length
                const active = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? 'bg-navy text-white shadow-xs'
                        : 'bg-light-grey text-charcoal/80 hover:bg-navy/10'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Section title for listings */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-charcoal/70">
            Showing <span className="font-bold text-navy">{displayProperties.length}</span>{' '}
            {displayProperties.length === 1 ? 'property' : 'properties'}
            {activeCategory && (
              <span>
                {' '}
                in{' '}
                <span className="text-gold-dark">
                  {categories.find((c) => c.id === activeCategory)?.name}
                </span>
              </span>
            )}
            {searchQuery && (
              <span>
                {' '}
                matching "<span className="text-navy">{searchQuery}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Property Cards Grid */}
        {displayProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {displayProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-[#D5D6D8] bg-white px-6 py-14 text-center shadow-xs">
            <h3
              className="text-xl font-bold text-navy"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              No Properties Found
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/70">
              We couldn't find any properties matching your current criteria. Get in touch with us on
              WhatsApp to inquire about upcoming or offline inventory in Lucknow.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('')
                  setSearchQuery('')
                  setSearchParams({})
                }}
                className="btn btn-outline text-xs"
              >
                Clear Filters
              </button>
              <a
                href={categoryEnquiryUrl('custom property enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-xs"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Bottom Callout on Home */}
        {isHomePage && (
          <div className="mt-12 text-center">
            <Link
              to="/properties"
              className="btn btn-primary px-7 py-3 text-sm font-bold shadow-md hover:shadow-lg"
            >
              <span>Explore All {properties.length} Properties</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
