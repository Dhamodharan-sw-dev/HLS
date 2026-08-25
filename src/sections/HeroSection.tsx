import { useState } from 'react'
import { Container } from '../components/Container'
import { PlaceholderMedia } from '../components/PlaceholderMedia'
import { ArrowRightIcon, GiftIcon } from '../components/icons'

export default function HeroSection() {
  const [phone, setPhone] = useState('')

  return (
    <section id="top" className="overflow-hidden bg-surface-50">
      <Container className="!max-w-[1440px] py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-[676px]">
            <span className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1.5 text-xs font-bold tracking-wide text-brand-red">
              REWARDING HEALTHY HABITS
            </span>

            <h1 className="mt-6 font-heading text-[32px] font-bold leading-[1.15] text-brand-navy sm:text-[40px] lg:text-[42px]">
              A health insurance plan that rewards you for staying healthy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
              Our plans go beyond protection and empower you to lead healthier
              lives with premium cashbacks, tracking, and daily support.
            </p>

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-brand-red/10 text-brand-red">
                <GiftIcon className="h-6 w-6" />
              </span>
              <p className="text-sm font-medium text-ink-700">
                Go premium-free on renewal with up to 100% HealthReturns
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#insurance-plans"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark"
              >
                Explore Plans
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-7 py-3.5 text-sm font-semibold text-brand-navy hover:bg-white"
              >
                Calculate Premium
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] pt-8 sm:pt-0">
            <PlaceholderMedia className="aspect-[540/420] w-full rounded-3xl" />

            <div className="relative mt-6 w-full rounded-2xl border border-ink-100 bg-white p-6 shadow-xl sm:absolute sm:-top-8 sm:right-0 sm:mt-0 sm:w-[320px]">
              <p className="font-heading text-lg font-semibold text-brand-navy">
                Get a quick quote
              </p>
              <p className="mt-1 text-sm text-ink-400">
                Health cover starting at just ₹15/day*
              </p>
              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-full border border-ink-100 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-red py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark"
                >
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
