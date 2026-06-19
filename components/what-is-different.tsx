import React from 'react'
interface WhatTakeUsApartProps {
  gymName: string;
  city: string;
}
const WhatTakeUsApart = ({gymName,city}:WhatTakeUsApartProps) => {
    return (
        <section className="w-full bg-black py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    What sets us <span className="text-primary">apart</span>
                </h2>
                <p className="text-foreground/90 mt-4 max-w-2xl mx-auto">
                    We built {gymName} Gym {city} for people who refuse to settle. Every
                    detail, from our equipment to our coaches, exists to push you toward your
                    best self.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="group relative text-center">
                        <div className="overflow-hidden rounded-md relative h-64">
                            <img
                                src="https://images.pexels.com/photos/13885345/pexels-photo-13885345.jpeg"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt="Expert Trainers"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-6 text-left">
                                <h3 className="text-foreground text-xl font-semibold">
                                    World-class equipment
                                </h3>
                                <p className="text-foreground/90 text-sm mt-1">
                                    Olympic platforms, competition barbells, and conditioning tools
                                    that demand respect.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative text-center">
                        <div className="overflow-hidden rounded-md relative h-64">
                            <img
                                src="https://images.pexels.com/photos/30672398/pexels-photo-30672398.jpeg"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt="Modern Equipment"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-6 text-left">
                                <h3 className="text-foreground text-xl font-semibold">
                                    Certified expert coaches
                                </h3>
                                <p className="text-foreground/90 text-sm mt-1">
                                    Every coach holds Level 2 certification and years of real
                                    experience with athletes like you.{/* */}{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative text-center">
                        <div className="overflow-hidden rounded-md relative h-64">
                            <img
                                src="https://images.pexels.com/photos/38167588/pexels-photo-38167588.jpeg"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                alt="Personal Plans"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/60 to-transparent p-6 text-left">
                                <h3 className="text-foreground text-xl font-semibold">
                                    Community that matters
                                </h3>
                                <p className="text-foreground/90 text-sm mt-1">
                                    Train alongside people who understand the work and won't let you
                                    quit.{/* */}{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatTakeUsApart