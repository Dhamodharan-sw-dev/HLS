import { useState } from 'react'
import { Container } from '../components/Container'
import { ChevronDownIcon, GlobeIcon, PhoneIcon } from '../components/icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-[75px] bg-brand-navy text-white">
      <Container className="flex h-full items-center justify-between !max-w-[1440px]">
        <a href="#top" className="flex items-center gap-3">
          <span className="h-[30px] w-1 rounded-full bg-brand-red" />
          <span className="flex flex-col leading-none font-heading">
            <span className="text-xl font-bold tracking-tight">CareNova</span>
            <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
              HEALTH INSURANCE
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-5">
          <a
            href="#top"
            className="hidden text-sm font-medium text-white/90 hover:text-white sm:inline"
          >
            Login
          </a>
          <a
            href="#insurance-plans"
            className="hidden rounded-full bg-brand-red px-5 py-2 text-sm font-semibold hover:bg-brand-red-dark sm:inline"
          >
            Get Health Insurance
          </a>
          <a
            href="tel:18001234567"
            aria-label="Call us"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <PhoneIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
          >
            <GlobeIcon className="h-4 w-4" />
            EN
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </nav>
      </Container>
    </header>
  )
}
