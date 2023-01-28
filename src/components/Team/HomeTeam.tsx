import React from "react"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

import TEAM_DATA from "../../data/team.data.json"

const HomeTeam = () => {
  return (
    <div className="center flex-col bg-[#fbfbfb] py-12 text-customShade-dark">
      <h1 className="">Team</h1>
      <hr className="mt-2 h-1 w-36 bg-black" />
      <div className="mt-3 grid w-3/5 grid-cols-1 text-center md:grid-cols-3">
        {TEAM_DATA.map((member, index) => {
          return (
            <div key={member.name} className="flex flex-col">
              <img src={member.image} className="m-auto h-44 w-44 rounded-xl" alt={member.name} />
              <h1>{member.name}</h1>
              <p className="text-sm text-gray-600 opacity-50">{member.bio}</p>
              <div className="center mt-2 flex-row gap-2 text-xl">
                <Link href={member.social.github}>
                  <AiFillLinkedin fill="#0a66c2" />
                </Link>
                <Link href={member.social.github}>
                  <AiFillGithub fill="#161b22" />
                </Link>
                <Link href={member.social.github}>
                  <AiOutlineTwitter fill="#1d9bf0" />
                </Link>
                <Link href={member.social.github}>
                  <AiOutlineInstagram fill="#f70163" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeTeam
