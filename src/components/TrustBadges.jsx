const trustBadges = [
  {
    src: "/assets/badges/Monday-certification-scaled.png",
    alt: "Monday Partner",
  },
  {
    src: "/assets/badges/monday-portfolio-management.png",
    alt: "Monday Portfolio Management",
    link: "https://www.appfutura.com/app-developers/in/united-states/illinois/s/5kl",
  },
  {
    src: "image.png",
    alt: "implementation partner",
  },
  {
    src: "image2.png",
    alt: "Trustpilot",
    link: "https://www.trustpilot.com/review/digipie.net",
  },
  {
    src: "image3.png",
    alt: "Reliable Company",
  },
  {
    src: "image4.png",
    alt: "Reliable Company",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full mb-3">
            Accreditations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-tight">
            Certified Experts & Trusted Partner
          </h2>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-6 gap-4 sm:gap-6">
          {trustBadges.map((badge, index) => {
            const imgEl = (
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-14 sm:h-16 md:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            );
            return (
              <div
                key={index}
                className="group flex items-center justify-center rounded-md bg-white  p-4 sm:p-6 hover:border-primary/20 hover:shadow-[0_4px_20px_rgba(108,92,231,0.08)] transition-all duration-200"
              >
                {badge.link ? (
                  <span
                    className="flex items-center justify-center"
                    aria-label={badge.alt}
                  >
                    {imgEl}
                  </span>
                ) : (
                  <div className="flex items-center justify-center">
                    {imgEl}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
