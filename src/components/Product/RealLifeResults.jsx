import profilePic from '../../assets/LinkedIn_Profile_Photo.jpg'
import profilePic2 from '../../assets/woman profile.png'

const RealLifeResults = () => {
  return (
    <div className=' bg-slate-100'>
        <section className='max-w-5xl mx-auto'>
            <div className='px-3 py-14'>
                <div>
                    <h1 className="text-4xl font-bold leading-snug mb-3 capitalize md:text-5xl">Real life results and revenue</h1>
                    <p>See how companies like yours have
                        smashed their sales success goals
                    </p>
                    <hr className=' border-black my-8 md:my-12' />
                    <div>
                        <div className='flex flex-col gap-5 md:flex-row '>
                            <div className='md:w-1/3'>
                                <h2 className="text-4xl font-bold leading-snug mb-3 capitalize md:text-5xl">$2.5 M</h2>
                                <h4 className='text-lg font-semibold'>Generate sales</h4>
                            </div>
                            <div className='md:w-2/3'>
                                <p className='text-lg font-semibold mb-8 md:text-2xl'>
                                    Using Yoora CRM is one
                                    of the best decisions
                                    we’ve ever made. We’ve
                                    seen our annual revenue
                                    explode, and the
                                    outlook just keeps
                                    getting sunnier.
                                </p>
                                <div className='flex gap-3'>
                                    <img src={profilePic} alt="" className='w-12 h-12 rounded-full' />
                                    <div>
                                        <h2 className=' font-semibold'>Nellie Foster</h2>
                                        <p className=' text-gray-600'>
                                            Founder & CEO, Foster Business Strategies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className=' border-black my-8' />
                    <div>
                        <div className='flex flex-col gap-5 md:flex-row'>
                            <div className='md:w-1/3'>
                                <h2 className="text-4xl font-bold leading-snug mb-3 capitalize md:text-5xl">45%</h2>
                                <h4 className='text-lg font-semibold'>Grew revenue</h4>
                            </div>
                            <div className='md:w-2/3'>
                                <p className=' text-lg font-semibold mb-8 md:text-2xl'>
                                    Yoora is created for
                                    sales people. It s the
                                    kind of software that just
                                    works. I don t have to try
                                    to make it work. It
                                    already does. It s just
                                    perfect.
                                </p>
                                <div className='flex gap-3'>
                                    <img src={profilePic2} alt="" className='w-12 h-12 rounded-full' />
                                    <div>
                                        <h2 className=' font-semibold'>Nellie Foster</h2>
                                        <p className=' text-gray-600'>
                                            Digital Marketing Director
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default RealLifeResults