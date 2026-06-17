"use client"
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Avatar, AvatarFallback, } from "./ui/avatar";
import { MobileNavDialog } from "./mobile-nav";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createQuery } from "@/lib/create-query";

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const gymName = searchParams.get("name") || "Rajpoot";
  const phone = searchParams.get("phone") || "+92 300 0000000";
  const city = searchParams.get("city") || "Multan";

  return (
    <nav className="fixed top-3 z-50 left-1/2 -translate-x-1/2 h-16 w-[95%] max-w-6xl rounded-full border border-border/85 bg-background shadow-xs/3">
      <div className="flex h-full items-center justify-between px-4  ">
        <Link href={`/${createQuery({ gymName, city, phone })}`} className="flex items-center gap-3">
          <Avatar className="size-9">
            {/* <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="bg-foreground text-background uppercase">{gymName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl">
            {gymName}
          </div>
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button onClick={() => router.push(`/contact-us${createQuery({ gymName, city, phone })}`)}
            className="hidden rounded-full sm:inline-flex hover:animate-pulsing hover:animate-iteration-count-infinite"
            variant="outline"
          >
            Contact Us
          </Button>
          <a href={`tel:+${phone}`}>
            <Button className="hidden rounded-full sm:inline-flex hover:animate-pulsing hover:animate-iteration-count-infinite">Call Now</Button>
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
