import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 h-[72px]',
        'bg-white/90 backdrop-blur-md',
        'border-b transition-all duration-200',
        scrolled
          ? 'border-border shadow-header'
          : 'border-transparent',
      ].join(' ')}
    >
      <div className="max-w-300 mx-auto h-full px-6 grid grid-cols-[auto_auto] md:grid-cols-[auto_1fr_auto] items-center gap-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0" aria-label="Digipie home">
          <span className="flex items-center gap-0.75">
            <span className="w-2.25 h-2.25 rounded-full bg-primary" />
            <span className="w-2.25 h-2.25 rounded-full bg-accent" />
            <span className="w-2.25 h-2.25 rounded-full bg-teal" />
          </span>
          <span className="font-sans text-[20px] tracking-[-0.3px] text-dark">
            Digi<strong className="font-bold text-primary">pie</strong>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center" aria-label="Main navigation">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14.5px] font-medium text-body no-underline px-3 py-1.5 rounded-md transition-colors duration-150 hover:text-primary hover:bg-primary-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
          <a
            href="#contact"
            className="text-[14px] font-medium text-body no-underline px-4.5 py-2 rounded-sm border border-border transition-all duration-150 hover:text-primary hover:border-primary hover:bg-primary-light hover:-translate-y-px"
          >
            Talk to us
          </a>
          <a
            href="#demo"
            className="text-[14px] font-semibold text-white no-underline px-5 py-2 rounded-sm bg-primary border border-primary shadow-cta transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-px active:translate-y-0"
          >
            Book Free Demo
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-10 h-10 border-none bg-transparent cursor-pointer p-0 rounded-lg transition-colors hover:bg-primary-light"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-[22px] h-[2px] bg-dark rounded-sm transition-transform duration-200 origin-center ${menuOpen ? 'translate-y-1.75 rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-dark rounded-sm transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-dark rounded-sm transition-transform duration-200 origin-center ${menuOpen ? '-translate-y-1.75 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-6 pt-4">
          <nav aria-label="Mobile navigation">
            <ul className="list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-[15px] font-medium text-body no-underline py-3 border-b border-border transition-colors hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2.5 mt-5">
            <a
              href="#contact"
              className="text-[14px] font-medium text-body no-underline py-2 rounded-lg border border-border text-center transition-all hover:text-primary hover:border-primary hover:bg-primary-light"
              onClick={() => setMenuOpen(false)}
            >
              Talk to us
            </a>
            <a
              href="#demo"
              className="text-[14px] font-semibold text-white no-underline py-2 rounded-lg bg-primary text-center shadow-cta transition-all hover:bg-primary-dark"
              onClick={() => setMenuOpen(false)}
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
