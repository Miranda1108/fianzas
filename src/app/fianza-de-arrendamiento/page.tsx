import { Metadata } from "next";
import FianzaPageTemplate from "@/components/FianzaPageTemplate";

export const metadata: Metadata = {
  title: "Fianza de Arrendamiento | Costo y Requisitos | Fianzify",
  description: "Fianza de arrendamiento para proteger contratos de renta. Garantiza el cumplimiento de obligaciones del arrendatario. Evaluación sin costo con Fianzify.",
};

export default function FianzaArrendamiento() {
  return (
    <FianzaPageTemplate
      title="Fianza de Arrendamiento"
      description="Protege al arrendador garantizando el cumplimiento de las obligaciones del contrato de arrendamiento. Cubre pagos de renta, daños al inmueble y obligaciones contractuales del inquilino."
      details={[
        "Pago puntual de la renta mensual acordada",
        "Cobertura por daños al inmueble arrendado",
        "Cumplimiento de cláusulas contractuales del arrendatario",
        "Pagos de servicios y mantenimiento pactados",
        "Desocupación y entrega del inmueble en condiciones adecuadas",
      ]}
      requirements={[
        "Contrato de arrendamiento firmado o en proceso",
        "Identificación oficial del arrendatario",
        "Comprobante de ingresos o estados financieros",
        "Comprobante de domicilio reciente",
        "Referencias personales o comerciales",
        "Historial crediticio del arrendatario",
      ]}
      coverage="Monto equivalente a meses de renta"
      duration="Vigencia del contrato de arrendamiento"
      costRange="1% – 3%"
    />
  );
}
