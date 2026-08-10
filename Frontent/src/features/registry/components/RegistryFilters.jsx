import React from 'react'
import {
  Factory,
  Database,
  TreePine,
  WavesHorizontal,
  SunMedium
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const RegistryFilters = () => {
  return (
    <div className="w-full">

      <div className="flex flex-col gap-4 text-[#abc6b7] p-2">

        {/* Heading */}
        <div className="flex flex-col gap-1">

          <h1 className="text-xl text-[#10B981] font-bold">
            Filters
          </h1>

          <h2 className="font-semibold">
            Refine Registry View
          </h2>

        </div>


        {/* Filter Links */}
        <div className="flex flex-col gap-2">

          <NavLink
            to="#"
            className="flex items-center gap-2 hover:text-[#10B981] hover:bg-[#215342] rounded-xl p-2"
          >
            <Database size={20} />
            <h1>All Batches</h1>
          </NavLink>


          <NavLink
            to="#"
            className="flex items-center gap-2 hover:text-[#10B981] hover:bg-[#215342] rounded-xl p-2"
          >
            <TreePine size={20} />
            <h1>Reforestation</h1>
          </NavLink>


          <NavLink
            to="#"
            className="flex items-center gap-2 hover:text-[#10B981] hover:bg-[#215342] rounded-xl p-2"
          >
            <WavesHorizontal size={20} />
            <h1>Blue Carbon</h1>
          </NavLink>


          <NavLink
            to="#"
            className="flex items-center gap-2 hover:text-[#10B981] hover:bg-[#215342] rounded-xl p-2"
          >
            <SunMedium size={20} />
            <h1>Renewable</h1>
          </NavLink>


          <NavLink
            to="#"
            className="flex items-center gap-2 hover:text-[#10B981] hover:bg-[#215342] rounded-xl p-2"
          >
            <Factory size={20} />
            <h1>Methane</h1>
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default RegistryFilters