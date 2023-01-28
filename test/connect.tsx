import React from "react"

import Navbar from "../components/navbar/Navbar"
import ConnectionSplash from "../components/splash/ConnectionSplash"
import WalletModal from "../components/wallet/WalletModal"

const ConnectPage = () => {
  return (
    <div className="w-screen bg-customShade-gray md:h-screen md:overflow-hidden">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-3">
        <Navbar className="md:hidden" />
        <ConnectionSplash />
        <WalletModal />
      </div>
    </div>
  )
}

export default ConnectPage
