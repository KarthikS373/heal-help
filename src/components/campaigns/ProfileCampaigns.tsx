import React from "react"
import { useRouter } from "next/router"

import FundCard from "./FundCard"

const ProfileCampaigns = ({ title, isLoading, campaigns }) => {
  const router = useRouter()

  const handleNavigate = (campaign) => {
    router.push(`/campaign-details/${campaign.title}`)
  }

  return (
    <div>
      <h1 className="font-epilogue text-left text-[18px] font-semibold text-white">
        {title} ({campaigns.length})
      </h1>

      <div className="mt-[20px] flex flex-wrap gap-[26px]">
        {isLoading && <span>Loading...</span>}

        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue text-[14px] font-semibold leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  )
}

export default ProfileCampaigns
