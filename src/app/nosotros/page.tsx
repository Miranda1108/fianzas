import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros | Grupo Afianzador MX | Intermediario de Fianzas CDMX",
  description: "Conoce a Grupo Afianzador MX. Intermediarios especializados en fianzas para proveedores de gobierno en CDMX y Estado de México. +500 empresas apoyadas.",
};

const VALUES = [
  {
    title: "Experiencia",
    desc: "Años de trayectoria en el mercado de fianzas para gobierno nos respaldan.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Múltiples opciones",
    desc: "Trabajamos con diversas afianzadoras para ofrecerte la mejor tasa y aprobación.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Atención personalizada",
    desc: "Cada caso es único. Te acompañamos desde la cotización hasta la emisión.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Rapidez",
    desc: "Respuesta en 24 a 72 horas con documentación completa.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-primary font-medium">Nosotros</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            Grupo Afianzador MX
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Intermediarios especializados en fianzas para proveedores de gobierno en CDMX y Estado de México
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-primary mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-6">
              En <strong>Grupo Afianzador MX</strong> somos un intermediario de fianzas especializado en atender a proveedores y contratistas que participan en licitaciones y contratos con dependencias de gobierno en la Ciudad de México y el Estado de México.
            </p>
            <p className="text-text-body text-lg leading-relaxed mb-6">
              Trabajamos con <strong>múltiples afianzadoras líderes en México</strong> para ofrecerte las mejores condiciones de aprobación, costo y tiempo de respuesta. Nuestro equipo evalúa tu perfil financiero y busca la opción que más se adapte a las necesidades de tu empresa.
            </p>
            <p className="text-text-body text-lg leading-relaxed">
              Con más de <strong>500 empresas apoyadas</strong>, nos hemos consolidado como un aliado confiable para quienes buscan obtener sus fianzas de manera rápida, segura y transparente.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-bg-alt rounded-2xl flex items-center justify-center text-secondary">
                  {val.icon}
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-primary mb-2">{val.title}</h3>
                <p className="text-text-muted text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para obtener tu fianza?
          </h2>
          <p className="text-white/80 mb-8">Contáctanos hoy y recibe una evaluación sin costo.</p>
          <a
            href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20interesa%20cotizar%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-full transition-all text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
