import { Container } from '../components/Container'
import { toPath } from '../lib/links'

type Stat = {
  icon: string
  value: string
  label: string
  linkLabel: string
}

const stats: Stat[] = [
  {
    icon: 'assets/trust-stats/umbrella-family.png',
    value: '2.3 Cr +',
    label: 'Lives Insured',
    linkLabel: 'Read testimonials',
  },
  {
    icon: 'assets/trust-stats/globe-pin.png',
    value: '5000 +',
    label: 'Locations Presence',
    linkLabel: 'Locate branch',
  },
  {
    icon: 'assets/trust-stats/hospital.png',
    value: '16500 +',
    label: 'Cashless Hospitals',
    linkLabel: 'Locate hospital',
  },
  {
    icon: 'assets/trust-stats/claim-handshake.png',
    value: '29 Lakhs',
    label: 'Claims Settled in FY 25-26',
    linkLabel: 'Raise claim',
  },
  {
    icon: 'assets/trust-stats/clipboard-shield.png',
    value: '97% *',
    label: 'Claim Settlement Ratio for FY 25-26',
    linkLabel: 'Know More',
  },
  {
    icon: 'assets/trust-stats/rupee-hand.png',
    value: '2 Lakhs',
    label: 'Customers Earning HealthReturns™',
    linkLabel: 'Know More',
  },
  {
    icon: 'assets/trust-stats/doctor.png',
    value: '2.1 Lakhs',
    label: 'Lives Intervened by Health Coaches',
    linkLabel: 'Know More',
  },
]

export default function TrustStats() {
  return (
    <section className="bg-surface-50 py-16 sm:py-20">
      <Container>
        <h2 className="text-center font-heading text-[28px] font-bold text-ink-700 sm:text-[34px]">
          Protecting Millions Of Lives
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="w-full max-w-[420px] flex-none rounded-2xl bg-white p-6 text-center shadow-sm sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <img
                src={stat.icon}
                alt=""
                className="mx-auto h-14 w-14 object-contain"
              />
              <p className="mt-4 font-heading text-2xl font-bold text-brand-navy">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
              <a
                href={toPath(stat.linkLabel)}
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:text-brand-red-dark"
              >
                {stat.linkLabel}
                <span aria-hidden="true">›</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
