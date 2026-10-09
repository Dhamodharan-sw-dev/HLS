/**
 * Stand-in for a real photo/illustration. The Figma MCP asset-export quota
 * was exhausted before these images could be pulled — swap the div below
 * for a real <img src={asset('assets/...')}> once assets are available again.
 */
export default function Placeholder({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-[20px] bg-gradient-to-br from-brand-navy/10 via-surface-100 to-brand-red/10 text-center text-sm font-medium text-ink-400 ${className}`}
    >
      <span className="px-4">{label}</span>
    </div>
  )
}
