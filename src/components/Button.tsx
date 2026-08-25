import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'text'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white hover:bg-brand-red-dark',
  secondary:
    'bg-brand-navy text-white hover:bg-brand-navy/90',
  outline:
    'border border-brand-red text-brand-red hover:bg-brand-red/5',
  text: 'text-brand-red hover:text-brand-red-dark underline-offset-4 hover:underline',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: ReactNode
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-heading text-[15px] font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
