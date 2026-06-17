"use client"
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSearchParams } from "next/navigation";

interface FooterLink {
  label: string
  url: string
}
interface FooterLinksSection {
  title: string
  links: FooterLink[]
}

const Footer1 = () => {
  const searchParams = useSearchParams();

  const gymName = searchParams.get("name") || "Rajpoot";
  const phone = searchParams.get("phone") || "+92 300 0000000";
  const city = searchParams.get("city") || "Multan";

  const linkSections: FooterLinksSection[] = [
    {
      title: "Quick Links",
      links: [{ label: "Home", url: `/?name=${gymName}&city=${city}&phone=${phone}` },
      { label: "Why Us", url: `/?name=${gymName}&city=${city}&phone=${phone}#why-us` },
      { label: "Our Features", url: `/?name=${gymName}&city=${city}&phone=${phone}#our-features` },
      { label: "Pricing", url: `/?name=${gymName}&city=${city}&phone=${phone}#pricing` },
      { label: "Testimonials", url: `/?name=${gymName}&city=${city}&phone=${phone}#testimonials` },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "About Us", url: `/about-us?name=${gymName}&city=${city}&phone=${phone}` },
        { label: "Contact Us", url: `/contact-us?name=${gymName}&city=${city}&phone=${phone}` },
        { label: "Privacy Policy", url: `/privacy-policy?name=${gymName}&city=${city}&phone=${phone}` },
      ],
    },
  ];

  return (
    <div className="px-6 w-full relative text-foreground">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-primary-foreground relative! overflow-hidden">
        <div className="">
          <a href={`/name=${gymName}&city=${city}&phone=${phone}`} className="inline-flex items-center justify-center gap-2  rounded-full ">
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                {/* <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-black text-white uppercase">{gymName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl text-foreground">
                {gymName} 
              </div>
            </div>
          </a>
          <p className="max-w-102 mt-6 text-foreground/80">
            {gymName} Gym in {city} offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-foreground md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 text-foreground">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="hover:underline transition text-foreground/80">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-foreground/80 border-t border-t-primary-foreground/50">
        Copyright 2026 © <Link href={`/name=${gymName}&city=${city}&phone=${phone}`}>{gymName} Gym .</Link> All
        Right Reserved.
      </p>
    </div>
  );
};

export default Footer1;
