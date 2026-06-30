export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary opacity-5 blur-3xl" />
        <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full bg-accent opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-teal opacity-5 blur-3xl" />
      </div>

      <div className="relative max-w-300 mx-auto px-4 w-full py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left - copy */}
        <div>
          {/* Badge */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight mb-6">
            Transform the Way
            <span className="block text-primary">Your Team Works</span>
          </h1>

          <p className="text-base sm:text-lg text-body leading-relaxed mb-10 max-w-lg">
            We help businesses implement, customize, and scale monday.com - so
            your team spends less time managing work and more time doing it.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-primary text-white font-semibold text-[15px] shadow-cta hover:bg-primary-dark hover:-translate-y-px transition-all duration-150"
            >
              Book a Free Demo
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm border border-border text-body font-medium text-[15px] hover:border-primary hover:text-primary hover:bg-primary-light transition-all duration-150"
            >
              See Our Work
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* monday.com official certification badge */}
            <div className="flex items-center gap-3 shrink-0">
              <img
                src="/assets/badges/Monday-certification-scaled.png"
                alt="monday.com Certified Partner"
                className="h-10 md:h-11 w-auto object-contain"
              />
              <div className="text-left">
                <p className="text-[12px] font-bold text-dark leading-none">
                  monday.com
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] font-bold text-accent">5.0</span>
                  <div className="flex gap-0.25">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="9"
                        height="9"
                        viewBox="0 0 14 14"
                        fill="#FF6B35"
                        aria-hidden="true"
                      >
                        <path d="M7 1L8.5 5H13L9.5 7.5L10.8 12L7 9.5L3.2 12L4.5 7.5L1 5H5.5L7 1Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[9px] text-muted font-medium">
                    (Partner)
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical separator */}
            <div className="hidden sm:block w-px h-8 bg-border" />

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#6C5CE7", "#FF6B35", "#00C9A7", "#0D1B2A"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="#FF6B35"
                      aria-hidden="true"
                    >
                      <path d="M7 1L8.5 5H13L9.5 7.5L10.8 12L7 9.5L3.2 12L4.5 7.5L1 5H5.5L7 1Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted font-medium">
                  Trusted by 50+ businesses
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Right - dashboard mockup */}
        <div className="relative hidden lg:block">
          <div className="relative bg-surface rounded-md border border-border shadow-[0_32px_80px_rgba(108,92,231,0.12)] p-6 overflow-hidden">
            {/* Mockup header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 h-5 bg-border rounded-sm" />
            </div>

            {/* Board header */}
            <div className="flex items-center justify-between mb-4">
              <div className="h-5 w-36 bg-primary/20 rounded-sm" />
              <div className="flex gap-2">
                <div className="h-7 w-20 bg-primary rounded-sm" />
                <div className="h-7 w-16 bg-border rounded-sm" />
              </div>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-4 gap-2 mb-2 px-1">
              {["Task", "Status", "Owner", "Due Date"].map((col) => (
                <div
                  key={col}
                  className="text-[10px] font-semibold text-muted uppercase tracking-wider"
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Rows */}
            {[
              {
                status: "bg-teal",
                statusLabel: "Done",
                w1: "w-32",
                w2: "w-16",
              },
              {
                status: "bg-primary",
                statusLabel: "Working",
                w1: "w-40",
                w2: "w-20",
              },
              {
                status: "bg-accent",
                statusLabel: "Stuck",
                w1: "w-28",
                w2: "w-14",
              },
              {
                status: "bg-teal",
                statusLabel: "Done",
                w1: "w-36",
                w2: "w-18",
              },
              {
                status: "bg-primary/40",
                statusLabel: "Planned",
                w1: "w-24",
                w2: "w-16",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-2 items-center py-2.5 border-b border-border last:border-0"
              >
                <div className={`h-3 ${row.w1} bg-dark/10 rounded-sm`} />
                <div
                  className={`h-5 w-16 ${row.status} rounded-sm flex items-center justify-center`}
                >
                  <span className="text-[9px] font-semibold text-white">
                    {row.statusLabel}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-primary/30" />
                  <div className="h-2.5 w-14 bg-dark/10 rounded-sm" />
                </div>
                <div className="h-2.5 w-16 bg-dark/10 rounded-sm" />
              </div>
            ))}
          </div>

          {/* Floating card 1 */}
          <div className="absolute -bottom-6 -left-8 bg-white rounded-md border border-border shadow-[0_8px_24px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-teal/20 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8l3 3 7-7"
                  stroke="#00C9A7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-dark">
                Sprint completed!
              </p>
              <p className="text-[10px] text-muted">12 tasks closed today</p>
            </div>
          </div>

          {/* Floating card 2 */}
          <div className="absolute -top-4 -right-6 bg-white rounded-md border border-border shadow-[0_8px_24px_rgba(0,0,0,0.1)] px-4 py-3">
            <p className="text-[10px] text-muted mb-1">Team Efficiency</p>
            <p className="text-xl font-bold text-primary">+68%</p>
            <div className="flex gap-1 mt-1.5">
              {[40, 60, 50, 80, 70, 90, 85].map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-sm bg-primary/30"
                  style={{ height: `${h * 0.3}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
