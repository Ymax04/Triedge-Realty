import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPropertyById } from '../data/properties'
import PropertyDetails from '../components/PropertyDetails'
import { ArrowLeft } from 'lucide-react'

export default function PropertyPage() {
  const { id } = useParams()
  const property = getPropertyById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!property) return
    const previous = document.title
    document.title = `${property.name} | Triedge Realty - Lucknow`
    return () => {
      document.title = previous
    }
  }, [property])

  if (!property) {
    return (
      <section className="container-site flex min-h-[65vh] flex-col items-center justify-center py-32 text-center">
        <h1 className="text-3xl font-bold text-navy" style={{ fontFamily: 'var(--font-display)' }}>
          Property Not Found
        </h1>
        <p className="mt-3 max-w-md text-sm text-charcoal/70">
          The property listing you are looking for is unavailable or may have been removed.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/" className="btn btn-outline text-xs">
            Return to Main Home
          </Link>
          <Link to="/properties" className="btn btn-primary text-xs">
            <ArrowLeft size={14} />
            Browse Available Properties
          </Link>
        </div>
      </section>
    )
  }

  return <PropertyDetails property={property} />
}
