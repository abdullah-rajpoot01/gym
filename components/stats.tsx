import React from 'react'

const Stats = () => {
  return (
    <section id="coach" className=" py-16 md:py-24 px-8">
      <div className=" grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
          <img
            alt="Haseeb Mian transformation"
            loading="lazy"
            width={900}
            height={1100}
            decoding="async"
            data-nimg={1}
            className="h-[560px] w-full object-cover"
            src="https://images.pexels.com/photos/17706038/pexels-photo-17706038.jpeg"
            style={{ color: "transparent" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="font-heading text-2xl font-black uppercase text-white">
              Haseeb Mian
            </div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Hard work over shortcuts
            </div>
          </div>
        </div>
        <div>
          <div className="eyebrow-chip">By / Numbers</div>
          <h2 className="mt-5 text-balance font-heading text-4xl font-black uppercase leading-[0.94] text-white sm:text-5xl">
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
            <div className="bg-card rounded-lg p-5 text-center">
              <div className="font-heading text-3xl font-black text-white">5+</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Years
              </div>
            </div>
            <div className="bg-card rounded-lg p-5 text-center">
              <div className="font-heading text-3xl font-black text-white">
                500+
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Members
              </div>
            </div>
            <div className="bg-card rounded-lg p-5 text-center">
              <div className="font-heading text-3xl font-black text-white">
                100%
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Focused
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 font-heading text-xs font-black uppercase tracking-[0.18em]"
              href="/join"
            >
              Join Now
            </a>
            <a
              className="group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 border-white/15 bg-black/30 font-heading text-xs font-black uppercase tracking-[0.18em] text-white"
              href="/contact"
            >
              Ask About Coaching
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats