import { Link } from "react-router-dom"

const NeedHelp = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-3xl mx-auto">
            <div className="px-3 pb-14">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold sm:text-center md:text-3xl mb-6">Need help choosing the right plan?</h1>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link className="bg-white py-2 text-center rounded-md font-semibold block sm:w-1/2" to={'/contact'}>Contact sales</Link>
                      <Link className="text-black bg-amber-300 rounded-md py-2 text-center font-semibold block sm:w-1/2" to={'/'}>Compare plans</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NeedHelp