import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Fianzas en México | Grupo Afianzador MX",
  description: "Artículos y guías sobre fianzas para proveedores de gobierno en México. Requisitos, costos, documentos y más.",
};

const ARTICLES = [
  {
    slug: "que-es-una-fianza",
    title: "¿Qué es una fianza y cómo funciona en México?",
    excerpt: "Una fianza es un contrato de garantía emitido por una institución autorizada (afianzadora) que asegura el cumplimiento de obligaciones contractuales entre dos partes.",
    category: "Guía básica",
    date: "2 Abr 2026",
  },
  {
    slug: "requisitos-fianza-cumplimiento",
    title: "Requisitos para obtener una fianza de cumplimiento en 2026",
    excerpt: "Conoce todos los documentos y requisitos que necesitas para tramitar tu fianza de cumplimiento ante las principales afianzadoras de México.",
    category: "Requisitos",
    date: "28 Mar 2026",
  },
  {
    slug: "diferencia-fianza-cumplimiento-anticipo",
    title: "Diferencia entre fianza de cumplimiento y fianza de anticipo",
    excerpt: "Ambas fianzas son comunes en contratos de gobierno, pero cubren aspectos distintos. Te explicamos cuándo necesitas cada una.",
    category: "Comparativa",
    date: "20 Mar 2026",
  },
  {
    slug: "como-participar-licitaciones-publicas",
    title: "¿Cómo participar en licitaciones públicas si eres nuevo proveedor?",
    excerpt: "Guía paso a paso para nuevos proveedores que quieren participar en licitaciones de gobierno y necesitan fianzas por primera vez.",
    category: "Guía",
    date: "15 Mar 2026",
  },
  {
    slug: "documentos-tramitar-fianza",
    title: "¿Qué documentos necesitas para tramitar una fianza?",
    excerpt: "Lista completa de documentos que debes reunir para agilizar el trámite de tu fianza: acta constitutiva, estados financieros, declaraciones y más.",
    category: "Requisitos",
    date: "10 Mar 2026",
  },
  {
    slug: "errores-comunes-tramitar-fianza",
    title: "5 errores comunes al tramitar una fianza (y cómo evitarlos)",
    excerpt: "Evita retrasos y rechazos en tu trámite de fianza. Te compartimos los errores más frecuentes y cómo prevenirlos.",
    category: "Consejos",
    date: "5 Mar 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-text-muted flex items-center gap-2">
            <Link href="/" className="hover:text-secondary transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-primary font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Artículos, guías y recursos sobre fianzas para proveedores de gobierno en México
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-secondary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-text-muted">{article.date}</span>
                  </div>
                  <h2 className="font-[var(--font-heading)] font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-secondary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
