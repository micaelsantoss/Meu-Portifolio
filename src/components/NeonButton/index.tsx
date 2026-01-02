type NeonButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export function NeonButton({ children, onClick }: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden
        px-6 py-3 rounded-xl
        font-semibold tracking-wide
        text-cyan-300
        border border-cyan-400/40
        bg-cyan-500/10

        shadow-[0_0_25px_rgba(34,211,238,0.45)]
        transition-all duration-300

        hover:bg-cyan-500/20
        hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]
        hover:scale-[1.02]
      "
    >
      {children}
    </button>
  )
}

export function NeonOutlineButton({
  children,
  onClick,
}: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3 rounded-xl
        font-medium
        text-cyan-300
        border border-cyan-400/40
        bg-transparent

        transition-all duration-300
        hover:bg-cyan-500/10
        hover:shadow-[0_0_20px_rgba(34,211,238,0.45)]
        hover:scale-[1.02]
      "
    >
      {children}
    </button>
  )
}

export function NeonGradientButton({ children, onClick }: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative px-6 py-3 rounded-xl
        font-semibold text-white
        bg-gradient-to-r from-cyan-500 to-blue-500

        shadow-[0_0_35px_rgba(34,211,238,0.65)]
        transition-all duration-300

        hover:shadow-[0_0_55px_rgba(59,130,246,0.85)]
        hover:scale-[1.03]
      "
    >
      {children}
    </button>
  )
}
