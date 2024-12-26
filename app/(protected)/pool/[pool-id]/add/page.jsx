'use client'

import PoolAdd from '@/components/pool-add'


const AddPoolPage = () => {
  return (
    <div className="flex flex-col w-full px-8 gap-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Add Applicants</h1>
      <PoolAdd />
    </div>
  )
}

export default AddPoolPage;