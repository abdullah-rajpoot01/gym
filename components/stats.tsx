import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
interface SectionProps {
  gymName: string;
  phone: string;
  city: string;
}
const Stats = ({gymName,city,phone}:SectionProps) => { 
  return (
    <section id="coach" className=" py-16 md:py-24 px-4">
      <div className=" grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div data-aos="fade-right" className="relative overflow-hidden  border border-foreground/10 bg-background">
          <img 
            alt="Haseeb Mian transformation"
            loading="lazy"
            width={900}
            height={1100}
            className="h-140 w-full object-cover"
            src="/gym/pexels-mamadvali-17706038.jpg"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="font-heading text-2xl font-black uppercase text-white">
              {gymName} GYM
            </div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Hard work over shortcuts
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="eyebrow-chip">By / Numbers</div>
          <h2 className="mt-5 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-foreground sm:text-5xl">
            Numbers that speak for
            <span className="block text-primary">themselves</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base">
            Join a community built on strength, discipline, and results.
            Our expert coaches and high-energy training programs help you push
            limits, build confidence, and achieve your fitness
            goals faster.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="bg-secondary  p-5 text-center">
              <div className="font-heading text-3xl font-black text-foreground">5+</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80">
                Years
              </div>
            </div>
            <div className="bg-secondary  p-5 text-center">
              <div className="font-heading text-3xl font-black text-foreground">
                500+
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80">
                Members
              </div>
            </div>
            <div className="bg-secondary  p-5 text-center">
              <div className="font-heading text-3xl font-black text-foreground">
                100%
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80">
                Focused
              </div>
            </div>
          </div>
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
      </div>
    </section>
  )
}

export default Stats