"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatNaira, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export type FinderDrone = { slug: string; name: string; tagline: string; price: number; image: string; hero: string };

const uses = [
  {
    id: "first",
    label: "My first drone",
    hint: "Easy, light, forgiving",
    slugs: ["dji-neo", "dji-mini-4k", "dji-neo-2", "dji-lito-1", "dji-mini-3"],
  },
  {
    id: "creator",
    label: "Content for social",
    hint: "Tracking, vertical video",
    slugs: ["dji-flip", "dji-lito-x1", "dji-mini-3-pro", "dji-mini-4-pro", "dji-mini-5-pro"],
  },
  {
    id: "pro",
    label: "Paid client work",
    hint: "Big sensors, more cameras",
    slugs: ["dji-mini-5-pro", "dji-air-3s", "dji-mavic-3-pro"],
  },
  {
    id: "fpv",
    label: "FPV and 360°",
    hint: "Goggles, immersive shots",
    slugs: ["dji-avata-2", "dji-avata-360"],
  },
];

const budgets = [
  { id: "700", label: "Under ₦700k", max: 700_000 },
  { id: "1200", label: "Up to ₦1.2M", max: 1_200_000 },
  { id: "2000", label: "Up to ₦2M", max: 2_000_000 },
  { id: "any", label: "No limit", max: Infinity },
];

const why: Record<string, string> = {
  "dji-neo": "The simplest way to start. Launches from your palm and follows you with no controller needed.",
  "dji-mini-4k": "Proper 4K and a real controller at an entry price. A great drone to learn on.",
  "dji-neo-2": "Palm launch with better tracking and obstacle sensing than the original Neo.",
  "dji-lito-1": "Built to be easy. Stable, simple to fly, and hard to get wrong.",
  "dji-mini-3": "Longer flights and a better camera when you want room to grow.",
  "dji-flip": "Folds flat, launches from your hand and shoots vertical video for Reels and TikTok.",
  "dji-lito-x1": "Quick, eye-catching shots with very little setup.",
  "dji-mini-3-pro": "True vertical shooting and obstacle sensing in a light body.",
  "dji-mini-4-pro": "All-round obstacle sensing and smart tracking. The safe pick for solo creators.",
  "dji-mini-5-pro": "A 1-inch camera in a drone under 250 g. Light enough for travel, sharp enough for clients.",
  "dji-air-3s": "Two cameras for wide and zoomed shots in one flight. Strong in low light.",
  "dji-mavic-3-pro": "Three cameras with a Hasselblad main camera. The flagship for serious productions.",
  "dji-avata-2": "Fly with goggles for fast, cinematic FPV shots, with easy controls for beginners.",
  "dji-avata-360": "Record everything around you in 360° and pick your angle later.",
};

export function DroneFinder({ drones }: { drones: FinderDrone[] }) {
  const [useId, setUseId] = useState("creator");
  const [budgetId, setBudgetId] = useState("any");

  const use = uses.find((u) => u.id === useId)!;
  const budget = budgets.find((b) => b.id === budgetId)!;
  const group = use.slugs
    .map((s) => drones.find((d) => d.slug === s))
    .filter((d): d is FinderDrone => !!d)
    .sort((a, b) => a.price - b.price);
  const fits = group.filter((d) => d.price <= budget.max);
  const overBudget = fits.length === 0;
  const best = overBudget ? group[0] : fits[fits.length - 1];
  const others = (overBudget ? group : fits).filter((d) => d.slug !== best.slug).reverse().slice(0, 3);

  const pill = (on: boolean) =>
    `rounded-2xl border px-4 py-3 text-left transition ${
      on ? "border-foreground bg-foreground text-background" : "border-line bg-background hover:border-muted"
    }`;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
      {/* Controls */}
      <div className="flex flex-col gap-8">
        <fieldset>
          <legend className="font-mono text-xs uppercase tracking-[0.25em] text-muted">01 · What will you shoot?</legend>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {uses.map((u) => (
              <button key={u.id} type="button" aria-pressed={u.id === useId} onClick={() => setUseId(u.id)} className={pill(u.id === useId)}>
                <span className="block font-display font-medium">{u.label}</span>
                <span className={`mt-0.5 block text-xs ${u.id === useId ? "text-background/70" : "text-muted"}`}>{u.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-mono text-xs uppercase tracking-[0.25em] text-muted">02 · Your budget</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {budgets.map((b) => (
              <button
                key={b.id}
                type="button"
                aria-pressed={b.id === budgetId}
                onClick={() => setBudgetId(b.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  b.id === budgetId ? "border-rec bg-rec text-white" : "border-line hover:border-muted"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </fieldset>
        <p className="text-sm text-muted">
          Still torn?{" "}
          <a
            href={whatsappLink(`Hi Certo, I want a drone for ${use.label.toLowerCase()}. My budget is ${budget.label.toLowerCase()}. What do you recommend?`)}
            target="_blank"
            rel="noopener"
            className="text-foreground underline underline-offset-4"
          >
            Ask us on WhatsApp
          </a>{" "}
          and we&apos;ll help you choose.
        </p>
      </div>

      {/* Result */}
      <div aria-live="polite" className="overflow-hidden rounded-3xl border border-line bg-background">
        <div className="relative aspect-[16/10]">
          <Image key={best.slug} src={best.hero} alt={best.name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <span
            className={`absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${
              overBudget ? "bg-surface-2 text-foreground" : "bg-black/70 text-white"
            }`}
          >
            {overBudget ? "Closest match · just above budget" : (
              <>
                <span className="rec-dot size-1.5 rounded-full bg-rec" /> Best match
              </>
            )}
          </span>
        </div>
        <div className="p-6 pt-0">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm text-muted">{best.tagline}</p>
              <p className="mt-1 font-display text-3xl font-semibold sm:text-4xl">{best.name}</p>
            </div>
            <p className="text-right">
              <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">from</span>
              <span className="font-display text-2xl font-semibold">{formatNaira(best.price)}</span>
            </p>
          </div>
          <p className="mt-4 text-muted">{why[best.slug]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/products/${best.slug}`} className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90">
              View {best.name.replace("DJI ", "")}
            </Link>
            <a
              href={whatsappLink(`Hi Certo, I'm interested in the ${best.name}. Is it available?`)}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              <WhatsAppIcon className="size-4" /> Order on WhatsApp
            </a>
          </div>
          {others.length > 0 && (
            <div className="mt-8 border-t border-line pt-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Also worth a look</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {others.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/products/${d.slug}`} className="flex items-center gap-3 rounded-2xl border border-line p-2 transition hover:border-muted">
                      <span className="relative size-11 shrink-0 overflow-hidden rounded-xl bg-white">
                        <Image src={d.image} alt="" fill sizes="44px" className="object-contain p-1" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium">{d.name.replace("DJI ", "")}</span>
                        <span className="block text-xs text-muted">{formatNaira(d.price)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
