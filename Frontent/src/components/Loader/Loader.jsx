import React from 'react'
import { LoaderCircle } from 'lucide-react'

const Loader = () => {
  return (
    <div className='bg-black flex items-center justify-center gap-2 min-h-screen min-w-full'>
      <LoaderCircle
      size={40}
        className='text-[#10B981] animate-spin'
      />

      <h1 className='text-[#bbcabf] text-2'>
        Loading
      </h1>
    </div>
  )
}

export default Loader