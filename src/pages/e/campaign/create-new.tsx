import React, { useState } from "react"
import { ethers } from "ethers"
import { useRouter } from "next/router"

import Input from "../../../components/input/Input"
import Loader from "../../../components/loader/Loader"
import { useWeb3Context } from "../../../components/provider/Web3ContextProvider"
import isImage from "../../../utils/functions/isImage"

const CreateCampaign = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const { createCampaign } = useWeb3Context()
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  })

  const handleFormFieldChange = (fieldName: string, e: any) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    isImage(form.image, async (exists: any) => {
      if (exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
        setIsLoading(false)

        setTimeout(() => router.push("/e/profile"), 3000)
      } else {
        alert("Provide valid image URL")
        setForm({ ...form, image: "" })
      }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-[10px] bg-[#FFFFFF] p-4 sm:p-10">
      {isLoading && <Loader />}
      <div className="flex items-center justify-center rounded-[10px] bg-[#376CFF] p-[16px] sm:min-w-[380px]">
        <h1 className="font-epilogue text-[18px] font-bold leading-[38px] text-white sm:text-[25px]">
          Start a Campaign
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-[65px] flex w-full flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <Input
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e: any) => handleFormFieldChange("name", e)}
          />
          <Input
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e: any) => handleFormFieldChange("title", e)}
          />
        </div>

        <Input
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e: any) => handleFormFieldChange("description", e)}
        />

        <div className="flex flex-wrap gap-[40px]">
          <Input
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e: any) => handleFormFieldChange("target", e)}
          />
          <Input
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e: any) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <Input
          labelName="Campaign image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e: any) => handleFormFieldChange("image", e)}
        />

        <div className="mt-[40px] flex items-center justify-center">
          <button
            type={"submit"}
            className={`font-epilogue min-h-[52px] rounded-[10px] bg-[#376CFF] px-4 text-[16px] font-semibold leading-[26px] text-white`}
          >
            New Campaign
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCampaign
