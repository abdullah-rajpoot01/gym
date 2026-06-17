import {
  BinocularsIcon,
  Dumbbell,
  ShieldCheckIcon,
  Heart,
  Users,
  Clock,
} from "lucide-react";

interface FeaturesProps {
  gymName: string;
  city: string;
}

export default function Features({ gymName, city }: FeaturesProps) {
  const plusPoints = [
    {
      icon: Dumbbell,
      image: "/gym/pexels-mamadvali-17706035.jpg",
      title: `Modern Fitness Equipment`,
      description: `Train with high-quality machines, free weights, and professional workout stations designed for all fitness levels at ${gymName}.`,
    },
    {
      icon: ShieldCheckIcon,
      image: "/gym/pexels-tima-miroshnichenko-5327502.jpg",
      title: `Certified Trainers`,
      description: `Get expert guidance from experienced fitness coaches who help you achieve your goals safely and effectively in ${city}.`,
    },
    {
      icon: BinocularsIcon,
      image: "/gym/pexels-alexapopovich-10551491.jpg",
      title: `Motivating Environment`,
      description: `Join a supportive fitness community in ${city} where motivation, discipline, and results come together at ${gymName}.`,
    },
    {
      icon: Heart,
      image: "/gym/pexels-alexapopovich-10360919.jpg",
      title: `Personalized Workout Plans`,
      description: `Get customized workout routines tailored to your fitness goals and body type by our expert trainers at ${gymName}.`,
    },
    {
      icon: Users,
      image: "/gym/pexels-foadshariyati-30283458.jpg",
      title: `Community Support`,
      description: `Train alongside like-minded individuals in ${city} who motivate and push each other to achieve their best results.`,
    },
    {
      icon: Clock,
      image: "/gym/pexels-foadshariyati-32085164.jpg",
      title: `Flexible Timings`,
      description: `Enjoy convenient workout schedules with extended hours at ${gymName}, making it easy to fit fitness into your daily routine.`,
    },
  ];

  return (
    <div
      className="mx-auto max-w-(--breakpoint-xl) px-6 py-24 text-center"
      id="why-us"
    >
      <strong className="font-medium text-muted-foreground text-sm uppercase tracking-wide">
        Why Choose {gymName}
      </strong>
      <h2 className="mx-auto mt-5 max-w-4xl text-balance font-medium text-4xl/tight tracking-[-0.04em] sm:text-[2.75rem]">
        {city}'s Trusted Fitness Destination for Strength, Health & Performance
      </h2>
      <p className="mt-5 text-muted-foreground text-xl tracking-[-0.01em] sm:text-2xl">
        At {gymName}, we provide modern equipment, expert coaching, and a motivating environment to help you become the best version of yourself.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-4 relative overflow-hidden">
        {plusPoints.map((plusPoint, index) => (
          <div data-aos={"fade-left"}
            className={`relative  w-full overflow-hidden  border bg-linear-to-b from-foreground/3 px-6 py-15 sm:max-w-xs `}
            key={plusPoint.title}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${plusPoint.image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            {/* <BackgroundPattern /> */}

            <div className="isolate flex flex-col items-center gap-2">
              <plusPoint.icon className="size-15 border-2 bg-white p-3 rounded-full object-cover aspect-square text-gray-600" />

              <h3 className="mt-8 font-medium text-xl tracking-[-0.005em] text-white">
                {plusPoint.title}
              </h3>
              <p className="text-balance text-base  text-white/70">
                {plusPoint.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}