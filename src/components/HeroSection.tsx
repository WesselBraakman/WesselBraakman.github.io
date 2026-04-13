import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const HeroSection = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-04-13/04f2b08f-aa0e-4a88-a802-eb417908e0a1.png")',
        }}
      />
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-[#0F172A]/85" : "bg-white/80"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 shadow-xl ${
            isDark ? "border-indigo-500/40 shadow-indigo-500/20" : "border-indigo-200 shadow-indigo-100"
          }`}>
            <img
              src="/assets/wessel-profile-round.png"
              alt="Wessel Braakman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-6">
          <span
            className={`inline-block px-4 py-1.5 rounded-full border text-sm font-medium tracking-wide ${
              isDark
                ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                : "border-indigo-300 bg-indigo-50 text-indigo-700"
            }`}
          >
            {t.heroBadge}
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Wessel{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Braakman
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl mb-4 font-light ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {t.heroSubtitle}
        </p>

        <p
          className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {t.heroDescription}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="#experience"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg font-medium hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/25"
          >
            {t.heroViewExperience}
          </a>
          <a
            href="#contact"
            className={`px-6 py-3 border rounded-lg font-medium transition-all duration-300 ${
              isDark
                ? "border-slate-600 text-slate-300 hover:border-indigo-500/50 hover:text-white"
                : "border-slate-300 text-slate-600 hover:border-indigo-400 hover:text-indigo-600"
            }`}
          >
            {t.heroGetInTouch}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "15+", label: t.statYears },
            { value: "6+", label: t.statIndustries },
            { value: "10+", label: t.statCertifications },
            { value: "3", label: t.statCountries },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div
                className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce ${
          isDark ? "text-slate-400 hover:text-indigo-400" : "text-slate-400 hover:text-indigo-600"
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;