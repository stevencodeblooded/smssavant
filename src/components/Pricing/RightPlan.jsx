import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RightPlan = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-28 pb-14">
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold leading-snug">Choose the right plan <span className="text-slate-500">for your business</span></h1>
                    <p>
                        Built with love for growing
                        businesses. Check out the Yoora
                        CRM pricing grid below. Switch
                        between plans at any time
                    </p>
                    <div className="grid grid-cols-1 gap-8">
                        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
                            <h2 className=" font-bold text-xl">Starter</h2>
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
                        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
                            <h2 className=" font-bold text-xl">Professional</h2>
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
                        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
                            <h2 className=" font-bold text-xl">Enterprise</h2>
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
                    <hr className="border-black my-8" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default RightPlan