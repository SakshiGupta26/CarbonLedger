import React from 'react'
import { Cuboid } from 'lucide-react'
import Button from '../ui/Button/Button'

const EmptyState = ({ message, expore }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 p-8'>

      <Cuboid
        size={40}
        className='text-[#10B981]'
      />

      <h1 className='text-[#bbcabf]'>
        {message}
      </h1>

      <Button>
        Explore {expore}
      </Button>

    </div>
  )
}

export default EmptyState