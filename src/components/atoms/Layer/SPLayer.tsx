import React, { HTMLAttributes } from "react"

const SPLayer = ({ children, className, onClick }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      onClick={onClick}
      className={
        "rounded-xl bg-gradient-to-tr from-customShade-sky to-customShade-pink p-8 text-7xl text-white shadow-lg " +
        className
      }
    >
      {children}
    </span>
  )
}

export default SPLayer
