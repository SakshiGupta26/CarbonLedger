import React from 'react'
import Table from '../../components/Table/Table'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tabs from '../../components/Tabs/Tabs'

const Portfolio = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between p-2'>
        <div className='flex flex-col gap-2'>
           <Tabs/>
          <h1 className='text-[#10B981] font-bold text-xl'>
            My Holdings
          </h1>

          <p className='text-[#bbcabf] font-semibold'>
            Manage your active carbon credit batches
          </p>
        </div>
        <Dropdown/>
        </div>
      <div className='flex justify-between gap-4 p-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <Table
        colums={[]}
        data={[]}
        size="md"
      />
    </div>
  )
}

export default Portfolio