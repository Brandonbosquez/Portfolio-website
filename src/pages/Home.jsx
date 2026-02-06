import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle" ;
import {StarBackground} from "@/components/StarBackground";
import { BackgroundGlow } from "../components/BackgroundGlow";

import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { PhotographySection } from "../components/PhotographySection";
import { ContactSection } from "./ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return ( 
        <div className="min-h-screen  bg-background text-foreground overflow-x-hidden"> 
            
            {/* Theme Toggle */}
                <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />
            <BackgroundGlow />

            {/* Navbar */}
            <Navbar/>

            {/* Main Content*/}
            <main className="relative z-10">
                <HeroSection />
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection />
                <PhotographySection/>
                <ContactSection />
               
              
            </main>

        

            {/*Footer*/}
            <Footer />

        </div>
    );
};