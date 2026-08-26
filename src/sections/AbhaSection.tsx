import { Container } from '../components/Container'

const features = [
  {
    icon: 'assets/abha/icon-app.png',
    label: 'App for your Health Records',
  },
  {
    icon: 'assets/abha/icon-access.png',
    label: 'Access to Health Records',
  },
  {
    icon: 'assets/abha/icon-secure.png',
    label: 'Secure & Private',
  },
]

export default function AbhaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="text-center font-heading text-2xl text-ink-800 sm:text-[28px]">
          Setup your CARENOVA ID in just 3 simple steps!
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <p className="max-w-[560px] text-sm leading-relaxed text-ink-500 sm:text-base">
              CARENOVA ID allows you to share their health records digitally
              with hospitals, clinics, insurance providers and others.
            </p>

            <div className="mt-8 flex flex-wrap gap-10 sm:gap-12">
              {features.map((f) => (
                <div key={f.label} className="max-w-[130px]">
                  <img src={f.icon} alt="" className="h-11 w-11" />
                  <p className="mt-3 text-sm text-ink-700">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#top"
                className="inline-flex items-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
              >
                Create CARENOVA ID
              </a>
              <div className="flex items-center gap-2">
                <span className="text-sm text-ink-400">Approved by</span>
                <img
                  src="assets/abha/nha-logo.png"
                  alt="National Health Authority"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[310px] rounded-2xl border border-ink-50 p-6 shadow-sm">
            <h3 className="font-heading text-base font-semibold text-ink-800">
              1. Verify Aadhaar
            </h3>
            <p className="mt-1 text-sm text-ink-400">xxxx xxxx xxxx 1234</p>

            <div className="mt-4 flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="grid h-11 w-11 flex-1 place-items-center rounded-lg border border-ink-100 text-lg text-ink-300"
                >
                  *
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-brand-red py-3 text-sm font-semibold text-white hover:bg-brand-red-dark"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
