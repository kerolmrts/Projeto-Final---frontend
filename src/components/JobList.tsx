"use client"
import * as React from "react"
import { getJobs, searchJobs } from "@/lib/api"
import { JobCard } from "@/components/JobCard"
import { Job } from "@/lib/types"
import { cn } from "@/lib/utils"

const JobList= ({ className, limit = 0 }: { className?: string, limit?: number }
) => {
    const [jobs, setJobs] = React.useState<Job[]>([])

    const fetchJobs = async () => {
        const jobs = await getJobs()
        console.log(jobs)
        setJobs(jobs)
    }

    React.useEffect(() => {
        fetchJobs()
    }, [])

    return (
      <div className={cn("flex flex-wrap gap-4", className)}>
        {jobs.map((job: Job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    )
}


export default JobList;