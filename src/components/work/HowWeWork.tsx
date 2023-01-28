import React from "react"

import WorkSections from "./WorkSections"

const workSections = [
  {
    id: 0,
    title: "Section 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
    ],
    image:
      "https://images.unsplash.com/photo-1674664799224-dd87403f5049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    title: "Section 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
    ],
    image:
      "https://images.unsplash.com/photo-1674664799224-dd87403f5049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Section 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi quae natus!",
    ],
    image:
      "https://images.unsplash.com/photo-1674664799224-dd87403f5049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
]

const HowWeWork = () => {
  return (
    <div className="center w-full flex-col bg-[#fefefef7] py-8 px-2 text-center text-black sm:px-32 md:px-52">
      {workSections.map((work, index) => {
        return (
          <WorkSections
            key={work.id}
            title={work.title}
            points={work.points}
            image={work.image}
            desc={work.desc}
            step={index + 1}
          />
        )
      })}
    </div>
  )
}

export default HowWeWork
