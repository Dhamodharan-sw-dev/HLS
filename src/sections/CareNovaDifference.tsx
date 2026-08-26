import { Container } from '../components/Container'
import { ArrowRightIcon } from '../components/icons'

type Row = {
  title: string
  body: string
  linkLabel: string
  image: string
  imageSide: 'left' | 'right'
}

const rows: Row[] = [
  {
    title: 'Beyond health insurance',
    body: 'As your health partner, we will keep you motivated on your journey towards health and wellness. We reward you for your good health with HealthReturns™ and provide you with support at every stage – with guidance on nutrition, fitness, and lifestyle.',
    linkLabel: 'Know more',
    image: 'assets/carenova-difference/runners.jpg',
    imageSide: 'left',
  },
  {
    title: 'Trusted care managers',
    body: 'Our care managers simplify the process of health insurance for you, from explaining policy documents to filing a claim to managing paperwork and discharge during hospitalization. Connect with your care manager on the Activ Health App.',
    linkLabel: 'Know more',
    image: 'assets/carenova-difference/handshake.jpg',
    imageSide: 'right',
  },
  {
    title: 'Health coach',
    body: 'Get day-to-day tips and guidance from your personal doctor-on-call, medical specialists, dietitians, fitness gurus, and tobacco counselors to keep your health in top condition, always. Get the support you need to better manage chronic conditions like high blood pressure, high cholesterol, and diabetes.',
    linkLabel: 'Know more',
    image: 'assets/carenova-difference/fruits.jpg',
    imageSide: 'left',
  },
  {
    title: 'Chronic Management Program',
    body: 'A special program to manage the cost of living with four major chronic conditions – asthma, blood pressure, cholesterol, and diabetes. Get Day 1 cashless cover for your OPD expenses of medicines, diagnostic tests, and doctor consultations.',
    linkLabel: 'Know more',
    image: 'assets/carenova-difference/couple.jpg',
    imageSide: 'right',
  },
  {
    title: 'Support is just a text away',
    body: 'Reach out to our customer support team on WhatsApp and get your doubts and queries answered instantly.',
    linkLabel: 'Get in touch',
    image: 'assets/carenova-difference/phone.jpg',
    imageSide: 'left',
  },
]

export default function CareNovaDifference() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-center font-heading text-2xl font-medium text-ink-700 sm:text-[28px]">
          The CareNova Health Insurance Difference
        </h2>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {rows.map((row) => (
            <div
              key={row.title}
              className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                row.imageSide === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="relative w-full max-w-[436px] flex-none">
                <div
                  aria-hidden="true"
                  className={`absolute top-1/2 h-[85%] w-[70%] -translate-y-1/2 rounded-[60%_40%_35%_65%/55%_45%_60%_40%] bg-surface-100 ${
                    row.imageSide === 'left' ? '-left-10' : '-right-10'
                  }`}
                />
                <img
                  src={row.image}
                  alt={row.title}
                  className="relative aspect-[436/277] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="w-full max-w-[460px]">
                <h3 className="font-heading text-xl font-medium text-ink-800 sm:text-2xl">
                  {row.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {row.body}
                </p>
                <a
                  href="#top"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-red hover:text-brand-red-dark"
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
