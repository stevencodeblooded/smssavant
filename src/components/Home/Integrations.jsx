import Marquee from 'react-fast-marquee'
import amazon from '../../assets/amazon.png'
import hubspot from '../../assets/hubspot.png'
import zoom from '../../assets/zoom.png'
import meet from '../../assets/google-meet-logo.png'
import zendesk from '../../assets/zendesk.png'
import teams from '../../assets/teams.png'
import intercom from '../../assets/intercom.png'
import google from '../../assets/Google.png'
import mapsImages from '../../assets/mapsImages.png'
import asana from '../../assets/asana.png'

const Integrations = () => {
  return (
    <div className='bg-slate-100'>
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div className="text-center mb-10">
                    <h1  className="text-4xl font-bold leading-snug mb-6 capitalize md:text-5xl">Over 300+ integrations</h1> 
                    <p>Expand the capabilities of Yoora
                      with hundreds of apps and
                      integrations
                    </p>
                </div>
                <div >
                  <Marquee pauseOnHover autoFill >
                    <img src={amazon} alt="amazon" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={hubspot} alt="hubspot" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={zoom} alt="zoom" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={meet} alt="meet" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={zendesk} alt="zendesk" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={teams} alt="teams" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={intercom} alt="intercom" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={google} alt="google"  className=' w-12 mx-3 sm:w-20 md:30'/>
                    <img src={mapsImages} alt="mapsImages" className=' w-12 mx-3 sm:w-20 md:30' />
                    <img src={asana} alt="asana" className=' w-12 mx-3 sm:w-20 md:30' />
                  </Marquee>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Integrations