"use client"
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSearchParams } from "next/navigation";
import { createQuery } from "@/lib/create-query";
import { Dumbbell } from "lucide-react";

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
    <footer className="border-t border-white/10 bg-black ">
      <div className="site-container py-14 px-8 text-sm text-zinc-400 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1.25fr_1fr]">
          <div>
            <Link href={`/${createQuery({ gymName, city, phone })}`} className="flex items-center gap-3">

              <div className="relative w-8 h-8 flex justify-center items-center aspect-square rounded-lg shadow-lg border-2 border-foreground/80 overflow-hidden">
                <Dumbbell className="w-6 h-6" />
              </div>


              <span className="min-w-0 leading-none">
                <span className="block text-base font-black uppercase tracking-wide text-white">
                  {gymName}
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-red-500">
                  Gym
                </span>
              </span>

            </Link>
            <p className="mt-4 max-w-sm leading-7">
              Strength focused gym in Multan for memberships, coaching,
              bodybuilding, fat loss, and supplement pickup.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/ironhaven141"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven instagram"
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-black text-zinc-400 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                id="base-ui-_R_375qnnb_"
                data-slot="tooltip-trigger"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                >
                  <rect
                    width={16}
                    height={16}
                    x={4}
                    y={4}
                    rx={4}
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <circle
                    cx={12}
                    cy={12}
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <circle cx={17} cy={7} r="1.2" fill="currentColor" />
                </svg>
                <span className="sr-only">instagram</span>
              </a>
              <a
                href="https://www.facebook.com/Ironheaven141/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven facebook"
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-black text-zinc-400 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                id="base-ui-_R_3b5qnnb_"
                data-slot="tooltip-trigger"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="currentColor"
                >
                  <path d="M14.2 8.4V6.9c0-.7.5-.9.9-.9h2.1V2.2L14.3 2c-3.2 0-5 1.9-5 5.3v1.1H6v4.1h3.3V22h4.1v-9.5h3.4l.5-4.1h-3.1Z" />
                </svg>
                <span className="sr-only">facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@IronHeaven141"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven youtube"
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-black text-zinc-400 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                id="base-ui-_R_3f5qnnb_"
                data-slot="tooltip-trigger"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="currentColor"
                >
                  <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
                </svg>
                <span className="sr-only">youtube</span>
              </a>
              <a
                href="https://www.tiktok.com/@ironheaven141"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven tiktok"
                className="grid size-10 place-items-center rounded-md border border-white/10 bg-black text-zinc-400 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                id="base-ui-_R_3j5qnnb_"
                data-slot="tooltip-trigger"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="currentColor"
                >
                  <path d="M15.8 2c.4 3 2.1 4.9 5 5.1v3.4a8.5 8.5 0 0 1-5-1.5v6.4c0 4.1-2.5 6.6-6.3 6.6A6.2 6.2 0 0 1 3 15.8c0-3.8 3-6.4 6.8-6.1v3.6c-1.7-.2-3 .8-3 2.4 0 1.4 1.1 2.4 2.5 2.4 1.6 0 2.5-.9 2.5-3V2h4Z" />
                </svg>
                <span className="sr-only">tiktok</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.28em] text-white">
              Quick Links
            </h3>
            <nav className="mt-5 grid gap-3">
              <a className="transition-colors hover:text-white" href="/">
                Home
              </a>
              <a className="transition-colors hover:text-white" href="/programs">
                Programs
              </a>
              <a className="transition-colors hover:text-white" href="/coaches">
                Trainers
              </a>
              <a className="transition-colors hover:text-white" href="/plans">
                Pricing
              </a>
              <a className="transition-colors hover:text-white" href="/join">
                Join Now
              </a>
            </nav>
          </div>
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.28em] text-white">
              Contact
            </h3>
            <div className="mt-5 grid gap-5">
              <a
                href="https://share.google/QqrDdwCNao5wRTUKp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 leading-6 transition-colors hover:text-white"
              >
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
                  className="lucide lucide-map-pin mt-1 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <span>
                  Sultan Ghee Mill, Gate # 2 Vehari Road, Fatima Jinnah Colony,
                  Multan 66000
                </span>
              </a>
              <a
                href="tel:+923078202141"
                className="flex items-center gap-4 transition-colors hover:text-white"
              >
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
                  className="lucide lucide-phone size-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <span>+92 307 8202141</span>
              </a>
              <a
                href="mailto:ironhaven141@gmail.com"
                className="flex items-center gap-4 transition-colors hover:text-white"
              >
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
                  className="lucide lucide-mail size-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x={2} y={4} width={20} height={16} rx={2} />
                </svg>
                <span>ironhaven141@gmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.28em] text-white">
              Hours
            </h3>
            <div className="mt-5 flex gap-4">
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
                className="lucide lucide-clock mt-1 size-4 shrink-0 text-primary"
                aria-hidden="true"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 6v6l4 2" />
              </svg>
              <div className="grid gap-3 leading-6">
                <div>
                  <div className="font-bold text-white">For Gents</div>
                  <div>Morning: 6:30 AM to 9:30 AM</div>
                  <div>Evening: 5:00 PM to 11:00 PM</div>
                </div>
                <div>
                  <div className="font-bold text-white">For Female</div>
                  <div>Morning: 10:00 AM to 12:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="grid gap-2">
            <div>© 2026 Iron Heaven Gym. All rights reserved.</div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
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
                className="lucide lucide-heart size-3.5 fill-primary text-primary"
                aria-hidden="true"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
              </svg>
              <span>by</span>
              <a
                href="https://usmanliaqat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white transition-colors hover:text-primary"
              >
                Usman Liaqat
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-xs md:justify-end">
            <a href="/sitemap.xml" className="transition-colors hover:text-white">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>

  );
};

export default Footer1;
