import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="22"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 11h12M8 15h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-primary bg-primary-light",
    title: "monday.com Implementation",
    desc: "End-to-end setup of boards, workflows, automations, and integrations tailored to your team's exact processes.",
    points: [
      "Custom board architecture",
      "Workflow automations",
      "Third-party integrations",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M14 9v5l3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-accent bg-accent-light",
    title: "Process Consulting",
    desc: "We audit your current workflows, identify bottlenecks, and design a monday.com setup that drives real efficiency.",
    points: [
      "Workflow audit & mapping",
      "Bottleneck elimination",
      "ROI-focused redesign",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 20l4-4 4 4 4-6 4 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="4"
          width="22"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    color: "text-teal bg-teal/10",
    title: "Reporting & Dashboards",
    desc: "Unlock real-time visibility across projects with custom dashboards that put the right data in front of the right people.",
    points: [
      "Executive dashboards",
      "KPI tracking boards",
      "Automated reporting",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="18" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M14 10h2a4 4 0 014 4v0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-primary bg-primary-light",
    title: "Team Training & Adoption",
    desc: "On-site or virtual training sessions that get your team confident and productive on monday.com from day one.",
    points: ["Role-based training", "Live Q&A sessions", "Adoption playbooks"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 8l8-4 8 4v8l-8 4-8-4V8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 12v8M6 8l8 4 8-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-accent bg-accent-light",
    title: "CRM & Sales Pipeline",
    desc: "Build a full CRM inside monday.com - contacts, deals, pipelines, and automations that keep your sales team moving.",
    points: ["Lead & deal tracking", "Sales automations", "Email integration"],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 4v20M4 14h20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    color: "text-teal bg-teal/10",
    title: "Ongoing Support & Growth",
    desc: "A dedicated partner to help you evolve your setup as your business grows - optimizations, new features, and priority support.",
    points: [
      "Monthly optimization reviews",
      "Priority support SLA",
      "Feature rollout guidance",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-20 lg:py-24 bg-white"
    >
      <div id="solutions" className="absolute -top-[72px]" />
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-tight mb-4">
            Everything you need to succeed with monday.com
          </h2>
          <p className="text-body text-base sm:text-lg leading-relaxed">
            From initial setup to long-term growth, we cover every stage of your
            monday.com journey.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="group relative p-7 rounded-md border border-border bg-white hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(108,92,231,0.08)] transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${s.color} mb-5 transition-transform group-hover:scale-110 duration-300`}
              >
                {s.icon}
              </div>

              <h3 className="text-lg font-semibold text-dark mb-2">
                {s.title}
              </h3>
              <p className="text-body text-sm leading-relaxed mb-5">{s.desc}</p>

              <ul className="space-y-2">
                {s.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-2 text-sm text-body"
                  >
                    <span className="w-4 h-4 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1.5 4l2 2 3-3"
                          stroke="#00C9A7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
