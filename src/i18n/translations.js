// All user-facing copy lives here. English is the source of truth and the
// fallback: any key missing from es/fi falls back to the English value.
//
// Headings are split into { lead, accent } because the accent part is
// rendered in the highlight color.

export const supportedLanguages = ["en", "es", "fi"];

// Endonyms: always shown in their own language, regardless of the active one.
export const languageNames = {
    en: "English",
    es: "Español",
    fi: "Suomi",
};

export const translations = {
    en: {
        meta: {
            title: "Brandon Bósquez | Portfolio",
            description:
                "Portfolio of Brandon Bósquez, an IT student specializing in Game Development at Metropolia University of Applied Sciences. Projects, experience, skills, and photography.",
        },
        // TODO: add translated CV PDFs to /public and point es/fi at them
        // (e.g. "/BOSQUEZ_BRANDON_CV_ES.pdf"). Until then all languages serve the English CV.
        cvPath: "/BOSQUEZ_BRANDON_CV.pdf",
        language: { label: "Language" },
        theme: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            photography: "Photography",
            contact: "Contact",
            openMenu: "Open Menu",
            closeMenu: "Close Menu",
        },
        hero: {
            greeting: "Hola, I'm ",
            introBefore: "I’m a passionate ",
            introHighlight: "IT student",
            introAfter:
                " specializing in Game Development, currently looking for my next internship opportunity. This portfolio showcases my journey through school and beyond ",
            cta: "View my Work",
            scroll: "Scroll",
        },
        about: {
            title: { lead: "About", accent: "Me" },
            subtitle: "Passionate Software Developer",
            p1: "I’m an IT student at Metropolia University of Applied Sciences specializing in Game Development. I’m passionate about software development, problem-solving, and creating interactive experiences.",
            p2Before: "With a multicultural background from Panama and Finland, ",
            p2Emphasis: "I bring an open-minded and creative perspective to my work.",
            p2After:
                " My interests span technology, science, and the arts, and I enjoy combining these areas in projects involving design, photography, and development with technical skills.",
            p3: "I’m always looking for opportunities to grow, collaborate, and build meaningful digital experiences.",
            getInTouch: "Get In Touch",
            downloadCv: "Download CV",
            cards: {
                dev: {
                    title: "Software Development",
                    text: "Strong foundation in programming, problem-solving, and software design principles.",
                },
                student: {
                    title: "IT Student",
                    text: "Fourth-year Information Technology student at Metropolia University of Applied Sciences, specializing in Game Development.",
                },
                work: {
                    title: "Project Work",
                    text: "Hands-on experience developing multiple academic and personal projects using a variety of tools and technologies, both independently and in team environments.",
                },
                curious: {
                    title: "Curious & Passionate",
                    text: "Passionate about technology and continuous learning. I enjoy blending technical and creative interests.",
                },
            },
        },
        skills: {
            title: { lead: "My", accent: "Skills" },
            all: "All",
            categories: {
                languages: "Languages",
                frameworks: "Frameworks & Tools",
                gamedev: "Game Development",
            },
            notes: { familiar: "Familiar", basic: "Basic" },
        },
        tags: {
            "Group Project": "Group Project",
            Solo: "Solo",
            Game: "Game",
            "Game Design": "Game Design",
        },
        projects: {
            title: { lead: "Experience", accent: "& Projects" },
            intro: "Here's my professional experience so far, along with some of the projects I've worked on during the past 4 years of university.",
            featured: { lead: "Featured", accent: "Projects" },
            previous: "Previous projects",
            next: "Next projects",
            experience: {
                chatbot: {
                    role: "AI Chatbot Internship",
                    organization: "Nokia / Metropolia Software Factory",
                    period: "May – August 2026",
                    description:
                        "Developed backend services in Python using Flask and MongoDB, and built a JavaScript/HTML frontend for testing — integrated into a larger project built with the Unity game engine.",
                },
                erasmus: {
                    role: "Unity Developer — Games Against Misinformation",
                    organization: "Erasmus+ Exchange, Lodz University of Technology, Poland",
                    period: "May – June 2026",
                    description:
                        "Developed The Puppeteer, a small video game in Unity aimed at raising awareness about misinformation, as part of an international exchange program.",
                },
            },
            items: {
                puppeteer: {
                    description:
                        "2D narrative strategy game about how misinformation spreads through everyday choices, built during an Erasmus+ exchange in Poland.",
                },
                jointed: { description: "3D Puzzle Thriller using Unity game engine" },
                anima: { description: "2D platformer using Unity game engine and C#" },
                articfacts: { description: "Website-based card game" },
            },
        },
        photography: {
            title: { lead: "Photography", accent: "Gallery" },
            intro: "A collection of moments I've captured over the years. Click any photo to view it in full resolution.",
            // English locations are the source strings used in the photo data.
            locations: {},
        },
        contact: {
            title: { lead: "Get in", accent: "Touch" },
            intro: "I’m based in Espoo, Finland :) always open to new opportunities, collaborations, or just a friendly chat.",
            location: "Espoo, Finland",
        },
        footer: { rights: "All rights reserved." },
        notFound: {
            title: { lead: "Page", accent: "Not Found" },
            text: "The page you're looking for doesn't exist or has been moved.",
            back: "Back to Home",
        },
    },

    es: {
        meta: {
            title: "Brandon Bósquez | Portafolio",
            description:
                "Portafolio de Brandon Bósquez, estudiante de TI con especialización en Desarrollo de Videojuegos en la Universidad de Ciencias Aplicadas Metropolia. Proyectos, experiencia, habilidades y fotografía.",
        },
        cvPath: "/BOSQUEZ_BRANDON_CV.pdf",
        language: { label: "Idioma" },
        theme: { toLight: "Cambiar a modo claro", toDark: "Cambiar a modo oscuro" },
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            photography: "Fotografía",
            contact: "Contacto",
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
        },
        hero: {
            greeting: "Hola, soy ",
            introBefore: "Soy ",
            introHighlight: "estudiante de TI",
            introAfter:
                " con especialización en Desarrollo de Videojuegos y busco mi próxima pasantía. Este portafolio muestra mi recorrido por la universidad y más allá ",
            cta: "Ver mi trabajo",
            scroll: "Desplázate",
        },
        about: {
            title: { lead: "Sobre", accent: "mí" },
            subtitle: "Desarrollo de Software con Pasión",
            p1: "Estudio TI en la Universidad de Ciencias Aplicadas Metropolia, con especialización en Desarrollo de Videojuegos. Me apasionan el desarrollo de software, la resolución de problemas y la creación de experiencias interactivas.",
            p2Before: "Con raíces multiculturales en Panamá y Finlandia, ",
            p2Emphasis: "aporto una perspectiva abierta y creativa a mi trabajo.",
            p2After:
                " Mis intereses abarcan la tecnología, la ciencia y las artes, y disfruto combinar estas áreas en proyectos que unen diseño, fotografía y desarrollo con habilidades técnicas.",
            p3: "Siempre busco oportunidades para crecer, colaborar y crear experiencias digitales con sentido.",
            getInTouch: "Contáctame",
            downloadCv: "Descargar CV",
            cards: {
                dev: {
                    title: "Desarrollo de Software",
                    text: "Base sólida en programación, resolución de problemas y principios de diseño de software.",
                },
                student: {
                    title: "Estudiante de TI",
                    text: "Estudiante de cuarto año de Tecnologías de la Información en la Universidad de Ciencias Aplicadas Metropolia, con especialización en Desarrollo de Videojuegos.",
                },
                work: {
                    title: "Trabajo en Proyectos",
                    text: "Experiencia práctica desarrollando múltiples proyectos académicos y personales con diversas herramientas y tecnologías, tanto de forma independiente como en equipo.",
                },
                curious: {
                    title: "Curiosidad y Pasión",
                    text: "Me apasionan la tecnología y el aprendizaje continuo. Disfruto combinar intereses técnicos y creativos.",
                },
            },
        },
        skills: {
            title: { lead: "Mis", accent: "Habilidades" },
            all: "Todo",
            categories: {
                languages: "Lenguajes",
                frameworks: "Frameworks y Herramientas",
                gamedev: "Desarrollo de Videojuegos",
            },
            notes: { familiar: "Familiaridad", basic: "Básico" },
        },
        tags: {
            "Group Project": "Proyecto grupal",
            Solo: "Individual",
            Game: "Juego",
            "Game Design": "Diseño de juegos",
        },
        projects: {
            title: { lead: "Experiencia", accent: "y Proyectos" },
            intro: "Esta es mi experiencia profesional hasta ahora, junto con algunos de los proyectos en los que he trabajado durante los últimos 4 años de universidad.",
            featured: { lead: "Proyectos", accent: "Destacados" },
            previous: "Proyectos anteriores",
            next: "Proyectos siguientes",
            experience: {
                chatbot: {
                    role: "Pasantía en Chatbot de IA",
                    organization: "Nokia / Metropolia Software Factory",
                    period: "Mayo – agosto de 2026",
                    description:
                        "Desarrollé servicios de backend en Python con Flask y MongoDB, y construí un frontend en JavaScript/HTML para pruebas, integrado en un proyecto más grande creado con el motor de videojuegos Unity.",
                },
                erasmus: {
                    role: "Desarrollo en Unity — Games Against Misinformation",
                    organization: "Intercambio Erasmus+, Universidad Tecnológica de Łódź, Polonia",
                    period: "Mayo – junio de 2026",
                    description:
                        "Desarrollé The Puppeteer, un pequeño videojuego en Unity que busca generar conciencia sobre la desinformación, como parte de un programa de intercambio internacional.",
                },
            },
            items: {
                puppeteer: {
                    description:
                        "Videojuego 2D de estrategia narrativa sobre cómo se propaga la desinformación a través de decisiones cotidianas, creado durante un intercambio Erasmus+ en Polonia.",
                },
                jointed: { description: "Thriller de puzles en 3D hecho con el motor Unity" },
                anima: { description: "Juego de plataformas 2D hecho con Unity y C#" },
                articfacts: { description: "Juego de cartas basado en web" },
            },
        },
        photography: {
            title: { lead: "Galería", accent: "Fotográfica" },
            intro: "Una colección de momentos que he capturado a lo largo de los años. Haz clic en cualquier foto para verla en alta resolución.",
            locations: {
                "Vienna, Austria": "Viena, Austria",
                "Prague, Czechia": "Praga, Chequia",
                "London, England": "Londres, Inglaterra",
                "Helsinki, Finland": "Helsinki, Finlandia",
                "Coclé, Panamá": "Coclé, Panamá",
                "Paris, France": "París, Francia",
                "New York, USA": "Nueva York, EE. UU.",
                "Espoo, Finland": "Espoo, Finlandia",
                "Taboga, Panama": "Taboga, Panamá",
                "Panama City, Panama": "Ciudad de Panamá, Panamá",
                "Amsterdam, Netherlands": "Ámsterdam, Países Bajos",
                Panama: "Panamá",
            },
        },
        contact: {
            title: { lead: "Ponte en", accent: "Contacto" },
            intro: "Vivo en Espoo, Finlandia :) y estoy disponible para nuevas oportunidades, colaboraciones o simplemente una charla amistosa.",
            location: "Espoo, Finlandia",
        },
        footer: { rights: "Todos los derechos reservados." },
        notFound: {
            title: { lead: "Página", accent: "no encontrada" },
            text: "La página que buscas no existe o fue movida.",
            back: "Volver al inicio",
        },
    },

    fi: {
        meta: {
            title: "Brandon Bósquez | Portfolio",
            description:
                "Brandon Bósquezin portfolio. IT-alan opiskelija, joka on erikoistunut pelikehitykseen Metropolia Ammattikorkeakoulussa. Projekteja, kokemusta, taitoja ja valokuvausta.",
        },
        cvPath: "/BOSQUEZ_BRANDON_CV.pdf",
        language: { label: "Kieli" },
        theme: { toLight: "Vaihda vaaleaan tilaan", toDark: "Vaihda tummaan tilaan" },
        nav: {
            home: "Etusivu",
            about: "Minusta",
            skills: "Taidot",
            projects: "Projektit",
            photography: "Valokuvat",
            contact: "Yhteys",
            openMenu: "Avaa valikko",
            closeMenu: "Sulje valikko",
        },
        hero: {
            greeting: "Moi, olen ",
            introBefore: "Olen ",
            introHighlight: "IT-alan opiskelija",
            introAfter:
                ", joka on erikoistunut pelikehitykseen ja etsii seuraavaa harjoittelupaikkaa. Tämä portfolio esittelee matkaani opintojen aikana ja sen jälkeen ",
            cta: "Katso töitäni",
            scroll: "Vieritä",
        },
        about: {
            title: { lead: "Tietoa", accent: "minusta" },
            subtitle: "Intohimoinen ohjelmistokehittäjä",
            p1: "Opiskelen tietotekniikkaa Metropolia Ammattikorkeakoulussa ja olen erikoistunut pelikehitykseen. Minua kiinnostavat ohjelmistokehitys, ongelmanratkaisu ja interaktiivisten kokemusten luominen.",
            p2Before: "Minulla on monikulttuurinen tausta, joka juontaa Panamaan ja Suomeen, ",
            p2Emphasis: "ja tuon työhöni avoimen ja luovan näkökulman.",
            p2After:
                " Kiinnostukseni kohteet ulottuvat teknologiaan, tieteeseen ja taiteisiin, ja yhdistän näitä aloja mielelläni projekteissa, joissa yhdistyvät suunnittelu, valokuvaus ja kehitys teknisten taitojen kanssa.",
            p3: "Etsin aina mahdollisuuksia kasvaa, tehdä yhteistyötä ja rakentaa merkityksellisiä digitaalisia kokemuksia.",
            getInTouch: "Ota yhteyttä",
            downloadCv: "Lataa CV",
            cards: {
                dev: {
                    title: "Ohjelmistokehitys",
                    text: "Vahva perusta ohjelmoinnissa, ongelmanratkaisussa ja ohjelmistosuunnittelun periaatteissa.",
                },
                student: {
                    title: "IT-alan opiskelija",
                    text: "Tietotekniikan neljännen vuoden opiskelija Metropolia Ammattikorkeakoulussa, erikoistumisalana pelikehitys.",
                },
                work: {
                    title: "Projektityö",
                    text: "Käytännön kokemusta useiden opinto- ja omien projektien kehittämisestä erilaisilla työkaluilla ja teknologioilla sekä itsenäisesti että tiimeissä.",
                },
                curious: {
                    title: "Utelias ja innostunut",
                    text: "Teknologia ja jatkuva oppiminen innostavat minua. Nautin teknisten ja luovien kiinnostusten yhdistämisestä.",
                },
            },
        },
        skills: {
            title: { lead: "", accent: "Taitoni" },
            all: "Kaikki",
            categories: {
                languages: "Kielet",
                frameworks: "Kehykset ja työkalut",
                gamedev: "Pelikehitys",
            },
            notes: { familiar: "Tuttu", basic: "Perusteet" },
        },
        tags: {
            "Group Project": "Ryhmäprojekti",
            Solo: "Yksin",
            Game: "Peli",
            "Game Design": "Pelisuunnittelu",
        },
        projects: {
            title: { lead: "Kokemus", accent: "ja projektit" },
            intro: "Tässä on työkokemukseni tähän mennessä sekä joitakin projekteja, joiden parissa olen työskennellyt yliopisto-opintojeni neljän viime vuoden aikana.",
            featured: { lead: "Valitut", accent: "projektit" },
            previous: "Edelliset projektit",
            next: "Seuraavat projektit",
            experience: {
                chatbot: {
                    role: "Tekoälychatbot-harjoittelu",
                    organization: "Nokia / Metropolia Software Factory",
                    period: "Touko–elokuu 2026",
                    description:
                        "Kehitin Python-taustapalveluita Flaskilla ja MongoDB:llä sekä rakensin JavaScript/HTML-käyttöliittymän testausta varten. Se integroitiin suurempaan, Unity-pelimoottorilla toteutettuun projektiin.",
                },
                erasmus: {
                    role: "Unity-kehittäjä — Games Against Misinformation",
                    organization: "Erasmus+-vaihto, Łódźin teknillinen yliopisto, Puola",
                    period: "Touko–kesäkuu 2026",
                    description:
                        "Kehitin The Puppeteer -pelin, pienen Unity-pelin, jonka tarkoituksena on lisätä tietoisuutta väärästä tiedosta, osana kansainvälistä vaihto-ohjelmaa.",
                },
            },
            items: {
                puppeteer: {
                    description:
                        "2D-tarinallinen strategiapeli siitä, miten väärä tieto leviää arkisten valintojen kautta. Toteutettu Erasmus+-vaihdon aikana Puolassa.",
                },
                jointed: { description: "3D-pulmatrilleri, tehty Unity-pelimoottorilla" },
                anima: { description: "2D-tasohyppelypeli, tehty Unity-pelimoottorilla ja C#:lla" },
                articfacts: { description: "Verkkopohjainen korttipeli" },
            },
        },
        photography: {
            title: { lead: "Valokuva", accent: "galleria" },
            intro: "Kokoelma hetkiä, jotka olen tallentanut vuosien varrella. Napsauta mitä tahansa kuvaa nähdäksesi sen suurempana.",
            locations: {
                "Vienna, Austria": "Wien, Itävalta",
                "Prague, Czechia": "Praha, Tšekki",
                "London, England": "Lontoo, Englanti",
                "Helsinki, Finland": "Helsinki, Suomi",
                "Coclé, Panamá": "Coclé, Panama",
                "Paris, France": "Pariisi, Ranska",
                "New York, USA": "New York, Yhdysvallat",
                "Espoo, Finland": "Espoo, Suomi",
                "Taboga, Panama": "Taboga, Panama",
                "Panama City, Panama": "Panama City, Panama",
                "Amsterdam, Netherlands": "Amsterdam, Alankomaat",
                Panama: "Panama",
            },
        },
        contact: {
            title: { lead: "Ota", accent: "yhteyttä" },
            intro: "Asun Espoossa, Suomessa :) ja olen aina avoin uusille mahdollisuuksille, yhteistyölle tai ihan vain ystävälliselle keskustelulle.",
            location: "Espoo, Suomi",
        },
        footer: { rights: "Kaikki oikeudet pidätetään." },
        notFound: {
            title: { lead: "Sivua", accent: "ei löytynyt" },
            text: "Etsimääsi sivua ei ole olemassa tai se on siirretty.",
            back: "Takaisin etusivulle",
        },
    },
};
