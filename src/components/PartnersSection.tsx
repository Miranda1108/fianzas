const PARTNERS = ["CHUBB", "SOFIMEX", "DORAMA", "AFIRME", "FIANZAS DORAMA", "ASERTA", "LIBERTY FIANZAS"];

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <h2 className="font-[var(--font-heading)] font-semibold text-xl md:text-2xl text-navy text-center mb-3">
          Respaldo en el que puedes confiar
        </h2>
        <p className="text-gray-muted text-sm text-center max-w-2xl mx-auto mb-8">
          Trabajamos con las principales afianzadoras autorizadas por la Comisión Nacional de Seguros y Fianzas (CNSF), garantizando el respaldo institucional de tu póliza.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="text-navy-mid font-bold text-lg tracking-tight opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
