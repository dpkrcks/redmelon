"use client";

import Image from "next/image";
import { clients } from "@/content/clients";
import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/lib/utils";

type ClientLogoStripProps = {
  title?: string;
  className?: string;
};

/** Build a track long enough to fill the viewport, then duplicate for a seamless -50% loop. */
function buildTrack() {
  const fill = [...clients, ...clients, ...clients];
  return [...fill, ...fill];
}

export function ClientLogoStrip({
  title = "Supporting digital transformation for banks, government programs, and enterprises",
  className,
}: ClientLogoStripProps) {
  const track = buildTrack();

  return (
    <section
      id="clients-strip"
      className={cn(
        "relative overflow-hidden border-y border-[var(--border)] bg-[var(--mist)] py-14 md:py-16",
        className,
      )}
    >
      <AnimateIn>
        <p className="relative z-10 mx-auto max-w-3xl px-5 text-center text-sm leading-relaxed text-[var(--ink-muted)] md:px-8 md:text-base">
          {title}
        </p>
      </AnimateIn>

      <div className="relative mt-10 w-screen max-w-[100vw] -translate-x-1/2 left-1/2">
        <div className="rail-mask overflow-hidden">
          <div
            className="animate-rail-left flex w-max items-center gap-14 py-2 md:gap-20 hover:[animation-play-state:paused]"
            style={{ animationDuration: "36s" }}
          >
            {track.map((client, i) => (
              <div
                key={`${client.slug}-${i}`}
                className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-transform duration-500 hover:-translate-y-1 md:h-[4.5rem] md:w-48"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={192}
                  height={64}
                  className="h-9 w-auto max-h-full max-w-full object-contain opacity-90 transition-opacity hover:opacity-100 md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
