const NewsHeading = () => {
  return (
    <div className=" bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-14 pb-8">
                <div className=" flex flex-col ">
                    <h1 className="text-4xl font-bold leading-snug mb-8 capitalize">News and insights <span className="text-slate-500">from our experts</span></h1>
                    <select name="" id="" className=" mx-2 p-2 rounded-sm outline-none bg-gray-300 ">
                        <option value="All Articles">All Articles</option>
                        <option value="Oldest Articles">Oldest Articles</option>
                        <option value="Newest Articles">Newest Articles</option>
                    </select>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NewsHeading