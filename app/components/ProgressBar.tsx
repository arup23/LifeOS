interface ProgressBarProps {
  label: string;
  value: number;
  tone?: "success" | "warning" | "accent";
}

const toneMap = {
  success: "bg-success",
  warning: "bg-warning",
  accent: "bg-accent"
};

export function ProgressBar({ label, value, tone = "accent" }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className={`h-2 rounded-full ${toneMap[tone]}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
