import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { allProductsLink, finderLink, helpLinks, productCategories, shopLinks } from "@/data/nav";
import { products } from "@/data/products";
import { WhatsAppIcon } from "./icons";
import { MobileMenu } from "./mobile-menu";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className="font-display text-[1.65rem] font-bold leading-none tracking-[-0.04em] text-foreground"
    >
      {site.name}
    </Link>
  );
}

const countIn = (name: string) => products.filter((p) => p.category === name).length;

function ShopMenu() {
  return (
    <div className="group relative">
      <Link href={allProductsLink.href} className="flex items-center gap-1 hover:text-foreground" aria-haspopup="true">
        Shop <span aria-hidden className="text-[10px] transition group-hover:rotate-180">▾</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="w-72 rounded-2xl border border-line bg-surface p-2 shadow-xl">
          <ul>
            {productCategories.map((c) => {
              const n = countIn(c.name);
              if (n === 0) return null;
              return (
                <li key={c.id}>
                  <Link
                    href={`/products#${c.id}`}
                    className="flex items-baseline justify-between gap-3 rounded-lg px-3 py-2 hover:bg-background hover:text-foreground"
                  >
                    <span>
                      <span className="block text-foreground">{c.name}</span>
                      <span className="block text-xs">{c.blurb}</span>
                    </span>
                    <span className="font-mono text-xs">{n}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={allProductsLink.href}
            className="mt-1 flex items-center justify-between rounded-lg border-t border-line px-3 pb-2 pt-3 text-foreground hover:bg-background"
          >
            {allProductsLink.label} <span className="font-mono text-xs text-muted">{products.length} →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-background/80 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-muted md:flex">
          <ShopMenu />
          {shopLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <span aria-hidden className="h-4 w-px bg-line" />
          <Link href={finderLink.href} className="text-foreground hover:text-rec">
            {finderLink.label}
          </Link>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 hover:text-foreground">
              Help <span aria-hidden className="text-[10px] transition group-hover:rotate-180">▾</span>
            </button>
            <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="w-44 rounded-2xl border border-line bg-surface p-2 shadow-xl">
                {helpLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-lg px-3 py-2 hover:bg-background hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Hi Certo, I'd like to make an enquiry.")}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-wa hover:text-wa"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">Chat with us</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
