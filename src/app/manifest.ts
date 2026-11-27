import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Served at /manifest.webmanifest: name, colours and icon when the site is
// added to a phone's home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: "Cameras, drones, lenses, mics, lighting and streaming gear in Nigeria. Order on WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0c",
    theme_color: "#0b0b0c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
