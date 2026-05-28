import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Cumplimiento | Costo y Requisitos | Fianzify",
  description: "Fianza de cumplimiento para contratos públicos y privados. Prima del 1% al 3%. Evaluación sin costo. Respuesta rápida con Fianzify.",
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
      useCases={[
        "Empresas adjudicadas en una licitación pública de obra o servicios.",
        "Proveedores que firman contratos con dependencias de gobierno.",
        "Contratos privados de obra o suministro que exigen garantía de cumplimiento.",
      ]}
      faqs={[
        {
          q: "¿Cuándo necesito una fianza de cumplimiento?",
          a: "En cuanto te adjudican un contrato público o privado que la exige. Es la garantía más solicitada en obra pública y prestación de servicios al gobierno.",
        },
        {
          q: "¿Por qué monto se emite?",
          a: "Normalmente por el 100% del valor del contrato, aunque algunas dependencias piden un porcentaje. Lo confirmamos al revisar tu fallo o contrato.",
        },
        {
          q: "¿Cuánto cuesta y cuánto tarda?",
          a: "La prima va del 1% al 3% del monto afianzado. Cotización en menos de 2 horas y emisión en 24-48 horas con documentación completa.",
        },
      ]}
    />
  );
}
