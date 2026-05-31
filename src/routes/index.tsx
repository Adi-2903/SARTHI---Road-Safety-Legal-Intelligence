import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Calculator, ShieldCheck, FileText, MessageCircle, Phone, Map } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useTranslation();
  const modules: Array<{ to: string; Icon: typeof Calculator; key: string; danger?: boolean }> = [
    { to: "/calculator", Icon: Calculator, key: "calculator" },
    { to: "/validator", Icon: ShieldCheck, key: "validator" },
    { to: "/contest", Icon: FileText, key: "contest" },
    { to: "/companion", Icon: MessageCircle, key: "companion" },
    { to: "/map", Icon: Map, key: "map" },
    { to: "/sos", Icon: Phone, key: "sos", danger: true },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-gradient-to-br from-primary to-primary/85 p-6 text-primary-foreground shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest opacity-70">SARTHI</div>
        <h1 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
          {t("home.hero_title")}
        </h1>
        <p className="mt-2 text-sm opacity-85">{t("home.hero_sub")}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/validator" className="rounded-md bg-primary-foreground/15 px-3 py-1.5 text-sm font-medium ring-1 ring-primary-foreground/20 hover:bg-primary-foreground/25">
            Check a challan
          </Link>
          <Link to="/companion" className="rounded-md bg-primary-foreground px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary-foreground/90">
            Ask companion
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("home.modules")}
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {modules.map(({ to, Icon, key, danger }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl border border-border bg-card p-4 transition hover:border-primary hover:shadow-sm"
            >
              <div className={`mb-3 grid h-10 w-10 place-items-center rounded-lg ${danger ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold">{t(`modules.${key}.title`)}</div>
              <div className="mt-1 text-xs text-muted-foreground">{t(`modules.${key}.desc`)}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">100% offline-ready core.</span>{" "}
        Calculator, validator, contest letter, map and SOS all work without a network. AI Companion requires connectivity.
      </section>
    </div>
  );
}
