import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /gracias = noindex confirmation page; /api = internal endpoints
        disallow: ["/api/", "/gracias"],
      },
    ],
    sitemap: "https://fianzify.com/sitemap.xml",
    host: "https://fianzify.com",
  };
}
