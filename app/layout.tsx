import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Project Leverage",
  description: "Life RPG Personal Operating System"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-base">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Project Leverage</p>
                <h1 className="text-3xl font-semibold">Life RPG Operating System</h1>
              </div>
              <nav className="flex flex-wrap gap-3 text-sm text-white/70">
                <a className="hover:text-white" href="/">Dashboard</a>
                <a className="hover:text-white" href="/check-in">Morning Check-in</a>
                <a className="hover:text-white" href="/quests">Quests</a>
                <a className="hover:text-white" href="/habits">Habits</a>
                <a className="hover:text-white" href="/calendar">Calendar</a>
                <a className="hover:text-white" href="/levels">XP & Levels</a>
              </nav>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
