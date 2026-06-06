import { Metadata } from "next";
import CiudadPageTemplate from "@/components/CiudadPageTemplate";
import { CIUDADES } from "../ciudades";

const ciudad = CIUDADES["fianzas-queretaro"];

export const metadata: Metadata = {
  title: ciudad.metaTitle,
  description: ciudad.metaDescription,
  keywords: ciudad.keywords,
  alternates: { canonical: "/fianzas-queretaro" },
  openGraph: {
    title: ciudad.metaTitle,
    description: ciudad.metaDescription,
    url: "/fianzas-queretaro",
    type: "website",
  },
};

export default function FianzasQueretaro() {
  return <CiudadPageTemplate ciudad={ciudad} />;
}
