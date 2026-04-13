import { Briefcase, GraduationCap, Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

interface ClientAssignment {
  name: string;
  role: string;
  highlights: string[];
  tags?: string[];
}

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  type: "work" | "education";
  description: string;
  clients?: ClientAssignment[];
  highlights?: string[];
  tags?: string[];
}

const ExperienceSection = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timeline: TimelineItem[] = [
    {
      period: t.exp1Period,
      title: t.exp1Title,
      company: t.exp1Company,
      type: "work",
      description: t.exp1Desc,
      clients: [
        {
          name: t.exp1ClientName,
          role: t.exp1ClientRole,
          highlights: [t.exp1H1, t.exp1H2, t.exp1H3, t.exp1H4],
          tags: ["Cypress", "Playwright", "TypeScript", "GitLab", "OpenShift", "Kafka"],
        },
      ],
    },
    {
      period: t.exp2Period,
      title: t.exp2Title,
      company: t.exp2Company,
      type: "work",
      description: t.exp2Desc,
      clients: [
        {
          name: t.exp2Client1Name,
          role: t.exp2Client1Role,
          highlights: [t.exp2Client1H1],
          tags: ["Mendix"],
        },
        {
          name: t.exp2Client2Name,
          role: t.exp2Client2Role,
          highlights: [t.exp2Client2H1, t.exp2Client2H2, t.exp2Client2H3],
          tags: ["Selenium", "Cucumber", "Protractor", "Mendix", "AWS", "Apigee"],
        },
        {
          name: t.exp2Client3Name,
          role: t.exp2Client3Role,
          highlights: [t.exp2Client3H1],
          tags: ["Scrum", "Postman"],
        },
      ],
    },
    {
      period: t.exp3Period,
      title: t.exp3Title,
      company: t.exp3Company,
      type: "work",
      description: t.exp3Desc,
      clients: [
        {
          name: t.exp3ClientName,
          role: t.exp3ClientRole,
          highlights: [t.exp3H1, t.exp3H2, t.exp3H3],
          tags: ["SoapUI", "XML", "API Testing", "PRINCE2"],
        },
      ],
    },
    {
      period: t.exp4Period,
      title: t.exp4Title,
      company: t.exp4Company,
      type: "education",
      description: t.exp4Desc,
    },
    {
      period: t.exp5Period,
      title: t.exp5Title,
      company: t.exp5Company,
      type: "education",
      description: t.exp5Desc,
    },
  ];

  return (
    <section id="experience" className={`relative py-24 ${isDark ? "bg-[#0F172A]" : "bg-white"}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center ${isDark ? "opacity-8" : "opacity-[0.03]"}`}
        style={{
          backgroundImage:
            'url("https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-04-13/9bf87e13-5ac4-4918-b36d-61854f4885a1.png")',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
            {t.expLabel}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.expTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          <div className={`absolute left-4 md:left-8 top-0 bottom-0 w-px ${isDark ? "bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent" : "bg-gradient-to-b from-indigo-400 via-indigo-300/50 to-transparent"}`} />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                <div
                  className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${
                    item.type === "work"
                      ? "bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/50"
                      : "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50"
                  }`}
                />

                <div
                  className={`p-6 rounded-xl border transition-all duration-300 ${
                    isDark
                      ? "bg-[#1E293B]/80 border-slate-700/50 hover:border-indigo-500/30"
                      : "bg-white border-slate-200 hover:border-indigo-300 shadow-sm"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-indigo-500 font-mono text-sm font-semibold">
                      {item.period}
                    </span>
                    <span className={`flex items-center gap-1 text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      {item.type === "work" ? <Briefcase className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
                      {item.type === "work" ? t.work : t.education}
                    </span>
                  </div>

                  <h3 className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mb-3 ${isDark ? "text-indigo-300/80" : "text-indigo-600/80"}`}>
                    {item.company}
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {item.description}
                  </p>

                  {/* Client assignment sub-cards */}
                  {item.clients && item.clients.length > 0 && (
                    <div className="space-y-3 mt-4">
                      {item.clients.map((client, cIndex) => (
                        <div
                          key={cIndex}
                          className={`rounded-lg border p-4 transition-all duration-300 ${
                            isDark
                              ? "bg-slate-800/60 border-slate-600/40 hover:border-indigo-500/40"
                              : "bg-slate-50 border-slate-200 hover:border-indigo-300"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 className={`w-4 h-4 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
                            <span className={`font-bold text-sm ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>
                              {client.name}
                            </span>
                            <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>•</span>
                            <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                              {client.role}
                            </span>
                          </div>

                          {client.highlights.length > 0 && (
                            <ul className="space-y-1.5 mb-3">
                              {client.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className={`text-sm flex items-start gap-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                                  <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          )}

                          {client.tags && client.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {client.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-2 py-0.5 text-xs rounded-full ${
                                    isDark
                                      ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                                      : "bg-cyan-50 text-cyan-600 border border-cyan-200"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Legacy highlights/tags for education items */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className={`text-sm flex items-start gap-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            isDark
                              ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                              : "bg-indigo-50 text-indigo-600 border border-indigo-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;