import { ArrowUpRight, CirclePlay, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  gymName: string;
  phone: string;
  city: string;
}

export default function Hero({ gymName, phone, city }: HeroProps) {
  return (
    <div className="relative w-full flex py-10 items-center justify-center overflow-hidden px-6 bg-black/90 bg-[url('/gym/pexels-dimkidama-6796964.jpg')] bg-cover bg-center bg-fixed">

      <div className="relative z-10 max-w-4xl text-center px-5 md:p-0 overflow-hidden">

        <h1 className="mx-auto mt-6 max-w-full font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem] md:text-6xl/[1.2] text-background pt-10">
          {gymName} Gym – Best Unisex Fitness Center for Men & Women in {city}
        </h1>
        <p className="mx-auto mt-6 max-w-full text-background/80 text-xl md:text-2xl/normal">
          {gymName} Gym in {city} offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link className="w-full sm:w-auto" href={"/contact-us"}>
            <Button className="w-full sm:w-auto bg-background hover:bg-background text-foreground hover:animate-pulsing hover:animate-iteration-count-infinite" size="lg">
              Contact Us <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </Link>
          <a className="w-full sm:w-auto" href={`tel:${phone}`}>
            <Button
              className="w-full sm:w-auto shadow-none text-white bg-transparent  "
              size="lg"
              variant="outline"
            >
              <PhoneCall className="h-5! w-5!" /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}