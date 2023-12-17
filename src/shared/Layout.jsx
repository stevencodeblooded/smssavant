import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className=" min-h-screen ">
        <Navbar />
        <Outlet />
        <div className=" sticky top-full">
          <Footer />
        </div>
    </div>
  )
}

export default Layout