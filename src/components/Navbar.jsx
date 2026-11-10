import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";
import { LanguageSwitcher } from "./LanguageSwitcher";


const navItems = [
    {key: "home", href: "#hero"},
    {key: "about", href: "#about"},
    {key: "skills", href: "#skills"},
    {key: "projects", href: "#projects"},
    {key: "photography", href: "#photography"},
    {key: "contact", href: "#contact"},

];

export const Navbar = () => {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect ( () => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
         )}
     >

        <div className="container flex items-center justify-between pr-13 sm:pr-20">
            <a className="text-xl font-semibold text-primary-foreground flex items-center"
                href="#hero"
            >
                <span className="relative z-10">
                    <span className="text-glow font-normal text-secondary/40"> Bran's </span>{" "}
                     Portfolio
                </span>
            </a>

            {/*Desktop version nav */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                    <a key={item.key} href={item.href} className="text-primary-foreground/80 hover:text-primary hover:font-medium transition-colors-duration-300" >
                        {t(`nav.${item.key}`)}
                    </a>
                ))}
                <LanguageSwitcher />
            </div>

             {/*Mobile version*/}

            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                >
                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{""}
            </button>

            <div
                className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 lg:hidden",
                isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center space-y-8">
                    {navItems.map((item) => (
                        <a
                        key={item.key}
                        href={item.href}
                        className="text-primary-foreground/80 hover:text-primary hover:font-medium transition-colors-duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        >
                            {t(`nav.${item.key}`)}
                        </a>
                    ))}
                    <LanguageSwitcher className="pt-4" />
                </div>
            </div>

        </div>

     </nav>
    );
};
