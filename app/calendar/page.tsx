import { calendarBlocks } from "../lib/sampleData";

export default function CalendarPage() {
  return (
    <main className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Calendar & Time System</h2>
        <p className="text-sm text-white/70">
          Time blocks drive XP. Focus sessions yield multipliers based on consistency.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Today&apos;s Blocks</h3>
          <button className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white">Add Block</button>
        </div>
        <div className="space-y-3">
          {calendarBlocks.map((block) => (
            <div key={block.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="font-semibold">{block.title}</p>
                <p className="text-xs text-white/60">{block.time}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{block.xp} XP</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
