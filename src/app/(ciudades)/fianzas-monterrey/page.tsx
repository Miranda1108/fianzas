import { Metadata } from "next";
import CiudadPageTemplate from "@/components/CiudadPageTemplate";
import { CIUDADES } from "../ciudades";

const ciudad = CIUDADES["fianzas-monterrey"];

export const metadata: Metadata = {
  title: ciudad.metaTitle,
  description: ciudad.metaDescription,
  keywords: ciudad.keywords,
  alternates: { canonical: "/fianzas-monterrey" },
  openGraph: {
    title: ciudad.metaTitle,
    description: ciudad.metaDescription,
    url: "/fianzas-monterrey",
    type: "website",
  },
};

export default function FianzasMonterrey() {
  return <CiudadPageTemplate ciudad={ciudad} />;
}
