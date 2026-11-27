import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { formatNaira, site } from "@/data/site";
import { jsonLdHtml, productJsonLd } from "@/data/structured-data";
import { Gallery } from "@/components/gallery";
import {
  InTheBox,
  OrderButton,
  SelectedPrice,
  StickyBar,
  VariantPicker,
  VariantProvider,
} from "@/components/order-panel";

// Only the slugs from generateStaticParams exist; anything else is a 404 without rendering.
export const dynamicParams = false;

const readyLabel: Record<string, string> = {
  Drones: "Ready to fly",
  Audio: "Ready to record",
  Camcorders: "Ready to shoot",
  Batteries: "Ready to power up",
  Gimbals: "Ready to roll",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  const from = Math.min(...product.variants.map((v) => v.price));
  return {
    title: `${product.name} — from ${formatNaira(from)}`,
    description: product.summary,
    alternates: { canonical: `/products/${slug}` },
    // The share image comes from ./opengraph-image.tsx (a product card per page).
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: product.headline,
      url: `/products/${slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();
  const specsNote =
    product.specsNote ??
    (product.category === "Drones"
      ? "*Max flight time measured by the manufacturer in ideal conditions."
      : undefined);

  return (
    <VariantProvider initial={product.variants[0].id}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(productJsonLd(product))} />
      {/* Hero + buy box */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 md:grid-cols-2 md:pt-12">
        <Gallery images={product.gallery} />

        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-sm text-muted">
            {product.brand} · {product.category}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-lg text-muted">{product.headline}</p>

          <p className="mt-6 text-3xl font-semibold">
            <SelectedPrice product={product} />
          </p>

          <div className="mt-6">
            <VariantPicker product={product} />
          </div>

          <OrderButton product={product} className="mt-6 w-full text-lg" />
          <p className="mt-3 text-center text-sm text-muted">
            Send us a DM on WhatsApp to secure your order. We reply fast.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {site.trust.map((t) => (
              <li key={t.title} className="rounded-2xl border border-line p-3">
                <p className="text-sm font-medium">{t.title}</p>
                <p className="mt-1 text-xs text-muted">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden">
        <Image
          src={product.hero}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-rec">{product.tagline}</p>
          <p className="mt-4 max-w-2xl text-2xl font-medium md:text-3xl">{product.summary}</p>
          <dl className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {product.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-semibold md:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl space-y-20 px-5 py-24">
        {product.highlights.map((h, i) => (
          <div key={h.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface ${
                i % 2 ? "md:order-2" : ""
              }`}
            >
              <Image src={h.image} alt={h.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="font-mono text-sm text-rec">0{i + 1}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">{h.title}</h2>
              <p className="mt-4 text-lg text-muted">{h.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Who it's for */}
      <section className="border-y border-line/60 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Is the {product.name} right for you?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.idealFor.map((x) => (
              <div key={x.title} className="rounded-2xl border border-line bg-background p-5">
                <p className="font-medium">{x.title}</p>
                <p className="mt-2 text-sm text-muted">{x.body}</p>
              </div>
            ))}
          </div>
          {product.notFor && <p className="mt-8 text-muted">{product.notFor}</p>}
        </div>
      </section>

      {/* In the box + specs */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">What&apos;s in the box</h2>
          <p className="mt-2 text-sm text-muted">Changes with the package you pick above.</p>
          <div className="mt-6 rounded-3xl border border-line p-6">
            <InTheBox product={product} />
          </div>
          <div className="relative mt-6 aspect-square overflow-hidden rounded-3xl bg-white">
            <Image src={product.image} alt={product.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-8" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Key specs</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {product.specs.map((s) => (
              <div key={s.label} className="grid grid-cols-5 gap-4 py-4 text-sm">
                <dt className="col-span-2 text-muted">{s.label}</dt>
                <dd className="col-span-3">{s.value}</dd>
              </div>
            ))}
          </dl>
          {specsNote && <p className="mt-3 text-xs text-muted">{specsNote}</p>}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <h2 className="text-3xl font-semibold tracking-tight">Questions buyers ask</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {product.faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="text-xl text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-surface-2 px-6 py-14 text-center md:px-16">
          <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] text-rec">
            <span className="rec-dot size-2 rounded-full bg-rec" /> {readyLabel[product.category] ?? "Ready when you are"}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Get your {product.name} today
          </h2>
          <p className="mt-3 text-muted">
            <SelectedPrice product={product} /> · Send a DM to secure your order.
          </p>
          <OrderButton product={product} className="mx-auto mt-8 w-full max-w-sm text-lg" />
        </div>
      </section>

      <StickyBar product={product} />
    </VariantProvider>
  );
}
