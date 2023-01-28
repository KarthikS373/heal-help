import React from "react"
import Image from "next/image"

import SPLayer from "../atoms/Layer/SPLayer"

export interface WorkSectionProps {
  title: string
  points: Array<string>
  image: string
  desc: string
  step: number
}

const WorkSections = ({ title, image, desc, points, step }: WorkSectionProps) => {
  const renderContent = () => (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-row gap-3">
        <SPLayer className="center h-20 w-20 p-0 text-2xl">{step}</SPLayer>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-customShade-dark">{title}</h1>
          <p className="text-gray text-left opacity-40">{desc}</p>
        </div>
      </div>
      <ul className="list-inside list-disc text-left text-gray-500/70">
        {points.map((point, index) => {
          return <li key={index}>{point}</li>
        })}
      </ul>
    </div>
  )

  const renderPreview = () => (
    <div className="">
      <img src={image} alt={title} />
    </div>
  )

  return (
    <div
      className={
        "center md: w-full  gap-6 md:flex-row md:gap-12 " +
        (step % 2 ? "mt-4 flex-col" : "mt-4 flex-col-reverse")
      }
    >
      {step % 2 ? (
        <>
          {renderContent()}
          {renderPreview()}
        </>
      ) : (
        <>
          {renderPreview()}
          {renderContent()}
        </>
      )}
    </div>
  )
}

export default WorkSections
