import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Visit CERTO at ${site.address}, or chat with us on WhatsApp.`,
};

const mapEmbed =
  "https://www.google.com/maps?output=embed&q=" +
  encodeURIComponent("Chekwas Plaza, 29 Otigba St, Computer Village, Ikeja, Lagos");

// TODO(owner): add opening hours once confirmed.
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Contact</p>
      <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">Talk to a real person.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The fastest way to reach us is WhatsApp. You can also visit the store in Computer Village.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">WhatsApp</p>
            <p className="mt-3 font-display text-2xl font-semibold">{site.whatsappDisplay}</p>
            <p className="mt-1 text-sm text-muted">Stock, prices, orders and after-sales help.</p>
            <a
              href={whatsappLink("Hi Certo, I'd like to make an enquiry.")}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              <WhatsAppIcon className="size-4" /> Chat with us
            </a>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Store</p>
            <p className="mt-3 text-lg">{site.address}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm transition hover:border-muted"
            >
              Get directions →
            </a>
          </div>
          <p className="px-2 text-xs text-muted">
            {site.legalName} · Registered in Nigeria, {site.businessNumber}
          </p>
        </div>

        <iframe
          title="Map to CERTO in Computer Village, Ikeja"
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-80 w-full rounded-3xl border border-line grayscale invert-[.9] hue-rotate-180"
        />
      </div>
    </div>
  );
}
