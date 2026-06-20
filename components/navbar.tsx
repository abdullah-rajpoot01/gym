"use client"
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Avatar, AvatarFallback, } from "./ui/avatar";
import { MobileNavDialog } from "./mobile-nav";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createQuery } from "@/lib/create-query";
import { Dumbbell } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const gymName = searchParams.get("name") || "Rajpoot";
  const phone = searchParams.get("phone") || "+92 300 0000000";
  const city = searchParams.get("city") || "Multan";

  return (
    <nav className="fixed top-0 z-50 left-1/2 -translate-x-1/2 h-16 w-full max-w-6xl  border border-border/85 bg-background shadow-xs/3">
      <div className="flex h-full items-center justify-between px-4  ">
        <Link href={`/${createQuery({ gymName, city, phone })}`} className="flex items-center gap-3">

          <div className="relative w-8 h-8 flex justify-center items-center aspect-square rounded-lg shadow-lg border-2 border-foreground/80 overflow-hidden">
            <Dumbbell className="w-6 h-6"/>
          </div>


          <span className="min-w-0 leading-none">
            <span className="block text-base font-black uppercase tracking-wide text-foreground">
              {gymName}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-red-500">
              Gym
            </span>
          </span>

        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button onClick={() => router.push(`/contact-us${createQuery({ gymName, city, phone })}`)}
            className="hidden  sm:inline-flex hover:animate-pulsing hover:animate-iteration-count-infinite"
            variant="outline"
          >
            Contact Us
          </Button>
          <a href={`tel:+${phone}`}>
            <Button className="hidden  sm:inline-flex hover:animate-pulsing hover:animate-iteration-count-infinite">Call Now</Button>
          </a>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileNavDialog />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
