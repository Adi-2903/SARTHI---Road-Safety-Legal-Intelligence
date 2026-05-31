import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useServerFn } from "@tanstack/react-start";
import ReactMarkdown from "react-markdown";
import { askCompanion } from "@/lib/companion.functions";
import { Send, Bot, User } from "lucide-react";

export const Route = createFileRoute("/companion")({ component: CompanionPage });

type Msg = { role: "user" | "assistant"; content: string };

function CompanionPage() {
  const { t, i18n } = useTranslation();
  const ask = useServerFn(askCompanion);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: i18n.language === "hi"
      ? "नमस्ते! मैं सारथी हूँ। MV अधिनियम, चालान धाराओं या आपके अधिकारों के बारे में पूछें।"
      : "Hello! I'm SARTHI. Ask me anything about the MV Act, challan sections, or your rights." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  async function send() {
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await ask({ data: { messages: next, lang: (i18n.language as "en" | "hi") || "en" } });
      setMessages([...next, { role: "assistant", content: res.reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: "Sorry — request failed. Please retry." }]);
    } finally {
      setBusy(false);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }

  return (
    <div className="flex h-[calc(100dvh-180px)] flex-col">
      <header className="mb-2">
        <h1 className="text-xl font-semibold">{t("companion.title")}</h1>
        <p className="text-xs text-muted-foreground">{t("companion.disclaimer")}</p>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto rounded-xl border border-border bg-card p-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-foreground"}`}>
              {m.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
            </div>
            <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
              <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-headings:my-1 dark:prose-invert">
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {busy && <div className="text-xs text-muted-foreground">SARTHI is thinking…</div>}
        <div ref={endRef} />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); send(); }} className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("companion.placeholder")}
          className="flex-1 rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button type="submit" disabled={busy} className="inline-flex items-center gap-1 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-60">
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
