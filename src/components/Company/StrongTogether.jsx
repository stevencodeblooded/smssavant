import profilePic from '../../assets/LinkedIn_Profile_Photo.jpg'

const StrongTogether = () => {
  return (
    <div className=" bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pb-12">
                <div>
                    <h1 className="text-4xl font-bold leading-snug mb-6">Together we are Strong</h1>
                    <p className=" mb-5 font-semibold">
                        Our crew is always getting
                        bigger, but we all work
                        toward one goal: to make
                        sales success not only
                        possible but inevitable for
                        teams everywhere.
                    </p>

                    <p className="text-sm mb-8">
                        In 2022, at vero eos et accusamus et
                        iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint
                        occaecati cupiditate non provident,
                        similique sunt in culpa qui officia
                        deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum
                        quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id
                        quod maxime placeat facere
                        possimus, omnis voluptas
                        assumenda est, omnis dolor
                        repellendus. Temporibus autem
                        quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet
                        ut et voluptates repudiandae sint et
                        molestiae non recusandae. Itaque
                        earum rerum hic tenetur a sapiente
                        delectus, ut aut reiciendis
                        voluptatibus maiores alias
                        consequatur aut perferendis
                        doloribus asperiores repellat.
                    </p>

                    <div className=' flex flex-col gap-6 '>
                        <div className='flex gap-3'>
                            <img src={profilePic} alt="" className='w-12 h-12 rounded-full' />
                            <div>
                                <h2 className=' font-semibold'>Nellie Foster</h2>
                                <p className=' text-gray-600'>
                                    Founder & CEO, Foster Business Strategies
                                </p>
                            </div>
                        </div>
                        <p className='text-2xl font-semibold'>
                            "Our goal is to build
                            software that gives
                            customer-facing teams
                            at SMBs the ability to
                            create fruitful and
                            enduring relationships
                            with customers."
                        </p>
                    </div>

                    <hr className='border-black mt-20 mb-8' />

                    <div className="grid grid-cols-1 gap-10">
                        <div className="flex flex-col gap-3">
                            <h6 className="font-medium">Team member vero eos e accusamus et iusto odio dignissimos ducimus qui blanditiis. </h6>
                            <h1 className="text-4xl text-amber-600 font-bold">290+</h1>
                        </div>
                        <div className="flex flex-col gap-3" >
                            <h6 className="font-medium">Year experience vero eos et accusamus dignissimos ducimus qui blanditiis praesentium. </h6>
                            <h1 className="text-4xl text-amber-600 font-bold">12+</h1>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h6 className="font-medium">Lovely customers vero eos et accusamus et iusto odio qui blanditiis praesentium.  </h6>
                            <h1 className="text-4xl text-amber-600 font-bold">20K+</h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default StrongTogether