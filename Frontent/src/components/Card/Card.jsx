import React from 'react'
import { MapPin, ChartNoAxesCombined } from 'lucide-react'

const Card = () => {
  return (
    <div className="w-80 bg-[#0f1512] border border-[#3c4a42] rounded-xl overflow-hidden">

      {/* Image */}
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/509273583/photo/corsica-hiking-trail.webp?a=1&b=1&s=612x612&w=0&k=20&c=6lCttg3EHz5ixASs5r9YtD0X598vTVl1EJqWdjQ2yvE="
          alt="Amazonian Reserve"
          className="w-full h-48 object-cover"
        />

        <span className="absolute top-2 right-2 bg-[#123c2c] text-[#10B981] px-3 py-1 rounded-full text-sm font-medium">
          On-chain
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Project Name */}
        <div className="mb-6">
          <h2 className="text-white text-xl font-bold mb-2">
            Amazonian Reserve
          </h2>

          <div className="flex items-center gap-1 text-[#bbcabf]">
            <MapPin
              size={18}
              className="text-[#10B981]"
            />

            <span>Brazil</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-white">
            12.34
          </span>

          <span className="text-[#bbcabf] ml-2">
            USDC / Tonne
          </span>
        </div>

        {/* Available Volume */}
        <div className="flex justify-between items-end mb-6">

          <div className="flex flex-col gap-1">
            <h3 className="text-[#bbcabf] text-sm">
              Available Volume
            </h3>

            <p className="text-[#069b67] font-bold">
              45,000 tCO₂e
            </p>
          </div>

          <ChartNoAxesCombined
            size={28}
            className="text-[#069b67]"
          />

        </div>

        {/* Buy Button */}
        <button
          className="w-full bg-[#10B981] text-[#003824] font-bold py-2.5 rounded-lg hover:bg-[#0ea774] transition-colors"
        >
          Buy Credits
        </button>

      </div>

    </div>
  )
}

export default Card