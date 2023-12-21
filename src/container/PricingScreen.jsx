import Supercharge from "../components/Home/Supercharge"
import TryForFree from "../components/Home/TryForFree"
import Faq from "../components/Pricing/Faq"
import NeedHelp from "../components/Pricing/NeedHelp"
import RightPlan from "../components/Pricing/RightPlan"

const PricingScreen = () => {
  return (
    <>
      <RightPlan />
      <NeedHelp />
      <Faq />
      <Supercharge />
      <TryForFree />
    </>
  )
}

export default PricingScreen