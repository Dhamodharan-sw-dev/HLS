import { useState } from 'react'
import { Container } from '../components/Container'
import { ArrowRightIcon } from '../components/icons'

const tabs = [
  'Track and manage your health',
  'A community to keep you going forward',
  'Discover facilities and care for yourself',
  'Your health , your Policies all in one place',
]

export default function WellnessEcosystem() {
  const [active, setActive] = useState(1)

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="!max-w-[1140px]">
        <h2 className="text-center font-heading text-2xl text-ink-800 sm:text-[28px]">
          A complete health and wellness ecosystem
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="assets/wellness-ecosystem/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-11 w-auto"
              />
              <img
                src="assets/wellness-ecosystem/app-store-badge.png"
                alt="Download on the App Store"
                className="h-11 w-auto"
              />
            </div>

            <div className="mt-8 flex flex-col">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`border-l-2 py-3 pl-5 text-left text-base transition-colors ${
                    active === i
                      ? 'border-brand-red font-semibold text-ink-800'
                      : 'border-ink-100 text-ink-300 hover:text-ink-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <a
              href="#top"
              className="mt-4 inline-flex items-center gap-1.5 pl-5 text-sm font-medium text-brand-red hover:text-brand-red-dark"
            >
              View more
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <img
            src="assets/wellness-ecosystem/app-phone-mockup.jpg"
            alt="Activ Health app showing the community screen with leaderboard rank, activity feed, and upcoming events"
            className="mx-auto w-full max-w-[290px]"
          />
        </div>
      </Container>
    </section>
  )
}
