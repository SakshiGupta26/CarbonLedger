import React from 'react'
import Table from '../../components/Table/Table'

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

const Registry = () => {
  return (
    <div className="bg-[#0f1512] p-6">
      <Table
        colums={columns}
        data={data}
        size="md"
      />
    </div>
  )
}

export default Registry