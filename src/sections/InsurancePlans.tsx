import { Container } from '../components/Container'
import { CheckIcon } from '../components/icons'

type Plan = {
  name: string
  badge?: string
  tagline: string
  features: string[]
  banner: string
}

const plans: Plan[] = [
  {
    name: 'Activ Yuva',
    tagline: 'Health insurance designed for the way you live today',
    features: [
      'Earn up to 100% of your premium back as HealthReturns™',
      'OPD & Worldwide Maternity Cover included',
      'Power your policy with flexible Tauri On/Off control',
    ],
    banner: 'from-brand-navy to-brand-navy/70',
  },
  {
    name: 'Activ One MAX',
    badge: 'MOST POPULAR',
    tagline: 'HealthReturns™ + No Capping on Medical Expenses + Super Reload',
    features: [
      'Save up to 100% of premium back on HealthReturns™',
      'No capping on hospitalisation expenses, procedures, or benefits',
      'Ensures complete coverage of all Non-Medical Expenses from day one',
    ],
    banner: 'from-brand-red to-brand-red-dark',
  },
  {
    name: 'Activ One NXT',
    tagline: 'HealthReturns™ + No Capping on Medical Expenses + Super Reload',
    features: [
      'Earn up to 100% premium back as HealthReturns™',
      'No capping on hospitalization expenses, procedures & benefits',
      '100% unlimited refill of sum insured with 2x cover from Day 1',
    ],
    banner: 'from-brand-navy to-brand-red-dark',
  },
]

export default function InsurancePlans() {
  return (
    <section id="insurance-plans" className="bg-surface-50 py-16 sm:py-20">
      <Container className="!max-w-[1280px]">
        <div className="mx-auto max-w-[640px] text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-brand-red ring-1 ring-inset ring-brand-red/20">
            Featured Health Plans
          </span>
          <h2 className="mt-5 font-heading text-[28px] font-bold text-brand-navy sm:text-[32px]">
            Plans built around the way you live
          </h2>
          <p className="mt-3 text-ink-500">
            Pick a plan that fits your life stage and health goals, backed by
            rewards for staying healthy.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-50"
            >
              {plan.badge && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-wide text-brand-red">
                  {plan.badge}
                </span>
              )}
              <div className={`h-[130px] bg-gradient-to-br ${plan.banner}`} />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-brand-navy">
                  {plan.name}
                </h3>
                <div className="mt-4 rounded-xl bg-surface-50 p-3 text-sm text-ink-600">
                  {plan.tagline}
                </div>

                <hr className="my-5 border-ink-50" />

                <ul className="flex-1 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-red/10 text-brand-red">
                        <CheckIcon className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-ink-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-5 border-ink-50" />

                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-full bg-brand-red py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark"
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-ink-100 py-2.5 text-sm font-semibold text-brand-navy hover:bg-surface-50"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
