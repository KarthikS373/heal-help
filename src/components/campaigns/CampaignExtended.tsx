import React, { HTMLAttributes, useEffect, useState } from "react"
import { useRouter } from "next/router"

import { Campaign } from "@/types/Campain"

import calculateDaysLeft from "../../utils/functions/calculateDaysLeft"
import calculatePercent from "../../utils/functions/calculatePercentage"
import Count from "../card/Count"
import Loader from "../loader/Loader"
// import { CountBox, CustomButton, Loader } from "../components"
// import { useStateContext } from "../../components/provider/Web3ContextProvider"

interface CampaignExtendedProps extends HTMLAttributes<HTMLDivElement> {
  state: Campaign
}

const CampaignExtended = ({ state }: CampaignExtendedProps) => {
  const router = useRouter()
  // const { donate, getDonations, contract, address } = useStateContext()

  const [isLoading, setIsLoading] = useState(false)
  const [amount, setAmount] = useState("")
  const [donators, setDonators] = useState([])

  const remainingDays = calculateDaysLeft(state.deadline)

  const fetchDonators = async () => {
    // const data = await getDonations(state.pId)
    // setDonators(data)
  }

  // useEffect(() => {
  //   if (contract) fetchDonators()
  // }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true)

    // await donate(state.pId, amount)

    router.push("/")
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading && <Loader />}

      <div className="mt-10 flex w-full flex-col gap-[30px] md:flex-row">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="h-[410px] w-full rounded-xl object-cover"
          />
          <div className="relative mt-2 h-[5px] w-full bg-[#3a3a43]">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculatePercent(state.target, state.amountCollected)}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-between gap-[30px] md:w-[150px]">
          <Count title="Days Left" value={remainingDays} />
          <Count title={`Raised of ${state.target}`} value={state.amountCollected} />
          <Count title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-[2] flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue text-[18px] font-semibold uppercase text-white">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row flex-wrap items-center gap-[14px]">
              <div className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#2c2f32]">
                Sponsor
              </div>
              <div>
                <h4 className="font-epilogue break-all text-[14px] font-semibold text-white">
                  {state.owner}
                </h4>
                <p className="font-epilogue mt-[4px] text-[12px] font-normal text-[#808191]">
                  10 Campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue text-[18px] font-semibold uppercase text-white">Story</h4>

            <div className="mt-[20px]">
              <p className="font-epilogue text-justify text-[16px] font-normal leading-[26px] text-[#808191]">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue text-[18px] font-semibold uppercase text-white">
              Donators
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                <></>
              ) : (
                // donators.map((item, index) => (
                //   <div
                //     key={`${item.donator}-${index}`}
                //     className="flex items-center justify-between gap-4"
                //   >
                //     <p className="font-epilogue break-ll text-[16px] font-normal leading-[26px] text-[#b2b3bd]">
                //       {index + 1}. {item.donator}
                //     </p>
                //     <p className="font-epilogue break-ll text-[16px] font-normal leading-[26px] text-[#808191]">
                //       {item.donation}
                //     </p>
                //   </div>
                // ))
                <p className="font-epilogue text-justify text-[16px] font-normal leading-[26px] text-[#808191]">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue text-[18px] font-semibold uppercase text-white">Fund</h4>

          <div className="mt-[20px] flex flex-col rounded-[10px] bg-[#1c1c24] p-4">
            <p className="font-epilogue fount-medium text-center text-[20px] leading-[30px] text-[#808191]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="font-epilogue w-full rounded-[10px] border-[1px] border-[#3a3a43] bg-transparent py-[10px] px-[15px] text-[18px] leading-[30px] text-white outline-none placeholder:text-[#4b5264] sm:px-[20px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <div className="my-[20px] rounded-[10px] bg-[#13131a] p-4">
                <h4 className="font-epilogue text-[14px] font-semibold leading-[22px] text-white">
                  Back it because you believe in it.
                </h4>
                <p className="font-epilogue mt-[20px] font-normal leading-[22px] text-[#808191]">
                  Support the project for no reward, just because it speaks to you.
                </p>
              </div>

              <button
                type={"button"}
                className={`font-epilogue min-h-[52px] w-full rounded-[10px] bg-[#8c6dfd] px-4 text-[16px] font-semibold leading-[26px] text-white`}
                onClick={handleDonate}
              >
                Fund Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignExtended
