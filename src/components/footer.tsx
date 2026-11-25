import Link from "next/link";
import { policies } from "@/data/policies";
import { site, whatsappLink } from "@/data/site";
import { Logo } from "./header";

export function Footer() {
  return (
    <footer className="border-t border-line/60 pb-28 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-2 max-w-xs text-sm text-muted">
            Cameras, drones, audio, lighting & streaming gear for creators.
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <Link href="/about" className="text-muted hover:text-foreground">About us</Link>
            <Link href="/contact" className="text-muted hover:text-foreground">Contact</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Visit or message</p>
          <a href={site.mapsUrl} target="_blank" rel="noopener" className="mt-3 block text-muted hover:text-foreground">
            {site.address}
          </a>
          <a
            href={whatsappLink("Hi Certo!")}
            target="_blank"
            rel="noopener"
            className="mt-2 block text-muted hover:text-wa"
          >
            WhatsApp {site.whatsappDisplay}
          </a>
        </div>
        <div className="text-sm">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Policies</p>
          <ul className="mt-3 space-y-2">
            {policies.map((p) => (
              <li key={p.slug}>
                <Link href={`/policies/${p.slug}`} className="text-muted hover:text-foreground">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-line/60 px-5 pt-6 text-xs text-muted">
        © 2026 {site.legalName} · Registered in Nigeria, {site.businessNumber}
      </div>
    </footer>
  );
}
