import { Container } from '../components/Container'
import { PlaceholderMedia } from '../components/PlaceholderMedia'
import { ArrowRightIcon, QuoteIcon } from '../components/icons'

type Row = {
  title: string
  body: string
  linkLabel: string
  quote: string
  imageSide: 'left' | 'right'
}

const rows: Row[] = [
  {
    title: 'Beyond health insurance',
    body: 'As your health partner, we will keep you motivated on your journey towards health and wellness. We reward you for your good health with HealthReturns™ and provide you with support at every stage – with guidance on nutrition, fitness, and lifestyle.',
    linkLabel: 'Know more',
    quote: 'It feels great when you get something in return for staying healthy',
    imageSide: 'left',
  },
  {
    title: 'Trusted care managers',
    body: 'Our care managers simplify the process of health insurance for you, from explaining policy documents to filing a claim to managing paperwork and discharge during hospitalization. Connect with your care manager on the Activ Health App.',
    linkLabel: 'Know more',
    quote: 'That little extra care during hospitalization, made me feel valued & happy.',
    imageSide: 'right',
  },
  {
    title: 'Health coach',
    body: 'Get day-to-day tips and guidance from your personal doctor-on-call, medical specialists, dietitians, fitness gurus, and tobacco counselors to keep your health in top condition, always. Get the support you need to better manage chronic conditions like high blood pressure, high cholesterol, and diabetes.',
    linkLabel: 'Know more',
    quote: 'Health Coaches gave me complete health guidance',
    imageSide: 'left',
  },
  {
    title: 'Chronic Management Program',
    body: 'A special program to manage the cost of living with four major chronic conditions – asthma, blood pressure, cholesterol, and diabetes. Get Day 1 cashless cover for your OPD expenses of medicines, diagnostic tests, and doctor consultations.',
    linkLabel: 'Know more',
    quote: 'My diabetes complication was diagnosed by a health coach at the right time.',
    imageSide: 'right',
  },
  {
    title: 'Support is just a text away',
    body: 'Reach out to our customer support team on WhatsApp and get your doubts and queries answered instantly.',
    linkLabel: 'Get in touch',
    quote: 'WhatsApp support felt like talking to a friend.',
    imageSide: 'left',
  },
]

export default function CareNovaDifference() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-center font-heading text-[26px] font-bold text-brand-navy sm:text-[32px]">
          The CareNova Health Insurance Difference
        </h2>

        <div className="mt-14 flex flex-col gap-16">
          {rows.map((row) => (
            <div
              key={row.title}
              className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                row.imageSide === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative w-full max-w-[436px] flex-none">
                <PlaceholderMedia className="aspect-[436/277] w-full rounded-2xl" />
                <div className="absolute inset-x-4 bottom-4 flex items-start gap-2 rounded-xl bg-black/70 p-4 text-white">
                  <QuoteIcon className="h-4 w-4 flex-none text-white/70" />
                  <p className="text-xs leading-snug sm:text-sm">
                    “{row.quote}”
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[460px]">
                <h3 className="font-heading text-2xl font-bold text-brand-navy">
                  {row.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {row.body}
                </p>
                <a
                  href="#top"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-dark"
                >
                  {row.linkLabel}
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
