import { useEffect, useState } from 'react'

const links = [
  { name: 'Beranda', href: '#home' },
  { name: 'Produk', href: '#produk' },
  { name: 'Paket', href: '#packages' },
  { name: 'Tentang', href: '#about' },
  { name: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Navigasi utama">
      <div className="container nav-bar">
        <a href="#home" className="brand-lockup" aria-label="KaryaBit Studio, beranda" onClick={closeMenu}>
          <img className="brand-logo" src="/karyabit-logo.png" alt="" />
          <span className="brand-name">KaryaBit <span>Studio</span></span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${active === link.href ? 'is-active' : ''}`}
              aria-current={active === link.href ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            Konsultasi gratis <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="nav-mobile-actions">
          <a href="#contact" className="mobile-cta btn btn-primary btn-sm" onClick={closeMenu}>
            Konsultasi
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="nav-mobile">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-mobile-link ${active === link.href ? 'is-active' : ''}`}
              onClick={closeMenu}
            >
              <span>{link.name}</span>
              <small>{String(index + 1).padStart(2, '0')}</small>
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
            Mulai konsultasi <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </nav>
  )
}
