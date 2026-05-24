import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import ScrollReveal from "@/components/ScrollReveal";
import SchemaMarkup from "@/components/SchemaMarkup";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fianzify | Fianzas Rápidas, Claras y Sin Complicaciones",
  description:
    "Obtén tu fianza en menos de 2 horas. Asesoría personalizada, afianzadoras autorizadas en México. Fianzas de cumplimiento, arrendamiento, judiciales y administrativas.",
  keywords: [
    "fianzas México",
    "fianza de cumplimiento",
    "fianza de arrendamiento",
    "fianza judicial",
    "fianza administrativa",
    "cotizar fianza rápido",
  ],
  openGraph: {
    title: "Fianzify | Fianzas Rápidas, Claras y Sin Complicaciones",
    description:
      "Tu fianza, rápida y sin complicaciones. Asesoría personalizada y afianzadoras autorizadas.",
    url: "https://fianzify.mx/",
    siteName: "Fianzify",
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://fianzify.mx/",
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
      className={`${poppins.variable} ${inter.variable} antialiased`}
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
