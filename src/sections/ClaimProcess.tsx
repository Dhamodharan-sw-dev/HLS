import { Container } from '../components/Container'
import { asset } from '../lib/links'

export default function ClaimProcess() {
  return (
    <section className="bg-surface-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-[1140px] text-center">
          <h2 className="font-heading text-2xl text-ink-800 sm:text-[28px]">
            How To Claim Your CareNova Health Insurance?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-500 sm:text-base">
            With CareNova&apos;s digitized services, making health insurance
            claims has been simplified. Download the Active Health App to
            register and track your health insurance claims or connect with
            the company online. You can also call the toll-free number{' '}
            <a href="tel:18001234567" className="font-medium text-ink-700">
              1800 123 4567
            </a>{' '}
            for claims assistance. You can avail of two types of health
            insurance claims -
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <img
              src={asset('assets/claim-process/cashless-couple.jpg')}
              alt="Smiling couple"
              className="aspect-[553/292] w-full max-w-[555px] flex-none rounded-md object-cover"
            />
            <div className="w-full max-w-[560px]">
              <h3 className="font-heading text-xl text-ink-800">
                Cashless Claims
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                If you are admitted to a networked hospital, the medical
                insurance company pays your medical bills directly to the
                hospital. For settlement of cashless claims under CareNova
                health insurance plans, follow these steps -
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-600 sm:text-base">
                <li>Locate your nearest networked hospital</li>
                <li>
                  Verify the insured&apos;s identity by submitting the
                  Health Card or any other valid ID proof
                </li>
                <li>Fill up and submit the Pre-Authorization Claim Form</li>
                <li>Get your claims processed and settled</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-16">
            <img
              src={asset('assets/claim-process/reimbursement-phone.jpg')}
              alt="Hand holding a phone showing a successful transaction"
              className="aspect-[555/292] w-full max-w-[555px] flex-none rounded-md object-cover"
            />
            <div className="w-full max-w-[560px]">
              <h3 className="font-heading text-xl text-ink-800">
                Reimbursment Claims
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                If you are admitted to a non-networked hospital or if you
                are unable to make a cashless claim, the health insurance
                claim would be reimbursed. You should pay your bills
                yourself when taking treatments. After you are discharged
                and recover, file your claim and the insurer will reimburse
                your expenses.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
                The reimbursement claim process of CareNova health
                insurance plans is simple and hassle-free, and is as
                follows -
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-600 sm:text-base">
                <li>
                  Inform the company within 48 hours of an emergency
                  hospitalization or 3 days before a planned one
                </li>
                <li>Submit all the relevant documents</li>
                <li>Get your health insurance claim processed and reimbursed</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
