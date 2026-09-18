export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
