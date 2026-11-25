import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";

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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          <Link href="/#drones" className="hover:text-foreground">Drones</Link>
          <Link href="/#finder" className="hover:text-foreground">Drone finder</Link>
          <Link href="/#audio" className="hover:text-foreground">Audio</Link>
          <Link href="/#camcorders" className="hover:text-foreground">Camcorders</Link>
          <Link href="/#categories" className="hover:text-foreground">More gear</Link>
          <Link href="/#how" className="hover:text-foreground">How to order</Link>
          <Link href="/#faq" className="hover:text-foreground">FAQ</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
        <a
          href={whatsappLink("Hi Certo, I'd like to make an enquiry.")}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-wa hover:text-wa"
        >
          <WhatsAppIcon className="size-4" />
          <span className="hidden sm:inline">Chat with us</span>
        </a>
      </div>
    </header>
  );
}
