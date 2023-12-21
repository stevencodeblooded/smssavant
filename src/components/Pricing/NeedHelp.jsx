import { Link } from "react-router-dom"

const NeedHelp = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pb-14">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Need help choosing the right plan?</h1>
                    <Link className="bg-white py-2 text-center rounded-md font-semibold" to={'/contact'}>Contact sales</Link>
                    <Link className="text-black bg-amber-300 rounded-md py-2 text-center font-semibold" to={'/'}>Compare plans</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NeedHelp