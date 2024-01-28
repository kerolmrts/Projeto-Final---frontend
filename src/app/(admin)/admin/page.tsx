import React from 'react'
import { JobTable } from '@/components/JobTable'

const Jobs = () => {
   

  return (
    <main className="mx-10 w-full text-2xl gap-2 my-10">
      Vagas
     <JobTable />
    </main>
  )
}

export default Jobs