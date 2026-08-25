import { BedDouble, ShieldCheck } from 'lucide-react'

export default function Benefits() {
  return (
    <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1140px] px-6 sm:px-10 lg:px-0">
        <h2 className="font-heading text-2xl font-bold text-ink-800 sm:text-3xl">
          What Are the Benefits of Health Insurance?
        </h2>
        <p className="mt-4 max-w-[798px] text-sm leading-relaxed text-ink-500 sm:text-base">
          A health insurance policy provides a comprehensive scope of
          coverage that underlines the various benefits that you can avail
          of. Have a look at some Mediclaim Insurance benefits -
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <BedDouble className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-lg font-bold text-ink-800">
              Hospitalization cover
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Hospitalized for an illness or injury? Don't worry about the
              room rent or the treatment costs if you buy health insurance.
              Health insurance plans cover the cost of hospitalization, room
              rent, doctor's fee, treatment charges, nurse's fee, and all
              the expenses that you might incur when you are hospitalized.
              Having a comprehensive medical insurance plan with a
              hospitalization cover can give you peace of mind during such
              unforeseen events.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-lg font-bold text-ink-800">
              Cashless treatments
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              If you are being hospitalized, choose a{' '}
              <a href="#" className="font-semibold text-brand-red hover:text-brand-red-dark">
                network hospital
              </a>{' '}
              and you wouldn't have to worry about the hospital bills. The
              medical insurance policy would settle your bills directly,
              without you having to shoulder the burden yourself. This
              eliminates the stress and hassle of arranging funds at short
              notice to cover exorbitant hospital bills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
