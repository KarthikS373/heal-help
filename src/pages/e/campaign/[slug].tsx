import React from "react"
import { useRouter } from "next/router"

import CampaignExtended from "../../../components/campaigns/CampaignExtended"

const Campaign = () => {
  const router = useRouter()

  const { slug, campaign } = router.query

  if (!campaign) {
    return <>No Campaign</>
  }

  const item = JSON.parse(campaign as string)

  return (
    <div className="center">
      <CampaignExtended
        state={{
          id: item.id || "",
          deadline: item.deadline || "",
          title: item.title || "",
          owner: item.owner || "",
          description: item.description || "",
          amountCollected: item.amountCollected || 0,
          target: item.target || 0,
          image: item.image || "",
          pId: item.pId || "",
        }}
      />
    </div>
  )
}

export default Campaign
