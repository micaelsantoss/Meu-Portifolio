type TechCardProps = {
  name: string
  icon: string
  color?: 'cyan' | 'blue' | 'purple' | 'green'
}

const colors = {
  cyan: {
    border: 'border-cyan-400/40',
    glow: 'shadow-[0_0_30px_rgba(34,211,238,0.45)]',
    text: 'text-cyan-300',
  },
  blue: {
    border: 'border-blue-400/40',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.45)]',
    text: 'text-blue-300',
  },
  purple: {
    border: 'border-purple-400/40',
    glow: 'shadow-[0_0_30px_rgba(168,85,247,0.45)]',
    text: 'text-purple-300',
  },
  green: {
    border: 'border-green-400/40',
    glow: 'shadow-[0_0_30px_rgba(34,197,94,0.45)]',
    text: 'text-green-300',
  },
}

export function TechCard({ name, icon, color = 'cyan' }: TechCardProps) {
  const c = colors[color]

  return (
    <div className="relative group">
      {/* Glow */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          bg-current opacity-20 blur-xl
          ${c.text}
          group-hover:opacity-40 transition
        `}
      />

      {/* Card */}
      <div
        className={`
          relative rounded-2xl bg-slate-800
          p-6 border ${c.border}
          transition-all duration-300
          group-hover:${c.glow}
        `}
      >
        <img src={icon} className="mx-auto w-14 mb-3" />
        <p
          className={`
            text-center font-semibold tracking-wide
            ${c.text}
          `}
        >
          {name}
        </p>
      </div>
    </div>
  )
}
