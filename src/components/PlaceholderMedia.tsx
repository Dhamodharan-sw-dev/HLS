import { ActivityIcon } from './icons'

export function PlaceholderMedia({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Illustrative placeholder image"
      className={`flex items-center justify-center bg-gradient-to-br from-brand-navy/10 via-surface-100 to-brand-red/10 ${className}`}
    >
      <ActivityIcon className="h-10 w-10 text-brand-navy/30" />
    </div>
  )
}
