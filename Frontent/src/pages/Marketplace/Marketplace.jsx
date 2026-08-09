import React from 'react'
import Input from '../../components/Input/Input'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'

const Marketplace = () => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[#10B981] font-bold text-xl'>
            Marketplace
          </h1>

          <p className='text-[#bbcabf] font-semibold'>
            Trade verified carbon credits securely on-chain
          </p>
        </div>

        <div className='flex gap-4 items-center'>
          <Input
            placeholder={"Search projects..."}
          />

          <Dropdown />
        </div>
      </div>

      <div>
        <Card />
      </div>
    </div>
  )
}

export default Marketplace