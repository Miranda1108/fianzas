import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Fidelidad | Costo y Requisitos | Fianzify",
  description:
    "Fianza de fidelidad para proteger a tu empresa de fraudes o daños causados por empleados de confianza. Cotización en menos de 2 horas con Fianzify.",
};

export default function FianzaFidelidad() {
  return (
    <FianzaPageTemplate
      title="Fianza de Fidelidad"
      description="Protege el patrimonio de tu empresa ante actos deshonestos —robo, fraude, abuso de confianza o desfalco— cometidos por empleados que manejan dinero, mercancía o información sensible."
      details={[
        "Cobertura por robo, fraude, abuso de confianza y desfalco",
        "Aplica a empleados que manejan efectivo, valores o mercancía",
        "Protección individual o por grupo de colaboradores",
        "Reembolso del daño económico comprobado",
        "Vigencia renovable anualmente",
      ]}
      requirements={[
        "Acta constitutiva de la empresa",
        "Identificación oficial del representante legal",
        "Constancia de situación fiscal vigente",
        "Relación de empleados a afianzar y sus puestos",
        "Descripción de funciones y montos que manejan",
      ]}
      coverage="Monto del manejo de valores"
      duration="12 meses renovable"
      costRange="1% – 3%"
      useCases={[
        "Empresas con cajeros, tesoreros o personal que maneja efectivo.",
        "Comercios y almacenes con empleados a cargo de inventario o mercancía.",
        "Áreas de cobranza, finanzas o nómina que gestionan recursos de la empresa.",
      ]}
      faqs={[
        {
          q: "¿A quién protege la fianza de fidelidad?",
          a: "Protege a la empresa (el patrón), no al empleado. Cubre las pérdidas económicas que un colaborador de confianza pueda ocasionar por actos deshonestos.",
        },
        {
          q: "¿Puedo afianzar a varios empleados a la vez?",
          a: "Sí. Se puede emitir de forma individual, por puesto o de manera colectiva para un grupo de empleados que manejan valores.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "La prima suele ir del 1% al 3% del monto afianzado y depende del giro de la empresa y el riesgo del puesto. Cotiza sin compromiso para conocer el costo exacto.",
        },
      ]}
    />
  );
}
