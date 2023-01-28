import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { MdOutlineDocumentScanner, MdSecurity, MdSupportAgent } from "react-icons/md"
import { RiSecurePaymentLine } from "react-icons/ri"

import SPLayer from "../atoms/Layer/SPLayer"

const features = [
  {
    id: 0,
    title: "feature 1",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing...",
    description:
      "0 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, explicabo ipsa laboriosam illo pariatur corporis ducimus ad laudantium aut, repellendus quo. Porro, voluptatibus modi possimus deserunt laudantium adipisci excepturi soluta dignissimos!",
    icon: <BsFillLightningChargeFill />,
  },
  {
    id: 1,
    title: "feature 2",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing...",
    description:
      "1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, explicabo ipsa laboriosam illo pariatur corporis ducimus ad laudantium aut, repellendus quo. Porro, voluptatibus modi possimus deserunt laudantium adipisci excepturi soluta dignissimos!",
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 2,
    title: "feature 3",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing...",
    description:
      "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, explicabo ipsa laboriosam illo pariatur corporis ducimus ad laudantium aut, repellendus quo. Porro, voluptatibus modi possimus deserunt laudantium adipisci excepturi soluta dignissimos!",
    icon: <MdOutlineDocumentScanner />,
  },
  {
    id: 3,
    title: "feature 4",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing...",
    description:
      "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, explicabo ipsa laboriosam illo pariatur corporis ducimus ad laudantium aut, repellendus quo. Porro, voluptatibus modi possimus deserunt laudantium adipisci excepturi soluta dignissimos!",
    icon: <MdSecurity />,
  },
  {
    id: 4,
    title: "feature 5",
    excerpt: "Lorem ipsum dolor sit, amet consectetur adipisicing...",
    description:
      "5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, odit optio. Optio quam, explicabo ipsa laboriosam illo pariatur corporis ducimus ad laudantium aut, repellendus quo. Porro, voluptatibus modi possimus deserunt laudantium adipisci excepturi soluta dignissimos!",
    icon: <MdSupportAgent />,
  },
]

const Features = () => {
  const [activeFeature, setActiveFeature] = React.useState(0)

  return (
    <div className="w-full bg-gradient-to-r from-[#fefefef7] to-[#ffffff] py-8 px-2 text-center text-black sm:px-16 md:px-72">
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
        <div className="center relative rounded-lg border border-[#eee] py-16 shadow">
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
