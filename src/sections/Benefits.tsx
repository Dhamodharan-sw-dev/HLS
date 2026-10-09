import { Container } from '../components/Container'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HospitalBuildingIcon,
  MoneyBagIcon,
} from '../components/icons'
import { toPath } from '../lib/links'

const benefits = [
  {
    icon: HospitalBuildingIcon,
    title: 'Hospitalization cover',
    body: (
      <>
        Hospitalized for an illness or injury? Don&apos;t worry about the
        room rent or the treatment costs if you buy health insurance.
        Health insurance plans cover the cost of hospitalization, room
        rent, doctor&apos;s fee, treatment charges, nurse&apos;s fee, and
        all the expenses that you might incur when you are hospitalized.
        Having a comprehensive medical insurance plan with a
        hospitalization cover can give you peace of mind during such
        unforeseen events.
      </>
    ),
  },
  {
    icon: MoneyBagIcon,
    title: 'Cashless treatments',
    body: (
      <>
        If you are being hospitalized, choose a{' '}
        <a
          href={toPath('Network Hospital')}
          className="text-brand-red hover:text-brand-red-dark"
        >
          network hospital
        </a>{' '}
        and you wouldn&apos;t have to worry about the hospital bills. The
        medical insurance policy would settle your bills directly, without
        you having to shoulder the burden yourself. This eliminates the
        stress and hassle of arranging funds at short notice to cover
        exorbitant hospital bills.
      </>
    ),
  },
]

export default function Benefits() {
  return (
    <section className="bg-surface-50 py-16 sm:py-20">
      <Container>
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[820px]">
            <h2 className="font-heading text-2xl text-ink-800 sm:text-[28px]">
              What Are the Benefits of Health Insurance?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
              A health insurance policy provides a comprehensive scope of
              coverage that underlines the various benefits that you can
              avail of. Have a look at some Mediclaim Insurance benefits -
            </p>
          </div>

          <div className="hidden flex-none items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Previous"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-100 text-ink-400 hover:bg-white"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 text-ink-700 hover:bg-white"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-ink-50 bg-white p-8"
            >
              <Icon className="h-9 w-9 text-ink-700" />
              <h3 className="mt-6 font-heading text-lg text-ink-800">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
