import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useLanguage } from "../i18n/useLanguage";


export const ThemeToggle = () => {
    const { t } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };



    return (
        <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? t("theme.toLight") : t("theme.toDark")}
            className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}>
            {" "}
            {isDarkMode ?  (
                <Sun strokeWidth={1.5} className="h-6 w-6 text-gray-300" />
                ) : ( 
                <Moon strokeWidth={1.5} className="h-6 w-6 text-gray-400 " />
                )} 
        </button>
    );
};


