import React from "react"
import Image from "next/image"

import wallets from "../../data/wallets.data"

const WalletModal = () => {
  return (
    <div className="center flex-col items-start pl-6 text-customShade-dark">
      <h1 className="text-left">Connect Wallet</h1>
      <p>Choose your provider</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {wallets.map((wallet, index) => {
          return (
            <div className="flex justify-center" key={wallet.id}>
              <div className="flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-lg bg-[#4747472b] p-4 hover:border active:border">
                <div className="flex w-full flex-col items-center gap-4 py-6">
                  <div>
                    <Image src={wallet.logo} alt={wallet.name} width={45} />
                  </div>
                  <h3>{wallet.name}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WalletModal
