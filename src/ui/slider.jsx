import React from 'react'

export function Slider({ value, max, step, className = '', onValueChange }) {
  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value)
    onValueChange([newValue])
  }

  return (
    <input
      type="range"
      min="0"
      max={max}
      step={step}
      value={value[0]}
      onChange={handleChange}
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 ${className}`}
    />
  )
}

