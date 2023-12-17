import { TiTick } from "react-icons/ti";
import womanPicture from '../../assets/woman-in-office.jpg'
import mobilePhone from '../../assets/mobile-phone.jpg'
import helpDesk from '../../assets/help-desk.jpg'

const IncreaseRevenue = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-8">
                        <hr className="border-black" />
                        <h3 className="text-black bg-amber-300 w-fit px-2 py-1 font-semibold rounded-md">Sales</h3>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl font-semibold leading-snug ">Increase company revenue up to 65%</h1>
                            <p>
                                Automate your sales, marketing, and
                                service in one platform. Avoid data
                                leaks and enable consistent
                                messaging. 
                            </p>
                            <ul className="">
                                <li className="flex gap-2"><span><TiTick className="text-3xl text-teal-950"/></span>Close more deals with single page contact</li>
                                <li className="flex gap-2"><span><TiTick className="text-3xl text-teal-950" /></span>Enjoy one click calling, call scripts and voicemail automation</li>
                                <li className="flex gap-2"><span><TiTick  className="text-3xl text-teal-950"/></span>Track stages and milestones of your deals to keep the sales process on track</li>
                            </ul>
                        </div>

                        <div className="p-5 bg-slate-300 rounded-md">
                            <img src={womanPicture} alt="woman-in-office" className="rounded-md"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <hr className="border-black" />
                        <h3 className="text-black bg-amber-300 w-fit px-2 py-1 font-semibold rounded-md">Marketing</h3>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl font-semibold leading-snug ">Marketing Automation</h1>
                            <p>
                                Market like the most successful
                                companies in the world with Agile
                                CRM s marketing automation
                                software 
                            </p>
                            <ul className="">
                                <li className="flex gap-2"><span><TiTick className="text-3xl text-teal-950"/></span>Marketing workflows with an easy drag and drop designer</li>
                                <li className="flex gap-2"><span><TiTick className="text-3xl text-teal-950" /></span>Use our templates to create high converting, mobile responsive landing pages</li>
                                <li className="flex gap-2"><span><TiTick  className="text-3xl text-teal-950"/></span>Integrate social media easily into your marketing campaigns & contact views</li>
                            </ul>
                        </div>

                        <div className="p-5 bg-slate-300 rounded-md">
                            <img src={mobilePhone} alt="woman-in-office" className="rounded-md"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <hr className="border-black" />
                        <h3 className="text-black bg-amber-300 w-fit px-2 py-1 font-semibold rounded-md">Service</h3>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl font-semibold leading-snug ">Help Desk Software</h1>
                            <p>
                                Great customer support separates
                                decent companies from excellent
                                companies. A positive customer
                                support experience is a crucially
                                important piece of the customer
                                journey. 
                            </p>
                            <ul className="">
                                <li className="flex gap-2"><span><TiTick className="text-3xl text-teal-950"/></span>Resolve every issue in the shortest possible time with powerful ticketing features</li>
                                <li className="flex gap-2"><span><TiTick className="text-3xl text-teal-950" /></span>Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)</li>
                                <li className="flex gap-2"><span><TiTick  className="text-3xl text-teal-950"/></span>Enjoy at a glance views of important data such as ticket priority on your dashboard </li>
                            </ul>
                        </div>

                        <div className="p-5 bg-slate-300 rounded-md">
                            <img src={helpDesk} alt="woman-in-office" className="rounded-md"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default IncreaseRevenue