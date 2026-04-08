import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuánto cuesta una fianza en México 2026 | Costos, primas y factores",
  description: "Conoce el costo real de una fianza en México. Prima del 1% al 3% del monto afianzado. Factores que afectan el precio, tipos de fianza y cómo cotizar. Evaluación sin costo.",
};

const COST_TABLE = [
  { tipo: "Cumplimiento", prima: "1% – 3%", ejemplo: "$50,000 – $150,000", vigencia: "Duración del contrato" },
  { tipo: "Anticipo", prima: "1% – 2.5%", ejemplo: "$50,000 – $125,000", vigencia: "Hasta amortización total" },
  { tipo: "Licitación", prima: "0.5% – 1.5%", ejemplo: "$25,000 – $75,000", vigencia: "Proceso de licitación" },
  { tipo: "Vicios Ocultos", prima: "1% – 2%", ejemplo: "$50,000 – $100,000", vigencia: "12–24 meses post-entrega" },
];

const FACTORS = [
  { title: "Monto del contrato", desc: "A mayor monto, la prima porcentual puede reducirse por volumen" },
  { title: "Tipo de fianza", desc: "Cumplimiento y anticipo suelen tener primas similares; licitación es generalmente más baja" },
  { title: "Perfil financiero", desc: "Estados financieros sólidos reducen el riesgo y la prima" },
  { title: "Historial crediticio", desc: "Un buen historial en Buró de Crédito facilita la aprobación y puede mejorar la tasa" },
  { title: "Historial afianzable", desc: "Empresas con experiencia previa en fianzas obtienen mejores condiciones" },
  { title: "Tipo de beneficiario", desc: "Contratos federales (PEMEX, CFE) pueden tener requisitos adicionales" },
  { title: "Garantías ofrecidas", desc: "Ofrecer garantía inmobiliaria puede reducir la prima en montos grandes (>$2M MXN)" },
];

const DOCUMENTS = [
  "Contrato fuente o fallo de adjudicación",
  "Acta constitutiva de la empresa",
  "Identificación oficial del representante legal",
  "Constancia de situación fiscal vigente",
  "Estados financieros del ejercicio anterior y parciales del año en curso",
  "Declaración anual con acuse de envío",
  "Cédula profesional del contador que firma los estados financieros",
];

export default function CostosPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-primary font-medium">Costos de Fianzas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            ¿Cuánto cuesta una fianza en México?
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            El costo generalmente se expresa como un porcentaje del monto total afianzado, conocido como prima. Esta prima varía entre el <span className="text-accent font-bold">1% y el 3%</span> del valor del contrato.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-alt rounded-2xl p-6 md:p-8 border border-gray-100">
            <p className="text-text-body text-lg leading-relaxed">
              Por ejemplo, si tu contrato con gobierno es por <span className="font-bold text-primary">$5,000,000 MXN</span> y la prima es del 1.5%, el costo de tu fianza sería aproximadamente <span className="font-bold text-cta">$75,000 MXN</span>. Este monto se paga una sola vez al momento de la emisión de la póliza.
            </p>
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-primary mb-8">
            Factores que afectan el costo
          </h2>
          <div className="space-y-4">
            {FACTORS.map((factor, i) => (
              <div key={i} className="flex items-start gap-4 bg-bg-alt rounded-xl p-5 border border-gray-100">
                <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-[var(--font-heading)] font-bold text-primary">{factor.title}</h3>
                  <p className="text-text-muted text-sm mt-1">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-primary mb-8">
            Tabla de costos estimados
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tipo de fianza</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Prima estimada</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Ejemplo ($5M)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Vigencia</th>
                </tr>
              </thead>
              <tbody>
                {COST_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-alt"}>
                    <td className="px-6 py-4 text-sm font-medium text-primary">{row.tipo}</td>
                    <td className="px-6 py-4 text-sm text-cta font-bold">{row.prima}</td>
                    <td className="px-6 py-4 text-sm text-text-body">{row.ejemplo}</td>
                    <td className="px-6 py-4 text-sm text-text-muted">{row.vigencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-primary mb-8">
            Documentos necesarios para cotizar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DOCUMENTS.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 bg-bg-alt rounded-xl p-4 border border-gray-100">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-text-body text-sm">{doc}</span>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-4 italic">
            Nota: Para montos mayores a $2,000,000 MXN puede requerirse garantía inmobiliaria.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres saber cuánto costaría tu fianza?
          </h2>
          <p className="text-white/80 mb-8">
            Solicita una evaluación sin costo. Nuestro equipo analizará tu caso con múltiples afianzadoras para darte la mejor opción.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola%2C%20quiero%20saber%20cu%C3%A1nto%20cuesta%20una%20fianza.%20%C2%BFMe%20pueden%20apoyar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-full transition-all text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar mi fianza ahora
            </a>
            <a href="/#formulario" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all text-lg">
              Solicitar evaluación
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
