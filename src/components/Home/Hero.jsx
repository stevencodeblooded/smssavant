import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-28 pb-14 flex flex-col gap-8">
                <h1 className="text-4xl font-bold leading-snug">Increase Your Revenue <span className="text-slate-500">with No Extra Work.</span></h1>
                <p className=" text-base">
                    Unlock your cleaning business s potential by using SMS Savant s AI
                    bots to automate text conversations with leads and customers. 
                    Save time, grow your business, and make each conversation count.
                </p>
                <div>
                    <Link className="bg-sky-600 block px-3 p-2 rounded text-white font-semibold text-sm mb-6">Try for Free</Link>
                    <p className="text-base">
                        Join the 50+ cleaning companies are using SMS Savant!
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero