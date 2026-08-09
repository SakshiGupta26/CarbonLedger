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
    <div className='w-full bg-[#0f1512] px-10 py-16'>

      <div className='w-full mb-10'>
        <h1 className='text-white text-4xl font-bold leading-tight'>
          The Trust Deficit in Carbon
          <span className='block text-[#10B981]'>
            Market.
          </span>
        </h1>

        <p className='text-[#bbcabf] mt-4 leading-7'>
          Legacy registries are opaque, fragmented, and prone to critical
          failures like double-counting. We engineered a definitive solution.
        </p>
      </div>

      {/* Problem */}
      <div className='w-full bg-[#171d1a] border border-[#3c4a42] rounded-xl p-6'>

        <div className='flex items-start gap-4'>
          <TriangleAlert
            size={44}
            className='text-red-500 mt-1'
          />

          <div>
            <h1 className='text-white text-2xl font-bold'>
              The Problem:
              Double-Counting
            </h1>

            <p className='text-[#bbcabf] mt-3 leading-6'>
              Without a unified ledger, a single carbon credit can be claimed
              by multiple entities. This opacity degrades market trust and
              stalls genuine climate action.
            </p>
          </div>
        </div>

        <div className='w-full bg-[#0f1512] border border-[#3c4a42] rounded-lg mt-6 p-4'>

          <div className='flex justify-between items-center border-b border-[#3c4a42] pb-3'>
            <h1 className='text-[#bbcabf]'>
              Registry A: Claimed
            </h1>

            <X
              className='text-red-500'
              size={20}
            />
          </div>

          <div className='flex justify-between items-center pt-3'>
            <h1 className='text-[#bbcabf]'>
              Registry B: Claimed
            </h1>

            <X
              className='text-red-500'
              size={20}
            />
          </div>

        </div>

      </div>

      <div className='bg-[#123c2c] text-white mt-6 rounded-xl p-6'>

        <div className='flex items-start gap-4'>

          <Lightbulb
            className='text-yellow-500'
            size={44}
          />

          <div>
            <h1 className='text-2xl font-bold'>
              The Solution: Immutable Blockchain Ledger
            </h1>

            <p className='text-[#bbcabf] mt-2 leading-6'>
              CarbonLedger tokenizes verified assets onto a public, immutable
              ledger. Every retirement is permanently recorded, globally
              visible, and cryptographically impossible to duplicate.
            </p>
          </div>

        </div>

        <div className='flex justify-between gap-6 mt-8'>

          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Eye
                size={22}
                className='text-[#10B981]'
              />

              <h1 className='font-bold'>
                TRANSPARENT
              </h1>
            </div>

            <p className='text-[#bbcabf]'>
              Real-time public auditability.
            </p>
          </div>

          {/* Immutable */}
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <LockKeyhole
                size={22}
                className='text-[#10B981]'
              />

              <h1 className='font-bold'>
                IMMUTABLE
              </h1>
            </div>

            <p className='text-[#bbcabf]'>
              Permanently recorded on-chain.
            </p>
          </div>

          {/* Efficient */}
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Hourglass
                size={22}
                className='text-[#10B981]'
              />

              <h1 className='font-bold'>
                EFFICIENT
              </h1>
            </div>

            <p className='text-[#bbcabf]'>
              Fast and transparent verification.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProblemSolution