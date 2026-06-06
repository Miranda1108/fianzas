import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Fianzas | Fianzify",
  description: "Servicios de gestión de fianzas en Fianzify. Fianzas de cumplimiento, arrendamiento, judicial y administrativa en todo México",
  openGraph: {
    title: "Servicios de Fianzas | Fianzify",
    description: "Servicios de gestión de fianzas en Fianzify. Fianzas de cumplimiento, arrendamiento, judicial y administrativa en todo México",
    type: "website",
  },
};

const SERVICES = [
  {
    href: "/fianza-de-cumplimiento",
    title: "Fianza de Cumplimiento",
    description: "Garantiza el cumplimiento total del contrato firmado con gobierno o particulares. Es la fianza más solicitada en contratos de obra pública.",
    prima: "1% – 3%",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    href: "/fianza-de-arrendamiento",
    title: "Fianza de Arrendamiento",
    description: "Protege al arrendador garantizando el cumplimiento de las obligaciones del contrato de arrendamiento.",
    prima: "1% – 2.5%",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/fianza-judicial",
    title: "Fianza Judicial",
    description: "Garantías requeridas en procesos judiciales como libertad caucional, pensiones alimenticias y otras obligaciones legales.",
    prima: "0.5% – 1.5%",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: "/fianza-administrativa",
    title: "Fianza Administrativa",
    description: "Avala el cumplimiento de obligaciones ante autoridades administrativas, permisos y concesiones.",
    prima: "1% – 2%",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <>
      <div className="bg-gray-bg border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-muted flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-navy font-medium">Servicios</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-navy to-navy/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Gestionamos todos los tipos de fianzas que necesitas para tus contratos de gobierno
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl border border-gray-border p-8 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-navy transition-colors flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-[var(--font-heading)] font-bold text-xl text-navy mb-2 group-hover:text-brand transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-muted text-sm leading-relaxed mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-whatsapp font-bold bg-whatsapp/10 px-3 py-1 rounded-full">
                        Prima: {service.prima}
                      </span>
                      <span className="text-brand font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver más
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
