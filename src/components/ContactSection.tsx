import { Mail, Linkedin, Globe, MapPin, ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const ContactSection = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactItems = [
    {
      href: "mailto:wessel@example.com",
      icon: <Mail className="w-5 h-5" />,
      label: t.contactEmail,
      sub: t.contactEmailSub,
      isLink: true,
    },
    {
      href: "https://linkedin.com/in/wesselbraakman",
      icon: <Linkedin className="w-5 h-5" />,
      label: t.contactLinkedIn,
      sub: t.contactLinkedInSub,
      isLink: true,
    },
    {
      href: "https://naie.no",
      icon: <Globe className="w-5 h-5" />,
      label: t.contactNaie,
      sub: "naie.no",
      isLink: true,
    },
    {
      href: "",
      icon: <MapPin className="w-5 h-5" />,
      label: t.contactLocation,
      sub: t.contactLocationValue,
      isLink: false,
    },
  ];

  return (
    <>
      <section id="contact" className={`py-24 ${isDark ? "bg-[#0F172A]" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-indigo-500 text-sm font-semibold tracking-widest uppercase">
            {t.contactLabel}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mt-3 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.contactTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full mb-8" />

          <p className={`text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.contactDesc}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactItems.map((item) => {
              const content = (
                <div
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300 group ${
                    isDark
                      ? "bg-[#1E293B]/80 border-slate-700/50 hover:border-indigo-500/30"
                      : "bg-slate-50 border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  <div className={`p-3 rounded-full transition-colors ${isDark ? "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}>{item.label}</span>
                  <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.sub}</span>
                </div>
              );

              if (item.isLink) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>

          <p className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
            {t.contactCurrently}{" "}
            <a
              href="https://bouvet.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition-colors"
            >
              Bouvet ASA
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDark ? "bg-[#0B1120] border-slate-800" : "bg-slate-100 border-slate-200"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
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
                  className={`text-sm transition-colors ${isDark ? "text-slate-400 hover:text-indigo-400" : "text-slate-500 hover:text-indigo-600"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className={`text-sm ${isDark ? "text-slate-500" : "text-slate-400"}`}>
              © {new Date().getFullYear()} Wessel Braakman. {t.footerRights}
            </p>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-full transition-all ${isDark ? "bg-slate-800 text-slate-400 hover:text-indigo-400 hover:bg-slate-700" : "bg-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-slate-300"}`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;