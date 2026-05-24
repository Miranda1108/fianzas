const STATS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Respuesta rápida",
    subtitle: "Te atendemos en menos de 2 horas",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Afianzadoras autorizadas",
    subtitle: "Trabajamos con instituciones formalmente autorizadas",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Asesoría personalizada",
    subtitle: "Te acompañamos en cada paso del proceso",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Proceso claro",
    subtitle: "Sin letra pequeña, sin complicaciones",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white border-t border-b border-gray-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-scale">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index < STATS.length - 1
                  ? "md:border-r md:border-gray-border"
                  : ""
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/8 flex items-center justify-center text-brand mb-3">
                {stat.icon}
              </div>
              <div className="font-[var(--font-heading)] font-semibold text-sm text-navy">
                {stat.title}
              </div>
              <div className="text-gray-muted text-xs mt-1">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
