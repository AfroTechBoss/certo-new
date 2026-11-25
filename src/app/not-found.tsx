import Link from "next/link";
import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-5 py-24 md:py-36">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
        <span aria-hidden className="size-2 animate-pulse rounded-full bg-rec" /> Error 404 · No signal
      </p>
      <h1 className="mt-6 max-w-3xl text-5xl font-semibold sm:text-7xl">This shot didn&apos;t make the final cut.</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        The page you&apos;re looking for has moved or doesn&apos;t exist. Try the shop, or tell us what you need and
        we&apos;ll find it.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
        >
          Back to the shop
        </Link>
        <a
          href={whatsappLink("Hi Certo, I couldn't find what I was looking for on your website.")}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition hover:border-muted"
        >
          <WhatsAppIcon className="size-4" /> Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}
