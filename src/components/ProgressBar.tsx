interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
}

export function ProgressBar({ value, max, label }: ProgressBarProps) {
  const safeMax = Math.max(max, 1);
  const percent = Math.round((Math.min(value, safeMax) / safeMax) * 100);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-3 text-sm">
        <span className="text-mist">{label}</span>
        <span className="font-semibold text-ink">
          {value}/{max}
        </span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-black/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div className="h-full rounded-full bg-pitch" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
