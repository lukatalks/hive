// HIVE Business Community - Bilingual Translations
const translations = {
    sl: {
        // Navigation
        nav_about: "O HIVE-u",
        nav_founders: "Ustanovitelji",
        nav_join: "Pridruži se",

        // Hero
        hero_tagline: "EKSKLUZIVNO MEDNARODNO POSLOVNO ZDRUŽENJE",
        hero_description: "HIVE je prostor, kjer se združijo podjetniki, managerji in voditelji z ambicijo, da rastemo skupaj – hitreje, bolj pogumno in z večjim vplivom.",
        hero_cta: "POSTANI ČLAN/-ICA",

        // Values Section
        values_title: "NAŠE VREDNOTE",
        value1_title: "Iskrenost & zaupanje",
        value1_tooltip: "Odprta komunikacija, zaupanje se nikoli ne izkorišča.",
        value2_title: "Transparentnost",
        value2_tooltip: "Jasnost pri sodelovanju in poslovanju.",
        value3_title: "Mušketirstvo",
        value3_tooltip: "»Vsi za enega, eden za vse«.",
        value4_title: "Diskretnost",
        value4_tooltip: "Poslovne povezave ostanejo znotraj HIVE.",
        value5_title: "Lojalnost & profesionalnost",
        value5_tooltip: "Dolgoročna zaveza k poštenosti in etičnemu delovanju.",
        value6_title: "HIVE deluje kot družina",
        value6_tooltip: "Člani se podpiramo in stojimo drug za drugega.",

        // Founders
        founders_title: "Spoznaj ustanovitelje",
        founder1_role: "direktorica",

        // Offers
        offers_title: "KAJ PONUJAMO?",
        offer1_title: "dogodkov letno",
        offer1_tooltip: "Mesečna srečanja, kvartalni teambuildingi, mednarodni retreati, izobraževanja, sailing tripi in globalna druženja.",
        offer2_title: "HIVE app",
        offer2_tooltip: "Digitalna platforma za profile članov, mreženje, glasovanja in organizacijo dogodkov.",
        offer3_title: "Mednarodno mreženje",
        offer3_tooltip: "Vstop v globalno skupnost panjev (franšizni model).",
        offer4_title: "Soustvarjanje programa",
        offer4_tooltip: "Člani aktivno oblikujejo vsebine, sekcije in pobude.",
        offer5_title: "Podporno okolje",
        offer5_tooltip: "Osebna in poslovna rast, zdrav način življenja, inovacije in trendi.",
        offer6_title: "Investicijske priložnosti",
        offer6_tooltip: "Priložnosti za investiranje in poslovno sodelovanje.",

        // Join Section
        join_title: "Pridruži se",
        reason1_text: "Ekskluzivno okolje izbranih posameznikov",
        reason1_tooltip: "Vstop je mogoč le na priporočilo in strogo selekcijo.",
        reason2_text: "Aktivno sodelovanje",
        reason2_tooltip: "Člani so ustvarjalci, ne pasivni udeleženci.",
        reason3_text: "Globalna dimenzija",
        reason3_tooltip: "Povezovanje z enako mislečimi po svetu.",
        reason4_text: "Diferenciacija od klasičnih združenj",
        reason4_tooltip: "HIVE ni množično, temveč intenzivno in zaprto okolje, ki gradi resnične vezi in konkretne priložnosti.",
        reason5_text: "»HIVE je družina«",
        reason5_tooltip: "Člani stojimo drug za drugega tudi zunaj poslovnih meja.",
        members_label: "ČLANOV",

        // Footer
        footer_copyright: "HIVE - Ekskluzivno mednarodno poslovno združenje",

        // Cookie Notice
        cookie_text: "Ta spletna stran ne uporablja piškotkov za sledenje. Z izpolnitvijo obrazca za članstvo se strinjate z obdelavo osebnih podatkov.",
        cookie_button: "Razumem"
    },
    en: {
        // Navigation
        nav_about: "About HIVE",
        nav_founders: "Founders",
        nav_join: "Join Us",

        // Hero
        hero_tagline: "EXCLUSIVE INTERNATIONAL BUSINESS ASSOCIATION",
        hero_description: "HIVE is a space where entrepreneurs, managers, and leaders unite with the ambition to grow together – faster, bolder, and with greater impact.",
        hero_cta: "BECOME A MEMBER",

        // Values Section
        values_title: "OUR VALUES",
        value1_title: "Sincerity & Trust",
        value1_tooltip: "Open communication, trust is never exploited.",
        value2_title: "Transparency",
        value2_tooltip: "Clarity in collaboration and business.",
        value3_title: "Musketeers Spirit",
        value3_tooltip: "\"All for one, one for all.\"",
        value4_title: "Discretion",
        value4_tooltip: "Business connections stay within HIVE.",
        value5_title: "Loyalty & Professionalism",
        value5_tooltip: "Long-term commitment to honesty and ethical conduct.",
        value6_title: "HIVE operates as a family",
        value6_tooltip: "Members support and stand by each other.",

        // Founders
        founders_title: "Meet the Founders",
        founder1_role: "Director",

        // Offers
        offers_title: "WHAT WE OFFER?",
        offer1_title: "events annually",
        offer1_tooltip: "Monthly meetings, quarterly team buildings, international retreats, education, sailing trips, and global gatherings.",
        offer2_title: "HIVE app",
        offer2_tooltip: "Digital platform for member profiles, networking, voting, and event organization.",
        offer3_title: "International Networking",
        offer3_tooltip: "Entry into a global community of hives (franchise model).",
        offer4_title: "Program Co-creation",
        offer4_tooltip: "Members actively shape content, sections, and initiatives.",
        offer5_title: "Supportive Environment",
        offer5_tooltip: "Personal and business growth, healthy lifestyle, innovations, and trends.",
        offer6_title: "Investment Opportunities",
        offer6_tooltip: "Opportunities for investment and business collaboration.",

        // Join Section
        join_title: "Join Us",
        reason1_text: "Exclusive environment of selected individuals",
        reason1_tooltip: "Entry is only possible through recommendation and strict selection.",
        reason2_text: "Active Participation",
        reason2_tooltip: "Members are creators, not passive participants.",
        reason3_text: "Global Dimension",
        reason3_tooltip: "Connecting with like-minded people worldwide.",
        reason4_text: "Differentiation from traditional associations",
        reason4_tooltip: "HIVE is not mass-oriented, but an intensive and closed environment that builds genuine relationships and concrete opportunities.",
        reason5_text: "\"HIVE is family\"",
        reason5_tooltip: "Members stand by each other even beyond business boundaries.",
        members_label: "MEMBERS",

        // Footer
        footer_copyright: "HIVE - Exclusive International Business Association",

        // Cookie Notice
        cookie_text: "This website does not use tracking cookies. By completing the membership form, you agree to the processing of personal data.",
        cookie_button: "I Understand"
    }
};

// Detect user language based on browser language, locale, and timezone
function detectBrowserLanguage() {
    // Check all browser languages (ordered by preference)
    const languages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
    for (const lang of languages) {
        if (lang.toLowerCase().startsWith('sl')) return 'sl';
    }

    // Check timezone - Slovenia is in Europe/Ljubljana
    try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz === 'Europe/Ljubljana') return 'sl';
    } catch (e) {}

    // Check locale for Slovenian region
    try {
        const locale = Intl.DateTimeFormat().resolvedOptions().locale;
        if (locale && locale.toLowerCase().includes('sl')) return 'sl';
    } catch (e) {}

    return 'en';
}

// Set initial language from localStorage or browser detection
let currentLang = localStorage.getItem('hive_language') || detectBrowserLanguage();

// Apply translations
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('hive_language', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Update all elements with data attributes
    document.querySelectorAll('[data-en][data-sl]').forEach(el => {
        const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-sl');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else if (el.tagName === 'A' || el.tagName === 'BUTTON') {
            el.textContent = text;
        } else {
            el.textContent = text;
        }
    });

    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });
});
