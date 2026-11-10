import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { supportedLanguages, translations } from "./translations";

const resolve = (dict, path) =>
    path.split(".").reduce((node, key) => (node == null ? undefined : node[key]), dict);

// The language comes from the URL: "/" is English (the default), "/es" is
// Spanish, "/fi" is Finnish. That makes each language directly linkable.
export const LanguageProvider = ({ children }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const firstSegment = pathname.split("/")[1];
    const lang = supportedLanguages.includes(firstSegment) ? firstSegment : "en";

    // t("a.b.c") -> value in the active language, falling back to English,
    // then to the key itself so a missing string is visible instead of blank.
    const t = useCallback(
        (path) => resolve(translations[lang], path) ?? resolve(translations.en, path) ?? path,
        [lang]
    );

    const setLanguage = useCallback(
        (code) => navigate(code === "en" ? "/" : `/${code}`, { replace: true }),
        [navigate]
    );

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = t("meta.title");
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", t("meta.description"));
    }, [lang, t]);

    const value = useMemo(
        () => ({ lang, t, setLanguage, languages: supportedLanguages }),
        [lang, t, setLanguage]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
