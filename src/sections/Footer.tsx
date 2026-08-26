import { useState, type ReactNode } from 'react'
import { Container } from '../components/Container'
import {
  AppleIcon,
  MinusIcon,
  PhoneIcon,
  PlayStoreIcon,
  PlusIcon,
  SocialIcon,
} from '../components/icons'

const socialLinks = [
  { kind: 'facebook', label: 'Facebook' },
  { kind: 'twitter', label: 'X' },
  { kind: 'instagram', label: 'Instagram' },
  { kind: 'linkedin', label: 'LinkedIn' },
  { kind: 'youtube', label: 'YouTube' },
  { kind: 'whatsapp', label: 'WhatsApp' },
] as const

const planCategories = [
  {
    title: 'Health & Wellness Plans',
    links: [
      'Health Insurance For Chronic Condition',
      'Activ Health Platinum Essential',
      'CareNova Activ Assure Diamond Plan',
      'Health Insurance For Senior Citizen',
      'Global Health Secure',
      'Group Health Insurance',
      'Health Insurance Plans',
      'Health Insurance for Diabetes',
      'Health Insurance for High BP',
      'Health Insurance for High Cholesterol',
      'Health Insurance for Asthma',
      'Individual Health Insurance',
      'Health insurance claim',
      'Employer health insurance',
      'Health care for young adults',
      'Super topup health insurance',
      'Health Insurance For Family',
      'Hospital cash insurance',
      'Health insurance with OPD cover',
      'Ayush treatment',
      'Corona virus health insurance',
    ],
  },
  { title: 'Large Payout Plans', links: [] },
  { title: 'Articles', links: [] },
  { title: 'Health Services', links: [] },
  { title: 'Legal', links: [] },
  { title: 'Quick Links', links: [] },
  { title: 'Quick Services', links: [] },
  { title: 'Others', links: [] },
  { title: 'Public Disclosure', links: [] },
]

const companyCategories = [
  {
    title: 'Company',
    columns: [
      ['About Us', 'Press and Media', 'Investor Relations'],
      ['Locate Us', 'CSR and Sustainability', 'Careers'],
    ],
  },
  { title: 'Solutions', columns: [] },
  { title: 'Tools & Resources', columns: [] },
  { title: 'Useful Links', columns: [] },
]

const subsidiaries = [
  'CareNova Housing Finance Limited',
  'CareNova Money Limited',
  'CareNova Health Insurance Company Limited',
  'CareNova Sun Life Pension Management Limited',
  'CareNova Wellness Private Limited',
  'CareNova Sun Life Mutual Fund',
  'CareNova Sun Life Insurance Company Limited',
]

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="h-[30px] w-1 rounded-full bg-[#2eb278]" />
      <span className="flex flex-col leading-none font-heading">
        <span className="text-xl font-bold tracking-tight text-ink-800">
          CareNova
        </span>
        <span className="text-[9px] font-semibold tracking-[0.2em] text-ink-400">
          HEALTH INSURANCE
        </span>
      </span>
    </a>
  )
}

function CategoryAccordion({
  categories,
  render,
}: {
  categories: { title: string }[]
  render: (index: number) => ReactNode
}) {
  const [open, setOpen] = useState(0)

  return (
    <div>
      <div className="flex flex-wrap">
        {categories.map((cat, i) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            className={`flex items-center gap-2 border-b px-4 py-3 text-xs font-bold tracking-wide first:pl-0 ${
              open === i
                ? 'border-ink-800 text-ink-800'
                : 'border-transparent text-ink-400 hover:text-ink-600'
            }`}
          >
            {open === i ? (
              <MinusIcon className="h-3.5 w-3.5" />
            ) : (
              <PlusIcon className="h-3.5 w-3.5" />
            )}
            {cat.title.toUpperCase()}
          </button>
        ))}
      </div>
      {open >= 0 && render(open)}
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#fff4d9] py-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <div>
              <Logo />
              <div className="mt-5 flex items-center gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href="#top"
                    aria-label={s.label}
                    className="grid h-8 w-8 place-items-center rounded-full border border-brand-red text-brand-red hover:bg-brand-red/10"
                  >
                    <SocialIcon kind={s.kind} className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-xs font-medium tracking-wide text-ink-400">
                GET STARTED WITH
                <br />
                OUR ACTIV HEALTH APP
              </p>
              <a
                href="#top"
                className="mt-3 inline-flex items-center rounded-full bg-brand-red-dark px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-red"
              >
                Download Now
              </a>
            </div>

            <CategoryAccordion
              categories={planCategories}
              render={(i) => (
                <div className="border-t border-ink-800/10 py-5">
                  {planCategories[i].links.length > 0 ? (
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                      {planCategories[i].links.map((link) => (
                        <a
                          key={link}
                          href="#top"
                          className="text-sm text-ink-600 hover:text-brand-red"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            />
          </div>
        </Container>
      </div>

      <div className="bg-[#c6c6c6] py-5">
        <Container>
          <p className="text-xs font-bold tracking-wide text-ink-700">
            OUR SUBSIDIARIES
          </p>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-ink-600">
            {subsidiaries.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {s}
                {i < subsidiaries.length - 1 && (
                  <span className="text-ink-300">|</span>
                )}
              </span>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-[#d4d4d4] py-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[220px_1fr_220px]">
            <div>
              <Logo />
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-brand-red-dark p-4">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white/15 text-white">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-white/70">Toll Free Number</p>
                  <p className="font-heading text-sm font-bold text-white">
                    1800 123 4567
                  </p>
                </div>
              </div>
            </div>

            <CategoryAccordion
              categories={companyCategories}
              render={(i) => (
                <div className="border-t border-ink-800/10 py-5">
                  {companyCategories[i].columns.length > 0 ? (
                    <div className="flex flex-wrap gap-x-16 gap-y-2">
                      {companyCategories[i].columns.map((col, ci) => (
                        <div key={ci} className="flex flex-col gap-2">
                          {col.map((link) => (
                            <a
                              key={link}
                              href="#top"
                              className="text-sm text-ink-600 hover:text-brand-red"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            />

            <div>
              <p className="font-heading text-sm font-semibold text-ink-800">
                Download App
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-red px-4 py-2 text-sm font-medium text-brand-red hover:bg-brand-red/5"
                >
                  <PlayStoreIcon className="h-4 w-4" />
                  Playstore
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-red px-4 py-2 text-sm font-medium text-brand-red hover:bg-brand-red/5"
                >
                  <AppleIcon className="h-4 w-4" />
                  Appstore
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#c4c4c4] py-3">
        <Container>
          <button
            type="button"
            className="flex w-full items-center justify-between text-xs font-bold tracking-wide text-ink-600"
          >
            BEWARE OF SPURIOUS / FRAUD PHONE CALLS!
            <PlusIcon className="h-3.5 w-3.5 flex-none" />
          </button>
        </Container>
      </div>

      <div className="bg-[#c91429] py-5">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-white/90">
              © 2025, CareNova Capital Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.slice(0, 5).map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
                >
                  <SocialIcon kind={s.kind} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
