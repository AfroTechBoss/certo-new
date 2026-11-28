"use client";

import { useState } from "react";
import Link from "next/link";
import { priceList } from "@/data/pricelist";
import { formatNaira, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export function PriceList() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const [pagesOnly, setPagesOnly] = useState(false);
  const q = query.trim().toLowerCase();

  const categories = priceList
    .filter((c) => active === "all" || c.id === active)
    .map((c) => ({
      ...c,
      groups: c.groups
        .map((g) => ({
          ...g,
          items: g.items.filter(([name, , slug]) => (!q || name.toLowerCase().includes(q)) && (!pagesOnly || slug)),
        }))
        .filter((g) => g.items.length > 0),
    }))
    .filter((c) => c.groups.length > 0);

  const chip = (id: string, label: string) => (
    <button
      key={id}
      type="button"
      onClick={() => setActive(id)}
      aria-pressed={active === id}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active === id ? "border-white bg-white text-black" : "border-line text-muted hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="mt-10">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search e.g. Sony A7, Rode, ATEM"
        aria-label="Search the price list"
        className="w-full rounded-full border border-line bg-surface px-5 py-3 outline-none focus:border-white"
      />
      <div className="mt-5 flex flex-wrap gap-2">
        {chip("all", "All")}
        {priceList.map((c) => chip(c.id, c.name))}
      </div>
      <label className="mt-5 inline-flex cursor-pointer items-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={pagesOnly}
          onChange={(e) => setPagesOnly(e.target.checked)}
          className="size-4 accent-white"
        />
        Only show items with a full product page
      </label>

      {categories.length === 0 && (
        <p className="mt-12 text-muted">
          Nothing matches{q ? ` “${query}”` : ""}{pagesOnly ? " with a product page" : ""}.{" "}
          <a className="underline" href={whatsappLink(q ? `Hi CERTO, do you have ${query}?` : "Hi CERTO, I have a question about your price list.")} target="_blank" rel="noopener">
            Ask us on WhatsApp
          </a>
          .
        </p>
      )}

      {categories.map((c) => (
        <section key={c.id} className="mt-14">
          <h2 className="text-2xl font-semibold">{c.name}</h2>
          {c.groups.map((g) => (
            <div key={g.name} className="mt-6 overflow-hidden rounded-3xl border border-line bg-surface">
              <h3 className="border-b border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {g.name}
              </h3>
              <ul>
                {g.items.map(([name, price, slug]) => (
                  <li key={name} className="flex items-center gap-2.5 border-b border-line px-4 py-3 last:border-b-0 sm:gap-4 sm:px-5">
                    <span className="flex-1">
                      {slug ? (
                        <Link href={`/products/${slug}`} className="underline decoration-line underline-offset-4 hover:decoration-white">
                          {name}
                        </Link>
                      ) : (
                        name
                      )}
                    </span>
                    <span className="shrink-0 font-mono text-sm tabular-nums">{formatNaira(price)}</span>
                    {slug && (
                      <Link
                        href={`/products/${slug}`}
                        aria-label={`View the ${name} product page`}
                        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line px-2.5 py-1.5 text-xs font-medium hover:border-white sm:px-3"
                      >
                        View<span className="hidden sm:inline"> product</span>
                        <span aria-hidden>→</span>
                      </Link>
                    )}
                    <a
                      href={whatsappLink(`Hi CERTO, is the ${name} (${formatNaira(price)}) in stock?`)}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Ask about ${name} on WhatsApp`}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-wa px-2.5 py-1.5 text-xs font-medium text-black sm:px-3"
                    >
                      <WhatsAppIcon className="size-4" />
                      <span className="hidden sm:inline">Ask</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
