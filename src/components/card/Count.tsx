import React from "react"

interface CountProps {
  title: string
  value: string | number
}

const Count = ({ title, value }: CountProps) => {
  return (
    <div className="flex w-[150px] flex-col items-center">
      <h4 className="font-epilogue w-full truncate rounded-t-[10px] bg-[#1c1c24] p-3 text-center text-[30px] font-bold text-white">
        {value}
      </h4>
      <p className="font-epilogue rouned-b-[10px] w-full bg-[#28282e] px-3 py-2 text-center text-[16px] font-normal text-[#808191]">
        {title}
      </p>
    </div>
  )
}

export default Count
