const PARTNERS = [
  { name: "CHUBB", style: "tracking-[0.2em] font-black" },
  { name: "SOFIMEX", style: "tracking-[0.15em] font-extrabold" },
  { name: "DORAMA", style: "tracking-[0.12em] font-bold" },
  { name: "AFIRME", style: "tracking-[0.18em] font-extrabold" },
  { name: "FIANZAS DORAMA", style: "tracking-[0.08em] font-bold text-base" },
  { name: "Aserta", style: "tracking-normal font-bold italic" },
  { name: "LIBERTY FIANZAS", style: "tracking-[0.06em] font-extrabold text-base" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <h2 className="font-[var(--font-heading)] font-semibold text-xl md:text-2xl text-navy text-center mb-3">
          Respaldo en el que puedes confiar
        </h2>
        <p className="text-gray-muted text-sm text-center max-w-2xl mx-auto mb-10">
          Trabajamos con las principales afianzadoras autorizadas por la Comisión Nacional de Seguros y Fianzas (CNSF), garantizando el respaldo institucional de tu póliza.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-12 px-4 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <span
                className={`text-navy text-lg md:text-xl ${partner.style} select-none whitespace-nowrap`}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-gray-muted">
          Los logos y marcas pertenecen a sus respectivos propietarios. Fianzify es intermediario autorizado.
        </p>
      </div>
    </section>
  );
}
