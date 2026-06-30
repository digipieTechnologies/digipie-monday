const cases = [
  {
    tag: 'Operations',
    tagColor: 'text-primary bg-primary-light',
    company: 'Nexus Logistics',
    industry: 'Supply Chain & Logistics',
    challenge: 'Managing 200+ shipments across 3 teams with spreadsheets - updates were delayed, errors were costly.',
    solution: 'Built a unified monday.com workspace with automated status updates, real-time dashboards, and Slack integrations.',
    results: [
      { metric: '72%', label: 'Faster updates' },
      { metric: '0', label: 'Missed shipments' },
      { metric: '4hrs', label: 'Saved per week/team' },
    ],
    accent: 'border-primary/20 hover:border-primary/40',
    badge: 'bg-primary',
  },
  {
    tag: 'Sales CRM',
    tagColor: 'text-accent bg-accent-light',
    company: 'Vertex SaaS',
    industry: 'B2B Software',
    challenge: 'Sales reps used 4 different tools. Leads fell through the cracks and managers had no pipeline visibility.',
    solution: 'Consolidated CRM into monday.com - full lead lifecycle, deal stages, automated follow-ups and executive dashboards.',
    results: [
      { metric: '2.4x', label: 'Deal close rate' },
      { metric: '100%', label: 'Pipeline visibility' },
      { metric: '$1.2M', label: 'Pipeline recovered' },
    ],
    accent: 'border-accent/20 hover:border-accent/40',
    badge: 'bg-accent',
  },
  {
    tag: 'Project Management',
    tagColor: 'text-teal bg-teal/10',
    company: 'Orion Agency',
    industry: 'Creative & Marketing',
    challenge: 'Project timelines constantly slipping. Clients complained about lack of transparency. Team morale was low.',
    solution: 'Implemented a client-facing monday.com portal with real-time project tracking, approval workflows, and automated reporting.',
    results: [
      { metric: '90%', label: 'On-time delivery' },
      { metric: '40%', label: 'Less client emails' },
      { metric: '5★', label: 'Client satisfaction' },
    ],
    accent: 'border-teal/20 hover:border-teal/40',
    badge: 'bg-teal',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-300 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-tight mb-4">
            Real teams. Real results.
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed">
            We don't just implement - we transform. Here's what that looks like in practice.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-7">
          {cases.map((c) => (
            <article
              key={c.company}
              className={`group relative flex flex-col p-7 rounded-md border bg-white transition-all duration-300 hover:shadow-[0_12px_40px_rgba(108,92,231,0.1)] ${c.accent}`}
            >
              {/* Tag */}
              <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-5 ${c.tagColor}`}>
                {c.tag}
              </span>

              {/* Company */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-sm ${c.badge} flex items-center justify-center text-white font-bold text-base`}>
                  {c.company[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{c.company}</p>
                  <p className="text-[11px] text-muted">{c.industry}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5">The Challenge</p>
                <p className="text-sm text-body leading-relaxed">{c.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5">Our Solution</p>
                <p className="text-sm text-body leading-relaxed">{c.solution}</p>
              </div>

              {/* Results */}
              <div className="mt-auto pt-5 border-t border-border grid grid-cols-3 gap-3">
                {c.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <p className="text-xl font-bold text-dark">{r.metric}</p>
                    <p className="text-[10px] text-muted mt-0.5">{r.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA row */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            Want results like these? Let's talk
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
