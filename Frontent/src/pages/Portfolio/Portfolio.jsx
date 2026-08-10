import React from 'react'
import Table from '../../components/Table/Table'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tabs from '../../components/Tabs/Tabs'
import { NavLink } from 'react-router-dom'
import PortfolioHeader from '../../features/portfolio/components/PortfolioHeader'

const Portfolio = () => {

  const columns = [
  {
    key: 'project',
    label: 'Project',
  },
  {
    key: 'location',
    label: 'Location',
  },
  {
    key: 'credits',
    label: 'Credits',
  },
  {
    key: 'price',
    label: 'Price',
  },
]

const data = [
  {
    id: 1,
    project: 'Amazonian Reserve',
    location: 'Brazil',
    credits: '45,000 tCO₂e',
    price: '12.34 USDC',
  },
  {
    id: 2,
    project: 'Rainforest Protection',
    location: 'Colombia',
    credits: '32,500 tCO₂e',
    price: '10.80 USDC',
  },
  {
    id: 3,
    project: 'Solar Farm Project',
    location: 'India',
    credits: '18,750 tCO₂e',
    price: '8.95 USDC',
  },
  {
    id: 4,
    project: 'Forest Conservation',
    location: 'Indonesia',
    credits: '27,300 tCO₂e',
    price: '11.20 USDC',
  },
]
  return (
    <div className='flex flex-col'>
      <PortfolioHeader/>
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
      <div>
      <div className='flex justify-between p-4'>
        <h1
        className='text-2xl font-bold text-[#148e5f]'>Retirement History</h1>
        <NavLink
        className=' text-[#a1b3a6]'
        >View All</NavLink>
        
      </div>
      <Table
            columns={columns}
            data={data}
          />
        </div>
    </div>
  )
}

export default Portfolio