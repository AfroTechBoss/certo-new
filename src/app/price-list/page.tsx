import type { Metadata } from "next";
import { priceList, priceListCount } from "@/data/pricelist";
import { PriceList } from "@/components/price-list";

export const metadata: Metadata = {
  title: "Price list",
  description:
    "CERTO's full price list in naira: cameras, lenses, drones, gimbals, microphones, wireless video, live production switchers and video lights in Computer Village, Ikeja, Lagos.",
  alternates: { canonical: "/price-list" },
};

const withPages = priceList.reduce(
  (n, c) => n + c.groups.reduce((m, g) => m + g.items.filter(([, , slug]) => slug).length, 0),
  0,
);

export default function PriceListPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Price list</p>
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">Every price, in one place.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        {priceListCount} products across cameras, drones, gimbals, audio, wireless video, live production, lighting and
        more. {withPages} of them have a full page with photos, specs and packages; tap View product to see it. Prices
        change with the dollar, so tap Ask to confirm today&apos;s price and stock on WhatsApp before you pay.
      </p>
      <PriceList />
    </div>
  );
}
