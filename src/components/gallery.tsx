"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const isCutout = current.src.endsWith(".png");

  return (
    <div>
      <div
        className={`relative aspect-square overflow-hidden rounded-3xl ${
          isCutout ? "bg-white" : "bg-surface"
        }`}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          preload
          sizes="(min-width: 768px) 50vw, 100vw"
          className={isCutout ? "object-contain p-8" : "object-cover"}
        />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 ${
              img.src.endsWith(".png") ? "bg-white" : "bg-surface"
            } ${i === index ? "border-foreground" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="120px"
              className={img.src.endsWith(".png") ? "object-contain p-2" : "object-cover"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
