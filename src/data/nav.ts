export type NavLink = { href: string; label: string };

export const shopLinks: NavLink[] = [
  { href: "/#drones", label: "Drones" },
  { href: "/#camcorders", label: "Camcorders" },
  { href: "/#audio", label: "Audio" },
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
