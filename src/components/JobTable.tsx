"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Job } from "@/lib/types"
import { getJobs } from "@/lib/api"
import * as React from "react"
import { formatDate } from "@/lib/utils"
import Link from "next/link"


export const JobTable = () => {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Título</TableHead>
          <TableHead>Curso</TableHead>
          <TableHead>Empresa</TableHead>
          <TableHead>Data e Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job: Job) => (
          <TableRow key={job._id}>
            <Link href={`/admin/edit/${job._id}`}>
              <TableCell className="font-medium">{job.job_title}</TableCell>
            </Link>
            <TableCell>{job.job_category}</TableCell>
            <TableCell>{job.job_company}</TableCell>
            <TableCell>{formatDate(job.job_createdAt.toString())}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
