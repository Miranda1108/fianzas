import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaMarkup from "@/components/SchemaMarkup";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fianzas para Licitaciones en CDMX y Estado de México | Grupo Afianzador MX",
  description:
    "Gestionamos fianzas de cumplimiento, anticipo y licitación para proveedores de gobierno en CDMX y Edo. Mex. Evaluación sin costo. Respuesta en 24-72 hrs. Trabajamos con múltiples afianzadoras.",
  keywords: [
    "fianzas para licitaciones CDMX",
    "fianza de cumplimiento costo México",
    "fianza de anticipo para contrato gobierno",
    "fianzas para proveedores de gobierno",
    "cuánto cuesta una fianza en México",
    "tramitar fianza rápido CDMX",
  ],
  openGraph: {
    title: "Fianzas para Licitaciones CDMX | Grupo Afianzador MX",
    description:
      "Fianzas para proveedores de gobierno. Evaluación sin costo, múltiples afianzadoras.",
    url: "https://grupoafianzadormx.com/",
    siteName: "Grupo Afianzador MX",
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://grupoafianzadormx.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${openSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SchemaMarkup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <ScrollReveal />
      </body>
    </html>
  );
}
