import { useEffect, useRef } from "react";
import { ExternalLink, Github, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "AI Chatbot Internship",
        organization: "Nokia / Metropolia Software Factory",
        period: "May – August 2026",
        description: "Developed backend services in Python using Flask and MongoDB, and built a JavaScript/HTML frontend for testing — integrated into a larger project built with the Unity game engine.",
        tags: ["Python", "Flask", "MongoDB", "JavaScript", "Unity"],
    },
    {
        id: 2,
        role: "Unity Developer — Games Against Misinformation",
        organization: "Erasmus+ Exchange, Lodz University of Technology, Poland",
        period: "May – June 2026",
        description: "Developed The Puppeteer, a small video game in Unity aimed at raising awareness about misinformation, as part of an international exchange program.",
        tags: ["Unity", "C#", "Game Design"],
    },
];

const projects = [
    {
        id: 1,
        title: "The Puppeteer",
        year: "2026",
        description: "2D narrative strategy game about how misinformation spreads through everyday choices, built during an Erasmus+ exchange in Poland.",
        image: "/projects/puppeteer.png",
        tags: ["Unity", "C#", "Erasmus+", "Group Project"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Jointed",
        year: "2024",
        description: "3D Puzzle Thriller using Unity game engine",
        image: "/projects/jointed.jpg",
        tags: ["Unity", "Group Project", "C#"],
        demoUrl: "https://kermakebi.itch.io/jointed",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Anima",
        year: "2024",
        description: "2D platformer using Unity game engine and C#",
        image: "/projects/anima.png",
        tags: ["Unity","C#","Game","Solo"],
        demoUrl: "https://brankku.itch.io/anima",
        githubUrl: "https://github.com/Brandonbosquez/Anima",
    },
    {
        id: 4,
        title: "Articfacts",
        year: "2024",
        description: "Website-based card game",
        image: "/projects/artic.png",
        tags: ["Solo","HTML-CSS","Python","JavaScript","SQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Brandonbosquez/Articfacts",
    },

];

export const ProjectsSection = () => {
    const carouselRef = useRef(null);
    const interactedRef = useRef(false);

    const scrollByCards = (direction) => {
        interactedRef.current = true;
        const el = carouselRef.current;
        if (!el) return;
        const card = el.querySelector("[data-project-card]");
        const amount = card ? card.offsetWidth + 32 : el.clientWidth;
        el.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    // One-time hint: peek at the next card so wide screens notice the
    // carousel scrolls, then ease back — cancelled by any user interaction.
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;

        const timers = [];
        const restoreSnap = () => {
            el.style.scrollSnapType = "";
        };
        // Note: on interaction we deliberately do NOT restore snap here —
        // if the user interrupts mid-peek (off a snap point), re-enabling
        // snap-mandatory would itself yank the scroll back to 0. Snap only
        // gets restored at the end of an uninterrupted hint sequence below.
        const markInteracted = () => {
            interactedRef.current = true;
            timers.forEach(clearTimeout);
        };
        el.addEventListener("pointerdown", markInteracted, { passive: true });
        el.addEventListener("wheel", markInteracted, { passive: true });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || interactedRef.current) return;
                observer.disconnect();
                if (el.scrollWidth <= el.clientWidth + 4) return;

                const card = el.querySelector("[data-project-card]");
                const peek = card ? card.offsetWidth * 0.25 : 80;

                timers.push(
                    setTimeout(() => {
                        if (interactedRef.current) return;
                        // Scroll-snap would otherwise yank the peek straight
                        // back to 0 before it's visible — suspend it for the hint.
                        el.style.scrollSnapType = "none";
                        el.scrollTo({ left: peek, behavior: "smooth" });
                        timers.push(
                            setTimeout(() => {
                                if (!interactedRef.current) {
                                    el.scrollTo({ left: 0, behavior: "smooth" });
                                }
                                timers.push(setTimeout(restoreSnap, 700));
                            }, 900)
                        );
                    }, 700)
                );
            },
            { threshold: 0.4 }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            timers.forEach(clearTimeout);
            el.removeEventListener("pointerdown", markInteracted);
            el.removeEventListener("wheel", markInteracted);
        };
    }, []);

    return (

        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Experience <span className="text-primary"> & Projects </span>
                </h2>

                <p className="text-center text-primary-foreground mb-12 max-w-2xl mx-auto">
                    Here's my professional experience so far, along with some of the projects I've worked on during the past 4 years of university.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="gradient-border bg-card p-6 card-hover"
                        >
                            <div className="flex items-start gap-4 mb-3">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-5 w-5 text-secondary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                                    <p className="text-sm text-secondary">{exp.organization}</p>
                                    <p className="text-xs text-primary-foreground/60 mt-0.5">{exp.period}</p>
                                </div>
                            </div>

                            <p className="text-primary-foreground text-sm mb-4 text-left">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border-primary-foreground rounded-full bg-background text-primary-foreground/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h3>

                <div
                    ref={carouselRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {projects.map((project) => (
                        <div
                        key={project.id}
                        data-project-card
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover lg:shrink-0 lg:snap-start lg:w-[calc(33.333%-1.334rem)]"
                        >

                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-1 mb-4 px-1">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border-primary-foreground rounded-full bg-background text-primary-foreground/70">
                                        {tag}
                                    </span>
                                ))}

                     </div>

                <h3 className="text-xl text-primary font-semibold mb-1">{project.title} </h3>
                <p className="text-primary-foreground text-sm mb-4">
                    {project.description}
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                        <a href={project.demoUrl}
                        className="text-primary-foreground/60 hover:text-primary transition-colors duration-300"
                        target="_blank"
                        >
                            <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl}
                        className="text-primary-foreground/60 hover:text-primary transition-colors duration-300"
                        target="_blank"
                        >
                            <Github />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
             ))}
        </div>

        <div className="hidden lg:flex justify-center gap-4 mt-8">
            <button
                onClick={() => scrollByCards(-1)}
                aria-label="Previous projects"
                className="p-2 rounded-full border border-foreground text-foreground hover:bg-secondary transition-colors duration-300"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => scrollByCards(1)}
                aria-label="Next projects"
                className="p-2 rounded-full border border-foreground text-foreground hover:bg-secondary transition-colors duration-300"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    </div>

        </section>

    );
};
