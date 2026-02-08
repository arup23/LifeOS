export const categories = [
  { name: "Body", health: 68 },
  { name: "Mind", health: 82 },
  { name: "Craft", health: 74 },
  { name: "Community", health: 55 },
  { name: "Wealth", health: 61 }
];

export const aiSuggestion = {
  title: "AI Governor Suggestion",
  summary: "Your energy is moderate but focus has been low. Prioritize two deep-work blocks and one recovery quest to protect momentum.",
  focus: ["Schedule 2x 45-min focus sessions", "Take a 20-min recovery walk", "Reduce quest difficulty by 10% today"]
};

export const dashboardStats = {
  dailyScore: 76,
  xpToday: 420,
  weakArea: "Community",
  streakSafety: "70% streak preserved"
};

export const quests = [
  {
    title: "Restore energy baseline",
    category: "Body",
    xp: 90,
    difficulty: "Easy",
    estimate: "20 min",
    recovery: true
  },
  {
    title: "Ship one meaningful artifact",
    category: "Craft",
    xp: 180,
    difficulty: "Moderate",
    estimate: "60 min",
    recovery: false
  },
  {
    title: "Reach out to one ally",
    category: "Community",
    xp: 120,
    difficulty: "Easy",
    estimate: "15 min",
    recovery: false
  }
];

export const habits = [
  {
    title: "Daily movement",
    target: "30 min",
    progress: 0.6,
    recoveryMode: false
  },
  {
    title: "Skill practice",
    target: "45 min",
    progress: 0.35,
    recoveryMode: true
  }
];

export const calendarBlocks = [
  { title: "Deep work: product", time: "09:00 - 10:30", xp: 120 },
  { title: "Recovery break", time: "11:00 - 11:20", xp: 40 },
  { title: "Mentor session", time: "14:00 - 15:00", xp: 80 }
];

export const levels = {
  globalLevel: 9,
  globalXp: 1840,
  categories: [
    { name: "Body", level: 6, xp: 620 },
    { name: "Mind", level: 8, xp: 810 },
    { name: "Craft", level: 7, xp: 740 },
    { name: "Community", level: 5, xp: 520 },
    { name: "Wealth", level: 6, xp: 610 }
  ],
  multiplier: 1.15
};
