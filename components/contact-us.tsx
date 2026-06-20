"use client"
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Contact = () => {
    const searchParams = useSearchParams();

    const gymName = searchParams.get("name") || "Rajpoot";
    const phone = searchParams.get("phone") || "+92 300 0000000";
    const city = searchParams.get("city") || "Multan";

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
                                    href="https://share.google/QqrDdwCNao5wRTUKp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-4"
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
                                        className="lucide lucide-map-pin mt-1 size-5 shrink-0 text-primary"
                                        aria-hidden="true"
                                    >
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                        <circle cx={12} cy={10} r={3} />
                                    </svg>
                                    <span>
                                        <span className="block font-heading text-xl font-black uppercase text-foreground">
                                            Address
                                        </span>
                                        <span className="mt-1 block text-sm leading-6 text-foreground/90">
                                            Sultan Ghee Mill, Gate # 2 Vehari Road, Fatima Jinnah Colony,
                                            Multan 66000
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
                                <a href="tel:+923078202141" className="flex gap-4">
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
                                        className="lucide lucide-phone mt-1 size-5 shrink-0 text-primary"
                                        aria-hidden="true"
                                    >
                                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                    </svg>
                                    <span>
                                        <span className="block font-heading text-xl font-black uppercase text-foreground">
                                            Phone
                                        </span>
                                        <span className="mt-1 block text-sm leading-6 text-foreground/90">
                                            +92 307 8202141
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
                                <a href="mailto:ironhaven141@gmail.com" className="flex gap-4">
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
                                        className="lucide lucide-mail mt-1 size-5 shrink-0 text-primary"
                                        aria-hidden="true"
                                    >
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                        <rect x={2} y={4} width={20} height={16} rx={2} />
                                    </svg>
                                    <span>
                                        <span className="block font-heading text-xl font-black uppercase text-foreground">
                                            Email
                                        </span>
                                        <span className="mt-1 block text-sm leading-6 text-foreground/90">
                                            ironhaven141@gmail.com
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
                                    className="lucide lucide-clock mt-1 size-5 shrink-0 text-primary"
                                    aria-hidden="true"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M12 6v6l4 2" />
                                </svg>
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
                        <a
                            href="https://share.google/QqrDdwCNao5wRTUKp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding foregroundspace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 font-heading text-xs font-black uppercase tracking-[0.18em]"
                        >
                            Get Directions
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
                                className="lucide lucide-arrow-right size-4"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-foreground/10 bg-black">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.5445946194645!2d71.52223177605894!3d30.1644336128748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b377bc78da87d%3A0xa0a0e131aaa9bddf!2sIron%20Heaven%20Gym!5e0!3m2!1sen!2sus!4v1771759534020!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Iron Heaven location map"
                            style={{ border: 0, minHeight: 620 }}
                        />
                    </div>
                </div>
            </section>

        </div>
    </div>
};

export default Contact;
