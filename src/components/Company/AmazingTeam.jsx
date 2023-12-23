import { Link } from 'react-router-dom'
import profilePic from '../../assets/LinkedIn_Profile_Photo.jpg'
import profilePic2 from '../../assets/woman profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AmazingTeam = () => {
  return (
    <div className=" bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3">
                <div className='flex flex-col gap-16'>
                    <h1 className="text-4xl font-bold leading-snug capitalize md:leading-snug md:text-5xl">Meet our <br /><span className='text-slate-500'>amazing</span> team</h1>
                    <hr className="border-black mx-4"/>

                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
                        <div>
                            <img src={profilePic} alt="" className='rounded-lg hover:opacity-80' />
                            <div>
                                <h3 className=' font-semibold'>Steven Ochieng Shaw</h3>
                                <p className=' text-sm'>Founder & CEO</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic2} alt="" className='rounded-lg hover:opacity-80' />
                             <div>
                                <h3 className=' font-semibold'>Clinton Stephens</h3>
                                <p className=' text-sm'>Chief Technology Office</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic2} alt="" className='rounded-lg hover:opacity-80' />
                             <div>
                                <h3 className=' font-semibold'>Erine Auma</h3>
                                <p className=' text-sm'>Director of People</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic} alt="" className='rounded-lg hover:opacity-80' />
                             <div>
                                <h3 className=' font-semibold'>Vincent Odingo</h3>
                                <p className=' text-sm'>Software Engineer</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic} alt="" className='rounded-lg hover:opacity-80' />
                            <div>
                                <h3 className=' font-semibold'>Brandon Shaw</h3>
                                <p className=' text-sm'>Founder & CEO</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic2} alt="" className='rounded-lg hover:opacity-80' />
                             <div>
                                <h3 className=' font-semibold'>Floyd Stephens</h3>
                                <p className=' text-sm'>Chief Technology Office</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic2} alt="" className='rounded-lg hover:opacity-80' />
                             <div>
                                <h3 className=' font-semibold'>Kate Clark</h3>
                                <p className=' text-sm'>Director of People</p>
                            </div>
                        </div>
                        <div>
                            <img src={profilePic} alt="" className='rounded-lg hover:opacity-80' />
                             <div>
                                <h3 className=' font-semibold'>Eunice Doyle</h3>
                                <p className=' text-sm'>Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-black mx-4"/>

                    <div className='flex flex-col gap-6 bg-teal-950 text-white px-3 py-4 rounded md:px-8 md:py-12'>
                        <h1 className='text-4xl font-bold leading-snug md:text-5xl'>Join our team</h1>
                        <p className=' font-semibold'>
                            We believe it takes great people to
                            make a great product. That s why
                            we hire not only the perfect
                            professional fits, but people who
                            embody our company values.
                        </p>

                        <Link to={'/'} className='flex items-center gap-8 justify-center text-black bg-amber-300 font-medium shadow-sm shadow-black py-2'>See open positions <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default AmazingTeam