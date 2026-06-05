import { Metadata } from "next";
import CiudadPageTemplate from "@/components/CiudadPageTemplate";
import { CIUDADES } from "../ciudades";

const ciudad = CIUDADES["fianzas-tlalnepantla"];

export const metadata: Metadata = {
  title: ciudad.metaTitle,
  description: ciudad.metaDescription,
  keywords: ciudad.keywords,
  alternates: { canonical: "/fianzas-tlalnepantla" },
  openGraph: {
    title: ciudad.metaTitle,
    description: ciudad.metaDescription,
    url: "/fianzas-tlalnepantla",
    type: "website",
  },
};

export default function FianzasTlalnepantla() {
  return <CiudadPageTemplate ciudad={ciudad} />;
}
