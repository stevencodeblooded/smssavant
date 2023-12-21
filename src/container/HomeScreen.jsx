import CustomersLove from "../components/Home/CustomersLove"
import Dashboard from "../components/Home/Dashboard"
import Hero from "../components/Home/Hero"
import IncreaseRevenue from "../components/Home/IncreaseRevenue"
import Integrations from "../components/Home/Integrations"
import MaximizeProfit from "../components/Home/MaximizeProfit"
import RealLifeResults from "../components/Home/RealLifeResults"
import Supercharge from "../components/Home/Supercharge"
import TryForFree from "../components/Home/TryForFree"
import WhatsNew from "../components/Home/WhatsNew"

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <MaximizeProfit />
      <IncreaseRevenue />
      <Integrations />
      <WhatsNew />
      <RealLifeResults />
      <CustomersLove />
      <Supercharge />
      <TryForFree />
    </>
  )
}

export default HomeScreen