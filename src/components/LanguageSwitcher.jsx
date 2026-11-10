import { cn } from "../lib/utils";
import { languageNames } from "../i18n/translations";
import { useLanguage } from "../i18n/useLanguage";

export const LanguageSwitcher = ({ className }) => {
    const { lang, setLanguage, languages, t } = useLanguage();

    return (
        <div
            role="group"
            aria-label={t("language.label")}
            className={cn("flex items-center gap-1", className)}
        >
            {languages.map((code) => (
                <button
                    key={code}
                    type="button"
                    lang={code}
                    title={languageNames[code]}
                    aria-label={languageNames[code]}
                    aria-pressed={lang === code}
                    onClick={() => setLanguage(code)}
                    className={cn(
                        "px-2 py-1 rounded-full text-sm font-medium uppercase transition-colors duration-300",
                        lang === code
                            ? "bg-card text-primary-foreground"
                            : "text-primary-foreground/70 hover:text-primary"
                    )}
                >
                    {code}
                </button>
            ))}
        </div>
    );
};
