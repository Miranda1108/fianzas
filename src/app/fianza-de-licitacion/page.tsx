import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Licitación | Costo y Requisitos | Grupo Afianzador MX",
  description: "Fianza de licitación para participar en concursos públicos en CDMX y Edo. Mex. Prima desde 0.5%. Evaluación sin costo. Respuesta rápida.",
};

export default function FianzaLicitacion() {
  return (
    <FianzaPageTemplate
      title="Fianza de Licitación"
      description="Requisito indispensable para participar en concursos y licitaciones públicas. Garantiza la seriedad de la propuesta del licitante ante la dependencia convocante."
      details={[
        "Garantía de seriedad de la propuesta presentada",
        "Sostenimiento de la oferta durante el proceso",
        "Compromiso de firmar el contrato en caso de resultar ganador",
        "Requisito obligatorio en licitaciones públicas",
        "Vigencia durante el proceso de licitación",
      ]}
      requirements={[
        "Bases de licitación o convocatoria",
        "Acta constitutiva de la empresa",
        "Identificación oficial del representante legal",
        "Constancia de situación fiscal vigente",
        "Estados financieros recientes",
        "Declaración anual",
      ]}
      coverage="Según bases de licitación"
      duration="Proceso de licitación"
      costRange="0.5% – 1.5%"
    />
  );
}
