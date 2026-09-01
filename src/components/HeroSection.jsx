import pfp from "../assets/DSCF1411-HD-locontrast.jpg";
import { ArrowDown, Rocket } from "lucide-react";

export const HeroSection = () => {
    return <section 
    id="hero" 
    className="relative min-h-screen flex items-start justify-start px-8 py-12"
  >
    <div className="flex flex-col md:flex-row gap-12 w-full">
      
      {/* Left side: text + image */}
      <div className="flex flex-col items-center text-left space-y-6 md:w-1/2 py-10">
        <div className="space-y-2">
            <p>
                <span className="opacity-0 animate-fade-in text-lg md:text-xl text-secondary">Hola, I'm </span>
                <span className="opacity-0 animate-fade-in-delay-1 text-2xl md:text-3xl font-medium text-primary-foreground">Brandon</span>
            </p>
          <p className="opacity-0 animate-fade-in-delay-2 text-5xl md:text-7xl font-extrabold text-primary font-serif">BÓSQUEZ</p>
          
        </div>
        <img
          src={pfp}
          alt="Brandon Bósquez"
          className="opacity-0 animate-fade-in-delay-3 mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
  

      {/* Right side: paragraph */}
      <div className="md:w-1/2 flex flex-col items-center mt-4 justify-center">
        <p className="opacity-0 animate-fade-in-delay-3 text-base md:text-lg text-primary-foreground">
          I’m a passionate <span className="font-bold text-primary"> IT student </span> specializing in Game Development, currently looking for my next internship opportunity.
          This portfolio showcases my journey through school and beyond <Rocket  strokeWidth={1.5} className="inline-block text-secondary"></Rocket>
        </p>

        <a href="#projects" className="opacity-0 animate-fade-in-delay-4 cosmic-button mt-3">
            View my Work
        </a>

      </div>

    </div>

    <div className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-secondary text-sm"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-secondary"/>

    </div>

  </section>
}