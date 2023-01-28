import type { AppProps } from "next/app"

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import {} from "@thirdweb-dev/sdk"

import { Web3ContextProvider } from "../components/provider/Web3ContextProvider"

import "../styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Web3ContextProvider>
        <Component {...pageProps} />
      </Web3ContextProvider>
    </ThirdwebProvider>
  )
}

export default App
