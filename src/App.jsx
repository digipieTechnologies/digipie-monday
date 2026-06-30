import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import './App.css'
import Footer from './components/Footer'
import TrustBadges from './components/TrustBadges'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <CaseStudies />
        <Testimonials />
        <TrustBadges />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
