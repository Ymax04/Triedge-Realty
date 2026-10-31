import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, parent = { label: 'Home', href: '/' } }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-14 md:pt-36 md:pb-18">
      {/* Background ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-soft)_0%,_var(--color-navy)_75%)] opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Breadcrumb to get back to main */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-medium md:text-sm">
          <Link
            to={parent.href}
            className="text-white/70 transition-colors hover:text-gold"
          >
            {parent.label}
          </Link>
          <ChevronRight size={14} className="text-white/40" aria-hidden="true" />
          <span className="font-semibold text-gold" aria-current="page">
            {title}
          </span>
        </nav>

        <h1
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}

        <div className="mt-6 h-0.5 w-16 bg-gold" aria-hidden="true" />
      </div>
    </section>
  )
}
