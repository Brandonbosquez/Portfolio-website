import { useLanguage } from "../i18n/useLanguage";

export const NotFound = () => {
    const { lang, t } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
            <p className="text-secondary text-lg mb-2">404</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t("notFound.title.lead")} <span className="text-primary">{t("notFound.title.accent")}</span>
            </h1>
            <p className="text-primary-foreground mb-8 max-w-md">
                {t("notFound.text")}
            </p>
            <a href={lang === "en" ? "/" : `/${lang}`} className="cosmic-button">
                {t("notFound.back")}
            </a>
        </div>
    );
};
