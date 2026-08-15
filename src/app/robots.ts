import type { MetadataRoute } from "next";

export const dynamic = 'force-static';
import { site_url }from "@/config/siteConfig";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/admin/*",
          "/_next/*",
          "/*.json$",
          "/cdn-cgi/*",
        ]
      },
    ],
    sitemap: `${site_url}/sitemap.xml`,
  };
}
