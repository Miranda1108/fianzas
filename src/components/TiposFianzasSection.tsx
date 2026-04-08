import Link from "next/link";

const FIANZA_TYPES = [
  {
    href: "/fianza-de-cumplimiento",
    title: "Fianza de Cumplimiento",
    description:
      "Garantiza el cumplimiento total del contrato firmado con gobierno o particulares.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    href: "/fianza-de-anticipo",
    title: "Fianza de Anticipo",
    description:
      "Respalda el uso correcto del anticipo recibido para iniciar trabajos.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/fianza-de-licitacion",
    title: "Fianza de Licitación",
    description:
      "Requisito para participar en concursos y licitaciones públicas.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: "/fianza-vicios-ocultos",
    title: "Fianza de Vicios Ocultos",
    description:
      "Cubre defectos posteriores a la entrega de obra por un plazo determinado.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385-5.396a.5.5 0 010-.707l.707-.707a.5.5 0 01.707 0L12 12.88l4.55-4.53a.5.5 0 01.707 0l.707.707a.5.5 0 010 .707L12.127 15.17a.5.5 0 01-.707 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
];

export default function TiposFianzasSection() {
  return (
    <section id="tipos-fianzas" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Tipos de Fianzas
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {FIANZA_TYPES.map((fianza) => (
            <Link
              key={fianza.href}
              href={fianza.href}
              className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-bg-alt rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {fianza.icon}
              </div>
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-primary mb-3">
                {fianza.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {fianza.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
