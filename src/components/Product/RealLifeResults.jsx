import profilePic from '../../assets/LinkedIn_Profile_Photo.jpg'
import profilePic2 from '../../assets/woman profile.png'

const RealLifeResults = () => {
  return (
    <div className=' bg-slate-100'>
        <section className='max-w-5xl mx-auto'>
            <div className='px-3 py-14'>
                <div>
                    <h1 className='text-4xl font-bold leading-snug mb-5'>Real life results and revenue</h1>
                    <p>See how companies like yours have
                        smashed their sales success goals
                    </p>
                    <hr className=' border-black my-8' />
                    <div>
                        <div>
                            <h2 className='text-4xl font-bold leading-snug mb-3'>$2.5 M</h2>
                            <h4 className='text-lg font-semibold mb-5'>Generate sales</h4>
                            <p className=' font-semibold mb-8'>
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
                    <hr className=' border-black my-8' />
                    <div>
                        <div>
                            <h2 className='text-4xl font-bold leading-snug mb-3'>45%</h2>
                            <h4 className='text-lg font-semibold mb-5'>Grew revenue</h4>
                            <p className=' font-semibold mb-8'>
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
        </section>
    </div>
  )
}

export default RealLifeResults