import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "no" | "nl";

interface Translations {
  // Nav
  navAbout: string;
  navSkills: string;
  navExperience: string;
  navNaie: string;
  navContact: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroViewExperience: string;
  heroGetInTouch: string;
  statYears: string;
  statIndustries: string;
  statCertifications: string;
  statCountries: string;

  // About
  aboutLabel: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutHighlight1Title: string;
  aboutHighlight1Desc: string;
  aboutHighlight2Title: string;
  aboutHighlight2Desc: string;
  aboutHighlight3Title: string;
  aboutHighlight3Desc: string;
  aboutHighlight4Title: string;
  aboutHighlight4Desc: string;

  // Skills
  skillsLabel: string;
  skillsTitle: string;
  certTitle: string;
  catTestAutomation: string;
  catToolsPlatforms: string;
  catMethodologies: string;
  catProgramming: string;
  catArchCloud: string;
  catCiCd: string;

  // Experience
  expLabel: string;
  expTitle: string;
  work: string;
  education: string;
  expVia: string;

  // Experience items
  exp1Period: string;
  exp1Title: string;
  exp1Company: string;
  exp1Desc: string;
  exp1ClientName: string;
  exp1ClientRole: string;
  exp1H1: string;
  exp1H2: string;
  exp1H3: string;
  exp1H4: string;

  exp2Period: string;
  exp2Title: string;
  exp2Company: string;
  exp2Desc: string;
  exp2Client1Name: string;
  exp2Client1Role: string;
  exp2Client1H1: string;
  exp2Client2Name: string;
  exp2Client2Role: string;
  exp2Client2H1: string;
  exp2Client2H2: string;
  exp2Client2H3: string;
  exp2Client3Name: string;
  exp2Client3Role: string;
  exp2Client3H1: string;

  exp3Period: string;
  exp3Title: string;
  exp3Company: string;
  exp3Desc: string;
  exp3ClientName: string;
  exp3ClientRole: string;
  exp3H1: string;
  exp3H2: string;
  exp3H3: string;

  exp4Period: string;
  exp4Title: string;
  exp4Company: string;
  exp4Desc: string;

  exp5Period: string;
  exp5Title: string;
  exp5Company: string;
  exp5Desc: string;

  // NAIE
  naieLabel: string;
  naieTitle: string;
  naieBadge: string;
  naieOrgName: string;
  naieOrgSub: string;
  naieDesc: string;
  naieStat1: string;
  naieStat2: string;
  naieStat3: string;
  naieVisit: string;
  pillarBiasTitle: string;
  pillarBiasDesc: string;
  pillarResponsibleTitle: string;
  pillarResponsibleDesc: string;
  pillarSustainTitle: string;
  pillarSustainDesc: string;
  otherActivities: string;
  actSpeakingTitle: string;
  actSpeakingDesc: string;
  actBlogTitle: string;
  actBlogDesc: string;
  actProjectsTitle: string;
  actProjectsDesc: string;

  // Contact
  contactLabel: string;
  contactTitle: string;
  contactDesc: string;
  contactEmail: string;
  contactEmailSub: string;
  contactLinkedIn: string;
  contactLinkedInSub: string;
  contactNaie: string;
  contactLocation: string;
  contactLocationValue: string;
  contactCurrently: string;
  footerRights: string;
}

const translations: Record<Language, Translations> = {
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navNaie: "NAIE",
    navContact: "Contact",

    heroBadge: "Test & Quality Consultant",
    heroTitle: "Test & Test Automation Consultant",
    heroSubtitle: "Test & Test Automation Consultant",
    heroDescription:
      "15+ years of experience in software quality, test automation, and agile delivery. Passionate about AI ethics, quality engineering, and building reliable software across industries.",
    heroViewExperience: "View Experience",
    heroGetInTouch: "Get in Touch",
    statYears: "Years Experience",
    statIndustries: "Industries",
    statCertifications: "Certifications",
    statCountries: "Countries",

    aboutLabel: "About Me",
    aboutTitle: "Who I Am",
    aboutP1:
      "I'm an enthusiastic software and quality professional with over a decade of experience and a broad spectrum of interests that allow me to quickly adapt to new environments.",
    aboutP2:
      "My background in Design for Interaction (M.Sc., TU Delft) gives me a unique perspective on user experience and quality. I combine technical depth in test automation with strategic thinking about quality processes, making me effective both hands-on and in advisory roles.",
    aboutHighlight1Title: "Quality Professional",
    aboutHighlight1Desc:
      "Thrived in roles as tester, test automation engineer, Mendix developer, and Scrum Master across diverse industries.",
    aboutHighlight2Title: "AI & Ethics Advocate",
    aboutHighlight2Desc:
      "Strong interest in understanding AI systems' technical foundations and developing methods to critically assess their quality and ethical implications.",
    aboutHighlight3Title: "International Experience",
    aboutHighlight3Desc:
      "Worked across the Netherlands and Norway, fluent in Dutch, English, and Norwegian. Adaptable to new environments.",
    aboutHighlight4Title: "Continuous Learner",
    aboutHighlight4Desc:
      "From Scrum certifications to Mendix development to Taekwondo — always expanding skills and pushing boundaries.",

    skillsLabel: "Skills & Expertise",
    skillsTitle: "What I Work With",
    certTitle: "Certifications",
    catTestAutomation: "Test Automation",
    catToolsPlatforms: "Tools & Platforms",
    catMethodologies: "Methodologies",
    catProgramming: "Programming",
    catArchCloud: "Architecture & Cloud",
    catCiCd: "CI/CD & Source Control",

    expLabel: "Career Journey",
    expTitle: "Experience & Education",
    work: "Work",
    education: "Education",
    expVia: "via",

    exp1Period: "2023 – Present",
    exp1Title: "Consultant",
    exp1Company: "Bouvet ASA, Norway",
    exp1Desc:
      "Consulting engagement through Bouvet ASA, providing QA leadership and test automation expertise to critical infrastructure projects.",
    exp1ClientName: "Statnett",
    exp1ClientRole: "QA Lead & Test Automation Specialist",
    exp1H1: "Test Lead for geo-redundancy testing of mission-critical systems",
    exp1H2: "Set up test automation strategy for the entire AUTOBAL project",
    exp1H3: "Automated frontend tests in Cypress and cross-application tests in Playwright",
    exp1H4: "ART Test Lead coordinating system integration and end-to-end tests",

    exp2Period: "2016 – 2023",
    exp2Title: "Multi-role Consultant",
    exp2Company: "Newspark BV, Netherlands",
    exp2Desc:
      "Delivered consulting services across multiple major Dutch organizations through Newspark BV, combining test automation, Mendix development, and Scrum mastery.",
    exp2Client1Name: "ANWB",
    exp2Client1Role: "Mendix Developer",
    exp2Client1H1: "Built and maintained ANWB SmartDriver event-driven Mendix backend",
    exp2Client2Name: "Rabobank",
    exp2Client2Role: "Test Automation Expert",
    exp2Client2H1: "Introduced Protractor and BDD/Cucumber frameworks",
    exp2Client2H2: "Reduced test suite runtime from a full weekend to 10 minutes",
    exp2Client2H3: "Mentored colleagues in Mendix development and test automation",
    exp2Client3Name: "Digidentity",
    exp2Client3Role: "QA Consultant & Scrum Master",
    exp2Client3H1: "Served as Scrum Master, growing teams into high-performance units",

    exp3Period: "2012 – 2015",
    exp3Title: "Test Automation Engineer",
    exp3Company: "Sogeti, Netherlands",
    exp3Desc:
      "Consulting engagement through Sogeti, focused on high-tech manufacturing systems and interoperability testing.",
    exp3ClientName: "ASML",
    exp3ClientRole: "Test Automation Engineer",
    exp3H1: "API testing of all ASML TwinScan system interfaces",
    exp3H2: "Competence lead for interoperability within ASML",
    exp3H3: "Owner of the software component for all interface tests",

    exp4Period: "2009 – 2012",
    exp4Title: "M.Sc. Design for Interaction",
    exp4Company: "Delft University of Technology, Netherlands",
    exp4Desc:
      "Master's degree focusing on the intersection of design and technology, providing a unique perspective on user experience and human-centered quality.",

    exp5Period: "2004 – 2008",
    exp5Title: "B.Eng. Industrial Design Engineering",
    exp5Company: "Saxion Hogeschool Enschede",
    exp5Desc:
      "Bachelor's degree in Industrial Design Engineering, building a strong foundation in engineering principles and design thinking.",

    naieLabel: "Beyond Consulting",
    naieTitle: "NAIE & Side Projects",
    naieBadge: "Founder & Styreleder",
    naieOrgName: "Norsk AI-Etikkforening (NAIE)",
    naieOrgSub: "Norwegian AI Ethics Association — Independent nonprofit",
    naieDesc:
      "Founded in September 2025, NAIE is Norway's first independent, nonprofit association dedicated to researching and promoting ethical AI. We deliver statistics and insights about Bias, Sustainability, and Responsible AI. Our NoBBQ benchmark has analyzed over 1,200 AI responses, and we collaborate with organizations like LDO (The Norwegian Equality and Anti-Discrimination Ombud).",
    naieStat1: "1200+ AI responses analyzed",
    naieStat2: "Norway's first Bias indicator",
    naieStat3: "Collaboration with LDO",
    naieVisit: "Visit naie.no",
    pillarBiasTitle: "Bias",
    pillarBiasDesc:
      "Investigating and measuring bias in AI systems through the NoBBQ benchmark, testing large language models for biases related to gender, ethnicity, religion, and other protected categories.",
    pillarResponsibleTitle: "Responsible AI",
    pillarResponsibleDesc:
      "Promoting responsible development and use of AI in Norway, including guidelines, best practices, and tools for ethical AI implementation.",
    pillarSustainTitle: "Sustainability",
    pillarSustainDesc:
      "Investigating the environmental impact of AI systems and working towards more sustainable AI development, measuring energy consumption and carbon footprint.",
    otherActivities: "Other Activities",
    actSpeakingTitle: "Public Speaking",
    actSpeakingDesc:
      "Regular talks about bias in AI systems, test automation strategy, and quality engineering at conferences and meetups.",
    actBlogTitle: "Blog Writing",
    actBlogDesc:
      "Writing about software quality, AI ethics, test automation, and lessons learned from real-world projects.",
    actProjectsTitle: "Side Projects",
    actProjectsDesc:
      "Continuously exploring new technologies and building tools that bridge quality engineering and AI ethics research.",

    contactLabel: "Get in Touch",
    contactTitle: "Let's Connect",
    contactDesc:
      "Interested in discussing test automation strategy, quality engineering, AI ethics, or potential collaboration? I'd love to hear from you.",
    contactEmail: "Email",
    contactEmailSub: "Get in touch",
    contactLinkedIn: "LinkedIn",
    contactLinkedInSub: "Connect with me",
    contactNaie: "NAIE",
    contactLocation: "Location",
    contactLocationValue: "Norway",
    contactCurrently: "Currently working as a consultant at",
    footerRights: "All rights reserved.",
  },
  no: {
    navAbout: "Om meg",
    navSkills: "Kompetanse",
    navExperience: "Erfaring",
    navNaie: "NAIE",
    navContact: "Kontakt",

    heroBadge: "Test- og kvalitetskonsulent",
    heroTitle: "Test & Test Automation Consultant",
    heroSubtitle: "Test- og testautomatiseringskonsulent",
    heroDescription:
      "15+ års erfaring innen programvarekvalitet, testautomatisering og smidig leveranse. Engasjert i AI-etikk, kvalitetsteknikk og å bygge pålitelig programvare på tvers av bransjer.",
    heroViewExperience: "Se erfaring",
    heroGetInTouch: "Ta kontakt",
    statYears: "Års erfaring",
    statIndustries: "Bransjer",
    statCertifications: "Sertifiseringer",
    statCountries: "Land",

    aboutLabel: "Om meg",
    aboutTitle: "Hvem jeg er",
    aboutP1:
      "Jeg er en entusiastisk programvare- og kvalitetsprofesjonell med over et tiår med erfaring og et bredt spekter av interesser som gjør at jeg raskt kan tilpasse meg nye miljøer.",
    aboutP2:
      "Min bakgrunn i Design for Interaction (M.Sc., TU Delft) gir meg et unikt perspektiv på brukeropplevelse og kvalitet. Jeg kombinerer teknisk dybde i testautomatisering med strategisk tenkning om kvalitetsprosesser.",
    aboutHighlight1Title: "Kvalitetsprofesjonell",
    aboutHighlight1Desc:
      "Har trivdes i roller som tester, testautomatiseringsingeniør, Mendix-utvikler og Scrum Master på tvers av ulike bransjer.",
    aboutHighlight2Title: "AI og etikk",
    aboutHighlight2Desc:
      "Sterk interesse for å forstå de tekniske grunnlagene for AI-systemer og utvikle metoder for kritisk å vurdere deres kvalitet og etiske implikasjoner.",
    aboutHighlight3Title: "Internasjonal erfaring",
    aboutHighlight3Desc:
      "Jobbet i Nederland og Norge, flytende i nederlandsk, engelsk og norsk. Tilpasningsdyktig til nye miljøer.",
    aboutHighlight4Title: "Kontinuerlig læring",
    aboutHighlight4Desc:
      "Fra Scrum-sertifiseringer til Mendix-utvikling til Taekwondo — utvider alltid kompetansen og pusher grenser.",

    skillsLabel: "Kompetanse og ekspertise",
    skillsTitle: "Hva jeg jobber med",
    certTitle: "Sertifiseringer",
    catTestAutomation: "Testautomatisering",
    catToolsPlatforms: "Verktøy og plattformer",
    catMethodologies: "Metoder",
    catProgramming: "Programmering",
    catArchCloud: "Arkitektur og sky",
    catCiCd: "CI/CD og kildekontroll",

    expLabel: "Karrierereise",
    expTitle: "Erfaring og utdanning",
    work: "Arbeid",
    education: "Utdanning",
    expVia: "via",

    exp1Period: "2023 – nå",
    exp1Title: "Konsulent",
    exp1Company: "Bouvet ASA, Norge",
    exp1Desc:
      "Konsulentoppdrag gjennom Bouvet ASA, med QA-ledelse og testautomatiseringsekspertise for kritiske infrastrukturprosjekter.",
    exp1ClientName: "Statnett",
    exp1ClientRole: "QA-leder og testautomatiseringsspesialist",
    exp1H1: "Testleder for georedundanstesting av driftskritiske systemer",
    exp1H2: "Satte opp testautomatiseringsstrategi for hele AUTOBAL-prosjektet",
    exp1H3: "Automatiserte frontend-tester i Cypress og tester på tvers i Playwright",
    exp1H4: "ART-testleder som koordinerte systemintegrasjons- og ende-til-ende-tester",

    exp2Period: "2016 – 2023",
    exp2Title: "Flerfunksjonskonsulent",
    exp2Company: "Newspark BV, Nederland",
    exp2Desc:
      "Leverte konsulenttjenester til flere store nederlandske organisasjoner gjennom Newspark BV, med kombinasjon av testautomatisering, Mendix-utvikling og Scrum-mestring.",
    exp2Client1Name: "ANWB",
    exp2Client1Role: "Mendix-utvikler",
    exp2Client1H1: "Bygget og vedlikeholdt ANWB SmartDriver event-drevet Mendix-backend",
    exp2Client2Name: "Rabobank",
    exp2Client2Role: "Testautomatiseringsekspert",
    exp2Client2H1: "Introduserte Protractor og BDD/Cucumber-rammeverk",
    exp2Client2H2: "Reduserte testkjøringstid fra en hel helg til 10 minutter",
    exp2Client2H3: "Veiledet kolleger i Mendix-utvikling og testautomatisering",
    exp2Client3Name: "Digidentity",
    exp2Client3Role: "QA-konsulent og Scrum Master",
    exp2Client3H1: "Fungerte som Scrum Master og utviklet team til høytytende enheter",

    exp3Period: "2012 – 2015",
    exp3Title: "Testautomatiseringsingeniør",
    exp3Company: "Sogeti, Nederland",
    exp3Desc:
      "Konsulentoppdrag gjennom Sogeti, fokusert på høyteknologiske produksjonssystemer og interoperabilitetstesting.",
    exp3ClientName: "ASML",
    exp3ClientRole: "Testautomatiseringsingeniør",
    exp3H1: "API-testing av alle ASML TwinScan-systemgrensesnitt",
    exp3H2: "Kompetanseleder for interoperabilitet innen ASML",
    exp3H3: "Eier av programvarekomponenten for alle grensesnittstester",

    exp4Period: "2009 – 2012",
    exp4Title: "M.Sc. Design for Interaction",
    exp4Company: "Delft University of Technology, Nederland",
    exp4Desc:
      "Mastergrad med fokus på skjæringspunktet mellom design og teknologi, som gir et unikt perspektiv på brukeropplevelse og menneskesentrert kvalitet.",

    exp5Period: "2004 – 2008",
    exp5Title: "B.Eng. Industrial Design Engineering",
    exp5Company: "Saxion Hogeschool Enschede",
    exp5Desc:
      "Bachelorgrad i industriell designteknikk, som bygger et solid fundament i ingeniørprinsipper og designtenkning.",

    naieLabel: "Utover konsulentarbeid",
    naieTitle: "NAIE og sideprosjekter",
    naieBadge: "Grunnlegger og styreleder",
    naieOrgName: "Norsk AI-Etikkforening (NAIE)",
    naieOrgSub: "Uavhengig, ideell forening",
    naieDesc:
      "Grunnlagt i september 2025, er NAIE Norges første uavhengige, ideelle forening dedikert til å forske på og fremme etisk AI. Vi leverer statistikk og innsikt om Bias, Bærekraft og Ansvarlig AI. Vår NoBBQ-benchmark har analysert over 1200 AI-svar, og vi samarbeider med organisasjoner som LDO.",
    naieStat1: "1200+ AI-svar analysert",
    naieStat2: "Norges første Bias-indikator",
    naieStat3: "Samarbeid med LDO",
    naieVisit: "Besøk naie.no",
    pillarBiasTitle: "Bias",
    pillarBiasDesc:
      "Undersøker og måler bias i AI-systemer gjennom NoBBQ-benchmarken, tester store språkmodeller for skjevheter knyttet til kjønn, etnisitet, religion og andre beskyttede kategorier.",
    pillarResponsibleTitle: "Ansvarlig AI",
    pillarResponsibleDesc:
      "Fremmer ansvarlig utvikling og bruk av kunstig intelligens i Norge, inkludert retningslinjer, beste praksis og verktøy for etisk AI-implementering.",
    pillarSustainTitle: "Bærekraft",
    pillarSustainDesc:
      "Undersøker miljøpåvirkningen av AI-systemer og arbeider for mer bærekraftig AI-utvikling, måler energiforbruk og karbonavtrykk.",
    otherActivities: "Andre aktiviteter",
    actSpeakingTitle: "Foredrag",
    actSpeakingDesc:
      "Jevnlige foredrag om bias i AI-systemer, testautomatiseringsstrategi og kvalitetsteknikk på konferanser og meetups.",
    actBlogTitle: "Bloggskriving",
    actBlogDesc:
      "Skriver om programvarekvalitet, AI-etikk, testautomatisering og erfaringer fra virkelige prosjekter.",
    actProjectsTitle: "Sideprosjekter",
    actProjectsDesc:
      "Utforsker kontinuerlig ny teknologi og bygger verktøy som bygger bro mellom kvalitetsteknikk og AI-etikkforskning.",

    contactLabel: "Ta kontakt",
    contactTitle: "La oss koble",
    contactDesc:
      "Interessert i å diskutere testautomatiseringsstrategi, kvalitetsteknikk, AI-etikk eller potensielt samarbeid? Jeg hører gjerne fra deg.",
    contactEmail: "E-post",
    contactEmailSub: "Ta kontakt",
    contactLinkedIn: "LinkedIn",
    contactLinkedInSub: "Koble med meg",
    contactNaie: "NAIE",
    contactLocation: "Sted",
    contactLocationValue: "Norge",
    contactCurrently: "Jobber for tiden som konsulent hos",
    footerRights: "Alle rettigheter reservert.",
  },
  nl: {
    navAbout: "Over mij",
    navSkills: "Vaardigheden",
    navExperience: "Ervaring",
    navNaie: "NAIE",
    navContact: "Contact",

    heroBadge: "Test- en kwaliteitsconsultant",
    heroTitle: "Test & Test Automation Consultant",
    heroSubtitle: "Test- en testautomatiseringsconsultant",
    heroDescription:
      "15+ jaar ervaring in softwarekwaliteit, testautomatisering en agile delivery. Gepassioneerd over AI-ethiek, kwaliteitstechniek en het bouwen van betrouwbare software in diverse sectoren.",
    heroViewExperience: "Bekijk ervaring",
    heroGetInTouch: "Neem contact op",
    statYears: "Jaar ervaring",
    statIndustries: "Sectoren",
    statCertifications: "Certificeringen",
    statCountries: "Landen",

    aboutLabel: "Over mij",
    aboutTitle: "Wie ik ben",
    aboutP1:
      "Ik ben een enthousiaste software- en kwaliteitsprofessional met meer dan tien jaar ervaring en een breed scala aan interesses waardoor ik me snel kan aanpassen aan nieuwe omgevingen.",
    aboutP2:
      "Mijn achtergrond in Design for Interaction (M.Sc., TU Delft) geeft me een uniek perspectief op gebruikerservaring en kwaliteit. Ik combineer technische diepgang in testautomatisering met strategisch denken over kwaliteitsprocessen.",
    aboutHighlight1Title: "Kwaliteitsprofessional",
    aboutHighlight1Desc:
      "Gedijde in rollen als tester, testautomatiseringsingenieur, Mendix-ontwikkelaar en Scrum Master in diverse sectoren.",
    aboutHighlight2Title: "AI en ethiek",
    aboutHighlight2Desc:
      "Sterke interesse in het begrijpen van de technische grondslagen van AI-systemen en het ontwikkelen van methoden om hun kwaliteit en ethische implicaties kritisch te beoordelen.",
    aboutHighlight3Title: "Internationale ervaring",
    aboutHighlight3Desc:
      "Gewerkt in Nederland en Noorwegen, vloeiend in Nederlands, Engels en Noors. Aanpasbaar aan nieuwe omgevingen.",
    aboutHighlight4Title: "Continu leren",
    aboutHighlight4Desc:
      "Van Scrum-certificeringen tot Mendix-ontwikkeling tot Taekwondo — altijd vaardigheden uitbreiden en grenzen verleggen.",

    skillsLabel: "Vaardigheden en expertise",
    skillsTitle: "Waar ik mee werk",
    certTitle: "Certificeringen",
    catTestAutomation: "Testautomatisering",
    catToolsPlatforms: "Tools en platformen",
    catMethodologies: "Methodieken",
    catProgramming: "Programmering",
    catArchCloud: "Architectuur en cloud",
    catCiCd: "CI/CD en versiebeheer",

    expLabel: "Carrièrepad",
    expTitle: "Ervaring en opleiding",
    work: "Werk",
    education: "Opleiding",
    expVia: "via",

    exp1Period: "2023 – heden",
    exp1Title: "Consultant",
    exp1Company: "Bouvet ASA, Noorwegen",
    exp1Desc:
      "Consultancy-opdracht via Bouvet ASA, met QA-leiderschap en testautomatiseringsexpertise voor kritieke infrastructuurprojecten.",
    exp1ClientName: "Statnett",
    exp1ClientRole: "QA Lead & Testautomatiseringsspecialist",
    exp1H1: "Testleider voor geo-redundantietesten van bedrijfskritische systemen",
    exp1H2: "Testautomatiseringsstrategie opgezet voor het gehele AUTOBAL-project",
    exp1H3: "Frontend-testen geautomatiseerd in Cypress en cross-applicatietesten in Playwright",
    exp1H4: "ART-testleider voor systeemintegratie- en end-to-end-testen",

    exp2Period: "2016 – 2023",
    exp2Title: "Multi-rol Consultant",
    exp2Company: "Newspark BV, Nederland",
    exp2Desc:
      "Leverde consultancy-diensten aan meerdere grote Nederlandse organisaties via Newspark BV, met een combinatie van testautomatisering, Mendix-ontwikkeling en Scrum-meesterschap.",
    exp2Client1Name: "ANWB",
    exp2Client1Role: "Mendix-ontwikkelaar",
    exp2Client1H1: "ANWB SmartDriver event-driven Mendix-backend gebouwd en onderhouden",
    exp2Client2Name: "Rabobank",
    exp2Client2Role: "Testautomatiseringsexpert",
    exp2Client2H1: "Protractor en BDD/Cucumber-frameworks geïntroduceerd",
    exp2Client2H2: "Testsuitetijd teruggebracht van een heel weekend naar 10 minuten",
    exp2Client2H3: "Collega's begeleid in Mendix-ontwikkeling en testautomatisering",
    exp2Client3Name: "Digidentity",
    exp2Client3Role: "QA-consultant en Scrum Master",
    exp2Client3H1: "Scrum Master geweest, teams laten groeien tot high-performance teams",

    exp3Period: "2012 – 2015",
    exp3Title: "Testautomatiseringsingenieur",
    exp3Company: "Sogeti, Nederland",
    exp3Desc:
      "Consultancy-opdracht via Sogeti, gericht op hightech productiesystemen en interoperabiliteitstesten.",
    exp3ClientName: "ASML",
    exp3ClientRole: "Testautomatiseringsingenieur",
    exp3H1: "API-testen van alle ASML TwinScan-systeeminterfaces",
    exp3H2: "Competentieleider voor interoperabiliteit binnen ASML",
    exp3H3: "Eigenaar van de softwarecomponent voor alle interfacetesten",

    exp4Period: "2009 – 2012",
    exp4Title: "M.Sc. Design for Interaction",
    exp4Company: "Technische Universiteit Delft, Nederland",
    exp4Desc:
      "Masteropleiding gericht op het snijvlak van design en technologie, met een uniek perspectief op gebruikerservaring en mensgerichte kwaliteit.",

    exp5Period: "2004 – 2008",
    exp5Title: "B.Eng. Industrial Design Engineering",
    exp5Company: "Saxion Hogeschool Enschede",
    exp5Desc:
      "Bacheloropleiding in industrieel ontwerpen, met een stevige basis in technische principes en designdenking.",

    naieLabel: "Naast consultancy",
    naieTitle: "NAIE en nevenprojecten",
    naieBadge: "Oprichter en voorzitter",
    naieOrgName: "Norsk AI-Etikkforening (NAIE)",
    naieOrgSub: "Noorse AI-ethiekvereniging — Onafhankelijke non-profit",
    naieDesc:
      "Opgericht in september 2025, is NAIE Noorwegens eerste onafhankelijke non-profitvereniging gewijd aan het onderzoeken en bevorderen van ethische AI. We leveren statistieken en inzichten over Bias, Duurzaamheid en Verantwoorde AI. Onze NoBBQ-benchmark heeft meer dan 1.200 AI-antwoorden geanalyseerd, en we werken samen met organisaties zoals LDO.",
    naieStat1: "1200+ AI-antwoorden geanalyseerd",
    naieStat2: "Noorwegens eerste Bias-indicator",
    naieStat3: "Samenwerking met LDO",
    naieVisit: "Bezoek naie.no",
    pillarBiasTitle: "Bias",
    pillarBiasDesc:
      "Onderzoeken en meten van bias in AI-systemen via de NoBBQ-benchmark, testen van grote taalmodellen op vooroordelen gerelateerd aan geslacht, etniciteit, religie en andere beschermde categorieën.",
    pillarResponsibleTitle: "Verantwoorde AI",
    pillarResponsibleDesc:
      "Bevorderen van verantwoorde ontwikkeling en gebruik van kunstmatige intelligentie in Noorwegen, inclusief richtlijnen, best practices en tools voor ethische AI-implementatie.",
    pillarSustainTitle: "Duurzaamheid",
    pillarSustainDesc:
      "Onderzoeken van de milieu-impact van AI-systemen en werken aan duurzamere AI-ontwikkeling, meten van energieverbruik en CO2-voetafdruk.",
    otherActivities: "Andere activiteiten",
    actSpeakingTitle: "Spreken in het openbaar",
    actSpeakingDesc:
      "Regelmatige talks over bias in AI-systemen, testautomatiseringsstrategie en kwaliteitstechniek op conferenties en meetups.",
    actBlogTitle: "Bloggen",
    actBlogDesc:
      "Schrijven over softwarekwaliteit, AI-ethiek, testautomatisering en lessen uit praktijkprojecten.",
    actProjectsTitle: "Nevenprojecten",
    actProjectsDesc:
      "Continu nieuwe technologieën verkennen en tools bouwen die kwaliteitstechniek en AI-ethiekonderzoek verbinden.",

    contactLabel: "Neem contact op",
    contactTitle: "Laten we verbinden",
    contactDesc:
      "Geïnteresseerd in het bespreken van testautomatiseringsstrategie, kwaliteitstechniek, AI-ethiek of mogelijke samenwerking? Ik hoor graag van je.",
    contactEmail: "E-mail",
    contactEmailSub: "Neem contact op",
    contactLinkedIn: "LinkedIn",
    contactLinkedInSub: "Verbind met mij",
    contactNaie: "NAIE",
    contactLocation: "Locatie",
    contactLocationValue: "Noorwegen",
    contactCurrently: "Momenteel werkzaam als consultant bij",
    footerRights: "Alle rechten voorbehouden.",
  },
};

const langLabels: Record<Language, string> = {
  en: "EN",
  no: "NO",
  nl: "NL",
};

const langFlags: Record<Language, string> = {
  en: "🇬🇧",
  no: "🇳🇴",
  nl: "🇳🇱",
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  langLabels: Record<Language, string>;
  langFlags: Record<Language, string>;
  languages: Language[];
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  return (
    <I18nContext.Provider
      value={{ lang, setLang, t, langLabels, langFlags, languages: ["en", "no", "nl"] }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};