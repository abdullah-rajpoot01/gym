import { Verified } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SectionProps {
    gymName: string;
    phone: string;
    city: string;
}
export default function OwnerSection({ gymName, city }: SectionProps) {
    return (
        <section className="py-16 md:py-24 px-7">
            <div className=" grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <div className="text-primary text-sm bg-primary/20 rounded-full border border-primary text-center max-w-35">Aerobics</div>
                    <h2 className="mt-5 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-foreground sm:text-5xl">
                        More Than Fitness.
                        <span className="block text-primary">It’s Energy. It’s Confidence. It’s You.</span>
                    </h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/90 sm:text-base">
                        {gymName} brings structured aerobics and women-focused fitness training in {city}, designed to improve stamina, flexibility, and confidence in a supportive and energetic environment.
                    </p>
                    <div className="mt-7 grid gap-3">
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                            <Verified className="size-4 text-primary" />
                            Safe, comfortable, women-centered training space
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                            <Verified className="size-4 text-primary" />
                            Guided aerobics sessions for all fitness levels
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                            <Verified className="size-4 text-primary" />

                            Professional coaching with clear progress structure
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                            <Verified className="size-4 text-primary" />

                            Builds endurance, confidence, and discipline
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                            <Verified className="size-4 text-primary" />
                            Not just exercise — a confident lifestyle for women through movement.
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden  border border-foreground/10 bg-black">
                    <img
                        alt="Haseeb Mian at Iron Heaven"
                        width={900}
                        height={1100}
                        decoding="async"
                        data-nimg={1}
                        className="h-[560px] w-full object-cover"
                        style={{ color: "transparent" }}
                        src="/gym/aerobics-for-womens.png"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5  border border-primary/25 bg-black/80 px-4 py-3 text-sm">
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
