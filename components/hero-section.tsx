import { Verified } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CarouselWithFooter from "./carousel-07";
import Typewriter from "./typewriter";
import { useGym } from "@/context/use-gym";


export default function HeroSection() {
    const gymParams = useGym();
    const { gymName, phone, city, id, createRoute } = gymParams;
    return (
        <section className="pt-20 pb-8 px-4 md:px-8 min-h-screen">
            <div className=" grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <span className="block text-primary text-balance font-heading text-4xl font-black uppercase leading-[0.94]  sm:text-5xl">{gymName}</span>
                    <h2 className="mt-3 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-foreground sm:text-5xl">
                        More Than A Gym.{/* */}{" "}
                        <span className="block text-primary"><Typewriter texts={[
                            "A Brotherhood.",
                            "A Lifestyle.",
                            "A Mindset.",
                            "A Community.",
                            "A Transformation."]} /></span>
                    </h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/90 sm:text-base">
                        {gymName} is built for lifters in {city} who want a focused floor,
                        clear standards, practical coaching, and a culture that rewards
                        consistency over excuses.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href={`tel:+${phone}`}
                        >
                            <Button> Call Now</Button>
                        </Link>
                        <Link
                            href={createRoute("contact-us")}
                        >
                            <Button variant={"outline"}> Ask About Coaching</Button>
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden max-w-md lg:aspect-square mx-auto border border-foreground/10 bg-black ">
                    <CarouselWithFooter />
                    <div className="absolute inset-0 bg-black/30 z-5" />


                    <div className="absolute bottom-5 left-5  border border-primary/25 bg-black/80 px-4 py-3 text-sm z-10">
                        <div className="font-heading font-black uppercase text-white">
                            {gymName} GYM
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            Health / Fitness
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
