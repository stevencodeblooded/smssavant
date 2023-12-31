import { Accordion } from "@ark-ui/react"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Faq = () => {
  return (
    <div className="bg-slate-100">
        <section className="max-w-5xl mx-auto">
            <div className="px-3 py-14">
                <div>
                    <h1 className="text-4xl font-bold leading-snug capitalize md:text-5xl mb-10">Frequently asked <span className="text-slate-500">questions</span></h1>
                    <hr className="border-black my-8" />
                    <div>
                      <Accordion.Root defaultValue={['How Does Yoora CRM Compare To The Competition?']} collapsible>
                        <Accordion.Item value="How Does Yoora CRM Compare To The Competition?">
                          <Accordion.ItemTrigger className="text-left w-full flex gap-2 justify-between">
                            <h2 className="text-lg font-semibold">How Does Yoora CRM Compare To The Competition?</h2>
                            <Accordion.ItemIndicator>
                              <FontAwesomeIcon icon={faPlus} />
                            </Accordion.ItemIndicator>
                          </Accordion.ItemTrigger>
                          <Accordion.ItemContent>
                            <div className="mt-4">
                              Yoora CRM offers the most affordable,
                              comprehensive platform to manage the
                              entire customer journey, from generating
                              leads, to closing deals and supporting
                              your customers. With a full suite of CRM,
                              sales enablement, marketing automation,
                              and help desk/customer support
                              capabilities, it s all you need to manage
                              the entire customer lifecycle.
                            </div>
                          </Accordion.ItemContent>
                        </Accordion.Item>

                        <hr className=" border-black my-6" />

                        <Accordion.Item value="Can I Change Plans Or Cancel My Subscription At Any Time?">
                          <Accordion.ItemTrigger className="text-left w-full flex gap-2 justify-between">
                            <h2 className="text-lg font-semibold">Can I Change Plans Or Cancel My Subscription At Any Time?</h2>
                            <Accordion.ItemIndicator>
                              <FontAwesomeIcon icon={faPlus} />
                            </Accordion.ItemIndicator>
                          </Accordion.ItemTrigger>
                          <Accordion.ItemContent>
                            <div className="mt-4">Change Plans Or Cancel My Subscription Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aperiam tempore mollitia inventore incidunt qui quas autem doloremque aut! Atque culpa consequuntur voluptates architecto in ullam ipsum expedita facilis!</div>
                          </Accordion.ItemContent>
                        </Accordion.Item>

                        <hr className=" border-black my-6" />

                        <Accordion.Item value="How Secure Is My Data With Yoora CRM?">
                          <Accordion.ItemTrigger className="text-left w-full flex gap-2 justify-between">
                            <h2 className="text-lg font-semibold">How Secure Is My Data With Yoora CRM?</h2>
                            <Accordion.ItemIndicator>
                              <FontAwesomeIcon icon={faPlus} />
                            </Accordion.ItemIndicator>
                          </Accordion.ItemTrigger>
                          <Accordion.ItemContent>
                            <div className="mt-4">How Secure Is My Data With Yoora CRM? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, accusamus nulla animi sint ipsa at amet modi culpa optio, qui numquam tenetur similique rem, laboriosam cupiditate. Perspiciatis consequatur praesentium atque?</div>
                          </Accordion.ItemContent>
                        </Accordion.Item>

                        <hr className=" border-black my-6" />

                        <Accordion.Item value="What Is The Uptime Guarantee?">
                          <Accordion.ItemTrigger className="text-left w-full flex gap-2 justify-between">
                            <h2 className="text-lg font-semibold">What Is The Uptime Guarantee?</h2>
                            <Accordion.ItemIndicator>
                              <FontAwesomeIcon icon={faPlus} />
                            </Accordion.ItemIndicator>
                          </Accordion.ItemTrigger>
                          <Accordion.ItemContent>
                            <div className="mt-4">What Is The Uptime Guarantee? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, accusamus nulla animi sint ipsa at amet modi culpa optio, qui numquam tenetur similique rem, laboriosam cupiditate. Perspiciatis consequatur praesentium atque?</div>
                          </Accordion.ItemContent>
                        </Accordion.Item>

                        <hr className=" border-black my-6" />

                      </Accordion.Root>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Faq