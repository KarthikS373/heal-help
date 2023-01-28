import React, { HTMLAttributes } from "react"
import Image from "next/image"
import Link from "next/link"

const Navbar = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={"w-full bg-white px-24 py-8 text-black " + className}>
      <div className="flex flex-row justify-between items-center">
        <div className="h-min cursor-pointer">
          <Link href={'/'}>
            <Image src={"/logo.png"} alt="SmartSeal" width={160} height={160} />
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-col md:flex-row md:gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Escrow</li>
            <Link href={'/connect'}>
              <li className="group cursor-pointer rounded border border-customShade-blue px-4 hover:bg-customShade-blue hover:text-white">
                <span className="text-customShade-blue group-hover:text-white">Connect</span>
                <span className="mb-6 px-1 text-[#e5e5e5]"> | </span>
                <span>Live</span>
                <span className="ml-1 mb-[2px] inline-block h-2 w-2 rounded-full bg-[#85db77]" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
