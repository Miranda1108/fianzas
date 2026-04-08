const STEPS = [
  {
    number: "1",
    title: "Envíanos tu información",
    description:
      "Compártenos datos básicos de tu empresa, el contrato o fallo, y el tipo de fianza que necesitas.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Evaluamos tu perfil",
    description:
      "Analizamos tu información financiera y buscamos la mejor opción entre nuestras afianzadoras aliadas.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Te presentamos opciones",
    description:
      "Te damos alternativas de costo y condiciones para que elijas la más conveniente para tu empresa.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Emitimos tu fianza",
    description:
      "Una vez aprobada, se emite tu póliza de fianza lista para presentar ante la dependencia.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-primary mb-3">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-text-muted text-lg">
            Un proceso ágil, claro y acompañado
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {STEPS.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Arrow connector (desktop only) */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] z-0">
                  <svg className="w-full h-6 text-gray-300" viewBox="0 0 200 24" fill="none">
                    <path d="M0 12h190m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div className="relative z-10 w-20 h-20 bg-bg-alt rounded-2xl flex items-center justify-center text-secondary mb-4 border-2 border-gray-100">
                {step.icon}
              </div>

              <h3 className="font-[var(--font-heading)] font-bold text-base text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
