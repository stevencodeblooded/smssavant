import { FaFunnelDollar } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";

const MaximizeProfit = () => {
  return (
    <div className="bg-teal-950 text-white">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div>
                    <h1 className="text-4xl font-bold leading-snug mb-10">Maximize Profit, Minimize Effort</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3 text-black bg-amber-300 p-5 rounded-lg">
                            <FaFunnelDollar className="text-7xl mb-6"/>
                            <hr className=" border-black" />
                            <h2 className="text-lg font-semibold">Increase Earnings</h2>
                            <p>Effortlessly turn leads into consistent
                                revenue streams with our advanced AI
                                chatbot technology
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 text-white bg-teal-800 p-5 rounded-lg">
                            <FaComputer className="text-7xl mb-6"/>
                            <hr className=" border-white" />
                            <h2 className="text-lg font-semibold">Support your support</h2>
                            <p>Productive agents are happy
                                agents. Give them all the
                                support tools and information
                                they need to best serve your
                                customers.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 text-white bg-teal-800 p-5 rounded-lg">
                            <SiPaloaltosoftware className="text-7xl mb-6"/>
                            <hr className=" border-white" />
                            <h2 className="text-lg font-semibold">Grow without growing pains</h2>
                            <p>Our software is powerful
                                enough to handle the most
                                complex business, yet flexible
                                enough to scale with you as
                                you grow
                            </p>
                        </div>
            
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MaximizeProfit