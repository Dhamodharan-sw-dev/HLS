import { Container } from '../components/Container'
import { ArrowRightIcon, GiftIcon } from '../components/icons'

export default function HeroSection() {
  return (
    <section id="top" className="overflow-hidden bg-white">
      <Container className="!max-w-[1440px] py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[676fr_620fr] lg:items-center lg:gap-10">
          <div className="max-w-[676px]">
            <span className="inline-flex items-center rounded-full border border-brand-red bg-brand-red/5 px-4 py-2 text-xs font-bold tracking-wide text-brand-red">
              REWARDING HEALTHY HABITS
            </span>

            <h1 className="mt-6 font-heading text-[34px] font-bold leading-[1.2] text-ink-800 sm:text-[40px] lg:text-[42px]">
              A health insurance plan that{' '}
              <span className="text-brand-red">rewards</span> you for staying
              healthy
            </h1>

            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-ink-400 sm:text-lg">
              Our plans go beyond protection and empower you to lead healthier
              lives with premium cashbacks, tracking, and daily support.
            </p>

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-brand-red/60 bg-white px-6 py-4">
              <GiftIcon className="h-6 w-6 flex-none text-brand-red" />
              <p className="text-sm font-medium text-ink-800 sm:text-base">
                Go{' '}
                <span className="font-semibold text-brand-red">
                  premium-free on renewal
                </span>{' '}
                with up to 100% HealthReturns
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#insurance-plans"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-red-dark"
              >
                Explore Plans
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-800 hover:bg-surface-50"
              >
                Calculate Premium
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[620px]">
            <div className="rounded-[28px] border-2 border-dashed border-ink-200 p-3">
              <img
                src="assets/hero/couple-workout.jpg"
                alt="A woman and man smiling together after a workout, holding water bottles and a yoga mat"
                className="aspect-[1076/828] w-full rounded-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
