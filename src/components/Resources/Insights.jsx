import resourceImage from '../../assets/woman-in-office.jpg'

const Insights = () => {
  return (
    <div className="">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-14 pb-8">
                <div className='flex flex-col gap-16'>    
                    <div className='flex flex-col gap-4'>
                        <hr className=" border-black mx-3" />
                        <h3 className=" text-slate-500 uppercase font-bold">Service</h3>
                        <h2 className=" text-xl font-semibold">CRM Insights: Selecting the Right One for Your Organization</h2>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">05 Sep 2022,</span> by Joshua Nash</p>
                        <hr className=" border-black" />
                        <img src={resourceImage} alt="" className='rounded' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-500 uppercase font-bold'>News</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded' />
                        <h2 className='text-xl font-semibold'>How To Deliver a Successful Product Launch</h2>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">29 Jun 2022,</span> by Joshua Nash</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-500 uppercase font-bold'>Sales</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded' />
                        <h2 className='text-xl font-semibold'>How To Deliver a Successful Product Launch</h2>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">20 Mar 2022,</span> by Bill Holloway</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-500 uppercase font-bold'>News</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded' />
                        <h2 className='text-xl font-semibold'>How To Deliver a Successful Product Launch</h2>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">07 Jun 2022,</span> by Stephen Henderson</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-500 uppercase font-bold'>Sales</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded' />
                        <h2 className='text-xl font-semibold'>The Challenger Sale model: How to lead the conversation</h2>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">09 Jan 2022,</span> by Joshua Nash</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-slate-500 uppercase font-bold'>Product</h2>
                        <hr className=" border-black " />
                        <img src={resourceImage} alt="" className='rounded' />
                        <h2 className='text-xl font-semibold'>3 ways To automate your lead generation process with Yoo</h2>
                        <p className="text-slate-500 font-semibold"><span className=" text-black ">09 Jan 2022,</span> by Leroy Figueroa</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Insights