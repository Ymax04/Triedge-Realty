import { ABOUT_IMAGE } from '../data/properties'

export default function About() {
  return (
    <section id="about" className="section-pad bg-light-grey">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative overflow-hidden">
          <img
            src={ABOUT_IMAGE.src}
            alt={ABOUT_IMAGE.alt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
          {ABOUT_IMAGE.isIllustrative && (
            <p className="absolute bottom-3 left-3 bg-navy/70 px-2 py-1 text-[10px] text-white/80">
              Illustrative photo — replace later
            </p>
          )}
        </div>

        <div>
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-title">About Triedge Realty</h2>
          <p className="text-base leading-relaxed text-charcoal/80 md:text-[1.05rem] md:leading-8">
            Triedge Realty is a real estate consultancy based in Lucknow, Uttar Pradesh, helping
            individuals and families explore property opportunities. Our focus is on straightforward
            communication, personalised assistance and helping customers discover suitable
            properties.
          </p>
          <button
            type="button"
            className="btn btn-primary mt-7"
            onClick={() =>
              document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Explore Listings
          </button>
        </div>
      </div>
    </section>
  )
}
