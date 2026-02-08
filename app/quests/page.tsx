import { quests } from "../lib/sampleData";

export default function QuestsPage() {
  return (
    <main className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Quest Engine</h2>
        <p className="text-sm text-white/70">
          Daily quests are generated per category, with recovery quests added on low-energy days.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {quests.map((quest) => (
          <div key={quest.title} className="rounded-2xl border border-white/10 bg-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{quest.title}</h3>
              {quest.recovery ? (
                <span className="rounded-full bg-warning/20 px-3 py-1 text-xs text-warning">Recovery</span>
              ) : (
                <span className="rounded-full bg-success/20 px-3 py-1 text-xs text-success">Core Quest</span>
              )}
            </div>
            <p className="mt-2 text-sm text-white/60">Category: {quest.category}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">{quest.xp} XP</span>
              <span className="rounded-full bg-white/10 px-3 py-1">{quest.difficulty}</span>
              <span className="rounded-full bg-white/10 px-3 py-1">{quest.estimate}</span>
            </div>
            <button className="mt-5 w-full rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 hover:border-accent hover:text-white">
              Log Progress
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
