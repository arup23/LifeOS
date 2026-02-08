import { StatCard } from "../components/StatCard";

const metrics = [
  { label: "Sleep", value: "4 / 5" },
  { label: "Energy", value: "3 / 5" },
  { label: "Mood", value: "😊" },
  { label: "Focus Hours", value: "3.5" },
  { label: "Stress", value: "2 / 5" }
];

export default function MorningCheckInPage() {
  return (
    <main className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Morning Check-in</h2>
        <p className="text-sm text-white/70">
          Capture your baseline. The Quest Engine auto-adjusts difficulty based on this snapshot.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-card p-6">
        <h3 className="text-lg font-semibold">Auto-generated Quests</h3>
        <p className="mt-2 text-sm text-white/70">
          Today your energy is moderate, so we are scaling quests to 90% difficulty and inserting two recovery blocks.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Body: 20-min mobility reset (90 XP)",
            "Craft: Ship one meaningful artifact (180 XP)",
            "Mind: 45-min focus sprint (140 XP)",
            "Recovery: 20-min walk (60 XP)"
          ].map((quest) => (
            <div key={quest} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              {quest}
            </div>
          ))}
        </div>
        <button className="mt-6 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white">
          Save Check-in & Generate
        </button>
      </section>
    </main>
  );
}
