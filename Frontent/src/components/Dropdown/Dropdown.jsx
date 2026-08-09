import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <select className='bg-[#0f1512] border border-[#3c4a42] text-[#bbcabf] rounded-lg p-2 outline-none'>
            <option value=''>Filter</option>
            <option value='price'>Price</option>
            <option value='volume'>Volume</option>
            <option value='location'>Location</option>
        </select>
    </div>
  )
}

export default Dropdown
