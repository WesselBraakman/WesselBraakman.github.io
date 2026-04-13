import { Code, Wrench, BookOpen, Shield, Database, GitBranch } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const SkillsSection = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const skillCategories = [
    {
      icon: <Code className="w-5 h-5" />,
      title: t.catTestAutomation,
      skills: ["Cypress", "Playwright", "Selenium WebDriver", "Protractor", "Postman", "JMeter", "FitNesse", "Cucumber", "Capybara"],
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: t.catToolsPlatforms,
      skills: ["JIRA", "Confluence", "Splunk", "Kibana", "New Relic", "SoapUI", "Apigee", "ZenDesk", "XRay", "draw.io"],
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: t.catMethodologies,
      skills: ["Scrum", "Agile", "DevOps", "Kanban", "BDD", "TDD", "PRA", "SAFe (ART)"],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t.catProgramming,
      skills: ["JavaScript", "TypeScript", "Mendix", "Gherkin", "Ruby on Rails", "XML", "REST", "OpenAPI 3.0"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: t.catArchCloud,
      skills: ["AWS (SQS)", "Microservices", "Event-driven", "OpenShift", "MySQL", "Kafka"],
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: t.catCiCd,
      skills: ["Git", "GitLab", "Jenkins", "npm", "Mendix Cloud"],
    },
  ];

  const certifications = [
    { year: "2023", name: "Professional Scrum Product Owner (PSPO 1)", issuer: "Scrum.org" },
    { year: "2022", name: "Professional Scrum Developer (PSD 1)", issuer: "Scrum.org" },
    { year: "2020", name: "Mendix Advanced Developer", issuer: "Mendix" },
    { year: "2019", name: "Mendix Rapid Developer", issuer: "Mendix" },
    { year: "2016", name: "Professional Scrum Master (PSM 1)", issuer: "Scrum.org" },
    { year: "2015", name: "PRINCE2 Foundation", issuer: "Exin" },
    { year: "2014", name: "Agile Foundation", issuer: "Agile Consortium" },
    { year: "2013", name: "ISTQB Certified Tester Foundation", issuer: "ISTQB" },
    { year: "2012", name: "TMAP Next Foundation", issuer: "Exin" },
  ];

  return (
    <section id="skills" className={`py-24 ${isDark ? "bg-[#1E293B]/50" : "bg-slate-50"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
            {t.skillsLabel}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.skillsTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl border transition-all duration-300 group ${
                isDark
                  ? "bg-[#0F172A] border-slate-700/50 hover:border-indigo-500/30"
                  : "bg-white border-slate-200 hover:border-indigo-300 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg transition-colors ${isDark ? "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"}`}>
                  {category.icon}
                </div>
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      isDark
                        ? "bg-slate-800 text-slate-300 border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-300"
                        : "bg-slate-100 text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className={`text-2xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.certTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`flex items-start gap-3 p-4 rounded-lg border transition-colors ${
                  isDark
                    ? "bg-[#0F172A]/80 border-slate-700/30 hover:border-indigo-500/20"
                    : "bg-white border-slate-200 hover:border-indigo-200 shadow-sm"
                }`}
              >
                <span className="text-indigo-500 font-mono text-sm font-bold whitespace-nowrap mt-0.5">
                  {cert.year}
                </span>
                <div>
                  <p className={`text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{cert.name}</p>
                  <p className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;