import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Licitación | Costo y Requisitos | Fianzify",
  description: "Fianza de licitación para participar en concursos públicos. Prima desde 0.5%. Evaluación sin costo. Respuesta rápida con Fianzify.",
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
      useCases={[
        "Empresas que participan en una licitación o concurso público.",
        "Licitantes a quienes las bases les exigen garantizar la seriedad de su propuesta.",
        "Proveedores que concursan por contratos de gobierno y deben sostener su oferta.",
      ]}
      faqs={[
        {
          q: "¿También se le llama fianza de sostenimiento de propuesta?",
          a: "Sí. Garantiza que mantendrás tu oferta durante el proceso y que firmarás el contrato si resultas ganador. Es un requisito común en las bases de licitación.",
        },
        {
          q: "¿Por cuánto se emite?",
          a: "El monto lo indican las bases de la licitación, normalmente como un porcentaje de tu propuesta. Lo revisamos contigo al cotizar.",
        },
        {
          q: "¿Cuánto cuesta y cuánto tarda?",
          a: "Suele ser la fianza más económica (desde 0.5%). Cotización en menos de 2 horas y emisión en 24-48 horas con documentación completa.",
        },
      ]}
    />
  );
}
