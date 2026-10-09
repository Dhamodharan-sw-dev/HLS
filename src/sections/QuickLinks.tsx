import { Container } from '../components/Container'
import {
  ChevronRightIcon,
  ClipboardPulseIcon,
  HelpCircleIcon,
  PolicyDocumentIcon,
  RaiseHandIcon,
} from '../components/icons'
import { toPath } from '../lib/links'

const links = [
  { icon: RaiseHandIcon, label: 'Raise a Claim' },
  { icon: ClipboardPulseIcon, label: 'Book Health Assessment' },
  { icon: PolicyDocumentIcon, label: 'My Policy Documents' },
  { icon: HelpCircleIcon, label: 'FAQs' },
]

export default function QuickLinks() {
  return (
    <section className="bg-surface-50 py-10">
      <Container>
        <h2 className="text-center font-heading text-xl text-ink-800">
          Quick Links
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 divide-x divide-ink-100">
          {links.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href={toPath(label)}
              className="flex items-center gap-2 pl-6 text-sm font-medium text-brand-red first:pl-0 hover:text-brand-red-dark"
            >
              <Icon className="h-5 w-5 flex-none" />
              {label}
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
