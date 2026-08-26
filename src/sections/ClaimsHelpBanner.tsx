import { Container } from '../components/Container'
import { HeartIcon, MailIcon, PhoneIcon } from '../components/icons'

export default function ClaimsHelpBanner() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container className="!max-w-[1240px]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#dcf3ec] p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[#a9ded1]/40" />
          <div className="pointer-events-none absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[#a9ded1]/40" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[560px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d8f3ec] px-3 py-1 text-xs font-bold tracking-wide text-[#0f7a6e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f7a6e]" />
                PRIORITY FLOOD SUPPORT ACTIVE
              </span>

              <div className="mt-3 flex items-center gap-2.5">
                <HeartIcon className="h-6 w-6 flex-none text-[#0f7a6e]" />
                <h2 className="font-heading text-2xl font-bold text-ink-800 sm:text-[28px]">
                  We&apos;re Here For You
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                If you or your business have been affected by the recent
                floods, our dedicated disaster response team is on standby
                to fast-track your claims.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="w-full rounded-2xl bg-[#1c9a8c] p-5 sm:w-[245px]">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-white/15 text-white">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold tracking-wide text-white">
                    CALL TOLL-FREE
                  </span>
                </div>
                <p className="mt-4 font-heading text-lg font-bold text-white">
                  1800 123 23456
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Available 24/7 Priority
                </p>
              </div>

              <div className="w-full rounded-2xl bg-white p-5 sm:w-[245px]">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-[#d8f3ec] text-[#0f7a6e]">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-bold tracking-wide text-[#0f7a6e]">
                    EMAIL SUPPORT
                  </span>
                </div>
                <p className="mt-4 font-heading text-lg font-bold text-ink-800">
                  claims@support.com
                </p>
                <p className="mt-1 text-xs text-ink-400">
                  Response within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
