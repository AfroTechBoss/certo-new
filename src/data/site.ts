export const site = {
  name: "CERTO",
  tagline: "Creator & production gear",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://certo.ng",
  whatsapp: "2348057575906",
  whatsappDisplay: "+234 805 757 5906",
  legalName: "CERTO TECHNOLOGIES",
  businessNumber: "BN9512546",
  address: "Chekwas Plaza, 29 Otigba St, Computer Village, Ikeja 101233, Lagos",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Chekwas Plaza, 29 Otigba St, Computer Village, Ikeja, Lagos"),
  // TODO(owner): confirm or edit every line below before going live.
  trust: [
    { title: "Original products", body: "Authentic gear from the brands creators trust." },
    { title: "Order on WhatsApp", body: "Talk to a real person, confirm stock and price, then pay." },
    { title: "Nationwide delivery", body: "We deliver across Nigeria. Ask us about timelines for your city." },
    { title: "Setup help", body: "We'll help you get started with your new gear after purchase." },
  ],
};

export function formatNaira(amount: number) {
  return "₦" + amount.toLocaleString("en-NG");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
