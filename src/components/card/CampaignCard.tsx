import React, { DOMAttributes, HTMLAttributes } from "react"

import calculateDaysLeft from "../../utils/functions/calculateDaysLeft"

interface CampaignCardProps extends HTMLAttributes<HTMLDivElement> {
  owner: string
  title: string
  description: string
  target: string
  amountCollected: string
  deadline: string
  image: string
}

const CampaignCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  onClick,
}: CampaignCardProps) => {
  const remainingDays = calculateDaysLeft(deadline)

  return (
    <div
      className="w-full cursor-pointer rounded-[15px] bg-[#1c1c24] sm:w-[288px]"
      onClick={onClick}
    >
      <img src={image} alt="fund" className="h-[158px] w-full rounded-[15px] object-cover" />

      <div className="flex flex-col p-4">
        <div className="mb-[18px] flex flex-row items-center">
          Tags
          <p className="font-epilogue ml-[12px] mt-[2px] text-[12px] font-medium text-[#808191]">
            Education
          </p>
        </div>

        <div className="block">
          <h3 className="font-epilogue truncate text-left text-[16px] font-semibold leading-[26px] text-white">
            {title}
          </h3>
          <p className="font-epilogue mt-[5px] truncate text-left font-normal leading-[18px] text-[#808191]">
            {description}
          </p>
        </div>

        <div className="mt-[15px] flex flex-wrap justify-between gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue text-[14px] font-semibold leading-[22px] text-[#b2b3bd]">
              {amountCollected}
            </h4>
            <p className="font-epilogue mt-[3px] truncate text-[12px] font-normal leading-[18px] text-[#808191] sm:max-w-[120px]">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue text-[14px] font-semibold leading-[22px] text-[#b2b3bd]">
              {remainingDays}
            </h4>
            <p className="font-epilogue mt-[3px] truncate text-[12px] font-normal leading-[18px] text-[#808191] sm:max-w-[120px]">
              Days Left
            </p>
          </div>
        </div>

        <div className="mt-[20px] flex items-center gap-[12px]">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#13131a]">
            Payment
          </div>
          <p className="font-epilogue flex-1 truncate text-[12px] font-normal text-[#808191]">
            by <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard
