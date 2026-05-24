"use client";

const TESTIMONIALS = [
  {
    quote:
      "Me ayudaron a obtener mi fianza de arrendamiento el mismo día. Muy profesionales y atentos.",
    name: "Laura M.",
    role: "Fianza de arrendamiento",
  },
  {
    quote:
      "Respuesta rápida y proceso muy sencillo. Sin duda los recomiendo.",
    name: "Carlos R.",
    role: "Fianza de cumplimiento",
  },
  {
    quote:
      "Excelente asesoría, siempre me mantuvieron informado en todo el proceso.",
    name: "Ana P.",
    role: "Fianza judicial",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-warning"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-heading)] font-semibold text-2xl md:text-3xl text-navy text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-clean p-6">
              <span className="text-brand text-3xl font-serif leading-none select-none">
                &ldquo;
              </span>

              <p className="text-gray-text text-sm leading-relaxed italic mt-2">
                {t.quote}
              </p>

              <div className="h-px bg-gray-border my-4" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-gray-muted text-xs">{t.role}</p>
                </div>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
