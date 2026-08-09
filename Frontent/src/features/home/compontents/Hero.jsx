import React from 'react'
import { CircleDot, Sprout } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex justify-between items-center bg-[#0f1512] px-10 py-20'>

      <div className='flex flex-col gap-6'>

        <div className='flex items-center gap-2 bg-[#123c2c] px-4 py-2 rounded-full w-fit'>
          <CircleDot
            size={16}
            className='text-[#10B981]'
          />

          <p className='text-[#10B981] text-sm font-bold tracking-wider'>
            INSTITUTIONAL GRADE VERIFICATION
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='text-white text-5xl font-bold'>
            Decentralized
          </h1>

          <h1 className='text-[#10B981] text-5xl font-bold'>
            Carbon Transparency.
          </h1>
        </div>

        <p className='text-[#bbcabf] text-lg max-w-2xl leading-7'>
          The definitive blockchain registry for verifiable environmental assets.
          We eliminate double-counting through precise, immutable data structures
          designed for climate-conscious organizations.
        </p>

        <div className='flex gap-4 mt-3'>

          <NavLink
          to="/registry"
            className='bg-[#10B981] text-[#003824] font-bold p-2 px-4 rounded-xl'
          >
            Explore Registry
          </NavLink>

          <NavLink
            className='bg-[#123c2c] text-white p-2 px-4 rounded-xl'
          >
            Read Whitepaper
          </NavLink>

        </div>

      </div>

      <div>
        <Sprout
          size={400}
          className='text-[#10B981]'
        />
      </div>

    </div>
  )
}

export default Hero