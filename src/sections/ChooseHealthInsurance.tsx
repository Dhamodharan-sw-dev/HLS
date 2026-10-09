import { useState } from 'react'
import { Container } from '../components/Container'
import { asset } from '../lib/links'

const items = [
  {
    title: 'The right sum insured',
    body: 'Medical costs are increasing, every day. So, make sure you choose an optimal sum insured which proves sufficient to cover the exorbitant medical costs. Remember that life expectancy is also increasing, so you may need to plan for health insurance for a longer period.',
  },
  { title: 'The right coverage benefits' },
  { title: 'The right premium' },
  { title: 'Wide network of cashless hospitals' },
  { title: 'Low waiting periods' },
  { title: 'No sub-limits' },
  { title: 'Trust and goodwill' },
]

export default function ChooseHealthInsurance() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="font-heading text-2xl text-ink-800 sm:text-[28px]">
          How To Choose The Right Health Insurance Plan?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <img
              src={asset('assets/choose-health-insurance/heart-hands.jpg')}
              alt="Two pairs of hands cradling a red heart with a heartbeat line"
              className="aspect-[553/238] w-full rounded-md object-cover"
            />

            <p className="mt-8 text-sm leading-relaxed text-ink-500 sm:text-base">
              With so many CareNova health insurance plans available,
              choosing the right plan can prove to be a difficult job. But,
              with the right checklist, you will be prepared to make the
              right selection.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
              Here are some quick parameters to find the right{' '}
              <a href="#insurance-plans" className="text-brand-red">
                health insurance plan in India
              </a>{' '}
              -
            </p>

            <a
              href="#insurance-plans"
              className="mt-6 inline-flex items-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
            >
              View Our Plans
            </a>
          </div>

          <div>
            {items.map((item, i) => {
              const open = openIndex === i
              return (
                <div key={item.title} className="border-b border-ink-50">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full py-4 text-left text-sm text-ink-700 sm:text-base"
                  >
                    {item.title}
                  </button>
                  {open && item.body && (
                    <p className="pb-5 text-sm leading-relaxed text-ink-500 sm:text-base">
                      {item.body}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
