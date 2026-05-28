const PERSONA_FISICA = [
  "Identificación oficial vigente (INE o pasaporte)",
  "Constancia de Situación Fiscal (RFC)",
  "Comprobante de domicilio reciente",
  "Comprobante de ingresos o declaración anual",
  "Documento o contrato que se desea garantizar",
];

const PERSONA_MORAL = [
  "Acta constitutiva y poderes del representante legal",
  "Constancia de Situación Fiscal (RFC) de la empresa",
  "Identificación oficial del representante legal",
  "Comprobante de domicilio fiscal",
  "Estados financieros recientes",
  "Documento, contrato o licitación que se desea garantizar",
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export default function DocumentosSection() {
  return (
    <section id="documentos" className="bg-gray-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-[var(--font-heading)] font-semibold text-2xl md:text-3xl text-navy mb-3">
            ¿Qué documentos necesitas?
          </h2>
          <p className="text-gray-muted text-sm md:text-base max-w-2xl mx-auto">
            Reúne estos documentos para agilizar tu trámite. El requerimiento puede variar según el tipo de fianza y el monto a garantizar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {/* Persona física */}
          <div className="card-clean p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-lg text-navy">
                Persona física
              </h3>
            </div>
            <ul className="space-y-3">
              {PERSONA_FISICA.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-sm text-gray-text leading-relaxed">
                  <CheckIcon />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Persona moral */}
          <div className="card-clean p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="font-[var(--font-heading)] font-semibold text-lg text-navy">
                Persona moral (empresa)
              </h3>
            </div>
            <ul className="space-y-3">
              {PERSONA_MORAL.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-sm text-gray-text leading-relaxed">
                  <CheckIcon />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center mt-8 text-xs text-gray-muted max-w-2xl mx-auto reveal">
          ¿No estás seguro de qué documentos aplican a tu caso? Escríbenos y un asesor te indica exactamente lo que necesitas.
        </p>
      </div>
    </section>
  );
}
