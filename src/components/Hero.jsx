import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setAutoPlay(false); // Stop auto cycling when user interacts
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary opacity-5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -left-60 w-[500px] h-[500px] rounded-full bg-accent opacity-5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-teal opacity-5 blur-3xl"
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 w-full py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        {/* Left - copy */}
        <div>
          {/* Badge */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight mb-6"
          >
            Transform the Way
            <span className="block text-primary">Your Team Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-base sm:text-lg text-body leading-relaxed mb-10 max-w-lg"
          >
            We help businesses implement, customize, and scale monday.com - so
            your team spends less time managing work and more time doing it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#demo"
              className="inline-flex w-full lg:w-auto justify-center  items-center gap-2 px-7 py-3.5 rounded-sm bg-primary text-white font-semibold text-[15px] shadow-cta hover:bg-primary-dark hover:-translate-y-px transition-all duration-150"
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
              className="inline-flex items-center w-full lg:w-auto justify-center gap-2 px-7 py-3.5 rounded-sm border border-border text-body font-medium text-[15px] hover:border-primary hover:text-primary hover:bg-primary-light transition-all duration-150"
            >
              See Our Work
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-6 flex-wrap"
          >
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
              <div className="flex -space-x-3">
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
          </motion.div>
        </div>

        {/* Right - dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 14,
            delay: 0.2,
          }}
          className="relative w-full max-w-full"
        >
          {/* Main Desktop Window Shell (Using the actual image mockup) */}
          <div className="relative bg-[#ffffff] w-full aspect-[16/8.2] max-h-[510px]">
            <img
              src="/assets/dashboard_mockup.png"
              alt="monday.com AI Leads Sourcer Dashboard"
              className="w-full h-full rounded-md select-none pointer-events-none"
            />

            {/* ANIMATED CURSORS (Moving pointer arrows simulating user/AI interactions directly on the image) */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
