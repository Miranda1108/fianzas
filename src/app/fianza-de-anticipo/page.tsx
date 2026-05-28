import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Anticipo | Costo y Requisitos | Fianzify",
  description: "Fianza de anticipo para contratos de gobierno. Respalda el uso correcto del anticipo recibido. Prima del 1% al 2.5%. Evaluación sin costo con Fianzify.",
};

export default function FianzaAnticipo() {
  return (
    <FianzaPageTemplate
      title="Fianza de Anticipo"
      description="Respalda el uso correcto del anticipo recibido para iniciar trabajos. Garantiza que el contratista utilizará los recursos del anticipo exclusivamente para el objeto del contrato."
      details={[
        "Uso correcto del anticipo otorgado por la dependencia",
        "Amortización progresiva conforme avance de obra",
        "Devolución del anticipo en caso de incumplimiento",
        "Protección del recurso público entregado",
        "Vigencia hasta la amortización total del anticipo",
      ]}
      requirements={[
        "Contrato fuente con cláusula de anticipo",
        "Acta constitutiva de la empresa",
        "Identificación oficial del representante legal",
        "Constancia de situación fiscal vigente",
        "Estados financieros del ejercicio anterior y parciales",
        "Declaración anual con acuse de envío",
        "Cédula profesional del contador",
      ]}
      coverage="Monto del anticipo"
      duration="Hasta amortización total"
      costRange="1% – 2.5%"
      useCases={[
        "Contratistas de obra pública que reciben un anticipo para arrancar trabajos.",
        "Proveedores de servicios al gobierno con pago adelantado en el contrato.",
        "Proyectos donde la dependencia exige garantizar la correcta aplicación del anticipo.",
      ]}
      faqs={[
        {
          q: "¿Por qué me piden una fianza de anticipo?",
          a: "Cuando una dependencia te entrega dinero por adelantado, exige esta fianza para asegurarse de que el recurso se use en el contrato y se amortice conforme avanza la obra.",
        },
        {
          q: "¿Por cuánto se emite?",
          a: "Generalmente por el 100% del monto del anticipo recibido. Se va amortizando conforme presentas estimaciones de avance.",
        },
        {
          q: "¿Cuánto tarda la emisión?",
          a: "Cotización en menos de 2 horas y emisión en 24-48 horas con la documentación completa.",
        },
      ]}
    />
  );
}
