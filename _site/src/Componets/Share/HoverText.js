import React from 'react'

const HoverText = ({displayText,active}) => {
  return (
    <>
      <div className="flex items-center justify-start cursor-pointer">
        <div
          className={`${
            active ? "text-white" : "text-gray-400"} 
              font-semibold hover:text-white hover:text-18`}
        >
          {displayText}
        </div>
      </div>
    </>
  )
}

export default HoverText
