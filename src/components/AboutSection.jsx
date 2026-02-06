import { Briefcase, Code, Heart, User, User2 } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className = "py-24 px-relative">
            {" "}
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-secondary text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary font-medium"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-secondary space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer</h3>

                        <p className="">
                            I’m an IT student at Metropolia University of Applied Sciences specializing in Game Development. I’m passionate about software development, problem-solving, and creating interactive experiences.
                        </p>

                        <p>
                           With a multicultural background from Panama and Finland, <span className="font-semibold italic">I bring an open-minded and creative perspective to my work.</span> My interests span technology, science, and the arts, and I enjoy combining these areas in projects involving design, photography, and development with technical skills.

                            
                            
                        </p>

                        <p>
                            I’m always looking for opportunities to grow, collaborate, and build meaningful digital experiences.
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="/BOSQUEZ_BRANDON_CV.pdf" className="clear-button" download>
                                 {" "}
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 text-secondary">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-secondary "> </Code>
                                </div>
                                <div className="text-left text-secondary">
                                    <h4 className="font-semibold text-lg">Software Development</h4>
                                    <p className=" text-sm">Strong foundation in programming, problem-solving, and software design principles.</p>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-secondary"> </User>
                                </div>
                                  <div className="text-left">
                                    <h4 className="font-semibold text-lg">IT Student</h4>
                                    <p className="text-muted-foreground text-sm">Fourth-year Information Technology student at Metropolia University of Applied Sciences, specializing in Game Development.</p>
                                </div>
                               
                                
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-secondary"> </Briefcase>
                                </div>
                                  <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Work</h4>
                                    <p className="text-muted-foreground text-sm">Hands-on experience developing multiple academic and personal projects using a variety of tools and technologies, both independently and in team environments.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Heart className="h-6 w-6 text-secondary"> </Heart>
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Curious & Passionate</h4>
                                    <p className="text-muted-foreground text-sm">Passionate about technology and continuous learning. I enjoy blending technical and creative interests.</p>
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>  

                </div>
            </div>


        </section>
    )
}