import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle, type Block } from "../articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artículo no encontrado | Fianzify" };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/blog/${article.slug}`,
      type: "article",
      publishedTime: article.dateISO,
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="text-gray-text leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          className="font-[var(--font-heading)] text-2xl font-bold text-navy mt-10 mb-4"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="font-[var(--font-heading)] text-xl font-semibold text-navy mt-6 mb-3"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2 mb-5 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-text">
              <span className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-2 mb-5 list-decimal pl-6 marker:text-brand marker:font-bold">
          {block.items.map((item, j) => (
            <li key={j} className="text-gray-text pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="border-l-4 border-brand bg-brand/5 rounded-r-xl px-5 py-4 my-6 text-navy italic"
        >
          {block.text}
        </blockquote>
      );
    case "cta":
      return (
        <div
          key={i}
          className="bg-gradient-to-br from-navy to-navy-mid rounded-2xl p-6 md:p-8 my-8 text-center"
        >
          <p className="text-white/90 mb-5">{block.text}</p>
          <Link
            href="/#formulario"
            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-[var(--font-heading)] font-semibold rounded-xl px-7 py-3.5 text-sm transition-all"
          >
            Cotizar ahora
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: { "@type": "Organization", name: "Fianzify" },
    publisher: {
      "@type": "Organization",
      name: "Fianzify",
      url: "https://fianzify.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fianzify.com/blog/${article.slug}`,
    },
  };

  return (
    <>
      {/* Safe: jsonLd is built from static, controlled article data (no user input). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-bg border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-muted flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-navy font-medium line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy/90 py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold text-white bg-white/15 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-white/60">{article.date}</span>
            <span className="text-xs text-white/60">· {article.readingTime}</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.content.map(renderBlock)}

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-gray-border">
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-navy mb-4">
              Páginas relacionadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {article.related.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="inline-flex items-center gap-2 bg-gray-bg hover:bg-brand/10 border border-gray-border hover:border-brand text-navy text-sm font-medium rounded-xl px-4 py-2.5 transition-all"
                >
                  {rel.label}
                  <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
