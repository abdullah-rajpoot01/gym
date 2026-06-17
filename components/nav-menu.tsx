"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSearchParams } from "next/navigation";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const searchParams = useSearchParams();

  const gymName = searchParams.get("name") || "Rajpoot";
  const phone = searchParams.get("phone") || "+92 300 0000000";
  const city = searchParams.get("city") || "Multan";

  return <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={`/?name=${gymName}&city=${city}&phone=${phone}`}>Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={`/?name=${gymName}&city=${city}&phone=${phone}#why-us`}>Why Us</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={`/?name=${gymName}&city=${city}&phone=${phone}#our-features`}>Our Features</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={`/?name=${gymName}&city=${city}&phone=${phone}#pricing`}>Pricing</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href={`/?name=${gymName}&city=${city}&phone=${phone}#testimonials`}>Testimonials</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
};
