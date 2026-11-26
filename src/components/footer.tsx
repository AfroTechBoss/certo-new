import Link from "next/link";
import { policies } from "@/data/policies";
import { site, whatsappLink } from "@/data/site";
import { allProductsLink, categoryLinks, finderLink, helpLinks, shopLinks } from "@/data/nav";
import { Logo } from "./header";

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="text-sm">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-muted hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line/60 pb-28 pt-14 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div className="text-sm">
          <Logo />
          <p className="mt-3 max-w-xs text-muted">Cameras, drones, audio, lighting & streaming gear for creators.</p>
          <a href={site.mapsUrl} target="_blank" rel="noopener" className="mt-5 block max-w-xs text-muted hover:text-foreground">
            {site.address}
          </a>
          <a
            href={whatsappLink("Hi Certo!")}
            target="_blank"
            rel="noopener"
            className="mt-2 inline-block text-muted hover:text-wa"
          >
            WhatsApp {site.whatsappDisplay}
          </a>
        </div>
        <Column title="Shop" links={[allProductsLink, ...categoryLinks, ...shopLinks, finderLink]} />
        <Column title="Help" links={helpLinks} />
        <Column title="Policies" links={policies.map((p) => ({ href: `/policies/${p.slug}`, label: p.title }))} />
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-line/60 px-5 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
        <span>© 2026 {site.legalName}</span>
        <span>Registered in Nigeria · {site.businessNumber}</span>
      </div>
    </footer>
  );
}
