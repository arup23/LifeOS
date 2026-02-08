export interface GeminiSuggestion {
  summary: string;
  focus: string[];
  safeTone: string;
}

export async function getGeminiSuggestion(): Promise<GeminiSuggestion> {
  if (!process.env.ENV_GEMINI_API_KEY) {
    return {
      summary: "Gemini key missing. Using safe fallback guidance.",
      focus: [
        "Pick your top two quests only",
        "Add one recovery block",
        "Lower difficulty by 10%"
      ],
      safeTone: "Supportive, no guilt."
    };
  }

  // TODO: Replace with real Gemini API call via backend.
  return {
    summary: "You are steady. Keep tomorrow focused on deep work and gentle recovery.",
    focus: ["Schedule two deep work blocks", "Add one recovery quest", "Protect sleep window"],
    safeTone: "Supportive, no guilt."
  };
}
