import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "underline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const variants = {
    primary:
      "rounded-xl bg-[var(--accent)] px-5 py-3 text-white shadow-[0_8px_20px_rgba(27,87,240,0.34)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:shadow-[0_14px_34px_rgba(27,87,240,0.28)]",
    secondary:
      "rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-[var(--ink)] hover:border-[var(--accent)]/35 hover:shadow-[0_10px_24px_-16px_rgba(10,10,18,0.35)] hover:-translate-y-0.5",
    ghost:
      "rounded-xl px-5 py-3 text-[var(--ink)] hover:bg-[var(--mist)]",
    underline:
      "relative rounded-none px-0 py-2 text-[var(--ink)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
