import { ExternalLink, Mic, PenTool, Rocket, Scale, Leaf, Brain } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const NaieSection = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const pillars = [
    { icon: <Scale className="w-6 h-6" />, title: t.pillarBiasTitle, description: t.pillarBiasDesc },
    { icon: <Brain className="w-6 h-6" />, title: t.pillarResponsibleTitle, description: t.pillarResponsibleDesc },
    { icon: <Leaf className="w-6 h-6" />, title: t.pillarSustainTitle, description: t.pillarSustainDesc },
  ];

  const sideProjects = [
    { icon: <Mic className="w-5 h-5" />, title: t.actSpeakingTitle, description: t.actSpeakingDesc },
    { icon: <PenTool className="w-5 h-5" />, title: t.actBlogTitle, description: t.actBlogDesc },
    { icon: <Rocket className="w-5 h-5" />, title: t.actProjectsTitle, description: t.actProjectsDesc },
  ];

  return (
    <section id="naie" className={`py-24 ${isDark ? "bg-[#1E293B]/50" : "bg-slate-50"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
            {t.naieLabel}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.naieTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* NAIE Feature */}
        <div className={`relative mb-20 rounded-2xl overflow-hidden border ${isDark ? "border-slate-700/50" : "border-slate-200"}`}>
          <div className="absolute inset-0">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-04-13/58904b71-9822-477f-95d7-d17ddd8d043e.png"
              alt="AI Ethics"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/70"
                  : "bg-gradient-to-r from-white/95 via-white/90 to-white/80"
              }`}
            />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    isDark
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                      : "bg-purple-50 text-purple-700 border-purple-200"
                  }`}
                >
                  {t.naieBadge}
                </span>
              </div>

              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {t.naieOrgName}
              </h3>
              <p className={`text-sm mb-4 ${isDark ? "text-indigo-300/80" : "text-indigo-600"}`}>
                {t.naieOrgSub}
              </p>

              <p className={`leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t.naieDesc}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[t.naieStat1, t.naieStat2, t.naieStat3].map((stat) => (
                  <span
                    key={stat}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      isDark
                        ? "bg-slate-800/80 text-slate-300 border-slate-700/50"
                        : "bg-white text-slate-600 border-slate-200 shadow-sm"
                    }`}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <a
                href="https://naie.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                {t.naieVisit}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-xl border transition-all duration-300 group ${
                isDark
                  ? "bg-[#0F172A] border-slate-700/50 hover:border-purple-500/30"
                  : "bg-white border-slate-200 hover:border-purple-300 shadow-sm"
              }`}
            >
              <div
                className={`p-3 rounded-lg w-fit mb-4 transition-colors ${
                  isDark
                    ? "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20"
                    : "bg-purple-50 text-purple-600 group-hover:bg-purple-100"
                }`}
              >
                {pillar.icon}
              </div>
              <h4 className={`font-semibold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {pillar.title}
              </h4>
              <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Other Side Projects */}
        <div>
          <h3 className={`text-2xl font-bold text-center mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.otherActivities}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sideProjects.map((project) => (
              <div
                key={project.title}
                className={`flex items-start gap-4 p-5 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-[#0F172A]/80 border-slate-700/30 hover:border-indigo-500/20"
                    : "bg-white border-slate-200 hover:border-indigo-200 shadow-sm"
                }`}
              >
                <div
                  className={`p-2 rounded-lg flex-shrink-0 ${
                    isDark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {project.icon}
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaieSection;