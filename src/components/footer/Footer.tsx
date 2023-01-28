import React from "react"
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] px-36 py-16">
      <div className="grid grid-cols-4">
        <span>Logo</span>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-md">Heading</h3>
            <ul>
              <li>Menu</li>
              <li>Menu</li>
              <li>Menu</li>
            </ul>
          </div>
          <div>
            <h3>Heading</h3>
            <ul>
              <li>Menu</li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h3>Heading</h3>
            <ul>
              <li>Menu</li>
              <li>Menu</li>
            </ul>
          </div>
          <div>
            <h3>Heading</h3>
            <ul>
              <li>Menu</li>
              <li>Menu</li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <address>
            Astralis, Indian Institute of Information Technology, Lucknow
            <br />
            Uttar Pradesh - 226002
          </address>
          <p>For any more queries please write us on test@test.com</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-between md:flex-row">
        <div className="flex flex-row gap-2">
          <AiFillLinkedin size={22} fill="#f6fcff" className="cursor-pointer" />
          <AiFillTwitterSquare size={22} fill="#f6fcff" className="cursor-pointer" />
          <AiFillInstagram size={22} fill="#f6fcff" className="cursor-pointer" />
        </div>
        <span className="text-sm text-customShade-gray opacity-75">
          Copyright ©2023 Astralis. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
