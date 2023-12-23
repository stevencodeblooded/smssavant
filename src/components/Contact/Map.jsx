const Map = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div className=" flex flex-col gap-3">
                    <h1 className="text-lg font-semibold">Yoora Technologies</h1>
                    <p>
                        22023 Teuku Umar, Kartini, NG 95006, Indonesia
                    </p>

                    <div className="flex flex-col gap-20 md:flex-row md:gap-10 justify-between ">
                        <div className="md:w-2/3">
                            <iframe className=" max-w-full my-4"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.412911971795!2d36.86828322708606!3d-1.2602429058436144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1539e5710287%3A0xa026b65d35ad51c9!2sBest%20fit%20pool%20tables!5e0!3m2!1sen!2ske!4v1703167221137!5m2!1sen!2ske" width="600" 
                                height="450" 
                                // style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                        <div className=" md:w-1/3">
                            <div className=" border-l-black border-l-2 pl-3">
                                <h3 className=" font-semibold">General</h3>
                                <p><a href="mailto:hello@yoora.com">hello@yoora.com</a></p>
                            </div>
                            <div className=" border-l-black border-l-2 pl-3">
                                <h3 className=" font-semibold">Support</h3>
                                <p><a href="mailto:support@yoora.com">support@yoora.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Map
