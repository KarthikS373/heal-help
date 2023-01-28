import React from "react"
import { useRouter } from "next/router"

import CampaignExtended from "../../../components/campaigns/CampaignExtended"

const Campaign = () => {
  const router = useRouter()

  const { slug } = router.query

  return (
    <div className="center">
      <CampaignExtended
        state={{
          id: "1",
          deadline: "25-01-2024",
          title: "",
          owner: "",
          description: "",
          amountCollected: 100,
          target: 1000,
          image: "",
          pId: "",
        }}
      />
    </div>
  )
}

export default Campaign
