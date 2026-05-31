import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import snippets from "@/data/mv_act_snippets.json";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(4000),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(20),
  lang: z.enum(["en", "hi"]).default("en"),
});

export const askCompanion = createServerFn({ method: "POST" })
  .inputValidator((data) => InputSchema.parse(data))
  .handler(async ({ data }) => {
    const ctx = snippets.snippets
      .map((s) => `Sec ${s.section} — ${s.title}: ${s.summary}`)
      .join("\n");
    const rights = snippets.rights.map((r, i) => `${i + 1}. ${r}`).join("\n");

    const sys =
      `You are SARTHI, an AI legal companion for the Indian Motor Vehicles Act, 1988 (as amended 2019). ` +
      `Answer in ${data.lang === "hi" ? "Hindi (Devanagari)" : "English"}. ` +
      `Rules: (1) Always cite the MV Act section number when relevant. ` +
      `(2) NEVER invent fine amounts — say "use the SARTHI Challan Calculator" instead. ` +
      `(3) Keep answers under 180 words, use short bullets when listing rights. ` +
      `(4) Add this disclaimer at the end: "Information only — verify with local gazette."\n\n` +
      `Grounded knowledge:\n${ctx}\n\nCitizen rights you may cite:\n${rights}`;

    const geminiKey = process.env.GEMINI_API_KEY;

    if (geminiKey) {
      try {
        const contents = data.messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents,
              systemInstruction: {
                parts: [{ text: sys }],
              },
              generationConfig: {
                maxOutputTokens: 600,
                temperature: 0.3,
              },
            }),
          }
        );

        if (res.ok) {
          const json = (await res.json()) as any;
          const reply = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (reply) {
            return { reply, error: null };
          }
        } else {
          console.error("Gemini direct API error status:", res.status);
        }
      } catch (e) {
        console.error("Gemini API connection error, entering local fallback mode", e);
      }
    }

    // --- LOCAL OFFLINE RESILIENT FALLBACK ENGINE ---
    const qLower = data.messages[data.messages.length - 1].content.toLowerCase();

    // Semantic keyword mapping
    const helmetMatch =
      qLower.includes("helmet") ||
      qLower.includes("headgear") ||
      qLower.includes("हेलमेट") ||
      qLower.includes("सुरक्षा टोपी") ||
      qLower.includes("टोपी");
    const seatbeltMatch =
      qLower.includes("seat") ||
      qLower.includes("belt") ||
      qLower.includes("सीट") ||
      qLower.includes("बेल्ट");
    const licenseMatch =
      qLower.includes("licence") ||
      qLower.includes("license") ||
      qLower.includes("लाइसेंस") ||
      qLower.includes("कार्ड");
    const speedMatch =
      qLower.includes("speed") ||
      qLower.includes("गति") ||
      qLower.includes("तेज") ||
      qLower.includes("रफ़्तार");
    const drunkMatch =
      qLower.includes("drunk") ||
      qLower.includes("drink") ||
      qLower.includes("alcohol") ||
      qLower.includes("शराब") ||
      qLower.includes("नशा") ||
      qLower.includes("पीकर");
    const insuranceMatch = qLower.includes("insurance") || qLower.includes("insure") || qLower.includes("बीमा");
    const racingMatch =
      qLower.includes("race") ||
      qLower.includes("racing") ||
      qLower.includes("रेस") ||
      qLower.includes("दौड़");
    const overloadMatch =
      qLower.includes("overload") ||
      qLower.includes("load") ||
      qLower.includes("ओवरलोड") ||
      qLower.includes("वजन") ||
      qLower.includes("भार");
    const rightsMatch =
      qLower.includes("right") ||
      qLower.includes("power") ||
      qLower.includes("authority") ||
      qLower.includes("officer") ||
      qLower.includes("cop") ||
      qLower.includes("constable") ||
      qLower.includes("police") ||
      qLower.includes("अधिकार") ||
      qLower.includes("पुलिस") ||
      qLower.includes("अधिकारी");

    type Snippet = { section: string; title: string; summary: string };
    const rawMatches: (Snippet | undefined)[] = [];
    if (helmetMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "194D"));
    if (seatbeltMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "194B"));
    if (licenseMatch)
      rawMatches.push(
        snippets.snippets.find((s) => s.section === "181") ?? snippets.snippets.find((s) => s.section === "207")
      );
    if (speedMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "183"));
    if (drunkMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "185"));
    if (racingMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "189"));
    if (overloadMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "194"));
    if (insuranceMatch) rawMatches.push(snippets.snippets.find((s) => s.section === "196"));

    const matchedSnippets: Snippet[] = rawMatches.filter((s): s is Snippet => s !== undefined);

    let reply = "";
    if (data.lang === "hi") {
      reply = `### 🛰️ सारथी ऑफलाइन एआई सेवा सक्रिय (कोई इंटरनेट/एपीआई कुंजी नहीं)\n\n`;
      if (matchedSnippets.length > 0) {
        reply += `मुझे आपके प्रश्न से संबंधित मोटर वाहन (MV) अधिनियम की निम्नलिखित धाराएं मिली हैं:\n\n`;
        matchedSnippets.forEach((s) => {
          const titleMap: Record<string, string> = {
            "General penalty": "सामान्य दंड",
            "Driving without a valid licence": "बिना वैध लाइसेंस के वाहन चलाना",
            "Over-speeding": "तेज गति / ओवर-स्पीडिंग",
            "Dangerous driving / signal jumping / mobile use": "खतरनाक ड्राइविंग / सिग्नल जंपिंग / मोबाइल का उपयोग",
            "Driving under influence": "शराब पीकर गाड़ी चलाना (DUI)",
            "Racing & speed trials on public roads": "सार्वजनिक सड़कों पर रेसिंग और गति परीक्षण",
            "Driving an unsafe / polluting vehicle": "असुरक्षित / प्रदूषण फैलाने वाला वाहन चलाना",
            "Overloading of goods": "सामान की ओवरलोडिंग",
            "Seat-belt violation": "सीट-बेल्ट उल्लंघन",
            "Two-wheeler with more than two persons": "दोपहिया वाहन पर दो से अधिक व्यक्ति",
            "Riding without protective headgear": "बिना हेलमेट गाड़ी चलाना",
            "Driving without valid insurance": "बिना वैध बीमा के गाड़ी चलाना",
            "Power to detain vehicles": "वाहनों को जब्त करने का अधिकार",
          };
          const titleHi = titleMap[s.title] || s.title;
          reply += `*   **धारा ${s.section} — ${titleHi}:** ${s.summary}\n`;
        });
        reply += `\n`;
      }

      if (rightsMatch || matchedSnippets.length === 0) {
        reply += `**सड़क पर आपके महत्वपूर्ण नागरिक अधिकार:**\n\n`;
        const hiRights = [
          "आपको पुलिस अधिकारी का नाम, पद और बैच नंबर पूछने का अधिकार है।",
          "आप चालान की प्रति मांग सकते हैं जिसमें संबंधित धारा और अधिकारी के हस्ताक्षर होने अनिवार्य हैं।",
          "अधिकारी की अधिकार सीमा से अधिक का जुर्माना केवल मजिस्ट्रेट कोर्ट में भेजा जाना चाहिए; लिखित में कोर्ट चालान की मांग करें।",
          "शमनीय (Compoundable) अपराधों का भुगतान ऑनलाइन, व्यक्तिगत रूप से या कोर्ट में किया जा सकता है (आमतौर पर 60 दिनों के भीतर)।",
          "आप स्पीड-रडार या ब्रेथ-एनालाइज़र के कैलिब्रेशन प्रमाणपत्र की जांच कर सकते हैं; बिना कैलिब्रेशन वाले उपकरण का प्रमाण कोर्ट में मान्य नहीं है।",
        ];
        hiRights.forEach((r) => {
          reply += `*   ${r}\n`;
        });
        reply += `\n`;
      }

      if (matchedSnippets.length === 0 && !rightsMatch) {
        reply += `नमस्ते! ऑफलाइन मोड में, मैं आपके मोटर वाहन नियमों और नागरिक अधिकारों के बारे में मदद कर सकता हूँ।\n\nआप मुझसे हेलमेट, सीट बेल्ट, गति सीमा, ड्राइविंग लाइसेंस, ड्रिंक एंड ड्राइव (शराब पीकर गाड़ी चलाना), या पुलिस से संबंधित अपने अधिकारों के बारे में पूछ सकते हैं।\n\nसटीक जुर्माने की गणना के लिए कृपया हमारे **चालान कैलकुलेटर** का उपयोग करें।\n\n`;
      }

      reply += `---\n*सूचना केवल सामान्य जानकारी के लिए है — स्थानीय गज़ट से पुष्टि करें।*`;
    } else {
      reply = `### 🛰️ SARTHI Local AI Engine Active (Offline/No API Key)\n\n`;
      if (matchedSnippets.length > 0) {
        reply += `I found the following Motor Vehicles (MV) Act sections matching your query:\n\n`;
        matchedSnippets.forEach((s) => {
          reply += `*   **Section ${s.section} — ${s.title}:** ${s.summary}\n`;
        });
        reply += `\n`;
      }

      if (rightsMatch || matchedSnippets.length === 0) {
        reply += `**Your Core Constitutional & Citizen Rights on the Road:**\n\n`;
        snippets.rights.forEach((r) => {
          reply += `*   ${r}\n`;
        });
        reply += `\n`;
      }

      if (matchedSnippets.length === 0 && !rightsMatch) {
        reply += `Hello! In local/offline mode, I can assist you with key traffic laws and driver rights. \n\nFeel free to ask about helmet rules, seat-belt fines, speeding, driver's license requirements, drunk driving, or your citizen rights when stopped by an officer.\n\nFor general calculations, please access the **Challan Calculator** from the dashboard.\n\n`;
      }

      reply += `---\n*Disclaimer: Information only — verify with local gazette or professional legal counsel.*`;
    }

    return { reply, error: null };
  });
