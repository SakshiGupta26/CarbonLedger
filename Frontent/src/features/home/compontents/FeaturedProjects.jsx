import React from 'react'
import Card from '../../../components/Card/Card'
import { ArrowRight } from 'lucide-react'

const FeaturedProjects = () => {
  return (
    <div className='text-white bg-[#0f1512] px-10 py-12 border-b border-[#3c4a42]'>

      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='font-bold text-2xl'>
            Featured Verified Projects
          </h1>

          <p className='text-[#bbcabf] mt-2'>
            High-integrity carbon assets available for immediate retirement.
          </p>
        </div>

        <h1 className='flex text-sm gap-1 items-center text-[#239d6e] font-semibold cursor-pointer hover:text-[#10B981] transition'>
          VIEW ALL REGISTRY
          <ArrowRight size={18} />
        </h1>
      </div>

      <div className='flex gap-6'>
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default FeaturedProjects