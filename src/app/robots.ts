import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://agnigrow.in/sitemap.xml",
    host: "https://agnigrow.in",
  };
}
