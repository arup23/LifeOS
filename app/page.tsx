import { StatCard } from "./components/StatCard";
import { ProgressBar } from "./components/ProgressBar";
import { aiSuggestion, categories, dashboardStats } from "./lib/sampleData";

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Daily Life Score" value={`${dashboardStats.dailyScore}`} accent hint="Momentum is steady.">
          <span className="rounded-full bg-success/20 px-3 py-1 text-xs text-success">+4% vs yesterday</span>
        </StatCard>
        <StatCard label="XP Today" value={`${dashboardStats.xpToday} XP`} hint={`Weak area: ${dashboardStats.weakArea}`}>
          <span className="rounded-full bg-accent/20 px-3 py-1 text-xs text-accent">x1.15 multiplier</span>
        </StatCard>
        <StatCard label="Streak Safety" value={dashboardStats.streakSafety} hint="Soft penalties only" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-2xl border border-white/10 bg-card p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Category Health</h2>
            <span className="text-sm text-white/50">Target 80%+ for growth</span>
          </div>
          <div className="space-y-4">
            {categories.map((category) => (
              <ProgressBar
                key={category.name}
                label={category.name}
                value={category.health}
                tone={category.name === dashboardStats.weakArea ? "warning" : "accent"}
              />
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Weak area spotlight: <span className="font-semibold text-warning">{dashboardStats.weakArea}</span> is below target.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-card p-6">
          <h2 className="text-xl font-semibold">{aiSuggestion.title}</h2>
          <p className="mt-3 text-sm text-white/70">{aiSuggestion.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {aiSuggestion.focus.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white">
            Lock Tomorrow's Focus
          </button>
        </div>
      </section>
    </main>
  );
}
