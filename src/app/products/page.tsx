import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { productCategories } from "@/data/nav";
import { formatNaira, site, whatsappLink } from "@/data/site";
import { Eyebrow, ProductSection, fromPrice } from "@/components/product-card";

export const metadata: Metadata = {
  title: "All products",
  description: `Shop drones, camcorders, gimbals, microphones, wireless video, live production switchers and video lights at ${site.name}. Original gear, prices in naira, order on WhatsApp with delivery across Nigeria.`,
  alternates: { canonical: "/products" },
  openGraph: {
    title: `All products | ${site.name}`,
    description: "Drones, camcorders, gimbals, microphones, wireless video, switchers and lights. Order on WhatsApp.",
    url: "/products",
  },
};

const shelves = productCategories
  .map((c) => {
    const items = products.filter((p) => p.category === c.name).sort((a, b) => fromPrice(a) - fromPrice(b));
    return { ...c, items, from: items.length ? fromPrice(items[0]) : 0 };
  })
  .filter((s) => s.items.length > 0);

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:pt-20">
          <Eyebrow>Shop</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold sm:text-6xl">All products</h1>
          <p className="mt-4 max-w-xl text-muted">
            {products.length} products across {shelves.length} categories. Pick one, choose a package and order on
            WhatsApp. Prices are in naira.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {shelves.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-4 transition hover:border-muted"
                >
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-lg font-medium">{s.name}</span>
                    <span className="font-mono text-xs text-muted">{s.items.length}</span>
                  </span>
                  <span className="mt-1 text-xs text-muted">{s.blurb}</span>
                  <span className="mt-auto pt-3 text-xs">
                    <span className="text-muted">from </span>
                    <span className="font-semibold">{formatNaira(s.from)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav
        aria-label="Categories"
        className="sticky top-16 z-30 border-b border-line/60 bg-background/80 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 text-sm">
          {shelves.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-full border border-line px-4 py-1.5 text-muted hover:border-muted hover:text-foreground">
                {s.name} <span className="font-mono text-xs">{s.items.length}</span>
              </a>
            </li>
          ))}
          <li className="ml-auto shrink-0">
            <Link href="/price-list" className="block rounded-full px-4 py-1.5 text-muted hover:text-foreground">
              Price list →
            </Link>
          </li>
        </ul>
      </nav>

      {shelves.map((s) => (
        <ProductSection key={s.id} id={s.id} label={s.name} title={s.title} items={s.items} />
      ))}

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-16">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Looking for something else?</h2>
            <p className="mt-2 text-muted">We stock more than what&apos;s listed here. Ask us on WhatsApp.</p>
          </div>
          <a
            href={whatsappLink("Hi Certo, I'm looking for something I didn't see on your site.")}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-wa px-6 py-3 text-sm font-medium text-black"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
