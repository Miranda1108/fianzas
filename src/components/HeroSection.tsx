"use client";

const WHATSAPP_URL =
  "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20necesito%20cotizar%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F";

const FEATURES = [
  {
    label: "Respuesta en menos de 2 horas",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: "Asesoría personalizada",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    label: "Afianzadoras autorizadas",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-navy min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Real building photo background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(135deg, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.80) 40%, rgba(30,58,95,0.75) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.08] text-white mb-6">
            Tu fianza,
            <br />
            <em className="text-brand-light not-italic font-bold italic">rápida</em>{" "}y sin
            <br />
            complicaciones
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            Te ayudamos a obtener tu fianza con asesoría personalizada y
            respuesta inmediata.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-white/90">
                <span className="text-brand-light">{f.icon}</span>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#formulario"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-[var(--font-heading)] font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30"
            >
              Cotizar ahora
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-[var(--font-heading)] font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
