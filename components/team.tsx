
const teamMembers = [
    {
        name: "Zia Khan",
        image: "/gym/pexels-foadshariyati-29793975.jpg",
        role: "Chief Executive Officer",
    },
    {
        name: "Muhammad Ahmad",
        image: "/gym/pexels-foadshariyati-29773891.jpg",
        role: "Personal Trainer",
    },
    {
        name: "Zeeshan Malik",
        image: "/gym/pexels-foadshariyati-29773892.jpg",
        role: "Personal Trainer",
    },
    {
        name: "Asad Ali",
        image: "/gym/pexels-foadshariyati-29793975.jpg",
        role: "Personal Trainer",
    },
    {
        name: "Ahsan Ch",
        image: "/gym/pexels-foadshariyati-30165254.jpg",
        role: "Personal Trainer",
    },
    {
        name: "M.Dilawer",
        image: "/gym/pexels-foadshariyati-30206158.jpg",
        role: "Personal Trainer",
    },
    {
        name: "Waqas Ahmad",
        image: "/gym/pexels-foadshariyati-30206161.jpg",
        role: "Personal Trainer",
    },
    {
        name: "Zafar Ameen",
        image: "/gym/pexels-foadshariyati-30283460.jpg",
        role: "Personal Trainer",
    },
];

const Team = () => {
    return (
        <div  className="mx-auto max-w-7xl px-6 py-20">
            <h2  className="text-balance text-center font-medium text-3xl tracking-[-0.04em] sm:text-4xl md:text-[2.75rem]">
                Our <strong className="text-primary">Leading Team</strong>
            </h2>
            <p className="mt-3 text-balance text-center text-lg text-muted-foreground tracking-[-0.01em] md:text-2xl">
                These are the people who will push you harder than you thought possible.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <div data-aos="fade-left" className="border bg-muted py-8" key={index}>
                        <div className="mx-auto aspect-square max-w-48 overflow-hidden rounded-full bg-muted">
                            <img alt={member.name} src={member.image} />
                        </div>
                        <p className="mt-6 text-center font-medium text-lg">
                            {member.name}
                        </p>
                        <p className="mt-0.5 text-center text-muted-foreground">
                            {member.role}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
