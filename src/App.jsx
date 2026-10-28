import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Packages from './components/Packages'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

const revealSelectors = [
  '.section-head',
  '.product-card',
  '.package-card',
  '.package-custom-cta',
  '.process-step',
  '.faq-intro',
  '#faq .card',
  '.contact-panel',
].join(',')

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || prefersReducedMotion) return

    document.documentElement.classList.add('has-motion')
    const targets = document.querySelectorAll(revealSelectors)
    targets.forEach((target) => target.classList.add('scroll-reveal-target'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-motion')
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">Lewati ke konten</a>
      <Navbar />
      <main id="main" className="flex-grow">
        <Hero />
        <Marquee />
        <Products />
        <Packages />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
