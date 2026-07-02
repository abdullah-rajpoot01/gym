"use client"
import { ArrowUp, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useGym } from "@/context/use-gym";

const Contact = () => {
    const { gymName, phone, googleMapShareLink, googleMapPinUrl, address, email } = useGym();

    return <div className="flex min-h-screen items-center justify-center pt-30 pb-16 overflow-hidden">
        <div className=" w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
            <div className="text-center">
                <b className="font-medium text-foreground text-center text-sm uppercase tracking-wide">
                    Contact Us | <span className="text-primary">{gymName} Gym</span>
                </b>
                <h2 className="mt-3 text-center text-foreground/80 font-medium text-4xl tracking-[-0.04em]">
                    We&apos;d love to hear from you
                </h2>
                <p className=" text-center mt-3 text-foreground/80 text-lg  md:text-xl">
                    Our friendly team is always here to chat.
                </p>
            </div>
            <section className="py-16 md:py-20">
                <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="grid gap-4">
                        <div
                            data-slot="card"
                            data-size="default"
                            className="group/card flex flex-col gap-4 overflow-hidden bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl surface-panel rounded-lg transition hover:border-primary/40"
                        >
                            <div
                                data-slot="card-content"
                                className="group-data-[size=sm]/card:px-3 p-5"
                            >
                                <a
                                    href={googleMapShareLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-4"
                                >
                                    <MapPin className="size-5 text-primary" />
                                    <span>
                                        <span className="block font-heading text-xl font-black uppercase text-foreground">
                                            Address
                                        </span>
                                        <span className="mt-1 block text-sm leading-6 text-foreground/90">
                                            {address}
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div
                            data-slot="card"
                            data-size="default"
                            className="group/card flex flex-col gap-4 overflow-hidden bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl surface-panel rounded-lg transition hover:border-primary/40"
                        >
                            <div
                                data-slot="card-content"
                                className="group-data-[size=sm]/card:px-3 p-5"
                            >
                                <a href={`tel:+${phone}`} className="flex gap-4">
                                    <Phone className="text-primary size-5" />
                                    <span>
                                        <span className="block font-heading text-xl font-black uppercase text-foreground">
                                            Phone
                                        </span>
                                        <span className="mt-1 block text-sm leading-6 text-foreground/90">
                                            +{phone}
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div
                            data-slot="card"
                            data-size="default"
                            className="group/card flex flex-col gap-4 overflow-hidden bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl surface-panel rounded-lg transition hover:border-primary/40"
                        >
                            <div
                                data-slot="card-content"
                                className="group-data-[size=sm]/card:px-3 p-5"
                            >
                                <a href={email} className="flex gap-4">
                                    <Mail className="text-primary size-5" />
                                    <span>
                                        <span className="block font-heading text-xl font-black uppercase text-foreground">
                                            Email
                                        </span>
                                        <span className="mt-1 block text-sm leading-6 text-foreground/90">
                                            {email}
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div
                            data-slot="card"
                            data-size="default"
                            className="group/card flex flex-col gap-4 overflow-hidden bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl surface-panel rounded-lg"
                        >
                            <div
                                data-slot="card-content"
                                className="group-data-[size=sm]/card:px-3 flex gap-4 p-5"
                            >
                                <Clock className="text-primary size-5" />

                                <div>
                                    <div className="font-heading text-xl font-black uppercase text-foreground">
                                        Hours
                                    </div>
                                    <div className="mt-3 grid gap-3 text-sm leading-6 text-foreground/90">
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
                        <Link
                            href={googleMapShareLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            <Button className="w-full" >
                                Get Directions
                                <MapPin className=" size-5" /></Button>
                        </Link>
                    </div>
                    <div className="overflow-hidden relative rounded-lg border border-foreground/10 bg-black">

                        <iframe
                            src={googleMapPinUrl}
                            width="100%"
                            height="100%"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Iron Heaven location map"
                            style={{ border: 0, minHeight: 620 }}
                        />
                        <Link className="absolute inset-0 bg-black/5 z-10" href={googleMapShareLink} />
                        <div className="absolute bottom-0 sm:bottom-2 max-w-full sm:max-w-[80%]  border border-primary/25 bg-black/80 px-4 py-3 text-sm z-5">
                            <div className="font-heading font-black uppercase text-white text-sm">
                                {address}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex gap-2  items-center">
                                Health / Fitness <ArrowUp className='size-4  rotate-30' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    </div>
};

export default Contact;
