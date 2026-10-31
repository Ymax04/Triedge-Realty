import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPropertyById } from '../data/properties'
import PropertyDetails from '../components/PropertyDetails'

export default function PropertyPage() {
  const { id } = useParams()
  const property = getPropertyById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!property) return
    const previous = document.title
    document.title = `${property.name} | Triedge Realty`
    return () => {
      document.title = previous
    }
  }, [property])

  if (!property) {
    return (
      <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-24">
        <h1 className="text-3xl text-navy" style={{ fontFamily: 'var(--font-display)' }}>
          Property not found
        </h1>
        <p className="mt-3 text-charcoal/70">
          The listing you are looking for is unavailable or may have been removed.
        </p>
        <Link to="/#properties" className="btn btn-primary mt-6">
          Browse properties
        </Link>
      </section>
    )
  }

  return <PropertyDetails property={property} />
}
