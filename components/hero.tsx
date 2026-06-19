import { ArrowUpRight, CirclePlay, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  gymName: string;
  phone: string;
  city: string;
}

export default function Hero({ gymName, phone, city }: HeroProps) {
  return (
    <div className="relative w-full min-h-screen flex md:mt-15 py-10 items-center justify-center overflow-hidden px-6 bg-black/90 bg-cover bg-center bg-fixed">

      <div className="absolute inset-x-0 top-[24%] md:top-[10%] z-0 flex justify-center select-none pointer-events-none">
        <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter  text-center leading-none whitespace-nowrap group-hover:text-primary/15 transition-colors duration-300 text-primary/50">
          {gymName} Gym
        </h2>
      </div>


      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center h-full pointer-events-none">
        <Image
          fill
          src="https://www.crossfitmultan.com/menn.png" // Replace with your actual PNG path
          alt="Fitness Athlete"
          priority
          className="object-contain object-bottom h-full w-auto filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[65%] z-15 pointer-events-none select-none mix-blend-screen opacity-70 group-hover:opacity-80 transition-opacity duration-300">
        <div className="absolute inset-0 bg-linear-to-t from-zinc-800 via-zinc-600/80 to-transparent blur-xl" />
        <div className="absolute inset-0 bg-linear-to-tr from-zinc-800/70 via-transparent to-transparent blur-2xl" />
      </div>
      <div className="absolute left-2 sm:left-6 md:left-8 bottom-3 sm:bottom-12 md:bottom-5 z-20 max-w-[78%] sm:max-w-md transition-all duration-1000 pt-1 sm:pt-0 mt-0 sm:mt-2 opacity-100 translate-y-0">
        <h1 className="text-white text-[14px] sm:text-4xl md:text-6xl font-extrabold leading-[1.05]">
          PUSH YOUR <br />
          <span className="text-primary">LIMITS</span>
        </h1>
        <p className="text-gray-300 mt-1 text-[9px] sm:text-base md:text-base max-w-37.5 sm:max-w-md leading-tight">
          Join {gymName} Gym {city} and experience world-class training with expert
          guidance. Achieve your goals, unlock your potential, and become the best
          version of yourself!
        </p>
        <Button className="mt-4 rounded-full">See Plans</Button>
      </div>
<div className="absolute right-2 sm:right-6 md:right-16 bottom-4 sm:bottom-14 md:bottom-12 z-20 text-center sm:text-right transition-all duration-1000 mt-1 sm:mt-2 opacity-100 translate-y-0">
  <div className="text-white mb-3 flex flex-col sm:flex-row gap-2 sm:gap-6 font-semibold text-xs">
    <div className="flex flex-col items-center sm:items-end leading-none">
      <h1 className="text-[12.5px] sm:text-2xl md:text-3xl font-bold">
        10{/* */}+
      </h1>
      <p className="text-[7px] sm:text-[10px] uppercase">Trainers</p>
    </div>
    <div className="flex flex-col items-center sm:items-end leading-none">
      <h1 className="text-[12.5px] sm:text-2xl md:text-3xl font-bold">
        1000{/* */}+
      </h1>
      <p className="text-[7px] sm:text-[10px] uppercase">Customers</p>
    </div>
    <div className="flex flex-col items-center sm:items-end leading-none">
      <h1 className="text-[12.5px] sm:text-2xl md:text-3xl font-bold">
        10{/* */}+
      </h1>
      <p className="text-[7px] sm:text-[10px] uppercase">Years Experience</p>
    </div>
  </div>
  <div className="flex flex-col items-center sm:items-end mt-1 gap-1">
    <img
      src="https://www.crossfitmultan.com/reviews.png"
      alt="Reviews"
      className="w-16 sm:w-20 lg:w-28 xl:w-32 opacity-90 transition-all duration-300"
    />
    <div className="flex items-center gap-2 mt-2 text-white text-[10px] sm:text-xs lg:text-sm">
      <span className="text-yellow-400">★★★★★</span>
      <span className="text-gray-300 font-medium">500+ Reviews</span>
    </div>
  </div>
</div>


    </div>
  );
}
