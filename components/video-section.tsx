import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
    return (
        <div className="flex min-h-screen items-center justify-center px-6 py-12">
            <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-16 lg:grid-cols-2">
                <div>
                    <Badge
                        asChild
                        className="rounded-full border-border py-1"
                        variant="secondary"
                    >
                        <Link href="#">
                            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
                        </Link>
                    </Badge>
                    <h1 className="mt-6 max-w-[17ch] font-medium text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
                        Transform <span className="text-primary">Your Body</span>. Elevate Your Mind.
                    </h1>
                    <p className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
                        Join a community built on strength, discipline, and results. Our expert coaches and high-energy training programs help you push limits, build confidence, and achieve your fitness goals faster.
                    </p>
                    <div className="mt-8 flex items-center gap-4 sm:mt-12">
                        <Button className="rounded-full" size="lg">
                            Get Started <ArrowUpRight className="h-5! w-5!" />
                        </Button>
                        <Button
                            className="rounded-full shadow-none"
                            size="lg"
                            variant="outline"
                        >
                            <CirclePlay className="h-5! w-5!" /> Watch Demo
                        </Button>
                    </div>
                </div>
                <div className="mt-auto aspect-square  w-full max-w-md rounded-xl  bg-accent" >
                    <video
                        src="https://www.crossfitmultan.com/video.mp4"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        className="w-full h-full object-cover rounded-xl"
                    />

                </div>
            </div>
        </div>
    );
}
