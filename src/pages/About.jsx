import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Outlive from '../components/Outlive'
import Problem from '../components/Problem'
import Mission from '../components/Mission'
import Principles from '../components/Principles'
import Agents from '../components/Agents'
import Focus from '../components/Focus'
import WhoFor from '../components/WhoFor'
import Measure from '../components/Measure'
import PricingTeaser from '../components/Pricing'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Outlive />
        <Problem />
        <Mission />
        <Principles />
        <Agents />
        <Focus />
        <WhoFor />
        <Measure />
        <PricingTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
