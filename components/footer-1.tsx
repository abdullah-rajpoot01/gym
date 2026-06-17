"use client"
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSearchParams } from "next/navigation";
import { createQuery } from "@/lib/create-query";

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
      links: [{ label: "Home", url: `/${createQuery({ gymName, city, phone })}` },
      { label: "Why Us", url: `/${createQuery({ gymName, city, phone })}#why-us` },
      { label: "Our Features", url: `/${createQuery({ gymName, city, phone })}#our-features` },
      { label: "Pricing", url: `/${createQuery({ gymName, city, phone })}#pricing` },
      { label: "Testimonials", url: `/${createQuery({ gymName, city, phone })}#testimonials` },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "About Us", url: `/about-us${createQuery({ gymName, city, phone })}` },
        { label: "Contact Us", url: `/contact-us${createQuery({ gymName, city, phone })}` },
        { label: "Privacy Policy", url: `/privacy-policy${createQuery({ gymName, city, phone })}` },
      ],
    },
  ];

  return (
    <div className="px-6 w-full relative text-white bg-black/90 bg-[url('/gym/pexels-binyaminmellish-17840.jpg')] bg-cover bg-top bg-fixed overflow-hidden min-h-[70vh] ">
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-primary-white relative! overflow-hidden z-10">
        <div className="">
          <a href={`/${createQuery({ gymName, city, phone })}`} className="inline-flex items-center justify-center gap-2  rounded-full ">
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                {/* <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-white text-black uppercase">{gymName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl text-white">
                {gymName}
              </div>
            </div>
          </a>
          <p className="max-w-102 mt-6 text-white/80">
            {gymName} Gym in {city} offers a safe and modern fitness space for both men and women. With separate areas, expert trainers, and affordable plans, it's the perfect place for cardio, strength training, and weight loss. Join now to start your fitness journey!
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 text-white">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="hover:underline transition text-white/80">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-white/80 border-t border-t-primary-white/50 z-10 relative">
        Copyright 2026 © <Link href={`/${createQuery({ gymName, city, phone })}`}>{gymName} Gym .</Link> All
        Right Reserved.
      </p>
    </div>
  );
};

export default Footer1;
