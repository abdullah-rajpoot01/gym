import { CircleCheck, Dot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const programs = [
    {
        name: "Strength & Power",
        description:
            "Build raw strength with progressive overload programs designed for serious lifters.",
        features: [
            "Competition grade squat racks",
            "Calibrated plates & barbells",
            "Deadlift platforms",
            "Periodized programming",
        ],
    },
    {
        name: "Bodybuilding",
        description:
            "Build dense muscle with focused hypertrophy blocks and controlled weekly volume.",
        features: [
            "Hypertrophy focused splits",
            "Compound & isolation work",
            "Form and tempo coaching",
            "Nutrition guidance available",
        ],
    },
    {
        name: "Fat Loss",
        description:
            "Drop body fat with structured cardio, conditioning circuits, and accountability.",
        features: [
            "Treadmill and cardio work",
            "Conditioning circuits",
            "Weekly progress rhythm",
            "Diet plan add on",
        ],
    },
    {
        name: "Functional Fitness",
        description:
            "Move stronger with explosive drills, core work, and athletic conditioning.",
        isPopular: true,
        features: [
            "Kettlebells & battle ropes",
            "Mobility stations",
            "Agility training",
            "Core conditioning",
        ],
    },
    {
        name: "Personal Training",
        description:
            "Get focused one on one coaching with form checks and custom progression.",
        features: [
            "Custom program design",
            "Real time form correction",
            "Progress tracking",
            "Flexible scheduling",
        ],
    },
    {
        name: "Group Classes",
        description:
            "Train inside high energy group sessions built around pace and accountability.",
        features: [
            "Circuit training",
            "Boot camp sessions",
            "Community motivation",
            "All fitness levels",
        ],
    },
];
const ProgramsComponent = () => {
    return (
        <div className="px-6 py-20">
            <h2 className="text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] text-primary capitalize">
              <strong className="text-foreground">Find Your</strong>  programs
            </h2>
            <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] md:text-2xl">
                Choose the plan that fits your needs
            </p>

            <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-8 sm:mt-16 lg:grid-cols-3">
                {programs.map((plan) => (
                    <div data-aos="fade-left"
                        className={cn(
                            "relative  border border-border/85 bg-card p-6 hover:shadow-[0_0_30px_10px_var(--primary)] shadow-primary/20",
                            {
                                "border-2 border-primary py-10": true,
                            }
                        )}
                        key={plan.name}
                    >
                        {plan.isPopular && (
                            <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                                Most Popular
                            </Badge>
                        )}
                        <h3 className="font-medium text-lg">{plan.name}</h3>
                        <p className="mt-4 font-medium text-muted-foreground">
                            {plan.description}
                        </p>
                        <Separator className="my-4" />
                        <ul className="space-y-2">
                            {plan.features.map((feature) => (
                                <li className="flex items-start gap-2" key={feature}>
                                    <Dot className=" h-8 w-8 text-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsComponent;
