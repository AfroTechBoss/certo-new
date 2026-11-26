import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getProduct, products } from "@/data/products";
import { site } from "@/data/site";

// One 1200×630 share card per product, generated at build time.
// No price on the card: WhatsApp and Facebook cache share images for weeks,
// and the bundled font has no ₦ sign. The price is in the page title instead.

export const alt = "Product photo and name, CERTO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function photoBase64(file: string) {
  return readFile(join(process.cwd(), "public", file), "base64");
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug)!;
  const photo = await photoBase64(product.image);
  const mime = product.image.endsWith(".png") ? "image/png" : "image/jpeg";
  const host = new URL(site.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0b0c",
          color: "#f4f4f5",
          padding: 56,
          gap: 48,
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.5 }}>{site.name}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: 4 }}>
              {`${product.brand} · ${product.category}`}
            </div>
            <div style={{ fontSize: product.name.length > 34 ? 48 : 60, lineHeight: 1.05, marginTop: 16, letterSpacing: -1.5 }}>
              {product.name}
            </div>
            <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 20 }}>{product.tagline}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24 }}>
            <div style={{ display: "flex", background: "#25d366", color: "#0b0b0c", borderRadius: 999, padding: "12px 26px" }}>
              Order on WhatsApp
            </div>
            <div style={{ color: "#a1a1aa" }}>{host}</div>
          </div>
        </div>
        <div
          style={{
            width: 560,
            height: 518,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            borderRadius: 32,
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={`data:${mime};base64,${photo}`} width={480} height={440} style={{ objectFit: "contain" }} />
        </div>
      </div>
    ),
    size,
  );
}
