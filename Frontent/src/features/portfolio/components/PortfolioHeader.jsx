import React from 'react'
import Card1 from '../../../components/Card/Card1'

import {
  Trees,
  Wallet,
  Landmark,
  BadgeCheck,
  Copy,
  User,
  Dot
} from 'lucide-react'

const PortfolioHeader = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-2">

      <div className="bg-[#171d1a] shadow-xl/30 shadow-cyan-500/50  border border-[#3c4a42] rounded-xl p-6">

        <div className="flex flex-col  items-center gap-5">

          <div className="w-40 h-40  bg-[#123c2c] rounded-full flex items-center justify-center">

            <User
              size={90}
              className="text-[#10B981]"
            />

          </div>

          <div className="flex flex-col items-center text-center">

            <h1 className="text-white text-2xl font-bold">
              User Name
            </h1>

            <p className="text-[#86948a] mt-1">
              Corporate Sustainable Officer
            </p>

          </div>

          <div className="w-full flex items-center justify-between bg-[#0f1512] border border-[#3c4a42] rounded-lg px-4 py-3">

            <div className="flex items-center gap-4">

              <Dot
                size={30}
                className="text-[#10B981]"
              />

              <span className="w-1/2 text-[#bbcabf]">
                0x7F...3B92
              </span>

            </div>
            <Copy
              size={17}
              className="text-[#86948a]"
            />
          </div>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-6">

        <Card1
          icon={Trees}
          title="TOTAL OFFSET"
          number="123,450"
          unit="Tons"
          message="+15% this quarter"
        />


        <Card1
          icon={Landmark}
          title="VALUE OF HOLDINGS"
          number="453,450"
          unit="USDC"
          message="Verified on-chain"
        />

        <Card1
          icon={BadgeCheck}
          title="ACTIVE RETIREMENTS"
          number="45"
          unit="Batches"
          message="Across 13 projects"
        />

        <Card1
          icon={Wallet}
          title="WALLET BALANCE"
          number="12.450"
          unit="ETH"
          message="Available liquidity"
        />

      </div>

    </div>
  )
}

export default PortfolioHeader