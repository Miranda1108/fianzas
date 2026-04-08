import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Anticipo | Costo y Requisitos | Grupo Afianzador MX",
  description: "Fianza de anticipo para contratos de gobierno. Respalda el uso correcto del anticipo recibido. Prima del 1% al 2.5%. Evaluación sin costo.",
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
    />
  );
}
