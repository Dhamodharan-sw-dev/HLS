import { Container } from '../components/Container'
import { ArrowRightIcon, PillIcon, ShieldIcon, StethoscopeIcon } from '../components/icons'

const reasons = [
  {
    icon: ShieldIcon,
    text: 'Protect your financial savings in a medical emergency',
  },
  {
    icon: PillIcon,
    text: 'Afford quality healthcare despite medical inflation',
  },
  {
    icon: StethoscopeIcon,
    text: 'Meet the high costs of hospitalization and medical treatments',
  },
]

export default function WhatIsAndNeedInsurance() {
  return (
    <>
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-[26px] font-bold text-brand-navy sm:text-[32px]">
            What Is Health Insurance
          </h2>
          <p className="mt-4 max-w-[1140px] text-sm leading-relaxed text-ink-500 sm:text-base">
            Health insurance is a policy that covers the medical expenses
            that you might incur if you suffer an illness or an injury. If
            you suffer a medical emergency, and it is covered under your
            health plan, then medical costs will be borne by the insurer.
          </p>
        </Container>
      </section>

      <section className="bg-surface-50 py-14 sm:py-16">
        <Container>
          <h2 className="font-heading text-[26px] font-bold text-brand-navy sm:text-[32px]">
            Why Do You Need A Health Insurance Plan?
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-ink-500 sm:text-base">
            It is a must to have a{' '}
            <a href="#insurance-plans" className="font-medium text-brand-red">
              comprehensive health insurance plan in India.
            </a>{' '}
            It safeguards you and your family against unforeseen medical
            emergencies. It also ensures that you don&apos;t end up draining
            your personal savings on medical bills.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
            The need for health insurance in India stems from the coverage
            that the plan provides. Consider these two facts -
          </p>

          <ul className="mt-4 space-y-3">
            <li className="flex gap-3 text-sm text-ink-600 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
              Medical costs have become quite expensive.
            </li>
            <li className="flex gap-3 text-sm text-ink-600 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-red" />
              With increasing life expectancy and rising lifestyle-related
              diseases, the chances of suffering from an illness or injury
              have also increased.
            </li>
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-ink-500 sm:text-base">
            When you consider the above factors, a medical emergency has the
            potential to wipe out your savings. A medical insurance policy,
            therefore, becomes very important.
          </p>

          <p className="mt-5 font-heading text-lg font-semibold text-brand-navy">
            You should, thus,{' '}
            <a href="#insurance-plans" className="text-brand-red">
              Buy Health Insurance Plans in India
            </a>{' '}
            for the following reasons:
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {reasons.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="rounded-2xl bg-white p-6 ring-1 ring-ink-50"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-medium text-ink-700">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-ink-500 sm:text-base">
            So, look for the best health insurance policy offered by leading
            Mediclaim Insurance companies. Choose the most suitable plan that
            provides all the necessary coverage benefits you need at
            affordable premiums.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
            >
              Get a Quote
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#insurance-plans"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-7 py-3 text-sm font-semibold text-brand-navy hover:bg-white"
            >
              View Plans
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
