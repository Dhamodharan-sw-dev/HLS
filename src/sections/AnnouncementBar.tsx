import { toPath } from '../lib/links'

export default function AnnouncementBar() {
  return (
    <div className="bg-[#ffe7e5] text-center text-sm text-ink-800">
      <p className="px-4 py-2.5">
        Help us enhance our based on public insights with IRDAI&apos;s Call
        Centre Feedback Survey at{' '}
        <a
          href="https://www.mygov.in/mygov-survey/irdais-call-centre-feedback-survey/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-red hover:text-brand-red-dark"
        >
          https://www.mygov.in/mygov-survey/irdais-call-centre-feedback-survey/
        </a>
      </p>
      <p className="px-4 py-2.5">
        <a
          href={toPath('Bimagyaan Quiz')}
          className="text-brand-red underline hover:text-brand-red-dark"
        >
          IRDAI Initiate - BIMAGYAAN : An Insurance Awareness Quiz
        </a>
      </p>
    </div>
  )
}
