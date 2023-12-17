import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./shared/Layout"
import HomeScreen from "./container/HomeScreen"
import ProductScreen from "./container/ProductScreen"
import ContactScreen from "./container/ContactScreen"
import ResourcesScreen from "./container/ResourcesScreen"
import CompanyScreen from "./container/CompanyScreen"
import PricingScreen from "./container/PricingScreen"
import RegisterScreen from "./container/RegisterScreen"
import LoginScreen from "./container/LoginScreen"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="product" element={<ProductScreen />} />
        <Route path="pricing" element={<PricingScreen />} />
        <Route path="company" element={<CompanyScreen />} />
        <Route path="resources" element={<ResourcesScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="login" element={<LoginScreen />} />
      </Route>
    )
  )
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App