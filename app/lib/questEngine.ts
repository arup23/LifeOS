import { z } from "zod";

export const checkInSchema = z.object({
  sleep: z.number().min(1).max(5),
  energy: z.number().min(1).max(5),
  mood: z.string().min(1),
  focusHours: z.number().min(0),
  stress: z.number().min(1).max(5)
});

export type CheckInInput = z.infer<typeof checkInSchema>;

export interface GeneratedQuest {
  title: string;
  category: string;
  xp: number;
  difficulty: "Easy" | "Moderate" | "Hard";
  estimateMinutes: number;
  recovery: boolean;
}

const baseQuests = [
  { title: "Move your body", category: "Body" },
  { title: "Ship one meaningful artifact", category: "Craft" },
  { title: "Deep focus sprint", category: "Mind" },
  { title: "Connect with one ally", category: "Community" }
];

export function generateQuests(input: CheckInInput): GeneratedQuest[] {
  const difficultyScale = input.energy <= 2 || input.stress >= 4 ? 0.8 : input.energy >= 4 ? 1.1 : 1;
  const recoveryNeeded = input.energy <= 2 || input.stress >= 4;

  const quests = baseQuests.map((quest, index) => {
    const baseXp = 100 + index * 20;
    const xp = Math.round(baseXp * difficultyScale);
    const difficulty = xp < 110 ? "Easy" : xp < 140 ? "Moderate" : "Hard";

    return {
      title: quest.title,
      category: quest.category,
      xp,
      difficulty,
      estimateMinutes: Math.round(25 * difficultyScale + index * 5),
      recovery: false
    } satisfies GeneratedQuest;
  });

  if (recoveryNeeded) {
    quests.push({
      title: "Recovery walk and hydration",
      category: "Recovery",
      xp: 60,
      difficulty: "Easy",
      estimateMinutes: 20,
      recovery: true
    });
  }

  return quests;
}
