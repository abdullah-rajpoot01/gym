import { ArrowUpRight, CirclePlay, Heart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function OwnerSection() {
    return (
        <section className="py-16 md:py-24 px-7">
            <div className=" grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <div className="eyebrow-chip">Why Iron Heaven</div>
                    <h2 className="mt-5 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-white sm:text-5xl">
                        More Than A Gym.{/* */}{" "}
                        <span className="block text-primary">A Brotherhood.</span>
                    </h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                        Iron Heaven is built for lifters in Multan who want a focused floor,
                        clear standards, practical coaching, and a culture that rewards
                        consistency over excuses.
                    </p>
                    <div className="mt-7 grid gap-3">
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shield-check size-4 shrink-0 text-primary"
                                aria-hidden="true"
                            >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            Structured monthly memberships
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shield-check size-4 shrink-0 text-primary"
                                aria-hidden="true"
                            >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            Founder led coaching culture
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shield-check size-4 shrink-0 text-primary"
                                aria-hidden="true"
                            >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            Strength, physique, fat loss, and conditioning paths
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shield-check size-4 shrink-0 text-primary"
                                aria-hidden="true"
                            >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            Supplement pickup connected to the gym
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            className="group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 font-heading text-xs font-black uppercase tracking-[0.18em]"
                            href="/join"
                        >
                            Start Training
                        </a>
                        <a
                            className="group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 border-white/15 bg-black/30 font-heading text-xs font-black uppercase tracking-[0.18em] text-white"
                            href="/contact"
                        >
                            Visit Gym
                        </a>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
                    <img
                        alt="Haseeb Mian at Iron Heaven"
                        width={900}
                        height={1100}
                        decoding="async"
                        data-nimg={1}
                        className="h-[560px] w-full object-cover"
                        style={{ color: "transparent" }}
                        src="https://images.pexels.com/photos/30283460/pexels-photo-30283460.jpeg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-lg border border-primary/25 bg-black/80 px-4 py-3 text-sm">
                        <div className="font-heading font-black uppercase text-white">
                            Haseeb Mian
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            Founder / Coach
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
