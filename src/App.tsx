import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import TrustStats from './sections/TrustStats'
import InsurancePlans from './sections/InsurancePlans'
import ClaimsHelpBanner from './sections/ClaimsHelpBanner'
import CareNovaDifference from './sections/CareNovaDifference'
import WhatIsAndNeedInsurance from './sections/WhatIsAndNeedInsurance'
import Benefits from './sections/Benefits'

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
      </main>
    </>
  )
}

export default App
