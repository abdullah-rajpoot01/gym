"use client"
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Contact = () => {
    const searchParams = useSearchParams();

    const gymName = searchParams.get("name") || "Rajpoot";
    const phone = searchParams.get("phone") || "+92 300 0000000";
    const city = searchParams.get("city") || "Multan";

    return <div className="flex min-h-screen items-center justify-center pt-30 pb-16  bg-black/90 bg-[url('/gym/pexels-dimkidama-6796964.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
        <div className="mx-auto text-center w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
            <b className="font-medium text-white text-sm uppercase tracking-wide">
                Contact Us | {gymName} Gym
            </b>
            <h2 className="mt-3 text-white/80 font-medium text-4xl tracking-[-0.04em]">
                We&apos;d love to hear from you
            </h2>
            <p className="mt-3 text-white/80 text-lg  md:text-xl">
                Our friendly team is always here to chat.
            </p>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div data-aos={"fade-left"} className="border border-dashed  p-6 pb-8 bg-white">
                    <div className="flex mx-auto h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-muted">
                        <MailIcon />
                    </div>
                    <h3 className="mt-8 font-medium text-xl">Email</h3>
                    <p className="mt-1.5 mb-4 text-muted-foreground">
                        Our friendly team is here to help.
                    </p>
                    <Link
                        className="font-medium"
                        href={`mailto:${gymName}gym@gmail.com`}
                    >
                        {gymName}gym@gmail.com
                    </Link>
                </div>
                <div data-aos={"fade-left"} className="border border-dashed p-6 pb-8 bg-white">
                    <div className="flex mx-auto h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-muted">
                        <MessageCircle />
                    </div>
                    <h3 className="mt-8 font-medium text-xl">WhatsApp Chat</h3>
                    <p className="mt-1.5 mb-4 text-muted-foreground">
                        Chat with us instantly on WhatsApp.

                    </p>
                    <Link className="font-medium" href={`https://wa.me/${phone}`}
                        target="_blank">
                        +{phone}
                    </Link>
                </div>
                <div data-aos={"fade-left"} className="border border-dashed p-6 pb-8 bg-white">
                    <div className="flex mx-auto  h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-muted">
                        <PhoneIcon />
                    </div>
                    <h3 className="mt-8 font-medium text-xl">Phone</h3>
                    <p className="mt-1.5 mb-4 text-muted-foreground">
                        Mon-Fri from 6am to 10pm.
                    </p>
                    <Link className="font-medium" href="tel:+923460881219">
                        +{phone}
                    </Link>
                </div>
                {/* <div
                    data-aos="fade-left"
                    className=" lg:col-span-3 border border-dashed p-6 pb-8 bg-white"
                >
                    <div className="flex mx-auto h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-muted">
                        <MapPinIcon />
                    </div>

                    <h3 className="mt-8 font-medium text-xl">Our Location</h3>

                    <p className="mt-1.5 mb-4 text-muted-foreground">
                        Kashmir Road, Street 2, City Care Street <br />
                        Khanewal, Pakistan
                    </p>

                    <div className="overflow-hidden rounded-lg border">
                        <iframe
                            src="https://maps.google.com/maps?q=30.2985933,71.9347534&z=17&output=embed"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Zaki Gym Location"
                        />
                    </div>

                    <Link
                        href="https://www.google.com/maps?q=30.2985933,71.9347534&z=17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block font-medium"
                    >
                        Open in Google Maps
                    </Link>
                </div> */}
            </div>
        </div>
    </div>
};

export default Contact;
