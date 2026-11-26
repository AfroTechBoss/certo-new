"use client";

import Link from "next/link";
import { useState } from "react";
import { allProductsLink, categoryLinks, finderLink, helpLinks, shopLinks } from "@/data/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex size-10 items-center justify-center rounded-full border border-line"
      >
        <span className="relative block h-3 w-4">
          <span className={`absolute left-0 h-px w-4 bg-foreground transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-1.5 h-px w-4 bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 h-px w-4 bg-foreground transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-line/60 bg-background px-5 pb-8 pt-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Shop</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {[...categoryLinks, allProductsLink, ...shopLinks].map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close} className="block rounded-xl border border-line px-4 py-3 text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={finderLink.href}
            onClick={close}
            className="mt-2 block rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background"
          >
            {finderLink.label} →
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted">Help</p>
          <ul className="mt-3 space-y-3 text-sm">
            {helpLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close} className="text-muted hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
