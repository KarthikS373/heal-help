import React from "react"

import ContractCreation from "../../components/contract/ContractCreation"
import NavBar from "../../components/navbar/DashNavBar"
import SideBar from "../../components/sidebar/SideBar"

const ContractPage = () => {
  return (
    <div className="grid bg-customShade-gray text-customShade-dark">
      <NavBar />
      <ContractCreation />
    </div>
  )
}

export default ContractPage
