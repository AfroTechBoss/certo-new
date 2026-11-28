import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { policies } from "@/data/policies";
import { site } from "@/data/site";

// Served at /sitemap.xml. Every product page is listed with its photos so
// search engines (and AI search) can find the whole catalogue.

const pages: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/price-list", priority: 0.9, changeFrequency: "daily" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/policies", priority: 0.3, changeFrequency: "monthly" },
  { path: "/llms.txt", priority: 0.3, changeFrequency: "weekly" },
  { path: "/llms-full.txt", priority: 0.3, changeFrequency: "weekly" },
  ...policies.map((p) => ({ path: `/policies/${p.slug}`, priority: 0.3, changeFrequency: "monthly" as const })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map(({ path, ...rest }) => ({ url: `${site.url}${path === "/" ? "" : path}`, lastModified, ...rest })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [...new Set([p.image, ...p.gallery.map((g) => g.src)])].map((src) => site.url + src),
    })),
  ];
}
