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
    gradient: "from-blue-500 to-secondary",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
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
    gradient: "from-emerald-500 to-cta",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
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
    gradient: "from-amber-500 to-accent",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
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
    gradient: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
  },
];

export default function TiposFianzasSection() {
  return (
    <section id="tipos-fianzas" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Nuestros servicios</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Tipos de Fianzas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {FIANZA_TYPES.map((fianza) => (
            <Link
              key={fianza.href}
              href={fianza.href}
              className="group card-3d bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent"
            >
              {/* Image */}
              <div className="img-zoom h-40 relative">
                <img
                  src={fianza.image}
                  alt={fianza.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-gradient-to-br ${fianza.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {fianza.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                  {fianza.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {fianza.description}
                </p>
                <div className="mt-4 flex items-center text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Ver más
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
