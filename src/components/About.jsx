import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ABOUT_IMAGE } from '../data/properties'

export default function About() {
  return (
    <section id="about" className="section-pad bg-light-grey">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative overflow-hidden rounded-md shadow-md">
          <img
            src={ABOUT_IMAGE.src}
            alt={ABOUT_IMAGE.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
          {ABOUT_IMAGE.isIllustrative && (
            <p className="absolute bottom-3 left-3 rounded bg-navy/85 px-2.5 py-1 text-[11px] font-medium text-white/90">
              Triedge Realty · Lucknow
            </p>
          )}
        </div>

        <div>
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title">Your Trusted Real Estate Partner in Lucknow</h2>
          <p className="text-base leading-relaxed text-charcoal/80 md:text-[1.05rem] md:leading-8">
            Triedge Realty is a real estate consultancy based in Lucknow, Uttar Pradesh, helping
            individuals and families explore residential, commercial, and land investment opportunities.
            Our commitment is built on transparent communication, personalized property matching,
            and dedicated on-ground site visit assistance across Lucknow's key growth corridors.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/about" className="btn btn-primary">
              <span>Read Full Story</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/properties" className="btn btn-outline">
              Explore Listings
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
