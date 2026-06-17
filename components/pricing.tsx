import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Monthly Plan",
    price: 2500,
    description:
      "Perfect for anyone looking to start their fitness journey.",
    features: [
      "Valid for 1 month",
      "Access to all available gym equipment",
      "Cardio & strength training area",
      "Clean workout environment",
      "Trainer guidance available",
    ],
    buttonText: "Call Now For Booking",
  },
  {
    name: "3 Month Plan",
    price: 7000,
    description:
      "Best value for members committed to regular training.",
    features: [
      "Valid for 3 months",
      "Access to all available gym equipment",
      "Cardio & strength training area",
      "Trainer guidance available",
      "Priority membership support",
    ],
    buttonText: "Call Now For Booking",
    isPopular: true,
  },
  {
    name: "6 Month Plan",
    price: 13000,
    description:
      "Ideal for long-term fitness goals and consistent progress.",
    features: [
      "Valid for 6 months",
      "Unlimited gym access during working hours",
      "Access to all available gym equipment",
      "Cardio & strength training area",
      "Trainer guidance available",
    ],
    buttonText: "Call Now For Booking",
  },
];
interface PricingProps {
  gymName: string;
  city: string;
  phone:string;
}
const Pricing = ({gymName,city,phone}:PricingProps) => {

  return (
    <div id="pricing" className="px-6 py-20 ">
      <h2 className="text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Membership Plans
      </h2>
      <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] md:text-2xl">
        Affordable fitness plans at {gymName} Gym {city} for every fitness level.
      </p>
      <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 overflow-hidden">
        {plans.map((plan, index) => (
          <div data-aos={"fade-left"}
            className="border border-border/85 bg-card p-6 shadow-xs/3 "
            key={plan.name}
          >
            <h3 className="font-medium text-lg">{plan.name}</h3>
            <p className="mt-2 font-satoshi font-semibold text-4xl">
              Rs {plan.price}
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li className="flex items-start gap-2" key={feature}>
                  <CircleCheck className="mt-1 h-4 w-4 text-green-600" />{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <a href={`tel:+${phone}`}>
            <Button
              className="mt-6 w-full animate-shake"
              size="lg"
              variant={plan.isPopular ? "default" : "outline"}
            >
              {plan.buttonText}
            </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
