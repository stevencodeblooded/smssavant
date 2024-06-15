import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import smsSavantLogo from "../assets/SMSSavantLogo.png";
import background from "../assets/background.jpg";

const RegisterScreen = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-4 min-h-screen">
          <div className=" col-span-4 md:col-span-2 lg:col-span-1 px-7 lg:px-3 py-12">
            <img src={smsSavantLogo} alt="logo" className=' w-44 mb-8' />
            <div className="flex flex-col gap-3 mb-5">
              <h2 className="text-4xl leading-snug font-semibold">Create your account</h2>
              <p className="text-lg font-semibold">
                Have an account? <Link to={'/login'}><span className="text-blue-800">Log in now</span></Link>
              </p>
            </div>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="fname" className="text-sm font-semibold">First Name</label>
                <input type="text" name="fname" id="fname" className="border focus:outline-none rounded-md p-2 border-black"  />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lname" className="text-sm font-semibold">Last Name</label>
                <input type="text" name="lname" id="lname" className="border focus:outline-none rounded-md p-2 border-black"  />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                <input type="email" name="email" id="email" className="border focus:outline-none rounded-md p-2 border-black"  />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-semibold">Password</label>
                <input type="password" name="password" id="password" className="border focus:outline-none rounded-md p-2 border-black" />
              </div>
              <button className="text-black bg-amber-300 block px-3 p-2 rounded font-semibold text-base shadow-sm shadow-black">Sign Up</button>
            </form>

            <p className="text-center my-3 text-sm">Or with Google</p>

            <button className="flex items-center justify-center font-semibold gap-3 border w-full rounded-md p-2  shadow-sm shadow-black"><FcGoogle className="text-2xl" /> Google</button>
          </div>
          <div className=" md:col-span-2 lg:col-span-3">
            <img src={background} alt="login" className="h-screen fixed object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterScreen