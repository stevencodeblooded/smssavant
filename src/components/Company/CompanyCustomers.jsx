import togetherness from '../../assets/togetherness.jpg'

const CompanyCustomers = () => {
  return (
    <div className=" bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 pt-28 pb-14">
                <div>
                    <h1 className="text-4xl font-bold leading-snug mb-10">We build bridges between <span className="text-slate-500">companies and customers</span></h1>
                    <p className="mb-6">
                        To build software that gives
                        customer-facing teams at small- and
                        medium-sized businesses the ability
                        to create fruitful and enduring
                        relationships with customers.
                    </p>
                    <img src={togetherness} alt="" />
                    <hr className=" border-black mt-16 mx-4"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CompanyCustomers