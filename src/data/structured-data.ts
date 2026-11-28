import type { Product } from "@/data/products";
import { site } from "@/data/site";

// schema.org JSON-LD. Search engines use it for rich results (price, FAQs,
// breadcrumbs), and AI assistants use it to understand what the store sells.

const storeId = `${site.url}/#store`;

export function storeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ElectronicsStore",
        "@id": storeId,
        name: site.name,
        legalName: site.legalName,
        description:
          "Camera, drone and production gear store in Computer Village, Ikeja, Lagos. Original DJI, Sony, Canon, RODE, Godox, Hollyland, Blackmagic, Zhiyun and Amaran gear, delivered across Nigeria. Orders on WhatsApp.",
        url: site.url,
        logo: `${site.url}/apple-icon.png`,
        image: `${site.url}/apple-icon.png`,
        telephone: `+${site.whatsapp}`,
        currenciesAccepted: "NGN",
        areaServed: { "@type": "Country", name: "Nigeria" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Chekwas Plaza, 29 Otigba St, Computer Village",
          addressLocality: "Ikeja",
          addressRegion: "Lagos",
          postalCode: "101233",
          addressCountry: "NG",
        },
        hasMap: site.mapsUrl,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${site.whatsapp}`,
          url: `https://wa.me/${site.whatsapp}`,
          areaServed: "NG",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        publisher: { "@id": storeId },
        inLanguage: "en-NG",
      },
    ],
  };
}

export function productJsonLd(p: Product) {
  const url = `${site.url}/products/${p.slug}`;
  const prices = p.variants.map((v) => v.price);
  const offer = {
    priceCurrency: "NGN",
    url,
    seller: { "@id": storeId },
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: p.name,
        description: p.summary,
        url,
        sku: p.slug,
        category: p.category,
        brand: { "@type": "Brand", name: p.brand },
        image: [p.image, ...p.gallery.map((g) => g.src)]
          .filter((src, i, all) => all.indexOf(src) === i)
          .map((src) => site.url + src),
        additionalProperty: p.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
        offers:
          p.variants.length === 1
            ? { "@type": "Offer", price: prices[0], ...offer }
            : {
                "@type": "AggregateOffer",
                lowPrice: Math.min(...prices),
                highPrice: Math.max(...prices),
                offerCount: p.variants.length,
                ...offer,
                offers: p.variants.map((v) => ({ "@type": "Offer", name: v.name, price: v.price, ...offer })),
              },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/** Serialised for a <script type="application/ld+json">, with "<" escaped so text can't close the tag. */
export function jsonLdHtml(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
