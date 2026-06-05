import { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "./articles";

export const metadata: Metadata = {
  title: "Blog | Guías sobre fianzas en México | Fianzify",
  description:
    "Artículos y guías prácticas sobre fianzas en México: requisitos, costos, documentos y diferencias clave. Información clara para empresas y proveedores.",
  openGraph: {
    title: "Blog | Guías sobre fianzas en México | Fianzify",
    description: "Artículos y guías prácticas sobre fianzas en México: requisitos, costos, documentos y diferencias clave. Información clara para empresas y proveedores.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-bg border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-muted flex items-center gap-2">
            <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-navy font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy/90 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Guías prácticas sobre fianzas en México: requisitos, costos y todo lo que necesitas saber antes de cotizar.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-2xl border border-gray-border overflow-hidden hover:shadow-xl hover:border-brand-light transition-all group flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-navy/30 to-brand/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-muted">{article.readingTime}</span>
                  </div>
                  <h2 className="font-[var(--font-heading)] font-bold text-lg text-navy mb-2 group-hover:text-brand transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-muted text-sm leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <span className="text-brand font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
