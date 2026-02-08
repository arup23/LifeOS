import { habits } from "../lib/sampleData";

export default function HabitsPage() {
  return (
    <main className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Habit System</h2>
        <p className="text-sm text-white/70">
          Partial completion counts. Streaks never reset to zero; recovery mode preserves 70% streak value.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {habits.map((habit) => (
          <div key={habit.title} className="rounded-2xl border border-white/10 bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{habit.title}</h3>
              {habit.recoveryMode ? (
                <span className="rounded-full bg-warning/20 px-3 py-1 text-xs text-warning">Recovery Mode</span>
              ) : (
                <span className="rounded-full bg-success/20 px-3 py-1 text-xs text-success">Active</span>
              )}
            </div>
            <p className="mt-2 text-sm text-white/60">Target: {habit.target}</p>
            <div className="mt-4">
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-accent" style={{ width: `${habit.progress * 100}%` }} />
              </div>
              <p className="mt-2 text-xs text-white/60">{Math.round(habit.progress * 100)}% complete</p>
            </div>
            <button className="mt-5 w-full rounded-xl border border-white/10 px-4 py-2 text-sm text-white/70 hover:border-accent hover:text-white">
              Update Progress
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
