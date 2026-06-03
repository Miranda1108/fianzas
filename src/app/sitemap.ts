import type { MetadataRoute } from "next";

const BASE = "https://fianzify.com";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicios", priority: 0.7, changeFrequency: "monthly" },
  { path: "/costos-fianzas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.5, changeFrequency: "monthly" },
  // Fianza pages — high value for SEO
  { path: "/fianza-de-cumplimiento", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-de-anticipo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-de-arrendamiento", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-judicial", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-administrativa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-de-licitacion", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-vicios-ocultos", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fianza-de-fidelidad", priority: 0.9, changeFrequency: "monthly" },
  // Legal — low priority, rarely change
  { path: "/aviso-privacidad", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terminos-y-condiciones", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
