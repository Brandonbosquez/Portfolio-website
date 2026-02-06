import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    //Frontend
    { name: "HTML/CSS", level: 65, category: "frontend"},
    { name: "JavaScript", level: 60, category: "frontend"},
    { name: "Tailwind", level: 20, category: "frontend"},
    { name: "Node", level: 20, category: "frontend"},
    //{ name: " ", level: 95, category: "frontend"},

    //Backend
    //{ name: " ", level: 50, category: "backend"},
    { name: "Python", level: 40, category: "backend"},
    { name: "C++", level: 40, category: "backend"},
    { name: "C#", level: 50, category: "backend"},
    { name: "SQL", level: 50, category: "backend"},
    

    //Tools
    //{ name: " ", level: 50, category: "backend"},
    { name: "Github", level: 65, category: "tools"},
    { name: "Unity", level: 70, category: "tools"},
    { name: "Blender", level: 45, category: "tools"},
    { name: "VS Code", level: 65, category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory );
    
    return (
    <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(category)}
                    className= {cn("px-5 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-card text-primary-foreground" : "bg-transparent text-foreground hover:bg-secondary"
                    )}>
                        {category}
                    </button>

                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills,key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover text-secondary">
                        <div>
                            <h3 className="text-lg p-2">
                                {skills.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 reounded-full overflow-hidden"> 
                        <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out" 
                            style ={{width: skills.level + "%"}}
                        />
                        </div>
                    </div>
                ))}
            </div>


        </div>
    </section>
    );
};