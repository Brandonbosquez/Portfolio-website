import { useState } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../i18n/useLanguage";

// Skill names are technology names and stay untranslated; only the category
// labels and the "Familiar"/"Basic" notes go through t().
const skillCategories = [
    {
        id: "languages",
        skills: [
            { name: "C#" },
            { name: "Python" },
            { name: "JavaScript" },
            { name: "HTML/CSS" },
            { name: "C++", note: "familiar" },
        ],
    },
    {
        id: "frameworks",
        skills: [
            { name: "React" },
            { name: "Tailwind CSS" },
            { name: "Git/GitHub" },
            { name: "VS Code" },
            { name: "Flask", note: "familiar" },
            { name: "MongoDB", note: "familiar" },
            { name: "SQL", note: "familiar" },
        ],
    },
    {
        id: "gamedev",
        skills: [
            { name: "Unity" },
            { name: "Blender", note: "basic" },
            { name: "Unreal Engine", note: "basic" },
        ],
    },
];

const categories = ["all", ...skillCategories.map((c) => c.id)];

export const SkillsSection = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("all");

    const categoryLabel = (id) => (id === "all" ? t("skills.all") : t(`skills.categories.${id}`));

    const visibleCategories =
        activeCategory === "all"
            ? skillCategories
            : skillCategories.filter((c) => c.id === activeCategory);

    return (
    <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                {t("skills.title.lead")} <span className="text-primary">{t("skills.title.accent")}</span>
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
                            {categoryLabel(category.id)}
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
                                            · {t(`skills.notes.${skill.note}`)}
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
