import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza Administrativa | Costo y Requisitos | Fianzify",
  description: "Fianzas administrativas para permisos, concesiones y obligaciones ante autoridades. Evaluación sin costo. Respuesta rápida con Fianzify.",
};

export default function FianzaAdministrativa() {
  return (
    <FianzaPageTemplate
      title="Fianza Administrativa"
      description="Avala el cumplimiento de obligaciones ante autoridades administrativas, permisos, concesiones y licencias. Garantiza el cumplimiento de las condiciones establecidas por la autoridad correspondiente."
      details={[
        "Cumplimiento de permisos y concesiones gubernamentales",
        "Obligaciones derivadas de licencias de funcionamiento",
        "Garantía ante autoridades administrativas federales, estatales o municipales",
        "Cumplimiento de regulaciones ambientales y sanitarias",
        "Obligaciones fiscales y aduaneras",
      ]}
      requirements={[
        "Documento que establece la obligación administrativa",
        "Acta constitutiva de la empresa",
        "Identificación oficial del representante legal",
        "Constancia de situación fiscal vigente",
        "Estados financieros recientes",
        "Permiso o concesión otorgada (si aplica)",
      ]}
      coverage="Monto determinado por la autoridad"
      duration="Vigencia del permiso o concesión"
      costRange="1% – 3%"
    />
  );
}
