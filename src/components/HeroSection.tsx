"use client";

const WHATSAPP_URL =
  "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20necesito%20cotizar%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F";

export default function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            {/* Heading */}
            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] text-navy mb-6">
              Obtén tu fianza
              <br />
              <em className="text-brand not-italic font-bold">rápido</em> y sin
              <br />
              complicaciones
            </h1>

            {/* Paragraph */}
            <p className="text-gray-muted text-lg mb-8 max-w-lg leading-relaxed">
              Te ayudamos a obtener tu fianza con asesoría personalizada y
              respuesta inmediata.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/#formulario"
                className="btn-primary btn-shine inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold"
              >
                Cotizar mi fianza
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold"
              >
                <svg
                  className="w-5 h-5 text-whatsapp"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2 text-sm text-gray-muted">
              <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Respuesta en menos de 2 horas
            </div>
          </div>

          {/* RIGHT COLUMN - Hero Image */}
          <div className="relative hidden lg:block">
            {/* Professional image placeholder with gradient overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Gradient background simulating a professional business photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid to-brand">
                {/* Decorative overlay pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-white" />
                  <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full border-2 border-white" />
                  <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full border-2 border-white" />
                </div>
                {/* Business icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* Shield icon */}
                    <svg className="w-20 h-20 text-white/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    {/* Person icons */}
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <p className="text-white/40 text-sm mt-4 font-[var(--font-heading)]">Fianzas con respaldo profesional</p>
                  </div>
                </div>
              </div>
              {/* Glass card overlay - bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">+500 empresas confían en nosotros</p>
                    <p className="text-white/60 text-xs">Afianzadoras autorizadas en México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
