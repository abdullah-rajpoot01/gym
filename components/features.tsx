import {
  Dumbbell,
  Users,
  UserRound,
  ShieldCheck,
  BadgeDollarSign,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    title: "Modern Equipment",
    description:
      "Train with high-quality machines and free weights designed for effective workouts and better results.",
    icon: Dumbbell,
  },
  {
    title: "Experienced Trainers",
    description:
      "Our professional trainers provide guidance and support to help you reach your fitness goals safely.",
    icon: Users,
  },
  {
    title: "Personal Training",
    description:
      "Get customized workout plans and one-on-one coaching tailored to your fitness level and objectives.",
    icon: UserRound,
  },
  {
    title: "Clean Environment",
    description:
      "Enjoy a clean, comfortable, and well-maintained gym environment for a better workout experience.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Membership",
    description:
      "Choose from affordable membership plans designed to fit your schedule and fitness needs.",
    icon: BadgeDollarSign,
  },
  {
    title: "Friendly Community",
    description:
      "Work out alongside motivated members in a positive atmosphere that keeps you inspired.",
    icon: HeartHandshake,
  },
];
interface AboutFeaturesProps {
  gymName: string;
  city: string;
}
const AboutFeatures = ({ gymName, city }: AboutFeaturesProps) => {
  return (
    <div id="our-features" className="mx-auto flex max-w-7xl flex-col px-6 py-30 relative">

      <div className="absolute inset-0 w-full h-full bg-background/70 z-0 flex justify-center">
      </div>
      <div className="z-10">


        <h2 className="text-foreground text-pretty text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
          What We Provide
        </h2>
        <p className="text-foreground/80 mt-3 text-pretty text-center  text-xl tracking-[-0.01em] sm:text-2xl">
          Everything you need to stay fit, healthy, and motivated at <strong className='text-primary'>{gymName} Gym</strong>  {city}.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div data-aos={"fade-right"}
              className="relative overflow-hidden  border bg-card p-6 dark:border-card-foreground/70 "
              key={index}
            >
              <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground ">
                <feature.icon />
              </div>
              <h3 className="mt-5 font-medium text-lg tracking-[-0.005em]">
                {feature.title}
              </h3>
              <p className="mt-2 text-foreground/80">{feature.description}</p>

              <div
                className="absolute inset-0 -top-px z-0"
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
            radial-gradient(ellipse 100% 80% at 100% 0%, #000 50%, transparent 100%)
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
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
