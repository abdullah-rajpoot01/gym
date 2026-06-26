"use client"
import Link from "next/link";
import { ArrowRight, Clock, Dumbbell, Mail, MapPin, Phone } from "lucide-react";
import { useGym } from "@/context/use-gym";


const Footer1 = () => {
  const gymParams = useGym();

  const { gymName, phone, city, address, googleMapShareLink, email, id ,createRoute} = gymParams;
  const linkSections = [{ label: "Home", url: createRoute("") },
  { label: "Programs", url: createRoute("programs") },
  { label: "Coaches", url: createRoute("coaches") },
  { label: "Pricing", url: createRoute("pricing") },
  { label: "Testimonials", url: createRoute("testimonials") }
  ];



  return (
    <footer className="border-t border-black/10 bg-background ">
      <div className="site-container py-14 px-8 text-sm text-foreground md:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_1.25fr_1fr]">
          <div>
            <Link href={createRoute("")} className="flex items-center gap-3">

              <div className="relative w-8 h-8 flex justify-center items-center aspect-square rounded-lg shadow-lg border-2 border-foreground/80 overflow-hidden">
                <Dumbbell className="w-6 h-6" />
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
            <p className="mt-4 max-w-sm leading-7">
              Strength focused gym in {city} for memberships, coaching,
              bodybuilding, fat loss, and supplement pickup.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://www.instagram.com/${gymName}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven instagram"
                className="grid size-10 place-items-center rounded-md border border-foreground/10 bg-background text-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
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
                href={`https://www.facebook.com/${gymName}/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven facebook"
                className="grid size-10 place-items-center rounded-md border border-foreground/10 bg-background text-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
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
                href={`https://www.youtube.com/@${gymName}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven youtube"
                className="grid size-10 place-items-center rounded-md border border-foreground/10 bg-background text-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
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
                href={`"https://www.tiktok.com/@${gymName}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Iron Heaven tiktok"
                className="grid size-10 place-items-center rounded-md border border-foreground/10 bg-background text-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
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
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.28em] text-foreground">
              Quick Links
            </h3>
            <nav className="mt-5 grid gap-3">
              {
                linkSections.map((link, index) => (<Link key={index} className="transition-colors hover:text-primary group flex items-center gap-0.5" href={link.url}>
                  {link.label}
                  <ArrowRight className="size-3 hidden group-hover:block group-hover:translate-x-0.5 transition-all duration-150" />
                </Link>))
              }
            </nav>
          </div>
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.28em] text-foreground">
              Contact
            </h3>
            <div className="mt-5 grid gap-5">
              <a
                href={googleMapShareLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 leading-6 transition-colors hover:text-foreground group"
              >
                <MapPin className='size-4 group-hover:text-primary' />
                <span className="group-hover:text-primary">
                  {address}
                </span>
              </a>
              <a
                href={`tel:+${phone}`}
                className="flex items-center gap-4 transition-colors hover:text-foreground group"
              >
                <Phone className='size-4 group-hover:text-primary' />
                <span className="group-hover:text-primary">+{phone}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 transition-colors hover:text-foreground group"
              >
                <Mail className='size-4 group-hover:text-primary' />
                <span className="group-hover:text-primary">{email}</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-sm font-black uppercase tracking-[0.28em] text-foreground">
              Hours
            </h3>
            <div className="mt-5 flex gap-4">
              <Clock className='size-4' />
              <div className="grid gap-3 leading-6">
                <div>
                  <div className="font-bold text-foreground">For Gents</div>
                  <div>Morning: 6:30 AM to 9:30 AM</div>
                  <div>Evening: 5:00 PM to 11:00 PM</div>
                </div>
                <div>
                  <div className="font-bold text-foreground">For Female</div>
                  <div>Morning: 10:00 AM to 12:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-6 border-t border-foreground/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="grid gap-2">
            <div>© 2026 {gymName} Gym. All rights reserved.</div>
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
                href="https://eligodigital.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground transition-colors hover:text-primary"
              >
                Abdullah Rajpoot
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-6 text-xs md:justify-end">
            <a href="/sitemap.xml" className="transition-colors hover:text-foreground">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>

  );
};

export default Footer1;
