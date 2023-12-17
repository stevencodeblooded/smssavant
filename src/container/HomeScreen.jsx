import Dashboard from "../components/Home/Dashboard"
import Hero from "../components/Home/Hero"
import IncreaseRevenue from "../components/Home/IncreaseRevenue"
import Integrations from "../components/Home/Integrations"
import MaximizeProfit from "../components/Home/MaximizeProfit"

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Dashboard />
      <MaximizeProfit />
      <IncreaseRevenue />
      <Integrations />
    </>
  )
}

export default HomeScreen