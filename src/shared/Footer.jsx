import savantLogo from '../assets/SMSSavantLogo.png'
import { AiFillTwitterCircle } from "react-icons/ai"
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-teal-950 text-white">
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-10 px-3 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 lg:grid-cols-5">
          <div className='flex flex-col gap-3'>
            <Link to={'/'}>
              <img src={savantLogo} alt="SMS Savant Logo" width={150} />
            </Link>
            <p className='text-sm'>
              We built an elegant solution. 
              Our team created a fully integrated
              sales and marketing solution for SMBs
            </p>
            <div className='flex gap-3 text-xl'>
              <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><MdFacebook /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Company</h2>
            <div className='flex flex-col text-sm gap-2'>
              <Link to={'/'}>About</Link>
              <Link to={'/'}>Pricing</Link>
              <Link to={'/'}>Jobs</Link>
              <Link to={'/'}>Blog</Link>
              <Link to={'/'}>Careers</Link>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Product</h2>
            <div className='flex flex-col text-sm gap-2'>
              <Link to={'/'}>Sales software</Link>
              <Link to={'/'}>Features</Link>
              <Link to={'/'}>Privacy and security</Link>
              <Link to={'/'}>Marketplace</Link>
              <Link to={'/'}>Status</Link>
              <Link to={'/'}>API</Link>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Discover</h2>
            <div className='flex flex-col text-sm gap-2'>
              <Link to={'/'}>Partner Program</Link>
              <Link to={'/'}>Get our newsletter</Link>
              <Link to={'/'}>Sales Pipeline Course</Link>
              <Link to={'/'}>What is CRM?</Link>
              <Link to={'/'}>CRM Comparison</Link>
              <Link to={'/'}>Resources</Link>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='font-semibold'>Help Center</h2>
            <div className='flex flex-col text-sm gap-2'>
              <Link to={'/'}>Community</Link>
              <Link to={'/'}>Knowledge Base</Link>
              <Link to={'/'}>Academy</Link>
              <Link to={'/'}>Support</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Footer