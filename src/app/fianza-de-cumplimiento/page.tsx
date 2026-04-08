import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Cumplimiento | Costo y Requisitos | Grupo Afianzador MX",
  description: "Fianza de cumplimiento para contratos de gobierno en CDMX y Edo. Mex. Prima del 1% al 3%. Evaluación sin costo. Respuesta en 24-72 hrs.",
};

export default function FianzaCumplimiento() {
  return (
    <FianzaPageTemplate
      title="Fianza de Cumplimiento"
      description="Garantiza el cumplimiento total del contrato firmado con gobierno o particulares. Es la fianza más solicitada en contratos de obra pública y prestación de servicios."
      details={[
        "Cumplimiento de todas las obligaciones pactadas en el contrato",
        "Garantía del plazo de entrega acordado",
        "Calidad de los trabajos o servicios comprometidos",
        "Penalización por incumplimiento parcial o total",
        "Protección al beneficiario (dependencia gubernamental)",
      ]}
      requirements={[
        "Contrato fuente o fallo de adjudicación",
        "Acta constitutiva de la empresa",
        "Identificación oficial del representante legal",
        "Constancia de situación fiscal vigente",
        "Estados financieros del ejercicio anterior y parciales",
        "Declaración anual con acuse de envío",
        "Cédula profesional del contador",
      ]}
      coverage="100% del contrato"
      duration="Duración del contrato"
      costRange="1% – 3%"
    />
  );
}
