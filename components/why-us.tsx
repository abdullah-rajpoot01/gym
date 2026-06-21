import {
  ArrowUpRightIcon,
  BinocularsIcon,
  CogIcon,
  Dumbbell,
  Grid2x2,
  Grid2X2,
  ShieldCheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const plusPoints = [
  {
    icon: Grid2x2,
    title: "Real-Time Classes",
    description:
      "Build strength, endurance, and athletic performance through high-intensity functional workouts.",
  },
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "Work one-on-one with certified trainers who create customized fitness plans based on yourgoals.",
  },
  {
    icon: BinocularsIcon,
    title: "Strength Training",
    description: "Improve overall strength, mobility, stamina, and physical performance with structured training programs.",
  },
];

export default function Features() {
  return (
    <div
      className="mx-auto max-w-(--breakpoint-xl) px-4 py-24 text-center"
      id="why-choose-us"
    >
      <strong className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
        Choose Your Future
      </strong>
      <h2 className="mx-auto mt-5 max-w-4xl text-balance font-medium text-3xl/tight tracking-[-0.04em] sm:text-[2.75rem]">
        <strong className="text-primary"> Choose your</strong> Training Path
      </h2>
      <p className="mt-5 text-muted-foreground text-xl -tracking-[0.01em] sm:text-2xl">
        Discover programs designed to build strength, improve endurance, and help you achieve your fitness goals.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {plusPoints.map((plusPoint) => (
          <div
            className="relative w-full overflow-hidden  border bg-linear-to-b from-foreground/3 px-6 py-10 sm:max-w-xs transition-all duration-200 hover:scale-[1.04] hover:border hover:border-primary hover:shadow-[0_0_30px_10px_var(--primary)] shadow-primary/10"
            data-aos="flip-right"
            key={plusPoint.title}
          >
            <BackgroundPattern />

            <div className="isolate flex flex-col items-center gap-2">
              <plusPoint.icon className="size-14 stroke-[1.5px] text-foreground" />
              <h3 className="mt-8 font-medium text-xl tracking-[-0.005em]">
                {plusPoint.title}
              </h3>
              <p className="text-balance text-base text-muted-foreground">
                {plusPoint.description}
              </p>
              <Button className="mt-6">
                Learn More <ArrowUpRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
