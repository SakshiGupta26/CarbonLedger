import React from 'react'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Button from '../../../components/ui/Button/Button'
import {
  CalendarDays,
  MapPin,
  FolderBookmark
} from 'lucide-react'

const GlobalRegistry = () => {
  console.log("ewdfnfoj")

  return (
    <div className="w-full ">

    
      <div className="mb-8 p-4 bg-[#171d1a]">

        <div className="flex items-center gap-2 mb-3">

          <div className="w-2 h-2 rounded-full bg-[#10B981]" />

          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-wider">
            Global Registry
          </span>

        </div>

        <h1 className="text-white text-4xl font-bold leading-tight">
          Verified Carbon Credits
        </h1>

        <p className="text-[#bbcabf] mt-3 leading-7">
          Transparent, verifiable, and immutable ledger of all verified
          carbon credits on the network.
        </p>

      <div className="bg-black border border-[#3c4a42] m-6 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-10 h-10 rounded-lg bg-[#123c2c] flex items-center justify-center">
            <FolderBookmark
              size={21}
              className="text-[#10B981]"
            />
          </div>

          <div className=''>
            <h2 className="text-white font-semibold">
              Registry Filters
            </h2>
            <p className="text-[#7f9187] text-sm">
              Filter verified credit batches
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-between items-center gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin
                size={17}
                className="text-[#10B981]"
              />
              <label className="text-[#bbcabf] text-sm font-medium">
                Location
              </label>
            </div>
            <Dropdown />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FolderBookmark
                size={17}
                className="text-[#10B981]"
              />
              <label className="text-[#bbcabf] text-sm font-medium">
                Project Type
              </label>
            </div>
            <Dropdown />
          </div>
          <div className="flex flex-col gap-2">

            <div className="flex items-center gap-2">

              <CalendarDays
                size={17}
                className="text-[#10B981]"
              />

              <label className="text-[#bbcabf] text-sm font-medium">
                Verification Date
              </label>

            </div>

            <Dropdown />

          </div>
          <div className="flex justify-end mt-6 pt-5">

          <Button button="Apply "
           />

        </div>
        </div>
        </div>

      </div>

    </div>
  )
}

export default GlobalRegistry