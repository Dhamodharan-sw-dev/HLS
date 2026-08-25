import { Container } from '../components/Container'

const stats = [
  { value: '2.3 Cr+', label: 'Lives Insured' },
  { value: '5000+', label: 'Locations Presence' },
  { value: '16500+', label: 'Cashless Hospitals' },
  { value: '29 Lakhs', label: 'Claims Settled in FY 25-26' },
  { value: '97%*', label: 'Claim Settlement Ratio for FY 25-26' },
  { value: '2 Lakhs', label: 'Customers Earning HealthReturns™' },
  { value: '2.1 Lakhs', label: 'Lives Intervened by Health Coaches' },
]

export default function TrustStats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-center font-heading text-[26px] font-bold text-brand-navy sm:text-[32px]">
          Protecting millions of lives
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-[#FFF4D9] px-5 py-7 text-center"
            >
              <p className="font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
