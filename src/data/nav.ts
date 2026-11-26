export type NavLink = { href: string; label: string };

// Product categories, in the order they appear on /products and in the Shop menu.
// `name` must match Product["category"].
export const productCategories = [
  { id: "drones", name: "Drones", title: "Drones", blurb: "Camera drones from first flights to pro aerial work." },
  { id: "camcorders", name: "Camcorders", title: "Camcorders", blurb: "Handheld and pro camcorders for events and broadcast." },
  { id: "gimbals", name: "Gimbals", title: "Camera gimbals", blurb: "Stabilisers for mirrorless and cinema cameras." },
  { id: "audio", name: "Audio", title: "Microphones and audio", blurb: "Wireless mics, lavaliers and on-camera audio." },
  { id: "batteries", name: "Batteries", title: "Drone batteries", blurb: "Spare flight batteries for longer days out." },
] as const;

export const allProductsLink: NavLink = { href: "/products", label: "All products" };

export const categoryLinks: NavLink[] = productCategories.map((c) => ({
  href: `/products#${c.id}`,
  label: c.name,
}));

export const shopLinks: NavLink[] = [
  { href: "/#categories", label: "More gear" },
  { href: "/price-list", label: "Price list" },
];

export const helpLinks: NavLink[] = [
  { href: "/#how", label: "How to order" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

export const finderLink: NavLink = { href: "/#finder", label: "Drone finder" };
