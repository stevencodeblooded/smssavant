import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GetInTouch = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-28 pb-14">
                <div>
                    <h1 className="text-4xl font-bold leading-snug mb-6">Get in touch with <span className="text-slate-500">our lovely team</span></h1>
                    <form action="" className="flex flex-col gap-2 ">
                        <input type="text" name="" id="" placeholder="Your name" className="p-3 text-base bg-white font-semibold rounded-md" />
                        <input type="email" name="" id="" placeholder="Your email" className="p-3 text-base bg-white font-semibold rounded-md" />
                        <textarea name="" id="" rows="7" placeholder="Message" className="p-3 text-base bg-white font-semibold rounded-md"></textarea>
                        <button className="text-black bg-amber-300 font-medium py-2 rounded-sm flex items-center gap-8 justify-center">Send message <FontAwesomeIcon icon={faArrowRight} /></button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default GetInTouch