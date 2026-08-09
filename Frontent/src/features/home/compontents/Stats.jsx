import React from 'react'

const Stats = () => {
  return (
    <div className='bg-black px-10 py-8 border-y border-[#3c4a42]'>
      <div className='flex justify-between text-[#bbcabf] gap-4 text-sm font-medium'>
        <h1>TOTAL TONS RETIRED</h1>
        <h1>ACTIVE PROJECTS</h1>
        <h1>MARKET VOLUME (30D)</h1>
      </div>

      <div className='flex justify-between gap-4 text-2xl text-[#10B981] font-bold mt-2'>
        <h1>4.2M+</h1>
        <h1>1824</h1>
        <h1>$85.67M</h1>
      </div>
    </div>
  )
}

export default Stats;