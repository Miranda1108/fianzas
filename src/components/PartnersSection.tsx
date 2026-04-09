const PARTNERS = [
  { name: "Afianzadora Sofimex", short: "SOFIMEX", color: "from-blue-600 to-blue-400" },
  { name: "Afianzadora Dorama", short: "DORAMA", color: "from-emerald-600 to-emerald-400" },
  { name: "Chubb Seguros", short: "CHUBB", color: "from-red-600 to-red-400" },
  { name: "Afianzadora Insurgentes", short: "INSURGENTES", color: "from-amber-600 to-amber-400" },
  { name: "Afianzadora Aserta", short: "ASERTA", color: "from-purple-600 to-purple-400" },
];

export default function PartnersSection() {
  return (
    <section className="py-14 md:py-20 bg-bg-alt relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 reveal">
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Alianzas</span>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-extrabold text-primary mb-2">
            Afianzadoras con las que trabajamos
          </h2>
          <p className="text-text-muted text-sm">
            Múltiples opciones para encontrar la mejor solución para tu empresa
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 stagger-children">
          {PARTNERS.map((partner) => (
            <div
              key={partner.short}
              className="group flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 px-8 py-6 min-w-[160px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {partner.short.charAt(0)}
              </div>
              <span className="font-[var(--font-heading)] font-bold text-xs text-text-muted tracking-wider uppercase">
                Afianzadora
              </span>
              <span className="font-[var(--font-heading)] font-extrabold text-lg text-primary group-hover:text-secondary transition-colors">
                {partner.short}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
