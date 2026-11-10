import { Briefcase, Code, Heart, User } from "lucide-react"
import { useLanguage } from "../i18n/useLanguage"

const cards = [
    { key: "dev", icon: Code },
    { key: "student", icon: User },
    { key: "work", icon: Briefcase },
    { key: "curious", icon: Heart },
];

export const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className = "py-24 px-relative">
            {" "}
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-secondary text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("about.title.lead")} <span className="text-primary font-medium">{t("about.title.accent")}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-secondary space-y-6">
                        <h3 className="text-2xl font-semibold">{t("about.subtitle")}</h3>

                        <p>{t("about.p1")}</p>

                        <p>
                            {t("about.p2Before")}<span className="font-semibold italic">{t("about.p2Emphasis")}</span>{t("about.p2After")}
                        </p>

                        <p>{t("about.p3")}</p>


                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {t("about.getInTouch")}
                            </a>

                            <a href={t("cvPath")} className="clear-button" download>
                                {t("about.downloadCv")}
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 text-secondary">
                        {cards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.key} className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Icon className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">{t(`about.cards.${card.key}.title`)}</h4>
                                            <p className="text-sm">{t(`about.cards.${card.key}.text`)}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>


        </section>
    )
}
