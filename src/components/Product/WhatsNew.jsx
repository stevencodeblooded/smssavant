import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import womanInOffice from '../../assets/woman-in-office.jpg'
import helpDesk from '../../assets/help-desk.jpg'
import { Link } from 'react-router-dom'

const WhatsNew = () => {
  return (
    <div className='bg-slate-100'>
        <section className='max-w-5xl mx-auto'>
            <div className='px-3 pt-28 pb-14'>
                <h1 className="text-4xl font-bold leading-snug mb-3 capitalize md:text-5xl">What's new at <span className='text-slate-500'>Yoora?</span></h1>
                <Link to='/all-products' className=' font-semibold flex items-center gap-2 mb-8'>See all <FontAwesomeIcon className='text-teal-950' icon={faArrowRight} /></Link>
                <div className='flex flex-col gap-8 md:flex-row'>
                        <div className='md:w-1/2 cursor-pointer'>
                            <h3 className=' uppercase font-medium text-gray-600 '>Successful Delivery</h3>
                            <hr className=' border-black my-4' />
                            <div className='flex flex-col gap-5'>
                                <img src={womanInOffice} alt="" className='rounded  hover:opacity-80' />
                                <div>
                                    <h2 className='font-bold mb-3 text-xl'>How To Deliver a Successful Product Launch</h2>
                                    <p className='font-semibold'>05 Sep 2022, <span className=' font-medium text-gray-600'>by Joshua Nash</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 cursor-pointer'>
                            <h3 className=' uppercase font-medium text-gray-600 '>Product Launch</h3>
                            <hr className=' border-black my-4' />
                            <div className='flex flex-col gap-5'>
                                <img src={helpDesk} alt="" className='rounded hover:opacity-80' />
                                <div>
                                    <h2 className='font-bold mb-3 text-xl'>How To Deliver a Successful Product Launch</h2>
                                    <p className='font-semibold'>07 Sep 2022, <span className=' font-medium text-gray-600'>by Joshua Nash</span></p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default WhatsNew