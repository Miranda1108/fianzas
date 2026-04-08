export default function CostSection() {
  return (
    <section className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Types of fianzas content continues or other content */}
          <div />

          {/* Right: Cost card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:sticky lg:top-28">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-extrabold text-primary mb-2">
              ¿Cuánto cuesta<br />una fianza?
            </h2>
            <p className="text-text-body text-base mb-6 leading-relaxed">
              El costo promedio en México va del{" "}
              <span className="font-bold text-cta">1% al 3%</span> del monto
              del contrato.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Depende del perfil financiero",
                "Del monto y tipo de fianza",
                "Te damos cotización sin costo",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-cta rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-text-body text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20saber%20cu%C3%A1nto%20cuesta%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 text-base shadow-md hover:shadow-lg"
            >
              Cotiza ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
