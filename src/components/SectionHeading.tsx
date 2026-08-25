import type { ReactNode } from 'react'

export default function SectionHeading({
  children,
  align = 'center',
  className = '',
}: {
  children: ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <h2
      className={`font-heading text-[28px] font-bold leading-[1.15] text-ink-800 sm:text-[32px] lg:text-[36px] ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {children}
    </h2>
  )
}
