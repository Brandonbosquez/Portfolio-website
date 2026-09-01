
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-primary-foreground mb-12 max-w-xl mx-auto">
          I’m based in Espoo, Finland :) always open to new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">

          {/* Email */}
          <a 
            href="mailto:brandon.bosquez@outlook.com"
            className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/70 shadow hover:shadow-md transition"
          >
            <Mail className="w-5 h-5 text-secondary" />
            <span className="text-secondary">brandon.bosquez@outlook.com</span>
          </a>

          {/* Phone */}
          <a 
            href="tel:+358451662415"
            className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/70 shadow hover:shadow-md transition"
          >
            <Phone className="w-5 h-5 text-secondary" />
            <span className="text-secondary">+358 45 166 2415</span>
          </a>

          {/* Location */}
          <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card/60 shadow">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-secondary">Espoo, Finland</span>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-6 p-4 rounded-lg bg-card/60 shadow">
            <a href="https://github.com/Brandonbosquez" target="_blank" rel="noopener noreferrer">
              <Github className="text-secondary w-6 h-6 hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/brandon-b%C3%B3squez-gonzal-85a48436b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className=" text-secondary w-6 h-6 hover:text-primary transition" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
