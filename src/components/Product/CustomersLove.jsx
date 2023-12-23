import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profilePic from '../../assets/LinkedIn_Profile_Photo.jpg'
import profilePic2 from '../../assets/woman profile.png'

const CustomersLove = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div className="">
                    <h1 className="text-4xl font-bold leading-snug mb-5 text-center capitalize md:text-left md:max-w-lg">We love our Customers and They love us too</h1>
                    <h4 className=' font-semibold flex items-center gap-2 mb-8'>See all <FontAwesomeIcon className='text-teal-950' icon={faArrowRight} /></h4>
                </div>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-black bg-amber-300 p-5 rounded-lg">
                        <h1 className=" text-7xl font-bold leading-snug text-amber-500"><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                        <hr className="border-black my-6" />
                        <p className="mb-8 font-semibold">
                            The best thing we love about
                            Yoora is it does two-way sync
                            with Google Apps. It has
                            helped us to better organize
                            and keep everything on track.
                        </p>
                        <div className='flex gap-3'>
                            <img src={profilePic} alt="" className='w-12 h-12 rounded-full' />
                            <div>
                                <h2 className=' font-semibold text-amber-500'>Nellie Foster</h2>
                                <p className=' text-gray-600 text-sm'>
                                    Digital Marketing Director
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-teal-800 p-5 rounded-lg">
                        <h1 className=" text-7xl font-bold leading-snug text-amber-500"><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                        <hr className="border-white my-6" />
                        <p className="mb-8 font-semibold">
                            The best thing we love about
                            Yoora is it does two-way sync
                            with Google Apps. It has
                            helped us to better organize
                            and keep everything on track.
                        </p>
                        <div className='flex gap-3'>
                            <img src={profilePic2} alt="" className='w-12 h-12 rounded-full' />
                            <div>
                                <h2 className=' font-semibold text-amber-500'>Nellie Foster</h2>
                                <p className=' text-white text-sm'>
                                    Digital Marketing Director
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-teal-800 p-5 rounded-lg">
                        <h1 className=" text-7xl font-bold leading-snug text-amber-500"><FontAwesomeIcon icon={faQuoteLeft} /></h1>
                        <hr className="border-white my-6" />
                        <p className="mb-8 font-semibold">
                            Easy to use, reasonably
                            priced, and ensures I don t
                            drop the ball on following up
                            with my leads!
                        </p>
                        <div className='flex gap-3'>
                            <img src={profilePic} alt="" className='w-12 h-12 rounded-full' />
                            <div>
                                <h2 className=' font-semibold text-amber-500'>Andrew Wilkins</h2>
                                <p className=' text-white text-sm'>
                                    Managing Director, Nirma Studi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CustomersLove