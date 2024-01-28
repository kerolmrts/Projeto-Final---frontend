import Navbar from "@/components/Navbar"
import { JobCard } from "@/components/JobCard"

import React from "react"
import JobList from "@/components/JobList"

export default function Vagas() {
  return (
    <>
      <Navbar />
      <div className="container my-10">
    <JobList/>
      </div>
    </>
  )
}
