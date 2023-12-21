import { Link } from "react-router-dom"

const TryForFree = () => {
  return (
    <div className="bg-amber-300 pt-10">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14 bg-sky-600 rounded-t-full">
                <div className="flex flex-col items-center w-full gap-4">
                    <Link to={'/'} className="bg-slate-100 w-fit py-2 px-6 rounded-md font-semibold">Try For Free</Link>
                    <p className="text-slate-100 font-semibold">Full access. No credit card required.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TryForFree