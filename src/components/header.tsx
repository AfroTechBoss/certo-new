import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { finderLink, helpLinks, shopLinks } from "@/data/nav";
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

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-background/80 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-muted md:flex">
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
