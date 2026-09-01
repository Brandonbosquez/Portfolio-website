import { useState } from "react";
import { cn } from "../lib/utils";

const skillCategories = [
    {
        id: "languages",
        name: "Languages",
        skills: [
            { name: "C#" },
            { name: "Python" },
            { name: "JavaScript" },
            { name: "HTML/CSS" },
            { name: "C++", note: "Familiar" },
        ],
    },
    {
        id: "frameworks",
        name: "Frameworks & Tools",
        skills: [
            { name: "React" },
            { name: "Tailwind CSS" },
            { name: "Git/GitHub" },
            { name: "VS Code" },
            { name: "Flask", note: "Familiar" },
            { name: "MongoDB", note: "Familiar" },
            { name: "SQL", note: "Familiar" },
        ],
    },
    {
        id: "gamedev",
        name: "Game Development",
        skills: [
            { name: "Unity" },
            { name: "Blender", note: "Basic" },
            { name: "Unreal Engine", note: "Basic" },
        ],
    },
];

const categories = ["all", ...skillCategories.map((c) => c.id)];

const categoryLabel = (id) =>
    id === "all" ? "all" : skillCategories.find((c) => c.id === id).name;

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const visibleCategories =
        activeCategory === "all"
            ? skillCategories
            : skillCategories.filter((c) => c.id === activeCategory);

    return (
    <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button key={category}
                    onClick={() => setActiveCategory(category)}
                    className= {cn("px-5 py-1 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-card text-primary-foreground" : "bg-transparent text-foreground hover:bg-secondary"
                    )}>
                        {categoryLabel(category)}
                    </button>

                ))}

            </div>

            <div className="space-y-10">
                {visibleCategories.map((category) => (
                    <div key={category.id}>
                        <h3 className="text-lg font-semibold text-secondary mb-4 text-center md:text-left">
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="px-4 py-2 rounded-full bg-card text-secondary text-sm font-medium card-hover"
                                >
                                    {skill.name}
                                    {skill.note && (
                                        <span className="ml-1.5 text-xs text-primary-foreground/60">
                                            · {skill.note}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
    );
};
