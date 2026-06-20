import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
interface SectionProps {
  gymName: string;
  phone: string;
  city: string;
}
export default function VideoSection({gymName,city,phone}:SectionProps) {
    return (
        <div className="flex  items-center justify-center px-4 py-12">
            <div className="mx-auto grid w-full gap-16 lg:grid-cols-2">
                <div>

                    <h1 className="mt-6 max-w-[17ch] font-medium text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
                        Transform <span className="text-primary">Your Body</span>. Elevate Your Mind.
                    </h1>
                    <p className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
                        Join a community built on strength, discipline, and results. Our expert coaches and high-energy training programs help you push limits, build confidence, and achieve your fitness goals faster.
                    </p>
                       <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/join"
                        >
                            <Button> Join Now</Button>
                        </Link>
                        <Link
                            href="/contact-us"
                        >
                            <Button variant={"outline"}> Ask About Coaching</Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-auto aspect-square  w-full max-w-md  bg-accent" >
                    <video
                        src="https://www.crossfitmultan.com/video.mp4"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        className="w-full h-full object-cover"
                    />

                </div>
            </div>
        </div>
    );
}
