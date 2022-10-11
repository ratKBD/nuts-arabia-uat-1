import React from "react"

const Label = ({ label }: any) => {
  return (
    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">
      {label}
      <span className="text-red-600">*</span>
    </label>
  )
}

export default Label
