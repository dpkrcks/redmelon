import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  className?: string;
  overlap?: boolean;
};

export function ProjectCard({
  project,
  featured = false,
  className,
  overlap = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-[var(--ink)]/8 bg-[var(--ink)] text-[var(--paper)] shadow-[0_30px_80px_-40px_rgba(11,18,32,0.75)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5",
        featured ? "min-h-[34rem] md:min-h-[38rem]" : "min-h-[22rem]",
        overlap && "md:-mt-10 md:ml-8",
        "clip-corner",
        className,
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover opacity-35 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${project.accent}cc 0%, transparent 50%), linear-gradient(to top, #0B1220 18%, transparent 72%)`,
        }}
      />
      <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
        <span className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
          {project.domainLabel}
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-md text-sm font-medium text-white/85 md:text-base">
          {project.tagline}
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65">
          {project.summary}
        </p>

        {featured ? (
          <>
            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-white md:text-xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
          View solution
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
