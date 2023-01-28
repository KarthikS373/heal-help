import React from "react"
import { BsFileMedical } from "react-icons/bs"

const causes = [
  {
    id: 0,
    title: "medical",
    icon: <BsFileMedical />,
  },
  {
    id: 1,
    title: "medical",
    icon: <BsFileMedical />,
  },
  {
    id: 2,
    title: "medical",
    icon: <BsFileMedical />,
  },
  {
    id: 3,
    title: "medical",
    icon: <BsFileMedical />,
  },
  {
    id: 4,
    title: "medical",
    icon: <BsFileMedical />,
  },
]

const ReasonToFund = () => {
  return (
    <div className="center flex-col bg-[#f7f7f7] text-customShade-dark">
      <h1 className="font-semibold">Causes you can raise funds for</h1>
      <p className="m-auto w-full p-4 text-center md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit inventore cum est
        nam suscipit saepe architecto libero minima dolorem, tempore reiciendis, non corrupti animi
        aliquid. Officia quaerat, dolores natus maxime facere nam voluptas ullam.
      </p>
      <div className="center w-full flex-row flex-wrap gap-4 p-4 py-12 md:w-2/3 md:gap-6">
        {causes.map((cause, index) => {
          return (
            <div
              key={cause.id}
              className="center flex-col gap-3 rounded bg-gradient-to-br from-customShade-purple to-customShade-blue py-8 px-12 text-white shadow-lg"
            >
              <span className="text-3xl">{cause.icon}</span>
              <h3 className="capitalize">{cause.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReasonToFund
