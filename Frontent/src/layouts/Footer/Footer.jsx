import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-[#0f1512] p-6 border border-[#3c4a42] max-w-full">
      
      <div className="flex flex-col gap-1">
        <h1 className="text-[#10B981] font-bold text-2xl">
          CarbonLedger
        </h1>

        <p className="text-[#bbcabf]">
          © 2026 CarbonLedger. Verified Carbon Credits on Blockchain.
        </p>
      </div>

      <div className="flex items-center gap-4 text-[#bbcabf] font-medium">
        <NavLink
          to="/terms"
          className="hover:text-[#10B981] transition-colors"
        >
          Terms of Service
        </NavLink>

        <NavLink
          to="/privacy"
          className="hover:text-[#10B981] transition-colors"
        >
          Privacy Policy
        </NavLink>

        <NavLink
          to="/whitepaper"
          className="hover:text-[#10B981] transition-colors"
        >
          Whitepaper
        </NavLink>

        <NavLink
          to="/documentation"
          className="hover:text-[#10B981] transition-colors"
        >
          Documentation
        </NavLink>

        <NavLink
          to="/support"
          className="hover:text-[#10B981] transition-colors"
        >
          Contact Support
        </NavLink>
      </div>

    </footer>
  )
}

export default Footer