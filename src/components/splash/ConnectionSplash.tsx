import React from "react"

import PolkaDots from "../../assets/svg/polka-dots"

const ConnectionSplash = () => {
  return (
    <div className="relative w-full bg-gradient-to-bl from-customShade-purple to-customShade-blue md:col-span-2">
      <PolkaDots className="absolute -right-10 -top-10" />
      <PolkaDots className="absolute -left-10 -bottom-10" />
    </div>
  )
}

export default ConnectionSplash
