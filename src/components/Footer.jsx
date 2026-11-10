import { useLanguage } from "../i18n/useLanguage";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 bg-card/50 border-t">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-primary-foreground">
          © {new Date().getFullYear()} Brandon — {t("footer.rights")}
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#photography" className="hover:text-primary transition">{t("nav.photography")}</a>
          <a href="#contact" className="hover:text-primary transition">{t("nav.contact")}</a>
        </div>

      </div>
    </footer>
  );
};
