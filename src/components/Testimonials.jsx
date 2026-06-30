import * as React from 'react'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'

const testimonials = [
  {
    quote: "Digipie didn't just set up monday.com for us — they rewired how our entire ops team thinks about work. The efficiency gains were visible within the first two weeks.",
    name: 'Sarah Mitchell',
    role: 'COO, Nexus Logistics',
    avatar: 'SM',
    avatarBg: 'bg-primary',
    stars: 5,
  },
  {
    quote: "We had tried to implement monday.com ourselves and failed. Digipie came in, understood our sales process deeply, and built a CRM that our reps actually love using.",
    name: 'James Okafor',
    role: 'VP Sales, Vertex SaaS',
    avatar: 'JO',
    avatarBg: 'bg-accent',
    stars: 5,
  },
  {
    quote: "The client portal they built inside monday.com was a game-changer. Our clients can see project progress in real-time — no more status call overheads.",
    name: 'Priya Sharma',
    role: 'MD, Orion Agency',
    avatar: 'PS',
    avatarBg: 'bg-teal',
    stars: 5,
  },
  {
    quote: "From the first discovery call to go-live, the Digipie team was professional, fast, and genuinely invested in our success. Highly recommend to any team on monday.com.",
    name: 'Daniel Cruz',
    role: 'CEO, Pulse Retail',
    avatar: 'DC',
    avatarBg: 'bg-primary-dark',
    stars: 5,
  },
  {
    quote: "The training sessions were excellent — practical, role-specific, and not boring. Our team went from reluctant users to monday.com advocates in a month.",
    name: 'Emma Lawson',
    role: 'Head of HR, Stride Group',
    avatar: 'EL',
    avatarBg: 'bg-accent',
    stars: 5,
  },
  {
    quote: "Best ROI we've gotten from any software investment. Digipie's ongoing support means our setup keeps improving as we grow. True partners.",
    name: 'Arjun Mehta',
    role: 'CTO, Acme Fintech',
    avatar: 'AM',
    avatarBg: 'bg-primary',
    stars: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FF6B35" aria-hidden="true">
          <path d="M7 1L8.5 5H13L9.5 7.5L10.8 12L7 9.5L3.2 12L4.5 7.5L1 5H5.5L7 1Z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [hoveredCol, setHoveredCol] = React.useState(null)
  const y1 = useMotionValue(0)
  const y2 = useMotionValue(0)
  const col1Ref = React.useRef(null)
  const col2Ref = React.useRef(null)

  // Initialize y2 offset to stagger the columns
  React.useEffect(() => {
    y2.set(-200)
  }, [])

  useAnimationFrame((time, delta) => {
    const speed = 35 // speed in pixels per second

    // Column 1 (moving up)
    if (hoveredCol !== 'col1' && col1Ref.current) {
      const height = col1Ref.current.scrollHeight / 2
      if (height > 0) {
        let nextY = y1.get() - (speed * delta) / 1000
        if (nextY <= -height) {
          nextY = 0
        }
        y1.set(nextY)
      }
    }

    // Column 2 (moving up)
    if (hoveredCol !== 'col2' && col2Ref.current) {
      const height = col2Ref.current.scrollHeight / 2
      if (height > 0) {
        let nextY = y2.get() - (speed * delta) / 1000
        if (nextY <= -height) {
          nextY = 0
        }
        y2.set(nextY)
      }
    }
  })

  // Split testimonials for two vertical columns
  const mid = Math.ceil(testimonials.length / 2)
  const col1Testimonials = [...testimonials.slice(0, mid), ...testimonials.slice(0, mid)]
  const col2Testimonials = [...testimonials.slice(mid), ...testimonials.slice(mid)]

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-300 mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight">
              Loved by teams who run on monday.com
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
              Don't take our word for it — hear from the teams we've helped transform their workflows, speed up operations, and achieve real growth.
            </p>
            
            {/* Stats stacked nicely */}
            <div className="w-full grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-dark">4.9/5</p>
                <p className="text-xs text-muted mt-1">Average rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-dark">50+</p>
                <p className="text-xs text-muted mt-1">Happy clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-dark">100%</p>
                <p className="text-xs text-muted mt-1">Would recommend</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Vertically Scrolling Testimonials */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] overflow-hidden mask-vertical py-4">
              
              {/* Column 1 */}
              <div 
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setHoveredCol('col1')}
                onMouseLeave={() => setHoveredCol(null)}
              >
                <motion.div
                  ref={col1Ref}
                  className="flex flex-col gap-6"
                  style={{ y: y1 }}
                >
                  {col1Testimonials.map((t, idx) => (
                    <motion.div
                      key={`${t.name}-col1-${idx}`}
                      className="bg-white rounded-md border border-border p-6 flex flex-col gap-4 transition-all duration-300"
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                    >
                      <Stars count={t.stars} />

                      <blockquote className="text-sm text-body leading-relaxed flex-1">
                        "{t.quote}"
                      </blockquote>

                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {t.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-dark">{t.name}</p>
                          <p className="text-xs text-muted">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 */}
              <div 
                className="hidden md:block overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setHoveredCol('col2')}
                onMouseLeave={() => setHoveredCol(null)}
              >
                <motion.div
                  ref={col2Ref}
                  className="flex flex-col gap-6"
                  style={{ y: y2 }}
                >
                  {col2Testimonials.map((t, idx) => (
                    <motion.div
                      key={`${t.name}-col2-${idx}`}
                      className="bg-white rounded-md border border-border p-6 flex flex-col gap-4 transition-all duration-300"
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                    >
                      <Stars count={t.stars} />

                      <blockquote className="text-sm text-body leading-relaxed flex-1">
                        "{t.quote}"
                      </blockquote>

                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {t.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-dark">{t.name}</p>
                          <p className="text-xs text-muted">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
