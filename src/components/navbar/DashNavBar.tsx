import React, { HTMLAttributes } from "react"
import Image from "next/image"
import Link from "next/link"

export interface DashNavBarProps extends HTMLAttributes<HTMLDivElement> {
  address?: string
}

const DashNavBar = ({ className, address = "0x3ea73naooo39993hdn" }: DashNavBarProps) => {
  return (
    <nav className={"w-full bg-white px-24 py-8 text-black " + className}>
      <div className="flex flex-row items-center justify-between">
        <div className="h-min cursor-pointer">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="SmartSeal" width={160} height={160} />
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-col md:flex-row md:gap-10">
            <li>Contract</li>
            <li>Invoice</li>
            <li>Analytics</li>
            {/* <Link href={"/"}> */}
            <li className="group cursor-pointer rounded border border-customShade-blue px-4 hover:bg-customShade-blue hover:text-white">
              {address.slice(0, 3)}...{address.slice(-3)}
            </li>
            {/* </Link> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashNavBar
