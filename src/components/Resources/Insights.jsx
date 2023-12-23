import { Link } from 'react-router-dom'
import resourceImage from '../../assets/woman-in-office.jpg'

const Insights = () => {
  return (
    <div className="">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div className='grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3'>    
                    <div className='flex flex-col gap-4 cursor-pointer'>
                        <h2 className='text-slate-500 uppercase font-bold'>Service</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded hover:opacity-80' />
                        <Link to={'/blog-detail'} className='text-xl font-semibold hover:text-amber-600 transition-all'>CRM Insights: Selecting the Right One for Your Organization</Link>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">05 Sep 2022,</span> by Joshua Nash</p>
                    </div>
                    <div className='flex flex-col gap-4 cursor-pointer'>
                        <h2 className='text-slate-500 uppercase font-bold'>News</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded hover:opacity-80' />
                        <Link to={'/blog-detail'} className='text-xl font-semibold hover:text-amber-600 transition-all'>How To Deliver a Successful Product Launch</Link>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">29 Jun 2022,</span> by Joshua Nash</p>
                    </div>
                    <div className='flex flex-col gap-4 cursor-pointer'>
                        <h2 className='text-slate-500 uppercase font-bold'>Sales</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded hover:opacity-80' />
                        <Link to={'/blog-detail'} className='text-xl font-semibold hover:text-amber-600 transition-all'>How To Deliver a Successful Product Launch</Link>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">20 Mar 2022,</span> by Bill Holloway</p>
                    </div>
                    <div className='flex flex-col gap-4 cursor-pointer'>
                        <h2 className='text-slate-500 uppercase font-bold'>News</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded hover:opacity-80' />
                        <Link to={'/blog-detail'} className='text-xl font-semibold hover:text-amber-600 transition-all'>How To Deliver a Successful Product Launch</Link>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">07 Jun 2022,</span> by Stephen Henderson</p>
                    </div>
                    <div className='flex flex-col gap-4 cursor-pointer'>
                        <h2 className='text-slate-500 uppercase font-bold'>Sales</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded hover:opacity-80' />
                        <Link to={'/blog-detail'} className='text-xl font-semibold hover:text-amber-600 transition-all'>The Challenger Sale model: How to lead the conversation</Link>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">09 Jan 2022,</span> by Joshua Nash</p>
                    </div>
                    <div className='flex flex-col gap-4 cursor-pointer'>
                        <h2 className='text-slate-500 uppercase font-bold'>Product</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded hover:opacity-80' />
                        <Link to={'/blog-detail'} className='text-xl font-semibold hover:text-amber-600 transition-all'>3 ways To automate your lead generation process with Yoo</Link>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">09 Jan 2022,</span> by Leroy Figueroa</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Insights