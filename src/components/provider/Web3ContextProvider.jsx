import React, { createContext, useContext } from "react"
import { ethers } from "ethers"

import { useAddress, useContract, useContractWrite, useMetamask } from "@thirdweb-dev/react"

const Web3Context = createContext()

export const Web3ContextProvider = ({ children }) => {
  const { contract } = useContract("0x6aDb9742BA77970012389F16f4a7ba9bc71889Cb")

  const { mutateAsync: createCampaign } = useContractWrite(contract, "addCampaign")

  const address = useAddress()
  const connect = useMetamask()

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image,
      ])

      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const getCampaigns = async () => {
    const campaigns = await contract.call("listCampaigns")

    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }))

    return parsedCampaings
  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns()

    const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address)

    return filteredCampaigns
  }

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", pId, {
      value: ethers.utils.parseEther(amount),
    })
    return data
  }

  const getDonations = async (pId) => {
    const donations = await contract.call("listDonators", pId)
    const numberOfDonations = donations[0].length

    const parsedDonations = []

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      })
    }

    return parsedDonations
  }

  return (
    <Web3Context.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3Context = () => useContext(Web3Context)
