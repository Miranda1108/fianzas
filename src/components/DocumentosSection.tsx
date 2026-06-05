const PERSONA_FISICA = [
  "Identificación oficial vigente (INE o pasaporte)",
  "Constancia de Situación Fiscal (RFC)",
  "Comprobante de domicilio reciente (no mayor a 2 meses)",
  "Comprobante de ingresos o declaración anual",
  "Documento fuente que da origen a la fianza (contrato, fallo o convocatoria)",
];

type Grupo = {
  titulo: string;
  docs: string[];
};

const PERSONA_MORAL_GRUPOS: Grupo[] = [
  {
    titulo: "1. Documentos de la empresa",
    docs: [
      "Documento fuente que da origen a la fianza (contrato, fallo de adjudicación o convocatoria)",
      "Correo electrónico y teléfono de contacto de la empresa",
      "Constancia de Situación Fiscal de la empresa y del representante legal",
      "Acta constitutiva / protocolización (o poder notarial si el representante es distinto al del acta)",
      "Registro Público de la Propiedad (solo si se ofrece un bien inmueble como garantía)",
    ],
  },
  {
    titulo: "2. Estados financieros",
    docs: [
      "Estados financieros a diciembre del último ejercicio",
      "Último estado financiero parcial del año en curso",
    ],
  },
  {
    titulo: "3. Contador y representante legal",
    docs: [
      "Cédula profesional del contador (el mismo que firma los estados financieros)",
      "Identificación oficial del contador (INE o pasaporte vigente)",
      "Identificación oficial del representante legal (con foto y firma)",
    ],
  },
  {
    titulo: "4. Declaraciones y currículum",
    docs: [
      "Declaración anual de los 2 últimos ejercicios con acuse del SAT (en formato Excel)",
      "Currículum de la empresa (historial de obras o contratos)",
    ],
  },
  {
    titulo: "5. Domicilio y constancia del representante",
    docs: [
      "Comprobante de domicilio de la empresa o carátula bancaria (no mayor a 2 meses)",
      "Constancia de Situación Fiscal del representante legal (o al menos su RFC con homoclave)",
    ],
  },
  {
    titulo: "6. Lo que gestiona Fianzify por ti",
    docs: [
      "Formatos de la afianzadora — nosotros los tramitamos y te los regresamos para firma autógrafa",
    ],
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

const WHATSAPP_DOCS =
  "https://wa.me/525659957036?text=Hola%2C%20tengo%20dudas%20sobre%20los%20documentos%20que%20necesito%20para%20mi%20fianza.";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
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
              <div>
                <h3 className="font-[var(--font-heading)] font-semibold text-lg text-navy leading-tight">
                  Persona moral (empresa)
                </h3>
                <p className="text-xs text-gray-muted">15 documentos en 6 grupos</p>
              </div>
            </div>

            <div className="space-y-5">
              {PERSONA_MORAL_GRUPOS.map((grupo) => (
                <div key={grupo.titulo}>
                  <h4 className="font-[var(--font-heading)] font-semibold text-sm text-brand mb-2">
                    {grupo.titulo}
                  </h4>
                  <ul className="space-y-2">
                    {grupo.docs.map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-gray-text leading-relaxed">
                        <CheckIcon />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Alerta firmas autógrafas */}
            <div className="mt-6 rounded-xl border-l-4 border-red-500 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-800 leading-relaxed">
                <strong>Importante:</strong> los estados financieros deben presentarse con
                <strong> firmas autógrafas</strong> del contador y del representante legal,
                e incluir la leyenda obligatoria "bajo protesta de decir verdad". No se aceptan firmas electrónicas.
              </p>
            </div>
          </div>
        </div>

        {/* Casos especiales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-xl border-l-4 border-warning bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>¿Tu empresa es S.A.S.?</strong> (Sociedad por Acciones Simplificada) Háznoslo saber —
              hay condiciones especiales para este tipo de sociedad.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-red-500 bg-red-50 px-4 py-3">
            <p className="text-sm text-red-800 leading-relaxed">
              <strong>¿Tienes historial en Buró de Crédito?</strong> No es impedimento —
              infórmanos desde el inicio para evaluar las mejores opciones y evitar retrasos.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 reveal">
          <a
            href={WHATSAPP_DOCS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-[var(--font-heading)] font-semibold rounded-xl px-6 py-3.5 text-sm transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ¿No sabes qué documentos aplican? Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
