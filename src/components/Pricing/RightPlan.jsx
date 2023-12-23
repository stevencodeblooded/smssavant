import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const RightPlan = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-28 pb-14">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-8 md:flex-row">
                        <h1 className="text-4xl font-bold leading-snug capitalize md:text-5xl md:w-2/3">Choose the right plan <span className="text-slate-500">for your business</span></h1>
                        <p className="md:w-1/3">
                            Built with love for growing
                            businesses. Check out the Yoora
                            CRM pricing grid below. Switch
                            between plans at any time
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-xl p-4 flex flex-col gap-4 hover:scale-105 transition-all hover:shadow-sm hover:shadow-amber-400">
                            <h2 className=" font-bold text-2xl">Starter</h2>
                            <p className="text-gray-500 font-medium">
                                Get organized and set up simple
                                sales processes lorem ipsum
                            </p>
                            <h1><span className="text-3xl font-bold ">$8,90 </span> /month</h1>
                            <button className="text-black bg-amber-300 font-medium shadow-sm shadow-black py-2">Try For Free</button>
                            <p className="text-gray-500 font-medium">Free 14-day trial. No credit card required</p>
                            <hr className=" border-black my-5" />
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 2 team </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 1,000 Contacts &</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 5 Campaign</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 10 Nodes Per </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 5 Automation Rules</li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 3</li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Marketing </li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Custom Deal</li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Automated </li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Post-call Automation</li>
                            </ul>
                        </div>
                        <div className="text-black bg-amber-100 rounded-xl p-4 flex flex-col gap-4 hover:scale-105 transition-all hover:shadow-sm hover:shadow-amber-400">
                            <h2 className=" font-bold text-2xl">Core</h2>
                            <p className="uppercase p-2 bg-green-100 w-fit text-sm font-semibold text-amber-500 ">Recommended</p>
                            <p className="text-gray-500 font-medium">
                                Everything you need to boost performance and revenue lorem ips
                            </p>
                            <h1><span className="text-3xl font-bold ">$29,90 </span> /month</h1>
                            <button className="text-black bg-amber-300 font-medium shadow-sm shadow-black py-2">Try For Free</button>
                            <p className="text-gray-500 font-medium">Free 14-day trial. No credit card required</p>
                            <hr className=" border-black my-5" />
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 10 team members </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 2,500 Contacts & Companies</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 5 Campaign Workflows</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 10 Nodes Per Campaign </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 5 Automation Rules</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 3 Plugins/Integrations</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Marketing Automation </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" />Custom Deal Track</li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Automated Voicemails </li>
                                <li className="flex items-center gap-3 text-gray-300 line-through"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Post-call Automation</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-4 flex flex-col gap-4 hover:scale-105 transition-all hover:shadow-sm hover:shadow-amber-400">
                            <h2 className=" font-bold text-2xl">Professional</h2>
                            <p className="text-gray-500 font-medium">
                                Customize without limits and
                                access unrivaled support lorem
                                ipsum
                            </p>
                            <h1><span className="text-3xl font-bold ">$39,90 </span> /month</h1>
                            <button className="text-black bg-amber-300 font-medium shadow-sm shadow-black py-2">Try For Free</button>
                            <p className="text-gray-500 font-medium">Free 14-day trial. No credit card required</p>
                            <hr className=" border-black my-5" />
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Unlimited team members </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 5,000 Contacts & Companies</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 25 Campaign Workflows</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 20 Nodes Per Campaign </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 15 Automation Rules (Triggers)</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> 10 Plugins/Integrations</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Marketing Automation </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Custom Deal Track</li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Automated Voicemails </li>
                                <li className="flex items-center gap-3"><FontAwesomeIcon icon={faCheck} className="text-amber-500" /> Post-call Automation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center">
                        <div className="sm:w-2/3">
                            <h1 className="text-2xl font-bold mb-5">Enterprise </h1>
                            <p>For tailored solutions for large-scale operations. Contact sales for personalized pricing and services</p>
                        </div>
                        <Link to={'/contact'} className="text-black bg-amber-300 font-medium shadow-sm shadow-black py-2 px-4 rounded-sm flex justify-center sm:w-fit sm:h-fit ">Contact Sales</Link>
                    </div>

                    <hr className="border-black my-5" />

                </div>
            </div>
        </section>
    </div>
  )
}

export default RightPlan