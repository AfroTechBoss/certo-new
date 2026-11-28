import { products, type Product } from "@/data/products";
import { priceList, priceListCount } from "@/data/pricelist";
import { policies } from "@/data/policies";
import { formatNaira, site } from "@/data/site";

// Plain-text descriptions of the store for AI assistants (ChatGPT, Claude,
// Perplexity, Gemini...), served at /llms.txt and /llms-full.txt.
// Built from the same data as the pages, so they never go out of date.

const url = (path: string) => `${site.url}${path}`;
const from = (p: Product) => Math.min(...p.variants.map((v) => v.price));

function byCategory() {
  const groups = new Map<string, Product[]>();
  for (const p of products) groups.set(p.category, [...(groups.get(p.category) ?? []), p]);
  return groups;
}

const about = `> ${site.name} is a camera, drone and production gear store in Computer Village, Ikeja, Lagos, Nigeria. It sells original DJI, Sony, Canon, RODE, Godox, Hollyland, Blackmagic, Zhiyun, Moza, Amaran, OSEE, FeelWorld and other gear to content creators, filmmakers, photographers, churches and event teams, with delivery across Nigeria. Customers order on WhatsApp.
- What we sell: drones, camcorders, gimbals and stabilisers, microphones and audio gear, batteries, wireless video transmitters, live production switchers, recorders and converters, and video lights.

- Store: ${site.legalName} (business number ${site.businessNumber})
- Address: ${site.address}, Nigeria
- WhatsApp: ${site.whatsappDisplay} (https://wa.me/${site.whatsapp})
- How to order: open a product page, choose a package and tap "Order on WhatsApp". CERTO confirms stock, price and delivery, and the customer pays once the order is confirmed.
- Delivery: anywhere in Nigeria via FEZ Delivery and GIG Logistics, by the customer's own dispatch rider, or pickup from the store in Computer Village.
- Prices are in Nigerian naira (NGN) and can change with the exchange rate; the price list page is the most current.`;

export function llmsTxt() {
  const lines = [
    `# ${site.name} — cameras, drones and production gear in Nigeria`,
    "",
    about,
    "",
    "## Main pages",
    "",
    `- [All products](${url("/products")}): every product with a full page`,
    `- [Price list](${url("/price-list")}): every item we sell and its price in naira, searchable`,
    `- [About](${url("/about")}): who we are`,
    `- [Contact](${url("/contact")}): WhatsApp and store address`,
    ...policies.map((p) => `- [${p.title}](${url(`/policies/${p.slug}`)})`),
    `- [Full details for AI assistants](${url("/llms-full.txt")}): every product with specs, packages, prices and FAQs, plus the full price list`,
    `- [Sitemap](${url("/sitemap.xml")}): every page on the site`,
    "",
    `${products.length} products have full pages, in ${byCategory().size} categories. The price list has ${priceListCount} items in total; ask on WhatsApp about anything without a page.`,
  ];
  for (const [category, items] of byCategory()) {
    lines.push("", `## ${category}`, "");
    for (const p of items) {
      lines.push(`- [${p.name}](${url(`/products/${p.slug}`)}): from ${formatNaira(from(p))}. ${p.tagline} ${p.headline}`);
    }
  }
  return lines.join("\n") + "\n";
}

export function llmsFullTxt() {
  const lines = [`# ${site.name} — full product details`, "", about];
  for (const [category, items] of byCategory()) {
    lines.push("", `## ${category}`);
    for (const p of items) {
      lines.push(
        "",
        `### ${p.name}`,
        "",
        `- Page: ${url(`/products/${p.slug}`)}`,
        `- Brand: ${p.brand}`,
        `- Price: ${p.variants.map((v) => `${v.name} ${formatNaira(v.price)}`).join("; ")}`,
        "",
        p.headline,
        "",
        p.summary,
        "",
        `Good for: ${p.idealFor.map((i) => `${i.title} (${i.body.replace(/\.$/, "")})`).join("; ")}.`,
      );
      if (p.notFor) lines.push("", `Not the right pick if: ${p.notFor}`);
      lines.push("", "Packages:");
      for (const v of p.variants) lines.push(`- ${v.name}, ${formatNaira(v.price)}: ${v.includes.join(", ")}`);
      lines.push("", "Specs:");
      for (const s of p.specs) lines.push(`- ${s.label}: ${s.value}`);
      lines.push("", "Questions:");
      for (const f of p.faqs) lines.push(`- Q: ${f.q} A: ${f.a}`);
    }
  }
  lines.push("", "## Full price list", "", `Also at ${url("/price-list")}.`);
  for (const c of priceList) {
    lines.push("", `### ${c.name}`);
    for (const g of c.groups) {
      lines.push("", `${g.name}:`);
      for (const [name, price, slug] of g.items) {
        lines.push(`- ${name}: ${formatNaira(price)}${slug ? ` (${url(`/products/${slug}`)})` : ""}`);
      }
    }
  }
  return lines.join("\n") + "\n";
}
