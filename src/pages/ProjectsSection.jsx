import { ExternalLink, Github, GithubIcon } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Jointed",
        year: "2024",
        description: "3D Puzzle Thriller using Unity game engine",
        image: "/projects/jointed.png",
        tags: ["Unity", "Group Project", "C#"],
        demoUrl: "https://kermakebi.itch.io/jointed",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Anima",
        year: "2024",
        description: "2D platformer using Unity game engine and C#",
        image: "/projects/anima.png",
        tags: ["Unity","C#","Game","Solo"],
        demoUrl: "https://brankku.itch.io/anima",
        githubUrl: "https://github.com/Brandonbosquez/Anima",
    },
    {
        id: 3,
        title: "Articfacts",
        description: "Website-based card game",
        image: "/projects/artic.png",
        tags: ["Solo","HTML-CSS","Python","JavaScript","SQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Brandonbosquez/Articfacts",
    },
    
];

export const ProjectsSection = () => {
    return (
        
        <section id="projects" className="py-24 px-4 relative">
            
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-primary-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects that I have worked on during the past 4 years of university. 
                    Each project was carefully crafted as an opportunity to learn and improve technical skills
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                        
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-1 mb-4 px-1">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border-primary-foreground rounded-full bg-background text-primary-foreground/70">
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
    </div>
   
        </section>
        
    );
};
