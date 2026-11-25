"use client";

import { createContext, useContext, useState } from "react";
import type { Product } from "@/data/products";
import { formatNaira, site, whatsappLink } from "@/data/site";
import { CheckIcon, WhatsAppIcon } from "./icons";

type Ctx = { selected: string; setSelected: (id: string) => void };
const VariantContext = createContext<Ctx | null>(null);

export function VariantProvider({
  initial,
  children,
}: {
  initial: string;
  children: React.ReactNode;
}) {
  const [selected, setSelected] = useState(initial);
  return (
    <VariantContext.Provider value={{ selected, setSelected }}>
      {children}
    </VariantContext.Provider>
  );
}

function useVariant(product: Product) {
  const ctx = useContext(VariantContext);
  const variant =
    product.variants.find((v) => v.id === ctx?.selected) ?? product.variants[0];
  return { variant, select: ctx?.setSelected ?? (() => {}) };
}

function orderHref(product: Product, variantName: string, price: number) {
  const url = `${site.url}/products/${product.slug}`;
  return whatsappLink(
    `Hi Certo, I'd like to order the ${product.name} – ${variantName} – ${formatNaira(price)}. Is it available?\n\n${url}`,
  );
}

export function OrderButton({
  product,
  className = "",
  label = "Order on WhatsApp",
}: {
  product: Product;
  className?: string;
  label?: string;
}) {
  const { variant } = useVariant(product);
  return (
    <a
      href={orderHref(product, variant.name, variant.price)}
      target="_blank"
      rel="noopener"
      className={`flex items-center justify-center gap-2 rounded-full bg-wa px-6 py-4 font-semibold text-black transition hover:brightness-110 ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function VariantPicker({ product }: { product: Product }) {
  const { variant, select } = useVariant(product);
  return (
    <fieldset className="space-y-3">
      <legend className="mb-3 text-sm text-muted">Choose your package</legend>
      {product.variants.map((v) => {
        const active = v.id === variant.id;
        return (
          <label
            key={v.id}
            className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border p-4 transition ${
              active ? "border-foreground bg-surface-2" : "border-line hover:border-muted"
            }`}
          >
            <input
              type="radio"
              name="variant"
              value={v.id}
              checked={active}
              onChange={() => select(v.id)}
              className="sr-only"
            />
            <span className="flex items-center gap-3">
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full border ${
                  active ? "border-foreground bg-foreground" : "border-muted"
                }`}
              >
                {active && <span className="size-2 rounded-full bg-background" />}
              </span>
              <span>
                <span className="block font-medium">{v.name}</span>
                {v.badge && (
                  <span className="mt-1 inline-block rounded-full bg-rec/15 px-2 py-0.5 text-xs text-rec">
                    {v.badge}
                  </span>
                )}
              </span>
            </span>
            <span className="font-semibold whitespace-nowrap">{formatNaira(v.price)}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

export function SelectedPrice({ product }: { product: Product }) {
  const { variant } = useVariant(product);
  return <>{formatNaira(variant.price)}</>;
}

export function InTheBox({ product }: { product: Product }) {
  const { variant } = useVariant(product);
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {variant.includes.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-wa" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StickyBar({ product }: { product: Product }) {
  const { variant } = useVariant(product);
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-muted">{variant.name}</p>
          <p className="font-semibold">{formatNaira(variant.price)}</p>
        </div>
        <OrderButton product={product} label="Order now" className="px-5 py-3 text-sm" />
      </div>
    </div>
  );
}
