export default function HeroSection() {
  const badges = ["Cumplimiento", "Anticipo", "Licitación", "Vicios Ocultos"];

  return (
    <section className="relative bg-primary min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 z-10" />

      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Main heading */}
          <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            ¿Te adjudicaron un contrato de gobierno?
          </h1>
          <p className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-accent mb-6 italic">
            Obtén tu fianza rápido y seguro
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-cta/90 text-white text-sm font-medium px-4 py-1.5 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </div>

          {/* Support text */}
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
            Trabajamos con múltiples afianzadoras para lograr la mejor
            aprobación y costo para tu empresa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20me%20adjudicaron%20un%20contrato%20de%20gobierno%20y%20necesito%20cotizar%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:bg-white hover:text-primary"
            >
              Solicitar Evaluación
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Atención inmediata
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Evaluación sin costo
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-5 h-5 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Confidencialidad total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
