import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { formatNaira, site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";
import { DroneFinder } from "@/components/drone-finder";

const fromPrice = (p: Product) => Math.min(...p.variants.map((v) => v.price));
const bySlug = (slug: string) => products.find((p) => p.slug === slug)!;
const inCategory = (c: string) => products.filter((p) => p.category === c).sort((a, b) => fromPrice(a) - fromPrice(b));
const drones = inCategory("Drones");
const audio = inCategory("Audio");
const batteries = inCategory("Batteries");
const camcorders = inCategory("Camcorders");

const categories = [
  { name: "Cameras", body: "Mirrorless, cinema and action cameras." },
  { name: "Audio", body: "Wireless mics, recorders and podcast kits." },
  { name: "Lighting", body: "LED panels, COB lights and softboxes." },
  { name: "Gimbals", body: "Phone and camera stabilisers." },
  { name: "Streaming", body: "Capture cards, switchers and webcams." },
  { name: "Accessories", body: "Memory cards, batteries, bags and more." },
];

const brands = ["DJI", "Sony", "Canon", "RØDE", "Godox", "Blackmagic", "Hollyland", "Zoom", "Panasonic", "Insta360"];

const steps = [
  { title: "Pick your gear", body: "Browse the drones below and choose the package that fits you." },
  { title: "Tap the WhatsApp button", body: "Your order details go straight to us. We confirm stock, price and delivery." },
  { title: "Pay and receive", body: "Pay once your order is confirmed, and we'll get it to you." },
];

const faqs = [
  {
    q: "How do I place an order?",
    a: "Open any product, pick a package and tap the WhatsApp button. Your order message is filled in for you. Send it and we'll reply to confirm availability, price and delivery.",
  },
  {
    q: "Are your products original?",
    a: "Yes. We sell authentic gear from the brands listed on this site.",
  },
  {
    q: "Do you deliver to my city?",
    a: "Yes, we deliver across Nigeria with FEZ Delivery and GIG Logistics. You can also send your own dispatch rider or pick up from our store in Computer Village, Ikeja.",
  },
  {
    q: "Which drone should I buy?",
    a: "If it's your first drone, start with the Neo, Mini 4K or Mini 3. For content creation, look at the Flip or Mini 4 Pro. For professional work, the Air 3S or Mavic 3 Pro. Not sure? Send us a message and tell us what you want to shoot.",
  },
  {
    q: "I don't see what I need. Can you get it?",
    a: "Probably. We stock cameras, audio, lighting and more. Message us on WhatsApp with the item you want and we'll check for you.",
  },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      className="group flex flex-col rounded-3xl border border-line bg-surface p-3 transition hover:-translate-y-1 hover:border-muted"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-6 transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1">
        <p className="mt-4 font-display text-lg font-medium leading-tight">{p.name}</p>
        <p className="mt-1 line-clamp-2 text-sm text-muted">{p.tagline}</p>
        <p className="mt-auto flex items-center justify-between pt-4 text-sm">
          <span>
            <span className="text-muted">from </span>
            <span className="font-semibold">{formatNaira(fromPrice(p))}</span>
          </span>
          <span className="text-muted transition group-hover:translate-x-0.5 group-hover:text-foreground">→</span>
        </p>
      </div>
    </Link>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{children}</p>;
}

function ProductSection({ id, label, title, items }: { id: string; label: string; title: string; items: Product[] }) {
  if (items.length === 0) return null;
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>{label}</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">{title}</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {items.length} {items.length === 1 ? "model" : "models"} · low to high
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const hero = bySlug("dji-mavic-3-pro");
  const featured = ["dji-mini-5-pro", "dji-air-3s", "dji-flip"].map(bySlug);
  const shelves = [
    { href: "#drones", name: "Drones", n: drones.length },
    { href: "#camcorders", name: "Camcorders", n: camcorders.length },
    { href: "#audio", name: "Audio", n: audio.length },
    { href: "#batteries", name: "Batteries", n: batteries.length },
  ].filter((s) => s.n > 0);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <Image src={hero.hero} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:pb-24 md:pt-32">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="rec-dot size-2 rounded-full bg-rec" /> Rec · Computer Village, Lagos
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
            Gear for people who <span className="text-rec">shoot.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Drones, camcorders, audio and lighting for creators, filmmakers and studios across Nigeria. Pick what you
            need and order in one message on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#drones"
              className="rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:opacity-90"
            >
              Shop the gear
            </a>
            <a
              href={whatsappLink("Hi Certo, I need help choosing gear.")}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full bg-wa px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {site.trust.map((t) => (
              <div key={t.title} className="bg-background/85 p-4 backdrop-blur">
                <dt className="font-display text-sm font-medium">{t.title}</dt>
                <dd className="mt-1 text-xs text-muted">{t.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Brand marquee */}
      <section aria-label="Brands we work with" className="overflow-hidden border-b border-line py-6">
        <div className="marquee flex w-max gap-14 pr-14">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              aria-hidden={i >= brands.length}
              className="font-display text-2xl font-semibold uppercase tracking-wide text-muted/60"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <nav aria-label="Shop by category" className="mx-auto max-w-6xl px-5 pt-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {shelves.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="group flex items-end justify-between rounded-2xl border border-line bg-surface px-5 py-4 transition hover:border-muted"
            >
              <span className="font-display text-lg font-medium">{s.name}</span>
              <span className="font-mono text-xs text-muted group-hover:text-foreground">
                {String(s.n).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Eyebrow>Popular right now</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Creator favourites</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-line ${
                i === 0
                  ? "aspect-[4/5] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[34rem]"
                  : "aspect-[16/10] md:aspect-auto"
              }`}
            >
              <Image
                src={p.hero}
                alt={p.name}
                fill
                sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative p-6">
                <p className="text-sm text-white/70">{p.tagline}</p>
                <p
                  className={`mt-1 font-display font-semibold text-white ${i === 0 ? "text-3xl sm:text-5xl" : "text-2xl"}`}
                >
                  {p.name}
                </p>
                <p className="mt-3 text-sm text-white/80">
                  from <span className="font-semibold text-white">{formatNaira(fromPrice(p))}</span>
                  <span className="ml-3 underline-offset-4 group-hover:underline">View →</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Drone finder */}
      <section id="finder" className="scroll-mt-16 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>Drone finder</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Find your drone in two taps.</h2>
          <p className="mt-3 max-w-xl text-muted">Tell us what you shoot and what you want to spend. Prices are the starting package.</p>
          <DroneFinder
            drones={drones.map((p) => ({
              slug: p.slug,
              name: p.name,
              tagline: p.tagline,
              price: fromPrice(p),
              image: p.image,
              hero: p.hero,
            }))}
          />
        </div>
      </section>

      <ProductSection id="drones" label="Drones" title="Every drone we stock" items={drones} />
      <ProductSection id="camcorders" label="Camcorders" title="Cinema cameras and camcorders" items={camcorders} />
      <ProductSection id="audio" label="Audio" title="Audio and intercoms" items={audio} />
      <ProductSection id="batteries" label="Batteries" title="Camera batteries" items={batteries} />

      {/* Other categories */}
      <section id="categories" className="scroll-mt-16 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">More gear</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Not just drones</h2>
          <p className="mt-3 max-w-xl text-muted">
            We also supply cameras, audio, lighting and more. Tell us what you need and we&apos;ll check stock and price for
            you.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <a
                key={c.name}
                href={whatsappLink(`Hi Certo, I'm looking for ${c.name.toLowerCase()}. What do you have available?`)}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-4 rounded-3xl border border-line bg-surface p-6 transition hover:border-wa"
              >
                <span>
                  <span className="block text-lg font-semibold">{c.name}</span>
                  <span className="mt-1 block text-sm text-muted">{c.body}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted transition group-hover:text-wa">
                  <WhatsAppIcon className="size-4" /> Ask
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How ordering works */}
      <section id="how" className="scroll-mt-16 border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">How to order</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Three steps. One chat.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-line bg-background p-6">
                <p className="font-mono text-3xl text-muted">0{i + 1}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Questions, answered</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="text-xl text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Visit us */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:p-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <Eyebrow>Visit the store</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Come see it before you buy.</h2>
            <p className="mt-3 max-w-md text-muted">
              Test the gear in person at our shop in Computer Village. Message us first and we&apos;ll have it ready.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-background p-5">
            <p className="font-display text-lg font-medium">{site.legalName}</p>
            <p className="mt-2 text-muted">{site.address}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-3xl bg-surface-2 px-6 py-14 text-center sm:px-12">
          <p className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="rec-dot size-2 rounded-full bg-rec" /> Ready when you are
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
            Not sure what to get? Ask us.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Tell us what you shoot and your budget. We&apos;ll recommend the right gear, no pressure.
          </p>
          <a
            href={whatsappLink("Hi Certo, I'd like a recommendation. I want to shoot ... and my budget is ...")}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-wa px-7 py-3.5 font-medium text-black transition hover:opacity-90"
          >
            <WhatsAppIcon className="size-5" /> Chat on WhatsApp
          </a>
          <p className="mt-4 text-sm text-muted">{site.whatsappDisplay}</p>
        </div>
      </section>
    </>
  );
}
