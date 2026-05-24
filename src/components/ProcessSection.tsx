const STEPS = [
  {
    number: 1,
    title: "Envíanos tu información",
    description: "Cuéntanos qué tipo de fianza necesitas y los detalles.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Analizamos tu caso",
    description: "Revisamos tu información y te damos opciones.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Te damos una propuesta",
    description: "Cotización clara y sin complicaciones.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Emitimos tu fianza",
    description: "Una vez aprobada, recibes tu fianza.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="como-funciona" className="bg-gray-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <h2 className="font-[var(--font-heading)] font-semibold text-2xl md:text-3xl text-navy">
            ¿Cómo funciona?
          </h2>
        </div>

        {/* Steps + Info card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 stagger-children">
          {/* 4 Steps */}
          {STEPS.map((step, index) => (
            <div key={index} className="lg:col-span-1 flex flex-col items-center text-center relative">
              {/* Numbered circle */}
              <div className="w-10 h-10 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center z-10">
                {step.number}
              </div>

              {/* Dotted connector line (desktop only) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] z-0">
                  <div className="h-0 border-t-2 border-dashed border-gray-border" />
                </div>
              )}

              {/* Icon box */}
              <div className="w-16 h-16 rounded-2xl border-2 border-gray-border flex items-center justify-center text-navy-mid mt-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-heading)] font-semibold text-sm text-navy mt-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-muted text-xs mt-1 leading-relaxed max-w-[180px]">
                {step.description}
              </p>
            </div>
          ))}

          {/* Info card */}
          <div className="lg:col-span-1 bg-brand rounded-2xl p-6 text-white flex flex-col items-center text-center justify-center">
            {/* Glasses icon */}
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>

            <h3 className="font-[var(--font-heading)] font-semibold text-base leading-snug mb-2">
              Acompañamiento de principio a fin
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Te guiamos en cada paso del proceso.
            </p>
            <a
              href="/nosotros"
              className="inline-flex items-center gap-1 text-sm font-medium border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
            >
              Saber más
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
