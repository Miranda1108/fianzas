import Link from "next/link";

interface FianzaPageProps {
  title: string;
  description: string;
  details: string[];
  requirements: string[];
  coverage: string;
  duration: string;
  costRange: string;
}

export default function FianzaPageTemplate({
  title,
  description,
  details,
  requirements,
  coverage,
  duration,
  costRange,
}: FianzaPageProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#tipos-fianzas" className="hover:text-secondary transition-colors">Tipos de Fianzas</Link>
            <span>/</span>
            <span className="text-primary font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            {title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-4">
                  ¿Qué es la {title}?
                </h2>
                <p className="text-text-body leading-relaxed">{description}</p>
              </div>

              <div>
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-4">
                  ¿Qué cubre?
                </h2>
                <ul className="space-y-3">
                  {details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-cta rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-text-body">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-4">
                  Documentos necesarios
                </h2>
                <ul className="space-y-3">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-text-body">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-primary mb-4">Resumen</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-text-muted text-sm">Cobertura</span>
                    <span className="text-primary font-semibold text-sm">{coverage}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-text-muted text-sm">Vigencia</span>
                    <span className="text-primary font-semibold text-sm">{duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted text-sm">Prima estimada</span>
                    <span className="text-cta font-bold text-sm">{costRange}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-white">
                <h3 className="font-[var(--font-heading)] font-bold text-lg mb-3">¿Necesitas esta fianza?</h3>
                <p className="text-white/80 text-sm mb-5">Cotiza sin compromiso. Evaluación gratuita en 24-72 hrs.</p>
                <a
                  href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20interesa%20cotizar%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
