import React, { useEffect, useState } from "react"

import ProfileCampaigns from "@/components/campaigns/ProfileCampaigns"
import { useWeb3Context } from "@/components/provider/Web3ContextProvider"

const CampaignPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])

  const { address, contract, getCampaigns } = useWeb3Context()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (contract) fetchCampaigns()
  }, [address, contract])

  return <ProfileCampaigns title="All Campaigns" isLoading={isLoading} campaigns={campaigns} />
}

export default CampaignPage
