
const teamMembers = [
    {
        name: "Liam Martinez",
        image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
        role: "Chief Executive Officer",
    },
    {
        name: "Ava Thompson",
        image: "https://mockmind-api.uifaces.co/content/human/65.jpg",
        role: "Chief Technology Officer",
    },
    {
        name: "Sophia Patel",
        image: "https://mockmind-api.uifaces.co/content/human/25.jpg",
        role: "Head of Design",
    },
    {
        name: "Noah Chen",
        image: "https://mockmind-api.uifaces.co/content/human/104.jpg",
        role: "Product Manager",
    },
    {
        name: "Emma Garcia",
        image: "https://mockmind-api.uifaces.co/content/human/19.jpg",
        role: "Software Engineer",
    },
    {
        name: "Ethan Kim",
        image: "https://mockmind-api.uifaces.co/content/human/80.jpg",
        role: "DevOps Engineer",
    },
    {
        name: "Mia Johnson",
        image: "https://mockmind-api.uifaces.co/content/human/20.jpg",
        role: "Marketing Lead",
    },
    {
        name: "Oliver Singh",
        image: "https://mockmind-api.uifaces.co/content/human/90.jpg",
        role: "Customer Success Manager",
    },
];

const Team = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-balance text-center font-medium text-3xl tracking-[-0.04em] sm:text-4xl md:text-[2.75rem]">
                Our <strong className="text-primary">Leading Team</strong>
            </h2>
            <p className="mt-3 text-balance text-center text-lg text-muted-foreground tracking-[-0.01em] md:text-2xl">
                These are the people who will push you harder than you thought possible.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <div className="border bg-muted py-8" key={index}>
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
