import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Fianzify | Cotiza tu Fianza",
  description: "Contáctanos en Fianzify para cotizar tu fianza. Respuesta rápida, evaluación sin costo. Fianzas de cumplimiento, arrendamiento, judicial y administrativa.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
