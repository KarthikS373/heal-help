import React from "react"

const Hero = () => {
  return (
    <div className="center w-full flex-col bg-gradient-to-r from-[#ffffff] to-[#fefefef7] py-8 px-2 text-center text-black sm:px-32 md:px-96">
      <h1 className="text-4xl font-bold tracking-wide text-customShade-dark lg:text-5xl">
        Smart Contracts managed{" "}
        <span className="bg-gradient-to-r from-customShade-purple to-customShade-blue bg-clip-text text-transparent">
          something here
        </span>
      </h1>
      <p className="mt-2 text-[#96969696]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto saepe maxime
        quia veritatis accusantium ex molestiae. Eius at doloremque eaque unde pariatur voluptates,
        laudantium accusantium commodi neque nulla inventore? Saepe quae nam rem pariatur!
      </p>
      <button className="mt-4 rounded bg-gradient-to-br from-customShade-purple to-customShade-blue px-6 py-2 text-lg leading-5 text-white">
        Get Started
      </button>
    </div>
  )
}

export default Hero
