import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.legalName} is a Nigerian registered business (${site.businessNumber}) selling cameras, drones, audio and streaming gear from Computer Village, Ikeja.`,
};

const facts = [
  { label: "Registered name", value: site.legalName },
  { label: "Business number", value: site.businessNumber },
  { label: "Registered in", value: "Nigeria" },
  { label: "Store", value: site.address },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">About CERTO</p>
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">Gear for Nigerian creators, from people who use it.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        CERTO sells cameras, drones, audio, lighting and streaming gear from our store in Computer Village, Ikeja. We help
        you pick the right kit, confirm stock and price on WhatsApp, and deliver it anywhere in Nigeria.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <section>
          <h2 className="text-2xl font-semibold">How we work</h2>
          <ul className="mt-6 space-y-5">
            {site.trust.map((t) => (
              <li key={t.title} className="flex gap-4">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-rec" />
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="mt-1 text-muted">{t.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Registered business</h2>
          <p className="mt-2 text-sm text-muted">
            CERTO is the trading name of {site.legalName}, a business registered with the Corporate Affairs Commission
            in Nigeria.
          </p>
          <dl className="mt-6 divide-y divide-line">
            {facts.map((f) => (
              <div key={f.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">
            We only accept payment into accounts named {site.legalName}. See our{" "}
            <Link href="/policies/payment" className="underline hover:text-foreground">Payment Policy</Link>.
          </p>
        </section>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <a
          href={whatsappLink("Hi Certo, I'd like to make an enquiry.")}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          <WhatsAppIcon className="size-4" /> Chat with us
        </a>
        <Link href="/contact" className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm transition hover:border-muted">
          Visit the store →
        </Link>
      </div>
    </div>
  );
}
