"use client";

import { useState } from "react";

type Partner = {
  name: string;
  slug: string;
  ext: string;
  /** Tailwind classes for the styled wordmark fallback */
  style: string;
  color: string;
};

const PARTNERS: Partner[] = [
  { name: "Liberty Fianzas", slug: "liberty", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
  { name: "Avla Fianzas", slug: "avla", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
  { name: "Atlas Fianzas", slug: "atlas", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
  { name: "Berkley Fianzas", slug: "berkley", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
  { name: "Fianzas Mapfre", slug: "mapfre", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
  { name: "Fianzas Sofimex", slug: "sofimex", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
  { name: "Fianzas Chubb", slug: "chubb", ext: "png", style: "tracking-[0.02em] font-extrabold", color: "#0B1F3A" },
];

function PartnerLogo({ partner }: { partner: Partner }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="flex items-center justify-center h-16 px-6 py-3 bg-white rounded-xl border border-gray-border shadow-sm grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:shadow-md transition-all duration-300">
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${partner.slug}.${partner.ext}`}
          alt={`Logo ${partner.name}`}
          className="max-h-9 max-w-[140px] w-auto object-contain"
          onError={() => setHasImage(false)}
        />
      ) : (
        <span
          className={`text-lg md:text-xl ${partner.style} select-none whitespace-nowrap`}
          style={{ color: partner.color }}
        >
          {partner.name}
        </span>
      )}
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <h2 className="font-[var(--font-heading)] font-semibold text-xl md:text-2xl text-navy text-center mb-3">
          Respaldo en el que puedes confiar
        </h2>
        <p className="text-gray-muted text-sm text-center max-w-2xl mx-auto mb-10">
          Trabajamos con las principales afianzadoras autorizadas por la Comisión Nacional de Seguros y Fianzas (CNSF), garantizando el respaldo institucional de tu póliza.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.slug} partner={partner} />
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-gray-muted">
          Los logos y marcas pertenecen a sus respectivos propietarios. Fianzify es intermediario autorizado.
        </p>
      </div>
    </section>
  );
}
