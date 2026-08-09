import React from 'react'

const Tabs = () => {
  return (
    <div className='flex w-fit rounded border border-[#3c4a42] bg-[#171d1a] p-1'>

      <button
        className='rounded px-4 py-2 bg-[#10b981]/10 text-[#4edea3] text-sm font-medium transition'
      >
        Holdings
      </button>

      <button
        className='rounded px-4 py-2 text-[#bbcabf] text-sm font-normal transition hover:bg-[#252b28] hover:text-[#dee4de]'
      >
        Retirements
      </button>

      <button
        className='rounded px-4 py-2 text-[#bbcabf] text-sm font-normal transition hover:bg-[#252b28] hover:text-[#dee4de]'
      >
        Transactions
      </button>

    </div>
  )
}

export default Tabs