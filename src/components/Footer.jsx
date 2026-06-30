const sections = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.6 2.8 12 2.8 12 2.8s-4.6 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.8 9.2.8 11.5v2.1c0 2.2.2 4.5.2 4.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.6 22.2 12 22.2 12 22.2s4.6 0 6.8-.3c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.2-2.2.2-4.5v-2.1C23.2 9.2 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer body */}
      <div className="max-w-300 mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">

          {/* Brand block */}
          <div className="max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex gap-0.75">
                <span className="w-2.25 h-2.25 rounded-full bg-primary" />
                <span className="w-2.25 h-2.25 rounded-full bg-accent" />
                <span className="w-2.25 h-2.25 rounded-full bg-teal" />
              </span>
              <span className="text-lg font-semibold">
                Digi<strong className="text-primary">pie</strong>
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              We help businesses implement, scale, and get the most out of monday.com - as a certified partner with 5+ years of hands-on expertise.
            </p>

            {/* Partner badge */}
            {/* <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-8">
              ★ monday.com Certified Partner
            </span> */}

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-150"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav + contact */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Quick links */}
            <div>
              <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-5">
                Quick Links
              </p>
              <ul className="space-y-3">
                {sections.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-5">
                Contact Us
              </p>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:hello@digipie.com" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                    <svg className="mt-0.5 shrink-0 text-primary" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M2 5.5l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                    hello@digipie.com
                  </a>
                </li>
                <li>
                  <a href="tel:+910000000000" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                    <svg className="mt-0.5 shrink-0 text-primary" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M5 2h2.5l1 3-1.5 1a8 8 0 003 3l1-1.5 3 1V11a2 2 0 01-2 2A10 10 0 013 4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                    </svg>
                    +91 (000) 000-0000
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/60">
                  <svg className="mt-0.5 shrink-0 text-primary" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.4"/>
                    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  </svg>
                  Surat, India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-300 mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Digipie Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with ❤️ for monday.com teams
          </p>
        </div>
      </div>
    </footer>
  )
}
