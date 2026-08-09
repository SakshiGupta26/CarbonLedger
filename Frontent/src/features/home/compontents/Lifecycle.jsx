import React from 'react'
import {
  Braces,
  ArrowRightLeft,
  BadgeCheck
} from 'lucide-react'

const Lifecycle = () => {
  return (
    <div className='bg-[#0f1512] text-white px-10 py-12'>

      <h1 className='text-3xl font-bold text-center mb-10'>
        The Lifecycle of a Digital Credit
      </h1>

      <div className='flex justify-between gap-10'>

        {/* Tokenize */}
        <div className='flex-1 flex flex-col items-center text-center gap-3'>

          <div className='w-16 h-16 flex items-center justify-center bg-[#171d1a] text-[#10B981] rounded-xl border border-[#3c4a42] hover:bg-[#10B981] hover:text-[#0f1512] transition'>
            <Braces size={28} />
          </div>

          <h2 className='font-semibold text-lg'>
            1. Tokenize
          </h2>

          <p className='text-[#bbcabf] max-w-xs leading-6'>
            Verified carbon assets are converted into secure digital
            credits and recorded on the blockchain.
          </p>

        </div>

        <div className='flex-1 flex flex-col items-center text-center gap-3'>

          <div className='w-16 h-16 flex items-center justify-center bg-[#171d1a] text-[#10B981] rounded-xl border border-[#3c4a42] hover:bg-[#10B981] hover:text-[#0f1512] transition'>
            <ArrowRightLeft size={28} />
          </div>

          <h2 className='font-semibold text-lg'>
            2. Trade
          </h2>

          <p className='text-[#bbcabf] max-w-xs leading-6'>
            Buyers and sellers can trade verified carbon credits
            transparently through the marketplace.
          </p>

        </div>

        <div className='flex-1 flex flex-col items-center text-center gap-3'>

          <div className='w-16 h-16 flex items-center justify-center bg-[#171d1a] text-[#10B981] rounded-xl border border-[#3c4a42] hover:bg-[#10B981] hover:text-[#0f1512] transition'>
            <BadgeCheck size={28} />
          </div>

          <h2 className='font-semibold text-lg'>
            3. Retire
          </h2>

          <p className='text-[#bbcabf] max-w-xs leading-6'>
            Credits are permanently retired with an immutable
            on-chain record proving their environmental impact.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Lifecycle