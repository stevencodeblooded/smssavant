import AmazingTeam from "../components/Company/AmazingTeam"
import AskQuestions from "../components/Company/AskQuestions"
import CompanyCustomers from "../components/Company/CompanyCustomers"
import StrongTogether from "../components/Company/StrongTogether"
import TryForFree from "../components/Home/TryForFree"

const CompanyScreen = () => {
  return (
    <>
      <CompanyCustomers />
      <StrongTogether />
      <AmazingTeam />
      <AskQuestions />
      <TryForFree />
    </>
  )
}

export default CompanyScreen