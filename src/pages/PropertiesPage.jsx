import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import PropertyGrid from '../components/PropertyGrid'
import CtaBanner from '../components/CtaBanner'

export default function PropertiesPage() {
  useEffect(() => {
    document.title = 'Properties for Sale in Lucknow | Triedge Realty'
  }, [])

  return (
    <div className="bg-warm-white">
      {/* Subpage Header Banner with breadcrumbs to get back to main */}
      <PageHeader
        title="Explore Properties in Lucknow"
        subtitle="Discover verified residential apartments, independent villas, commercial spaces, and strategic plots across prime Lucknow locations."
      />

      {/* Full Property Grid with category filter pills and live search */}
      <PropertyGrid isHomePage={false} />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  )
}
