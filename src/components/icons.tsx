import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function GiftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7" />
      <path d="M7.5 8a2.5 2.5 0 1 1 0-5C11 3 12 8 12 8" />
      <path d="M16.5 8a2.5 2.5 0 1 0 0-5C13 3 12 8 12 8" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465a2 2 0 0 1 2.694-.393l3.465 2.257a1 1 0 0 1 .412 1.15l-.632 1.891a2 2 0 0 1-1.898 1.365C10.887 21.815 2.185 13.113 2.06 4.359a2 2 0 0 1 1.365-1.898l1.891-.632a1 1 0 0 1 1.15.412L8.723 5.706a2 2 0 0 1-.393 2.694l-.465.355a1 1 0 0 0-.303 1.213 13.16 13.16 0 0 0 6.27 6.6Z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function HeartHandshakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l6.16 6.16a2 2 0 0 0 2.83 0Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l1.41-1.41a2.5 2.5 0 0 1 3.54 0l1.6 1.61" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l6.16 6.16a2 2 0 0 0 2.83 0Z" />
    </svg>
  )
}

export function HospitalBuildingIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.4} {...props}>
      <path d="M7 21V6.5L12 4l5 2.5V21" />
      <path d="M7 21h10" />
      <circle cx="12" cy="8.4" r="2.6" />
      <path d="M12 7.2v2.4M10.8 8.4h2.4" />
      <path d="M10 21v-3.5h4V21" />
      <path d="M3 21V9.8L7 8" />
      <path d="M21 21V9.8L17 8" />
    </svg>
  )
}

export function MoneyBagIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M9 4h6l1.6 3.4" />
      <path d="M9 4 7.4 7.4" />
      <path d="M7.4 7.4C4.4 9.7 3 12.6 3 15a6 6 0 0 0 12 0c0-2.4-1.4-5.3-4.4-7.6" />
      <text
        x="9"
        y="16.5"
        fontSize="6.5"
        fontWeight="700"
        stroke="none"
        fill="currentColor"
      >
        ₹
      </text>
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
    </svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 15V3" />
      <path d="m7 10 5 5 5-5" />
      <path d="M20 21H4" />
    </svg>
  )
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 3.5V2.3Z" />
      <path d="M8 3v4a4 4 0 0 0 8 0V3" />
      <path d="M18 6a2 2 0 1 0-4 0" />
      <path d="M12 15a5 5 0 0 0 5-5V6" />
      <path d="M6 6v4a5 5 0 0 0 5 5" />
      <circle cx="20" cy="17" r="2" />
      <path d="M12 15v2a2 2 0 0 0 2 2" />
    </svg>
  )
}

export function ActivityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 20A7 7 0 0 1 4 13c0-4.5 3-9 10-11 1 5-1 9 3 9a5 5 0 0 1-6 9Z" />
      <path d="M12 12c-1.5 3-2.5 6-2.5 8" />
    </svg>
  )
}

export function PillIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  )
}

export function SmartphoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.5 7C6.5 8.5 5 10.7 5 13.5A3.5 3.5 0 0 0 8.5 17 3.5 3.5 0 0 0 12 13.5c0-1.5-1-2.7-2.5-3-.1-1.3.8-2.5 2-3.1L9.5 7Zm9 0c-3 1.5-4.5 3.7-4.5 6.5a3.5 3.5 0 0 0 3.5 3.5A3.5 3.5 0 0 0 21 13.5c0-1.5-1-2.7-2.5-3-.1-1.3.8-2.5 2-3.1L18.5 7Z" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  )
}

export function HelpCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 2-3 5" />
      <path d="M12 17h.01" />
    </svg>
  )
}

export function SocialIcon({ kind, ...props }: IconProps & { kind: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' }) {
  const paths: Record<string, string> = {
    facebook: 'M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.5-3H14V9.5c0-.3.2-.5.5-.5Z',
    twitter: 'M21 5.6c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a3.7 3.7 0 0 0-6.3 3.4A10.5 10.5 0 0 1 4 4.6a3.7 3.7 0 0 0 1.1 4.9 3.6 3.6 0 0 1-1.6-.4c0 1.8 1.3 3.3 3 3.6a3.7 3.7 0 0 1-1.6.1 3.7 3.7 0 0 0 3.4 2.5A7.4 7.4 0 0 1 3 16.6a10.4 10.4 0 0 0 5.7 1.7c6.8 0 10.6-5.9 10.6-11v-.5c.8-.5 1.5-1.2 2-2Z',
    instagram: 'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.5-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
    linkedin: 'M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.7h.1c.5-1 1.8-1.9 3.6-1.9 3.9 0 4.5 2.4 4.5 5.6v6.6h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.9h-4v-11Z',
    youtube: 'M21.6 7.6a2.5 2.5 0 0 0-1.8-1.8C18.1 5.3 12 5.3 12 5.3s-6.1 0-7.8.5a2.5 2.5 0 0 0-1.8 1.8C2 9.3 2 12 2 12s0 2.7.4 4.4a2.5 2.5 0 0 0 1.8 1.8c1.7.5 7.8.5 7.8.5s6.1 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8c.4-1.7.4-4.4.4-4.4s0-2.7-.4-4.4ZM10 15V9l5.2 3-5.2 3Z',
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={paths[kind]} />
    </svg>
  )
}
