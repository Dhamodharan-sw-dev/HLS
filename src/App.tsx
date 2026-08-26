import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import TrustStats from './sections/TrustStats'
import InsurancePlans from './sections/InsurancePlans'
import ClaimsHelpBanner from './sections/ClaimsHelpBanner'
import CareNovaDifference from './sections/CareNovaDifference'
import WhatIsAndNeedInsurance from './sections/WhatIsAndNeedInsurance'
import Benefits from './sections/Benefits'
import AnnouncementBar from './sections/AnnouncementBar'
import ChooseHealthInsurance from './sections/ChooseHealthInsurance'
import ClaimProcess from './sections/ClaimProcess'
import WellnessEcosystem from './sections/WellnessEcosystem'
import AbhaSection from './sections/AbhaSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InsurancePlans />
        <TrustStats />
        <ClaimsHelpBanner />
        <CareNovaDifference />
        <WhatIsAndNeedInsurance />
        <Benefits />
        <AnnouncementBar />
        <ChooseHealthInsurance />
        <ClaimProcess />
        <WellnessEcosystem />
        <AbhaSection />
      </main>
    </>
  )
}

export default App
