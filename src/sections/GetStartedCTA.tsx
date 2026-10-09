import { toPath } from '../lib/links'

export default function GetStartedCTA() {
  return (
    <section className="bg-[#ffe2de] py-10">
      <div className="mx-auto max-w-[1140px] px-6 text-center">
        <h2 className="font-heading text-xl text-ink-800">
          Get started with us
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 divide-x divide-black/10">
          <a
            href={toPath('Quick Quote')}
            className="rounded-full bg-brand-red/90 px-7 py-2.5 text-sm font-semibold text-white hover:bg-brand-red"
          >
            Quick Quote
          </a>
          <a
            href={toPath('Renew Policy')}
            className="rounded-full bg-brand-red-dark px-7 py-2.5 text-sm font-semibold text-white hover:bg-brand-red"
          >
            Renew Policy
          </a>
        </div>
      </div>
    </section>
  )
}
