import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatNaira } from "@/data/site";

export const fromPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{children}</p>;
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group flex flex-col rounded-3xl border border-line bg-surface p-3 transition hover:-translate-y-1 hover:border-muted"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-6 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1">
        <p className="mt-4 font-display text-lg font-medium leading-tight">{p.name}</p>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{p.tagline}</p>
        <p className="mt-auto flex items-center justify-between pt-4 text-sm">
          <span>
            <span className="text-muted">from </span>
            <span className="font-semibold">{formatNaira(fromPrice(p))}</span>
          </span>
          <span className="text-muted transition group-hover:translate-x-0.5 group-hover:text-foreground">→</span>
        </p>
      </div>
    </Link>
  );
}

export function ProductSection({ id, label, title, items }: { id: string; label: string; title: string; items: Product[] }) {
  if (items.length === 0) return null;
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>{label}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">{title}</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {items.length} {items.length === 1 ? "model" : "models"} · low to high
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
