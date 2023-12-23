import { Link } from "react-router-dom"
import dashboard from '../../assets/hero-dashboard.png'

const Hero = () => {
  return (
    <div className="bg-slate-100 overflow-hidden">
        <section className="max-w-5xl mx-auto relative">
            <div className="flex flex-col md:flex-row">
                <div className="px-3 pt-28 pb-14 flex flex-col gap-8 md:w-2/3">
                    <h1 className="text-4xl font-bold leading-snug md:text-5xl">Increase Your Revenue <span className="text-slate-500">with No Extra Work.</span></h1>
                    <p className="text-base">
                        Unlock your cleaning business's potential by using SMS Savant's AI
                        bots to automate text conversations with leads and customers.
                        Save time, grow your business, and make each conversation count.
                    </p>
                    <div>
                        <Link className="text-black bg-amber-300 block px-3 p-2 rounded font-semibold text-base shadow-sm shadow-black mb-6 sm:flex sm:justify-center">Try for Free</Link>
                        <p className="text-base">
                            Join the 50+ cleaning companies that are using SMS Savant!
                        </p>
                    </div>
                </div>
                <div className="hidden md:block absolute top-20 -right-72">
                    <img src={dashboard} alt="dashboard" className="w-full h-auto" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero