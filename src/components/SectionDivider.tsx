import { cn } from "@/lib/utils";

type SectionDividerProps = {
  variant?: "wave" | "angle" | "curve";
  flip?: boolean;
  className?: string;
  fill?: string;
};

export function SectionDivider({
  variant = "wave",
  flip = false,
  className,
  fill = "var(--paper)",
}: SectionDividerProps) {
  const paths = {
    wave: "M0,64 C160,120 320,0 480,48 C640,96 800,32 960,64 L960,128 L0,128 Z",
    angle: "M0,80 L960,0 L960,128 L0,128 Z",
    curve: "M0,96 Q480,0 960,96 L960,128 L0,128 Z",
  };

  return (
    <div
      className={cn(
        "pointer-events-none relative -mb-px h-16 w-full overflow-hidden md:h-24",
        flip && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 128"
        preserveAspectRatio="none"
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
