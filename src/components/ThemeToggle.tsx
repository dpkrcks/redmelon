"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  lightOnDark?: boolean;
};

export function ThemeToggle({ className, lightOnDark = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300",
        lightOnDark
          ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)]/35 hover:text-[var(--accent)]",
        className,
      )}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
