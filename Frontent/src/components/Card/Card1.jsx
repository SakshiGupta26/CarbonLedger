import React from 'react'

const Card1 = ({ icon: Icon, title, number, unit, message }) => {
  return (
    <div className="border-l-4 border-[#148e5f] p-4 border-b shadow-lg shadow-cyan-600/30  border-b-[#3c4a42] ">

      <div className="flex justify-between items-center">

        <h1 className="bg-[#123c2c] shadow-xl/30 shadow-cyan-500/50 border  text-[#c8dbce] text-sm px-3 py-1 rounded-2xl">
          {title}
        </h1>

        <Icon
          size={24}
          className="text-[#148e5f] "
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

        <p className="font-semibold text-[#bbcabf] mt-2">
          {message}
        </p>

      </div>

    </div>
  )
}

export default Card1