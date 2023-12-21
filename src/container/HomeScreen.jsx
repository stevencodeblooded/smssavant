import Dashboard from "../components/Home/Dashboard"
import Hero from "../components/Home/Hero"
import IncreaseRevenue from "../components/Home/IncreaseRevenue"
import Integrations from "../components/Home/Integrations"
import MaximizeProfit from "../components/Home/MaximizeProfit"
import TryForFree from "../components/Home/TryForFree"

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <MaximizeProfit />
      <IncreaseRevenue />
      <Integrations />
      <TryForFree />
    </>
  )
}

export default HomeScreen