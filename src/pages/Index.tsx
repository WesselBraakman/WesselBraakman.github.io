import { Sun, Moon } from "lucide-react";
import { I18nProvider, useI18n, Language } from "@/lib/i18n";
import { ThemeProvider, useTheme } from "@/lib/theme";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import NaieSection from "@/components/NaieSection";
import ContactSection from "@/components/ContactSection";

const PortfolioContent = () => {
  const { lang, setLang, t, langLabels, langFlags, languages } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#0F172A]" : "bg-white"}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${
          isDark
            ? "bg-[#0F172A]/80 border-slate-800/50"
            : "bg-white/80 border-slate-200/50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className={`font-bold text-lg tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}
          >
            W
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              B
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "#about", label: t.navAbout },
              { href: "#skills", label: t.navSkills },
              { href: "#experience", label: t.navExperience },
              { href: "#naie", label: t.navNaie },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-500 transition-colors"
            >
              {t.navContact}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-2">
              {languages.map((l: Language) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs rounded-md transition-all ${
                    lang === l
                      ? "bg-indigo-600 text-white"
                      : isDark
                      ? "text-slate-400 hover:text-white hover:bg-slate-800"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  title={langLabels[l]}
                >
                  {langFlags[l]} {langLabels[l]}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                isDark
                  ? "text-slate-400 hover:text-yellow-400 hover:bg-slate-800"
                  : "text-slate-500 hover:text-indigo-600 hover:bg-slate-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language */}
            <div className="flex items-center gap-0.5">
              {languages.map((l: Language) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-1 text-xs rounded transition-all ${
                    lang === l
                      ? "bg-indigo-600 text-white"
                      : isDark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  {langFlags[l]}
                </button>
              ))}
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-lg ${isDark ? "text-slate-400" : "text-slate-500"}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              className={`p-1.5 ${isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle("hidden");
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`hidden md:hidden backdrop-blur-lg border-b ${
            isDark ? "bg-[#0F172A]/95 border-slate-800/50" : "bg-white/95 border-slate-200/50"
          }`}
        >
          <div className="px-6 py-4 space-y-3">
            {[
              { href: "#about", label: t.navAbout },
              { href: "#skills", label: t.navSkills },
              { href: "#experience", label: t.navExperience },
              { href: "#naie", label: t.navNaie },
              { href: "#contact", label: t.navContact },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block text-sm transition-colors ${
                  isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.add("hidden");
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <NaieSection />
      <ContactSection />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <PortfolioContent />
      </I18nProvider>
    </ThemeProvider>
  );
};

export default Index;