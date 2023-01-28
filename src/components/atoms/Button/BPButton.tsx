import React, { HTMLAttributes } from "react"

const BPButton = ({ className, onClick, children }: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={
        "mt-4 rounded bg-gradient-to-br from-customShade-purple to-customShade-blue px-6 py-2 text-lg leading-5 text-white " +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default BPButton
