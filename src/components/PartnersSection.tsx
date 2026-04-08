const PARTNERS = [
  { name: "Afianzadora Sofimex", short: "SOFIMEX" },
  { name: "Afianzadora Dorama", short: "DORAMA" },
  { name: "Chubb Seguros", short: "CHUBB" },
  { name: "Afianzadora Insurgentes", short: "INSURGENTES" },
  { name: "Afianzadora Aserta", short: "ASERTA" },
];

export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-bg-alt border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-text-muted text-sm font-medium mb-8">
          Trabajamos con diversas afianzadoras líderes en México:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.short}
              className="flex flex-col items-center justify-center bg-white rounded-xl border border-gray-100 px-6 py-4 min-w-[140px] shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-[var(--font-heading)] font-bold text-sm text-primary tracking-wider">
                AFIANZADORA
              </span>
              <span className="font-[var(--font-heading)] font-extrabold text-lg text-secondary">
                {partner.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
