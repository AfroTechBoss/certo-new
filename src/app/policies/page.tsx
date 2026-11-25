import type { Metadata } from "next";
import Link from "next/link";
import { policies } from "@/data/policies";

export const metadata: Metadata = {
  title: "Store policies",
  description: "Shipping, refunds and returns, payment, and terms for shopping with CERTO.",
};

export default function PoliciesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Store policies</p>
      <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">The fine print, made simple.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">Everything you need to know about delivery, returns, payment and our terms.</p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {policies.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/policies/${p.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-muted"
            >
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-6 font-display text-2xl font-semibold">{p.title}</span>
              <span className="mt-2 text-muted">{p.summary}</span>
              <span className="mt-6 text-sm text-muted transition group-hover:text-foreground">Read →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
