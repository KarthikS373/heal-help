// import React, { createContext, HTMLAttributes, useContext } from "react"
// import { ethers } from "ethers"

// import { useAddress, useContract, useContractWrite, useMetamask } from "@thirdweb-dev/react"

// const Web3Context = createContext()

// // interface Campaign {
// //   owner: string
// //   title: string
// //   description: string
// //   target: string
// //   amountCollected: string
// //   deadline: string
// //   image: string
// // }

// export const Web3ContextProvider = ({ children }) => {
//   const { contract } = useContract("")

//   const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaign")

//   const address = useAddress()
//   const connect = useMetamask()

//   const publishCampaign = async (form) => {
//     try {
//       const data = await createCampaign([
//         address,
//         form.title,
//         form.description,
//         form.target,
//         new Date(form.deadline).getTime(),
//         form.image,
//       ])

//       console.log("contract call success", data)
//     } catch (error) {
//       console.log("contract call failure", error)
//     }
//   }

//   const getCampaigns = async () => {
//     if (!contract) return

//     const campaigns = await contract.call("getCampaigns")

//     const parsedCampaings = campaigns.map((campaign, donationID) => ({
//       owner: campaign.owner,
//       title: campaign.title,
//       description: campaign.description,
//       target: ethers.utils.formatEther(campaign.target.toString()),
//       deadline: campaign.deadline,
//       amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
//       image: campaign.image,
//       pId: donationID,
//     }))

//     return parsedCampaings
//   }

//   const getUserCampaigns = async () => {
//     const allCampaigns = await getCampaigns()

//     const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address)

//     return filteredCampaigns
//   }

//   const donate = async (donationID, amount) => {
//     if (!contract) return

//     const data = await contract.call("donateToCampaign", donationID, {
//       value: ethers.utils.parseEther(amount),
//     })

//     return data
//   }

//   const getDonations = async (donationID) => {
//     if (!contract) return

//     const donations = await contract.call("getDonators", donationID)
//     const numberOfDonations = donations[0].length

//     const parsedDonations = []

//     for (let i = 0; i < numberOfDonations; i++) {
//       parsedDonations.push({
//         donator: donations[0][i],
//         donation: ethers.utils.formatEther(donations[1][i].toString()),
//       })
//     }

//     return parsedDonations
//   }

//   return (
//     <Web3Context.Provider
//       value={{
//         address,
//         contract,
//         connect,
//         createCampaign: publishCampaign,
//         getCampaigns,
//         getUserCampaigns,
//         donate,
//         getDonations,
//       }}
//     >
//       {children}
//     </Web3Context.Provider>
//   )
// }

// export const useStateContext = () => useContext(Web3Context)
