import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Vicios Ocultos | Costo y Requisitos | Fianzify",
  description: "Fianza de vicios ocultos para obra pública. Cubre defectos posteriores a la entrega. Prima del 1% al 2%. Evaluación sin costo con Fianzify.",
};

export default function FianzaViciosOcultos() {
  return (
    <FianzaPageTemplate
      title="Fianza de Vicios Ocultos"
      description="Cubre defectos posteriores a la entrega de obra por un plazo determinado. Protege al beneficiario contra fallas ocultas que puedan manifestarse después de la recepción formal de los trabajos."
      details={[
        "Defectos de construcción no visibles en la entrega",
        "Fallas en materiales o mano de obra",
        "Problemas estructurales que se manifiesten posteriormente",
        "Vicios de la obra que comprometan su funcionalidad",
        "Vigencia post-entrega de 12 a 24 meses",
      ]}
      requirements={[
        "Contrato fuente de obra",
        "Acta de entrega-recepción",
        "Acta constitutiva de la empresa",
        "Identificación oficial del representante legal",
        "Constancia de situación fiscal vigente",
        "Estados financieros del ejercicio anterior",
        "Declaración anual con acuse de envío",
      ]}
      coverage="Porcentaje del contrato"
      duration="12–24 meses post-entrega"
      costRange="1% – 2%"
      useCases={[
        "Contratistas que entregan una obra pública y deben garantizar su calidad.",
        "Empresas a las que la dependencia exige cubrir defectos posteriores a la entrega.",
        "Proyectos de construcción donde se requiere garantía de buena calidad.",
      ]}
      faqs={[
        {
          q: "¿Qué cubre la fianza de vicios ocultos?",
          a: "Defectos o fallas que no eran visibles al momento de la entrega-recepción y que se manifiestan después: problemas estructurales, de materiales o de mano de obra.",
        },
        {
          q: "¿Cuánto tiempo dura la vigencia?",
          a: "Generalmente de 12 a 24 meses posteriores a la entrega de la obra, según lo establezca el contrato.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "La prima va del 1% al 2% del monto garantizado. Cotización en menos de 2 horas, sin compromiso.",
        },
      ]}
    />
  );
}
