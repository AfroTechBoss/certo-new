import type { Metadata } from "next";
import { priceListCount } from "@/data/pricelist";
import { PriceList } from "@/components/price-list";

export const metadata: Metadata = {
  title: "Price list",
  description:
    "CERTO's full price list in naira: cameras, lenses, gimbals, microphones, audio, streaming and lighting gear in Computer Village, Ikeja, Lagos.",
};

export default function PriceListPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Price list</p>
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">Every price, in one place.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        {priceListCount} products across cameras, audio, lighting and more. Prices change with the dollar, so tap Ask to
        confirm today&apos;s price and stock on WhatsApp before you pay.
      </p>
      <PriceList />
    </div>
  );
}
