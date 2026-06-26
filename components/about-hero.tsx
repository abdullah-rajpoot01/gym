import Link from "next/link";
import { Button } from "@/components/ui/button";
import CarouselWithFooter from "./carousel-07";
import Typewriter from "./typewriter";
import { useGym } from "@/context/use-gym";


export default function AboutHeroSection() {
    const { gymName, phone, city, id, createRoute } = useGym();

    return (
        <section className="pt-20 pb-8 px-4 md:px-8 min-h-screen">
            <div className=" grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <span className="block text-primary text-balance font-heading text-4xl font-black uppercase leading-[0.94]  sm:text-5xl">About {gymName}</span>
                    <h2 className="mt-3 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-foreground sm:text-5xl">
                        More Than A Gym. We’re Building{/* */}{" "}
                        <span className="block text-primary"><Typewriter texts={[
                            "A Stronger Culture.",
                            "A Better Discipline.",
                            "A Real Community.",
                            "A Higher Standard.",
                            "A Lasting Change."]} /></span>
                    </h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/90 sm:text-base">
                        {gymName} exists for lifters in {city} who are serious about progress. We’re not focused on trends or shortcuts—we’re built around structure, accountability, and long-term results.
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
                            <Button variant={"outline"}>Contact Us</Button>
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
