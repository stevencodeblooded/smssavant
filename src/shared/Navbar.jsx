import { Link, NavLink } from "react-router-dom"
import savantLogo from '../assets/SMSSavantLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [mobileNavigation, setMobileNavigation] = useState(false);
  
  return (
    <div className="bg-slate-100 fixed w-full shadow shadow-slate-300 z-50">
      <section className=" max-w-5xl mx-auto">
        <div className="relative flex items-center justify-between px-3 py-4">
          <div className="flex items-center gap-12">
            <Link to={'/'} onClick={() => setMobileNavigation(false)}>
              <img src={savantLogo} alt="SMS Savant Logo" className="w-40 cursor-pointer" />
            </Link>
            <ul className="hidden md:flex items-center gap-8 font-semibold text-sm">
              <li>
                <NavLink className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} to={'/product'}>Product</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} to={'/pricing'}>Pricing</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} to={'/company'}>Company</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} to={'/resources'}>Resources</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex gap-4 font-semibold text-sm">
            <Link to={'/login'} className="bg-slate-300 px-2 py-1 rounded-md">Log In</Link>
            <Link to={'/register'} className="bg-teal-950 text-white px-2 py-1 rounded-md">Try for Free</Link>
          </div>

          <div className="md:hidden">
            <GiHamburgerMenu className=" cursor-pointer text-xl" onClick={() => setMobileNavigation(!mobileNavigation)} />
          </div>

          {
            mobileNavigation && (
              <ul className="absolute z-10 top-16 left-0 w-full h-screen bg-slate-100 px-5 py-4 font-semibold text-sm flex flex-col gap-6 md:hidden">
                <li>
                  <NavLink to={'/product'} className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} onClick={() => setMobileNavigation(false)}>Product</NavLink>
                </li>
                <li>
                  <NavLink to={'/pricing'} className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} onClick={() => setMobileNavigation(false)}>Pricing</NavLink>
                </li>
                <li>
                  <NavLink to={'/company'} className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} onClick={() => setMobileNavigation(false)}>Company</NavLink>
                </li>
                <li>
                  <NavLink to={'/resources'} className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} onClick={() => setMobileNavigation(false)}>Resources</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'} className={({isActive}) => isActive ? "text-black bg-amber-300 font-medium shadow-sm shadow-black px-2 py-1" : null} onClick={() => setMobileNavigation(false)}>Contact</NavLink>
                </li>
                <div className="flex flex-col gap-4">
                  <Link to={'/login'} onClick={() => setMobileNavigation(false)} className="bg-slate-300 px-2 py-1 rounded-md">Log In</Link>
                  <Link to={'/register'} onClick={() => setMobileNavigation(false)} className="bg-teal-950 text-white px-2 py-1 rounded-md">Try for Free</Link>
                </div>
              </ul>
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Navbar