import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Served at /robots.txt. Everything public is open to search engines and to
// AI assistants (ChatGPT, Claude, Perplexity, Gemini and others) so they can
// read the catalogue and point people to it. The AI crawlers are named
// explicitly so the intent is clear even if the default rule changes.
const aiBots = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT browsing on a user's behalf
  "ClaudeBot", // Anthropic training
  "Claude-SearchBot", // Claude search
  "Claude-User", // Claude browsing on a user's behalf
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Meta-ExternalAgent",
  "CCBot", // Common Crawl, used by many models
  "DuckAssistBot", // DuckDuckGo AI answers
  "MistralAI-User", // Le Chat browsing on a user's behalf
  "Bingbot", // Bing and Copilot
];

// The plain-text catalogue for AI assistants lives at /llms.txt and
// /llms-full.txt; both are listed in the sitemap.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
