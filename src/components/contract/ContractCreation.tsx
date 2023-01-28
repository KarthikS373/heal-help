import React from "react"

import Button from "../atoms/Button/Button"
import Input from "../atoms/Input/Input"

const ContractCreation = () => {
  const handleSubmit = async (ev: { preventDefault: () => void }) => {
    ev.preventDefault()
  }

  return (
    <div className="top-0 right-0 min-h-screen w-screen rounded-2xl p-5 pt-10 md:pt-32">
      <div className="flex flex-col">
        <h2 className="text-primary mb-5 text-center text-2xl font-bold capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aspernatur?
        </h2>
        <p className="text-primary mb-2 text-2xl font-bold capitalize">Contract Info</p>
        <form onSubmit={handleSubmit}>
          <div className="rounded-lg border-2 p-3">
            <div>
              <div className="ticket-design ">
                <p className="mb-2 text-xl capitalize">Contract Image</p>
                <div
                  className="relative min-h-[250px] w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white"
                  style={{
                    // backgroundImage: `url('${ticketPreview}')`,
                    backgroundPosition: "center",
                  }}
                >
                  <Input
                    // onChange={(event) => {
                    //   if (event.target.files !== undefined && event.target.files !== null) {
                    //     setTicketPreview(URL.createObjectURL(event.target.files[0]))

                    //     setTicketDesign(event.target.files[0])
                    //   }
                    // }}
                    type="file"
                    accept="image/*"
                    name="ticket-design"
                    className="absolute top-0 h-[200px] w-full cursor-pointer opacity-0"
                  />
                </div>
                <p className="mt-3 text-sm italic text-gray-600/50">
                  For better quality ues 1200 * 630 pixel
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="">
                  <div className="mb-2">
                    <p className="mb-2">Seller</p>
                    <Input
                      placeholder="Seller Address*"
                      type="text"
                      className="w-full rounded-lg ring-1"
                      required
                    />
                  </div>
                  <div className="">
                    <p className="mb-2">Buyer</p>
                    <Input
                      placeholder="Buyer Address*"
                      type="text"
                      className="w-full rounded-lg ring-1"
                      required
                    />
                  </div>
                  <div className="mt-2 flex flex-row flex-wrap gap-2">
                    <div>
                      <p className="mb-2">Date</p>
                      <Input type="date" className="rounded-lg ring-1" />
                    </div>
                    <div>
                      <p className="mb-2">Date</p>
                      <Input type="date" className="rounded-lg ring-1" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <div className="mb-2">
                      <p className="mb-2">Title</p>
                      <Input
                        placeholder="Contract Title*"
                        type="text"
                        className="w-full rounded-lg ring-1"
                        required
                      />
                    </div>
                    <div className="">
                      <p className="mb-2">Description</p>
                      <textarea
                        placeholder="Contract description*"
                        className="h-[170px] w-full rounded-lg border bg-transparent p-4 outline-none ring-0 ring-[#19083D] transition duration-300 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            content=""
            type="submit"
            className="mt-4 rounded-lg bg-customShade-dark p-3 capitalize text-white"
          >
            Add to sales
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContractCreation
