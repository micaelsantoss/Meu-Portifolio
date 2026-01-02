type BadgeProps = {
  label: string
  color?: 'cyan' | 'blue' | 'purple' | 'green' | 'sky'
}

const badgeColors = {
  cyan: 'border-cyan-400/40 text-cyan-300 bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.35)]',
  blue: 'border-blue-400/40 text-blue-300 bg-blue-400/10 shadow-[0_0_12px_rgba(59,130,246,0.35)]',
  purple: 'border-purple-400/40 text-purple-300 bg-purple-400/10 shadow-[0_0_12px_rgba(168,85,247,0.35)]',
  green: 'border-green-400/40 text-green-300 bg-green-400/10 shadow-[0_0_12px_rgba(34,197,94,0.35)]',
  sky: 'border-sky-400/70 text-sky-400 bg-sky-400/10 shadow-[0_0_12px_rgba(34,197,94,0.35)]',
}

export function TechBadge({ label, color = 'blue' }: BadgeProps) {
  return (
    <span
      className={`
        px-3 py-1 rounded-full text-xs font-medium
        border transition-all
        hover:scale-105
        ${badgeColors[color]}
      `}
    >
      {label}
    </span>
  )
}
