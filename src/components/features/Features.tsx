import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { MdOutlineDocumentScanner, MdSecurity, MdSupportAgent } from "react-icons/md"
import { RiSecurePaymentLine } from "react-icons/ri"

import SPLayer from "../atoms/Layer/SPLayer"

const features = [
  {
    id: 0,
    title: "Fast Transactions",
    excerpt: "The platform uses blockchain technology and smart contracts to ensure all transactions are secure and transparent.",
    description:
      "The platform uses blockchain technology and smart contracts to ensure that all transactions are secure and transparent.",
    icon: <BsFillLightningChargeFill />,
  },
  {
    id: 1,
    title: "Completely Decentralized",
    excerpt: "The platform utilizes the Filecoin network to store files, ensuring that they are stored in a secure and private manner. ",
    description:"The platform utilizes the Filecoin network to store files, ensuring that they are stored in a secure and private way.",
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 2,
    title: "Global reach: ",
    excerpt: "The platform allows for fundraising campaigns to be started and donations to be made from anywhere in the world reaching a global audience.",
    description:"The platform allows for fundraising campaigns to be started and donations to be made from anywhere in the world, making it accessible to a global audience.",
    icon: <MdOutlineDocumentScanner />,
  },
  {
    id: 3,
    title: "Enhanced Security",
    excerpt: "The platform uses blockchain technology and smart contracts to ensure that all transactions are secure..",
    description:
      "The platform uses blockchain technology and smart contracts to ensure that all transactions are secure and transparent.",
    icon: <MdSecurity />,
  },
  {
    id: 4,
    title: "24/7 Support",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, expl...",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, explicabo ipsa laboriosam illo pariatur corporis ducimus ad laudantium aut, repellendus quo. Porro, voluptatibus modi possimus deserunt laudantium adipisci excepturi soluta dignissimos!",
    icon: <MdSupportAgent />,
  },
]

const Features = () => {
  const [activeFeature, setActiveFeature] = React.useState(0)

  return (
    <div className="w-full bg-[#fefefef7] py-8 px-2 text-center text-black sm:px-16 md:px-72">
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.id}
                className={
                  "group flex cursor-pointer flex-row items-center justify-center gap-2 rounded-lg bg-white py-2 px-6 shadow ring-customShade-pink hover:ring-1 " +
                  (activeFeature === index ? "scale-y-110 shadow-customShade-sky" : "")
                }
                onMouseEnter={() => {
                  if (activeFeature !== index) {
                    setActiveFeature(index)
                  }
                }}
                onClick={() => {
                  if (activeFeature !== index) {
                    setActiveFeature(index)
                  }
                }}
              >
                <div className="text-left">
                  <h1 className="capitalize text-customShade-dark">{feature.title}</h1>
                  <p className="text-gray opacity-30">{feature.excerpt}</p>
                </div>
                <div>
                  <AiOutlineArrowRight
                    size={30}
                    className="group-hover:translate-x-2 group-hover:scale-110"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="center relative rounded-lg border border-[#eee] bg-white/50 py-16 shadow">
          <div className="center flex-col gap-4 text-center">
            <SPLayer>{features[activeFeature].icon}</SPLayer>
            <p className="line-clamp-2 w-2/3 text-customShade-dark">
              {features[activeFeature].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
