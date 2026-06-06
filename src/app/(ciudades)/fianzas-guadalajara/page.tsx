import { Metadata } from "next";
import CiudadPageTemplate from "@/components/CiudadPageTemplate";
import { CIUDADES } from "../ciudades";

const ciudad = CIUDADES["fianzas-guadalajara"];

export const metadata: Metadata = {
  title: ciudad.metaTitle,
  description: ciudad.metaDescription,
  keywords: ciudad.keywords,
  alternates: { canonical: "/fianzas-guadalajara" },
  openGraph: {
    title: ciudad.metaTitle,
    description: ciudad.metaDescription,
    url: "/fianzas-guadalajara",
    type: "website",
  },
};

export default function FianzasGuadalajara() {
  return <CiudadPageTemplate ciudad={ciudad} />;
}
