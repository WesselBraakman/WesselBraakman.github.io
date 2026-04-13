import { User, Lightbulb, Globe, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const AboutSection = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const highlights = [
    { icon: <User className="w-5 h-5" />, title: t.aboutHighlight1Title, description: t.aboutHighlight1Desc },
    { icon: <Lightbulb className="w-5 h-5" />, title: t.aboutHighlight2Title, description: t.aboutHighlight2Desc },
    { icon: <Globe className="w-5 h-5" />, title: t.aboutHighlight3Title, description: t.aboutHighlight3Desc },
    { icon: <Award className="w-5 h-5" />, title: t.aboutHighlight4Title, description: t.aboutHighlight4Desc },
  ];

  return (
    <section id="about" className={`py-24 ${isDark ? "bg-[#0F172A]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
            {t.aboutLabel}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.aboutTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className={`rounded-2xl overflow-hidden border ${isDark ? "border-slate-700/50" : "border-slate-200"}`}>
              <div className="w-full aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/wessel-profile-full.png"
                  alt="Wessel Braakman"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
          </div>

          <div>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {t.aboutP1}
            </p>
            <p className={`leading-relaxed mb-8 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {t.aboutP2}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className={`p-4 rounded-xl border transition-colors ${
                    isDark
                      ? "bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/30"
                      : "bg-slate-50 border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  <div className="text-indigo-500 mb-2">{item.icon}</div>
                  <h3 className={`font-semibold text-sm mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;