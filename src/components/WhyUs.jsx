const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2l2.5 5.5H19l-4.5 3.5 1.7 5.5L11 13.5l-5.2 3 1.7-5.5L3 7.5h5.5L11 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certified Expertise',
    desc: 'We are officially certified by monday.com, meaning our team has passed rigorous training and real-world implementation standards.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tailored to Your Business',
    desc: 'No templates, no shortcuts. Every setup is built around your unique workflows, team structure, and growth goals.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 17l4-4 4 4 4-8 4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Measurable Results',
    desc: 'We set clear KPIs from day one. Our clients typically see a 3x productivity improvement within the first 90 days.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    title: 'Rapid Deployment',
    desc: 'Most implementations go live within 2–4 weeks. We move fast without cutting corners on quality or adoption.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="12" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="12" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    title: 'Full Ecosystem Coverage',
    desc: 'From monday CRM to monday Dev and Work OS - we work across all monday.com products to build a unified workspace.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3C6.6 3 3 6.6 3 11s3.6 8 8 8 8-3.6 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M15 3l4 4-8 8-4-2-2-4 10-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Long-term Partnership',
    desc: 'We don\'t disappear after go-live. Our retainer clients get continuous optimization, training, and a dedicated account manager.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-300 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main card */}
            <div className="bg-white rounded-md border border-border p-8 shadow-[0_20px_60px_rgba(108,92,231,0.08)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="w-3 h-3 rounded-full bg-accent" />
                  <span className="w-3 h-3 rounded-full bg-teal" />
                </div>
                <span className="text-sm font-semibold text-dark">Digipie × monday.com</span>
              </div>

              {/* Process steps */}
              <div className="space-y-4">
                {[
                  { step: '01', label: 'Discovery Call', status: 'Done', color: 'bg-teal' },
                  { step: '02', label: 'Workflow Design', status: 'Done', color: 'bg-teal' },
                  { step: '03', label: 'Build & Configure', status: 'Active', color: 'bg-primary' },
                  { step: '04', label: 'Team Training', status: 'Next', color: 'bg-border' },
                  { step: '05', label: 'Go Live 🚀', status: 'Upcoming', color: 'bg-border' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4 p-3 rounded-sm bg-surface border border-border">
                    <span className="text-xs font-bold text-muted w-5">{item.step}</span>
                    <span className="flex-1 text-sm font-medium text-dark">{item.label}</span>
                    <span className={`text-[10px] font-semibold text-white px-2.5 py-1 rounded-full ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            {/* <div className="absolute -right-6 -top-6 bg-primary text-white rounded-md px-5 py-4 shadow-cta text-center">
              <p className="text-3xl font-bold">5★</p>
              <p className="text-[11px] font-medium opacity-80 mt-0.5">Rated Partner</p>
            </div> */}
          </div>

          {/* Right - features */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full mb-4">
              Why Digipie
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-tight mb-4">
              The monday.com partner that goes beyond setup
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed mb-10">
              Anyone can create boards. We build systems that actually change how your business operates.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary-light text-primary flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark mb-1">{f.title}</h4>
                    <p className="text-xs text-body leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
