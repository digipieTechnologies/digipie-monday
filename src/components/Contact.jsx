import { useState } from "react";

const benefits = [
  "Free 30-min strategy call",
  "Custom monday.com roadmap",
  "No commitment required",
  "Response within 24 hours",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-24 bg-white">
      <div id="demo" className="absolute -top-[72px]" />
      <div className="max-w-300 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - pitch */}
          <div>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-tight mb-5">
              Ready to build a smarter workspace?
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed mb-10">
              Book a free strategy call with our monday.com experts. We'll learn
              about your team, map out your workflows, and show you exactly
              what's possible.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-12">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#00C9A7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-dark">{b}</span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted font-medium">
                Or reach us directly
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Direct contact */}
            <div className="space-y-4">
              <a
                href="mailto:hello@digipie.com"
                className="flex items-center gap-3 text-sm text-body hover:text-primary transition-colors"
              >
                <span className="w-9 h-9 rounded-sm bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="12"
                      height="9"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M2 5.5l6 4 6-4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                hello@digipie.com
              </a>
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-body hover:text-primary transition-colors"
              >
                <span className="w-9 h-9 rounded-sm bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 2h2.5l1 3-1.5 1a8 8 0 003 3l1-1.5 3 1V11a2 2 0 01-2 2A10 10 0 013 4a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                +91 (000) 000-0000
              </a>
            </div>
          </div>

          {/* Right - form */}
          <div className="bg-surface rounded-md border border-border p-8 shadow-[0_8px_40px_rgba(108,92,231,0.06)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 16l7 7 13-13"
                      stroke="#00C9A7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  You're on the list!
                </h3>
                <p className="text-body text-sm leading-relaxed max-w-xs">
                  We'll reach out within 24 hours to schedule your free strategy
                  call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-dark mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-sm border border-border bg-white text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-dark mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-sm border border-border bg-white text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-dark mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-sm border border-border bg-white text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-dark mb-1.5"
                  >
                    Tell us about your team
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="We're a team of 30 managing multiple projects and struggling with..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-sm border border-border bg-white text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-sm bg-primary text-white font-semibold text-sm shadow-cta hover:bg-primary-dark hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                >
                  Book My Free Demo →
                </button>

                <p className="text-[11px] text-muted text-center">
                  No spam. No commitment. Just a conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
