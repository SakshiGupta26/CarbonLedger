import React from 'react'
import {
  TriangleAlert,
  X,
  Lightbulb,
  Eye,
  LockKeyhole,
  Hourglass
} from 'lucide-react'

const ProblemSolution = () => {
  return (
    <div className="w-full p-8 flex flex-col items-center ">

      <div className="flex flex-col justify-center items-center text-center w-full max-w-3xl mb-10 px-4 p-8">

        <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          The Trust Deficit in Carbon
          <span className="block text-[#10B981]">
            Market.
          </span>
        </h1>

        <p className="text-[#bbcabf] mt-4 leading-7 text-sm sm:text-base">
          Legacy registries are opaque, fragmented, and prone to critical
          failures like double-counting. We engineered a definitive solution.
        </p>

      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">

        <div className="bg-[#171d1a] border border-[#3c4a42] rounded-2xl p-5 sm:p-6 shadow-xl/30 shadow-cyan-500/50  hover:border-red-500/40 transition-all duration-300">

          <div className="flex items-start gap-4">

            <TriangleAlert
              size={40}
              className="text-red-500 mt-1 shrink-0"
            />

            <div>
              <h2 className="text-white text-xl sm:text-2xl font-bold leading-snug">
                The Problem: Double-Counting
              </h2>

              <p className="text-[#bbcabf] mt-3 leading-6 text-sm sm:text-base">
                Without a unified ledger, a single carbon credit can be claimed
                by multiple entities. This opacity degrades market trust and
                stalls genuine climate action.
              </p>
            </div>

          </div>


          <div className="w-full bg-[#0f1512] border border-[#3c4a42] rounded-xl mt-6 p-4">

            <div className="flex justify-between items-center border-b border-[#3c4a42] pb-3">

              <p className="text-[#bbcabf] text-sm sm:text-base">
                Registry A: Claimed
              </p>

              <X
                className="text-red-500"
                size={20}
              />

            </div>

            <div className="flex justify-between items-center pt-3">

              <p className="text-[#bbcabf] text-sm sm:text-base">
                Registry B: Claimed
              </p>

              <X
                className="text-red-500"
                size={20}
              />

            </div>

          </div>

        </div>


        <div className="bg-[#123c2c] border border-[#1f6047] shadow-xl/30 shadow-cyan-500/50  text-white rounded-2xl p-5 sm:p-6 hover:border-[#10B981]/60 transition-all duration-300">

          <div className="flex items-start gap-4">

            <Lightbulb
              className="text-yellow-500 mt-1 shrink-0"
              size={40}
            />

            <div>
              <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                The Solution: Immutable Blockchain Ledger
              </h2>

              <p className="text-[#bbcabf] mt-3 leading-6 text-sm sm:text-base">
                CarbonLedger tokenizes verified assets onto a public, immutable
                ledger. Every retirement is permanently recorded, globally
                visible, and cryptographically impossible to duplicate.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">

            <div className="flex flex-col gap-2">

              <div className="flex items-center gap-2">
                <Eye
                  size={21}
                  className="text-[#10B981] shrink-0"
                />

                <h3 className="font-bold text-sm tracking-wide">
                  TRANSPARENT
                </h3>
              </div>

              <p className="text-[#bbcabf] text-sm leading-5">
                Real-time public auditability.
              </p>

            </div>


            <div className="flex flex-col gap-2">

              <div className="flex items-center gap-2">
                <LockKeyhole
                  size={21}
                  className="text-[#10B981] shrink-0"
                />

                <h3 className="font-bold text-sm tracking-wide">
                  IMMUTABLE
                </h3>
              </div>

              <p className="text-[#bbcabf] text-sm leading-5">
                Permanently recorded on-chain.
              </p>

            </div>


            <div className="flex flex-col gap-2">

              <div className="flex items-center gap-2">
                <Hourglass
                  size={21}
                  className="text-[#10B981] shrink-0"
                />

                <h3 className="font-bold text-sm tracking-wide">
                  EFFICIENT
                </h3>
              </div>

              <p className="text-[#bbcabf] text-sm leading-5">
                Fast and transparent verification.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProblemSolution