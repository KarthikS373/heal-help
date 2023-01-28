import React, { useEffect, useState } from "react"

import ProfileCampaigns from "../../components/campaigns/ProfileCampaigns"
import { useStateContext } from "../context"

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])

  const { address, contract, getUserCampaigns } = useStateContext()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getUserCampaigns()
    setCampaigns(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (contract) fetchCampaigns()
  }, [address, contract])

  return <ProfileCampaigns title="All Campaigns" isLoading={isLoading} campaigns={campaigns} />
}

export default ProfilePage
