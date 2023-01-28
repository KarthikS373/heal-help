import React from "react"

interface InputProps {
  labelName: string
  placeholder: string
  inputType?: string
  isTextArea?: boolean
  value: any
  handleChange: any
}

const Input = ({
  labelName,
  placeholder,
  inputType = "text",
  isTextArea = false,
  value,
  handleChange,
}: InputProps) => {
  return (
    <label className="flex w-full flex-1 flex-col">
      {labelName && (
        <span className="font-epilogue mb-[10px] text-[14px] font-medium leading-[22px] text-[#808191]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="font-epilogue rounded-[10px] border-[1px] border-[#3a3a43] bg-transparent py-[15px] px-[15px] text-[14px] text-black outline-none placeholder:text-[#4b5264] sm:min-w-[300px] sm:px-[25px]"
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="font-epilogue rounded-[10px] border-[1px] border-[#3a3a43] bg-transparent py-[15px] px-[15px] text-[14px] text-black outline-none placeholder:text-[#4b5264] sm:min-w-[300px] sm:px-[25px]"
        />
      )}
    </label>
  )
}

export default Input
