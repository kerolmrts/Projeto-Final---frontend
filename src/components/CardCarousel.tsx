"use client"
import * as React from "react"
import { getJobs, searchJobs } from "@/lib/api"

import { Job } from "@/lib/types"
import { cn, formatDate } from "@/lib/utils"
import { Card } from "./ui/card"
import Link from "next/link"

const CardCarousel = ({
  className,
  limit = 0,
}: {
  className?: string
  limit?: number
}) => {
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
    <div className={cn("flex flex-col gap-2", className)}>
      {jobs.slice(0, 3).map((job: Job) => (
        <Link href="/vagas">
        <Card className="h-40">
          <div className="flex">
            <img
              src={job.job_image}
              alt="imagem"
              className="w-40 h-40 object-cover"
            />
            <div className="flex flex-col p-4">
              <p className="w-56 text-2xl font-bold ">{job.job_title}</p>
                 <p className="mt-2 text-justify text-sm text-slate-950 ">
                Publicada em {formatDate(job.job_createdAt.toString())}
              </p>
            </div>
          </div>
        </Card>
        </Link>
      ))}
    </div>
  )
}

export default CardCarousel
