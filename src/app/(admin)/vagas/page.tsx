import Navbar from "@/components/Navbar"
import { JobCard } from "@/components/JobCard"

import React from "react"

export default function Vagas() {
  return (
    <>
      <Navbar />
      <div className="flex gap-4">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  )
}
