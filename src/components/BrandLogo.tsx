import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Height classes for the logo image */
  size?: "sm" | "md" | "lg";
  href?: string | null;
  priority?: boolean;
};

const sizes = {
  sm: { className: "h-8 w-auto md:h-9", width: 180, height: 50, sizes: "180px" },
  md: { className: "h-10 w-auto md:h-11", width: 220, height: 62, sizes: "220px" },
  lg: { className: "h-12 w-auto md:h-16", width: 320, height: 90, sizes: "320px" },
};

export function BrandLogo({
  className,
  size = "md",
  href = "/",
  priority = false,
}: BrandLogoProps) {
  const s = sizes[size];
  const image = (
    <Image
      src="/img/redmelon.png"
      alt="Redmelon"
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn(s.className, "object-contain object-left")}
      sizes={s.sizes}
    />
  );

  if (href === null) {
    return <span className={cn("inline-flex items-center", className)}>{image}</span>;
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center transition-opacity duration-300 hover:opacity-90",
        className,
      )}
      aria-label="Redmelon home"
    >
      {image}
    </Link>
  );
}
