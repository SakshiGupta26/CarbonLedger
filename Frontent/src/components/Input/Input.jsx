import { Search } from 'lucide-react'
import React from 'react'

const Input = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2 bg-[#2f3431] border border-black rounded-lg px-3 py-2">
      <Search
        size={20}
        className="text-[#bbcabf]"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-white placeholder:text-[#6f7d74]"
      />
    </div>
  )
}

export default Input