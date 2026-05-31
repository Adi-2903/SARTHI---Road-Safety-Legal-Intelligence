import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Home, Map, Phone, MessageCircle, Menu, Shield, Calculator, FileText, History, Info, ShieldCheck } from "lucide-react";
import { useOnline } from "@/hooks/use-online";
import { setLang } from "@/lib/i18n";
import { useState } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const online = useOnline();
  const [headerMenu, setHeaderMenu] = useState(false);
  const [bottomMenu, setBottomMenu] = useState(false);

  const items = [
    { to: "/", label: t("nav.home"), Icon: Home },
    { to: "/map", label: t("nav.map"), Icon: Map },
    { to: "/sos", label: t("nav.sos"), Icon: Phone, danger: true },
    { to: "/companion", label: t("nav.companion"), Icon: MessageCircle },
  ];

  return (
    <div className="min-h-dvh flex flex-col bg-background pb-20">
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">{t("app.name")}</div>
              <div className="text-[11px] text-muted-foreground">{t("app.tagline")}</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <span
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${online ? "bg-success/10 text-success" : "bg-warning/15 text-warning-foreground"}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-success" : "bg-warning"}`} />
              {online ? t("app.online") : t("app.offline")}
            </span>
            <button
              onClick={() => setLang(i18n.language === "hi" ? "en" : "hi")}
              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:bg-accent"
              aria-label="Toggle language"
            >
              {i18n.language === "hi" ? "EN" : "हिं"}
            </button>
            <button
              onClick={() => setHeaderMenu((m) => !m)}
              className="rounded-md border border-border p-1.5 hover:bg-accent md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
        {headerMenu && (
          <div className="border-t border-border bg-card md:hidden">
            <nav className="mx-auto flex max-w-3xl flex-col px-2 py-2 text-sm">
              {[
                { to: "/calculator", label: t("nav.calculator") },
                { to: "/validator", label: t("nav.validator") },
                { to: "/contest", label: t("nav.contest") },
                { to: "/history", label: t("nav.history") },
                { to: "/about", label: t("nav.about") },
              ].map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  onClick={() => setHeaderMenu(false)}
                  className="rounded-md px-3 py-2 hover:bg-accent"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-5">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur">
        <div className="mx-auto grid max-w-3xl grid-cols-5">
          {items.map(({ to, label, Icon, danger }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground data-[status=active]:text-primary"
            >
              <Icon className={`h-5 w-5 ${danger ? "text-destructive" : ""}`} />
              {label}
            </Link>
          ))}
          <button
            onClick={() => setBottomMenu((m) => !m)}
            className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-muted-foreground"
          >
            <Menu className="h-5 w-5" />
            {t("nav.more")}
          </button>
        </div>
      </nav>

      {bottomMenu && (
        <div className="fixed inset-0 z-40 bg-background/20 backdrop-blur-[2px]" onClick={() => setBottomMenu(false)}>
          <div
            className="fixed bottom-22 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 rounded-2xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
              {t("nav.more")}
            </div>
            <nav className="flex flex-col gap-1">
              {[
                { to: "/calculator", label: t("nav.calculator"), Icon: Calculator },
                { to: "/validator", label: t("nav.validator"), Icon: ShieldCheck },
                { to: "/contest", label: t("nav.contest"), Icon: FileText },
                { to: "/history", label: t("nav.history"), Icon: History },
                { to: "/about", label: t("nav.about"), Icon: Info },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setBottomMenu(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-foreground"
                >
                  <item.Icon className="h-4 w-4 text-primary" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
