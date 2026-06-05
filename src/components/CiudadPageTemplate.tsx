import Link from "next/link";
import type { Ciudad } from "@/app/(ciudades)/ciudades";

const WHATSAPP = (ciudad: string) =>
  `https://wa.me/525659957036?text=${encodeURIComponent(
    `Hola, necesito cotizar una fianza en ${ciudad}. ¿Me pueden apoyar?`
  )}`;

const TIPOS = [
  { href: "/fianza-de-cumplimiento", label: "Cumplimiento" },
  { href: "/fianza-de-anticipo", label: "Anticipo" },
  { href: "/fianza-de-licitacion", label: "Sostenimiento de propuesta" },
  { href: "/fianza-administrativa", label: "Administrativa" },
  { href: "/fianza-judicial", label: "Judicial" },
  { href: "/fianza-de-arrendamiento", label: "Arrendamiento" },
];

export default function CiudadPageTemplate({ ciudad }: { ciudad: Ciudad }) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-bg border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-muted flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-navy font-medium">Fianzas en {ciudad.nombre}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy/90 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            Fianzas en {ciudad.nombre}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            {ciudad.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#formulario"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-[var(--font-heading)] font-semibold rounded-xl px-7 py-3.5 text-sm transition-all"
            >
              Cotizar ahora
            </a>
            <a
              href={WHATSAPP(ciudad.nombre)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-[var(--font-heading)] font-semibold rounded-xl px-7 py-3.5 text-sm transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-navy mb-4">
            Fianzas rápidas en {ciudad.nombre}
          </h2>
          <p className="text-gray-text leading-relaxed mb-5">{ciudad.intro}</p>
          <p className="text-gray-text leading-relaxed mb-8">{ciudad.contexto}</p>

          {/* Tipos */}
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-navy mb-4">
            Tipos de fianza que tramitamos en {ciudad.nombreCorto}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {TIPOS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="flex items-center gap-2 bg-gray-bg hover:bg-brand/10 border border-gray-border hover:border-brand rounded-xl px-4 py-3 text-sm font-medium text-navy transition-all"
              >
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75" />
                </svg>
                {t.label}
              </Link>
            ))}
          </div>

          {/* Zonas */}
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-navy mb-4">
            Zonas que atendemos en {ciudad.nombreCorto}
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {ciudad.zonas.map((z) => (
              <span key={z} className="text-sm bg-brand/5 text-navy border border-brand/15 rounded-full px-4 py-1.5">
                {z}
              </span>
            ))}
          </div>

          {/* CTA final */}
          <div className="bg-gradient-to-br from-navy to-navy-mid rounded-2xl p-8 text-center">
            <h2 className="font-[var(--font-heading)] text-xl md:text-2xl font-bold text-white mb-3">
              ¿Necesitas una fianza en {ciudad.nombreCorto}?
            </h2>
            <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
              Cotización en menos de 2 horas y emisión en 24-48 horas con documentación completa. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#formulario"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-[var(--font-heading)] font-semibold rounded-xl px-7 py-3.5 text-sm transition-all"
              >
                Cotizar ahora
              </a>
              <a
                href={WHATSAPP(ciudad.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-[var(--font-heading)] font-semibold rounded-xl px-7 py-3.5 text-sm transition-all"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
