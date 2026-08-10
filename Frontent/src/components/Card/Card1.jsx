import React from 'react'

const Card1 = ({ icon: Icon, title, number, unit, message }) => {
  return (
    <div className="border-l-4 border-[#148e5f] p-4">

      <div className="flex justify-between items-center">

        <h1 className="bg-[#123c2c] text-[#c8dbce] text-sm px-3 py-1 rounded-2xl">
          {title}
        </h1>

        <Icon
          size={24}
          className="text-[#148e5f]"
        />

      </div>
      <div className="mt-4">

        <div className="flex items-baseline gap-3">

          <h1 className="text-2xl font-bold text-[#148e5f]">
            {number}
          </h1>

          <p className="text-[#86948a]">
            {unit}
          </p>

        </div>

        <p className="text-[#bbcabf] mt-2">
          {message}
        </p>

      </div>

    </div>
  )
}

export default Card1