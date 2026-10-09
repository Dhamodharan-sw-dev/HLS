import { Container } from '../components/Container'
import { CheckIcon } from '../components/icons'
import { asset } from '../lib/links'

type Plan = {
  name: string
  image: string
  featured?: boolean
  tagline: string
  features: string[]
}

const plans: Plan[] = [
  {
    name: 'Activ Yuva',
    image: asset('assets/insurance-plans/activ-yuva.jpg'),
    tagline: 'Health insurance designed for the way you live today',
    features: [
      'Earn up to 100% of your premium back as **HealthReturns™**',
      'OPD & Worldwide Maternity Cover included',
      'Power your policy with flexible **Tauri On/Off control**',
    ],
  },
  {
    name: 'Activ One MAX',
    image: asset('assets/insurance-plans/activ-one-max.jpg'),
    featured: true,
    tagline:
      'HealthReturns™ + No Capping on Medical Expenses + Super Reload',
    features: [
      'Save up to 100% of premium back on **HealthReturns™**',
      '**No capping** on hospitalisation expenses, procedures, or benefits',
      'Ensures complete coverage of all **Non-Medical Expenses** from day one',
    ],
  },
  {
    name: 'Activ One NXT',
    image: asset('assets/insurance-plans/activ-one-nxt.jpg'),
    tagline:
      'HealthReturns™ + No Capping on Medical Expenses + Super Reload',
    features: [
      'Earn up to 100% premium back as **HealthReturns™**',
      'No capping on hospitalization expenses, procedures & benefits',
      '100% unlimited refill of sum insured with 2x cover from Day 1',
    ],
  },
]

function FeatureText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-brand-red">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export default function InsurancePlans() {
  return (
    <section id="insurance-plans" className="bg-surface-50 py-16 sm:py-20">
      <Container className="!max-w-[1280px]">
        <div className="mx-auto max-w-[700px] text-center">
          <span className="inline-flex items-center rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-bold tracking-wide text-brand-red">
            FEATURED HEALTH PLANS
          </span>
          <h2 className="mt-5 font-heading text-[28px] font-bold text-ink-800 sm:text-[34px]">
            Compare &amp; Choose Your Ideal Protection
          </h2>
          <p className="mt-3 text-ink-400">
            Designed for the way you live today. Secure comprehensive
            coverage, earn active rewards, and customize your policy with
            flexibility.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col overflow-hidden rounded-2xl bg-white ${
                plan.featured
                  ? 'border-2 border-brand-red shadow-lg shadow-brand-red/10'
                  : 'ring-1 ring-ink-50'
              }`}
            >
              <img
                src={plan.image}
                alt={`${plan.name} banner artwork`}
                className="h-[130px] w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-ink-800">
                  {plan.name}
                </h3>
                <div className="mt-4 rounded-lg border border-brand-red/30 bg-brand-red/5 px-4 py-2.5 text-sm font-medium text-brand-red">
                  {plan.tagline}
                </div>

                <hr className="my-5 border-ink-50" />

                <ul className="flex-1 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                          plan.featured
                            ? 'bg-brand-red text-white'
                            : 'bg-brand-red/10 text-brand-red'
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-ink-600">
                        <FeatureText text={f} />
                      </span>
                    </li>
                  ))}
                </ul>

                <hr className="my-5 border-ink-50" />

                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-brand-red py-2.5 text-sm font-semibold text-brand-red hover:bg-brand-red/5"
                  >
                    Quick Quote
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full bg-brand-red py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark"
                  >
                    View Plan
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
