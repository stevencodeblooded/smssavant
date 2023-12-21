import google from '../../assets/Google.png'
import atlassian from '../../assets/atlassian.png'
import canon from '../../assets/canon.png'
import walmart from '../../assets/Walmart_logo.png'
import amazon from '../../assets/amazon-download.png'

const TrustedBy = () => {
  return (
    <div className="bg-white">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div>
                    <h3 className=" text-base font-semibold mb-8">Trusted by 1,000+ customers</h3>
                    <div className='grid grid-cols-2 gap-8'>
                        <img src={amazon} alt="" />
                        <img src={google} alt="" />
                        <img src={atlassian} alt="" />
                        <img src={canon} alt="" />
                        <img src={walmart} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TrustedBy