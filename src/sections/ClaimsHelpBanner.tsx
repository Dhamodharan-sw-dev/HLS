import { Container } from '../components/Container'
import { HeartHandshakeIcon, MailIcon, PhoneIcon } from '../components/icons'

export default function ClaimsHelpBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-14">
      <div className="pointer-events-none absolute -right-20 -top-24 h-[340px] w-[340px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -right-10 -top-32 h-[420px] w-[420px] rounded-full bg-white/5" />

      <Container className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[620px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            We&apos;re here for you
          </span>

          <div className="mt-4 flex items-center gap-3">
            <HeartHandshakeIcon className="h-7 w-7 flex-none text-white" />
            <h2 className="font-heading text-2xl font-bold text-white sm:text-[28px]">
              Need help with a claim?
            </h2>
          </div>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Our support team is available round the clock to guide you
            through every step of your claim journey.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="w-full rounded-2xl bg-white/10 p-5 sm:w-[245px]">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/15 text-white">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-white">
                Call Us
              </span>
            </div>
            <p className="mt-4 font-heading text-lg font-bold text-white">
              1800 123 4567
            </p>
            <p className="mt-1 text-xs text-white/60">Mon–Sun, 24x7</p>
          </div>

          <div className="w-full rounded-2xl bg-white/10 p-5 sm:w-[245px]">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/15 text-white">
                <MailIcon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-white">
                Email Us
              </span>
            </div>
            <p className="mt-4 font-heading text-lg font-bold text-white">
              support@carenova.in
            </p>
            <p className="mt-1 text-xs text-white/60">
              We reply within 24 hours
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
