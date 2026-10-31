import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import PropertyGrid from '../components/PropertyGrid'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      <PropertyGrid isHomePage={true} />
      <CtaBanner />
    </>
  )
}
