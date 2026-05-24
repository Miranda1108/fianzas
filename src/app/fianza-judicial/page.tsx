import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza Judicial | Costo y Requisitos | Fianzify",
  description: "Fianzas judiciales para procesos legales. Libertad caucional, pensiones alimenticias y otras obligaciones judiciales. Evaluación sin costo con Fianzify.",
};

export default function FianzaJudicial() {
  return (
    <FianzaPageTemplate
      title="Fianza Judicial"
      description="Garantías requeridas en procesos judiciales como libertad caucional, pensiones alimenticias y otras obligaciones legales. Respaldo para cumplir con los requerimientos del poder judicial."
      details={[
        "Libertad caucional o provisional bajo fianza",
        "Garantía de pensiones alimenticias",
        "Embargo precautorio o medidas cautelares",
        "Cumplimiento de resoluciones judiciales",
        "Amparo e interdictos",
      ]}
      requirements={[
        "Resolución judicial que ordena la fianza",
        "Identificación oficial del solicitante",
        "Comprobante de domicilio reciente",
        "Datos del expediente judicial (número y juzgado)",
        "Monto determinado por la autoridad judicial",
        "Poder notarial del representante legal (si aplica)",
      ]}
      coverage="Monto determinado por el juez"
      duration="Según resolución judicial"
      costRange="1.5% – 4%"
    />
  );
}
