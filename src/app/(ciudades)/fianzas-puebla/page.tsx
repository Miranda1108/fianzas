import { Metadata } from "next";
import CiudadPageTemplate from "@/components/CiudadPageTemplate";
import { CIUDADES } from "../ciudades";

const ciudad = CIUDADES["fianzas-puebla"];

export const metadata: Metadata = {
  title: ciudad.metaTitle,
  description: ciudad.metaDescription,
  keywords: ciudad.keywords,
  alternates: { canonical: "/fianzas-puebla" },
  openGraph: {
    title: ciudad.metaTitle,
    description: ciudad.metaDescription,
    url: "/fianzas-puebla",
    type: "website",
  },
};

export default function FianzasPuebla() {
  return <CiudadPageTemplate ciudad={ciudad} />;
}
