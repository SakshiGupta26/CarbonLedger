import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sprout, Wallet, Bell } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#0f1512] border-b border-[#3c4a42] px-6 py-4">

      
      <div className="flex items-center gap-2">
        <Sprout className="text-[#10B981]" size={28} />

        <h1 className="text-[#10B981] font-bold text-2xl">
          Carbon
        </h1>
      </div>

      <div className="flex items-center gap-6 text-[#bbcabf] font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-[#10B981]'
              : 'hover:text-[#10B981] transition-colors'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/registry"
          className={({ isActive }) =>
            isActive
              ? 'text-[#10B981]'
              : 'hover:text-[#10B981] transition-colors'
          }
        >
          Registry
        </NavLink>

        <NavLink
          to="/marketplace"
          className={({ isActive }) =>
            isActive
              ? 'text-[#10B981]'
              : 'hover:text-[#10B981] transition-colors'
          }
        >
          Marketplace
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? 'text-[#10B981]'
              : 'hover:text-[#10B981] transition-colors'
          }
        >
          Portfolio
        </NavLink>
      </div>

    
      <div className="flex items-center gap-4">

        <Bell
          className="text-[#dee4de] hover:text-[#10B981] cursor-pointer transition-colors"
          size={22}
        />

        <button
          className="flex items-center gap-2 bg-[#10B981] text-[#003824] rounded-2xl px-4 py-2 font-medium hover:bg-[#0ea774] transition-colors"
        >
          <Wallet size={20} />
          <span>Connect Wallet</span>
        </button>

      </div>

    </nav>
  )
}

export default Navbar