import React from 'react'
import Table from '../../components/Table/Table'
import RegistryFilters from '../../features/registry/components/RegistryFilters'
import Input from '../../components/Input/Input'
import GlobalRegistry from '../../features/registry/components/GlobalRegistry'

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
    <div className="flex w-full">

      {/* Sidebar */}
      <aside className="w-56 shrink-0 px-5 py-8 border-r border-[#3c4a42] min-h-screen">
        <RegistryFilters />
      </aside>


      {/* Main Content */}
      <main className="flex-1 px-10 py-8">

        {/* Search */}
        <div className="w-full mb-10">
          <Input placeholder="Search registry..." />
        </div>


        {/* Global Registry */}
        <div className="w-full">
          <GlobalRegistry />
        </div>


        {/* Table */}
        <div className="w-full mt-8">

          <Table
            columns={columns}
            data={data}
          />

        </div>

      </main>

    </div>
  )
}

export default Registry