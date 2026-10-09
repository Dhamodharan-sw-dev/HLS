import { useState } from 'react'
import { Container } from '../components/Container'
import { ChevronDownIcon, GlobeIcon, SearchIcon } from '../components/icons'
import { HOME, toPath } from '../lib/links'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-[75px] bg-brand-red text-white">
      <Container className="flex h-full items-center justify-between !max-w-[1440px]">
        <a href={HOME} className="flex items-center gap-3">
          <span className="h-[30px] w-1 rounded-full bg-[#2eb278]" />
          <span className="flex flex-col leading-none font-heading">
            <span className="text-xl font-bold tracking-tight">CareNova</span>
            <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
              HEALTH INSURANCE
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-4">
          <a
            href={toPath('Search')}
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <SearchIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-sm hover:bg-white/20 sm:flex"
          >
            <GlobeIcon className="h-4 w-4" />
            ENG
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </button>
          <a
            href={toPath('Login')}
            className="hidden rounded-full border border-white/70 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 sm:inline"
          >
            Login
          </a>
          <a
            href={toPath('Renew')}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-red hover:bg-white/90"
          >
            Renew
          </a>
        </nav>
      </Container>
    </header>
  )
}
