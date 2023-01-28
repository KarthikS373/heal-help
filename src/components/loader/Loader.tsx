import React from "react"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 flex h-screen flex-col items-center justify-center bg-[rgba(0,0,0,0.7)]">
      Loading
      <p className="font-epilogue mt-[20px] text-center text-[20px] font-bold text-white">
        Transaction is in progress <br /> Please wait...
      </p>
    </div>
  )
}

export default Loader
