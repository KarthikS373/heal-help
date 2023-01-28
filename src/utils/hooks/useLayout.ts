import * as React from "react"

const useLayout = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

export default useLayout
