import React from "react"

import BPButton from "../atoms/Button/BPButton"

const NewsLetter = () => {
  return (
    <div className="center flex-col gap-4 bg-white py-12 text-customShade-dark">
      <h1 className="">Subscribe to our Newsletter</h1>
      <div className="fex-col flex w-3/5 gap-6 md:flex-row">
        <input
          type={"text"}
          placeholder="name"
          className="peer h-9 w-full rounded border border-gray-300 bg-white px-4 font-thin shadow-sm outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-customShade-gray focus:ring-1 focus:ring-black"
        />
        <input
          type={"email"}
          placeholder="email"
          className="peer h-9 w-full rounded border border-gray-300 bg-white px-4 font-thin shadow-sm outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-customShade-gray focus:ring-1 focus:ring-black"
        />
      </div>
      <BPButton>Subscribe</BPButton>
    </div>
  )
}

export default NewsLetter
