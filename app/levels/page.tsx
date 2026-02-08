import { ProgressBar } from "../components/ProgressBar";
import { levels } from "../lib/sampleData";

export default function LevelsPage() {
  return (
    <main className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">XP & Leveling</h2>
        <p className="text-sm text-white/70">
          Global level tracks total XP. Category levels capture specialized growth.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-card p-6">
          <h3 className="text-lg font-semibold">Global Player Level</h3>
          <p className="mt-2 text-3xl font-semibold">Level {levels.globalLevel}</p>
          <p className="mt-2 text-sm text-white/60">{levels.globalXp} XP total</p>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Consistency multiplier: <span className="font-semibold text-success">x{levels.multiplier}</span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-card p-6">
          <h3 className="text-lg font-semibold">Failure & Recovery</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Burnout detection reduces difficulty automatically.</li>
            <li>Soft penalties only: streaks preserve 70% value.</li>
            <li>Recovery quests activate after missed days.</li>
          </ul>
          <button className="mt-5 w-full rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 hover:border-accent hover:text-white">
            Review Recovery Plan
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-card p-6">
        <h3 className="text-lg font-semibold">Category Levels</h3>
        <div className="mt-4 space-y-4">
          {levels.categories.map((category) => (
            <ProgressBar key={category.name} label={`${category.name} (Lvl ${category.level})`} value={Math.min(100, Math.round((category.xp / 1000) * 100))} />
          ))}
        </div>
      </section>
    </main>
  );
}
