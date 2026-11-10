import { useEffect, useRef } from "react";
import { ExternalLink, Github, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

// Translatable text (role, description, ...) lives in src/i18n/translations.js,
// keyed by `slug`. Tag labels are looked up in `tags`; anything without a
// translation (tech names like "Unity") is shown as-is.
const experiences = [
    {
        id: 1,
        slug: "chatbot",
        tags: ["Python", "Flask", "MongoDB", "JavaScript", "Unity"],
    },
    {
        id: 2,
        slug: "erasmus",
        tags: ["Unity", "C#", "Game Design"],
    },
];

const projects = [
    {
        id: 1,
        slug: "puppeteer",
        title: "The Puppeteer",
        year: "2026",
        image: "/projects/puppeteer.png",
        tags: ["Unity", "C#", "Erasmus+", "Group Project"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        slug: "jointed",
        title: "Jointed",
        year: "2024",
        image: "/projects/jointed.jpg",
        tags: ["Unity", "Group Project", "C#"],
        demoUrl: "https://kermakebi.itch.io/jointed",
        githubUrl: "#",
    },

    {
        id: 3,
        slug: "anima",
        title: "Anima",
        year: "2024",
        image: "/projects/anima.png",
        tags: ["Unity","C#","Game","Solo"],
        demoUrl: "https://brankku.itch.io/anima",
        githubUrl: "https://github.com/Brandonbosquez/Anima",
    },
    {
        id: 4,
        slug: "articfacts",
        title: "Articfacts",
        year: "2024",
        image: "/projects/artic.png",
        tags: ["Solo","HTML-CSS","Python","JavaScript","SQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Brandonbosquez/Articfacts",
    },

];

export const ProjectsSection = () => {
    const { t } = useLanguage();
    const carouselRef = useRef(null);
    const tagLabels = t("tags");
    const tagLabel = (tag) => tagLabels[tag] ?? tag;
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
                    {t("projects.title.lead")} <span className="text-primary">{t("projects.title.accent")}</span>
                </h2>

                <p className="text-center text-primary-foreground mb-12 max-w-2xl mx-auto">
                    {t("projects.intro")}
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
                                    <h3 className="text-lg font-semibold text-primary">{t(`projects.experience.${exp.slug}.role`)}</h3>
                                    <p className="text-sm text-secondary">{t(`projects.experience.${exp.slug}.organization`)}</p>
                                    <p className="text-xs text-primary-foreground/60 mt-0.5">{t(`projects.experience.${exp.slug}.period`)}</p>
                                </div>
                            </div>

                            <p className="text-primary-foreground text-sm mb-4 text-left">
                                {t(`projects.experience.${exp.slug}.description`)}
                            </p>

                            <div className="flex flex-wrap gap-1">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border-primary-foreground rounded-full bg-background text-primary-foreground/70">
                                        {tagLabel(tag)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    {t("projects.featured.lead")} <span className="text-primary">{t("projects.featured.accent")}</span>
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
                                        {tagLabel(tag)}
                                    </span>
                                ))}

                     </div>

                <h3 className="text-xl text-primary font-semibold mb-1">{project.title} </h3>
                <p className="text-primary-foreground text-sm mb-4">
                    {t(`projects.items.${project.slug}.description`)}
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
                aria-label={t("projects.previous")}
                className="p-2 rounded-full border border-foreground text-foreground hover:bg-secondary transition-colors duration-300"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => scrollByCards(1)}
                aria-label={t("projects.next")}
                className="p-2 rounded-full border border-foreground text-foreground hover:bg-secondary transition-colors duration-300"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    </div>

        </section>

    );
};
