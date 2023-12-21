import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const AskQuestions = () => {
  return (
    <div className=" bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div>
                    <h1 className="text-4xl font-bold leading-snug mb-4">Have a question? Our team is happy to assist you</h1>
                    <p>
                        Ask about Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed possimus ullam ab? Voluptatem, sequi?
                    </p>
                    <hr className="border-black my-8"/>
                    <Link className="flex items-center gap-8 justify-center text-black bg-amber-300 font-medium shadow-sm shadow-black py-2">Contact Us <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className=" mt-12 flex justify-center">
                    <p className=" font-semibold">Or call <a href="tel:+12 3456 7890" className="underline text-amber-600">+12 3456 7890</a></p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AskQuestions