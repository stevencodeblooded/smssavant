import togetherness from '../../assets/togetherness.jpg'

const CompanyCustomers = () => {
  return (
    <div className=" bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-28 pb-14">
                <div className='flex flex-col md:items-end md:flex-row md:gap-6 mb-10'>
                    <h1 className="text-4xl font-bold leading-snug capitalize lg:leading-snug lg:text-5xl md:w-1/2">We build bridges between <span className="text-slate-500">companies and customers</span></h1>
                    <p className=" md:w-1/2">
                        To build software that gives
                        customer-facing teams at small- and
                        medium-sized businesses the ability
                        to create fruitful and enduring
                        relationships with customers.
                    </p>
                </div>
                <div>
                    <img src={togetherness} alt="Togetherness always" className='md:w-screen' />
                    <hr className=" border-black mt-16 mx-4 md:mx-20"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CompanyCustomers