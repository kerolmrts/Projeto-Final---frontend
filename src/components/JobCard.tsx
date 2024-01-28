"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Job } from "@/lib/types"
import { formatDate } from "@/lib/utils"


export const JobCard = ({ job }: { job: Job }) => {
  
  const date = new Date(job.job_createdAt.toString())
  const formattedDate = date.toLocaleDateString()

  return (
    <Card className="w-80">
      <CardHeader>
        <img
          src={job.job_image}
          alt={job.job_title}
          className="w-72 h-72 object-cover"
        />
      </CardHeader>
      <CardContent>
        <p className="text-base pb-4">{job.job_category}</p>
        <p className="text-xl">
          {" "}
          {job.job_title} - {job.job_category} - {job.job_requirements} -{" "}
          {job.job_pay}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-base">
          Publicada em {formatDate(new Date(job.job_createdAt))}
        </p>
      </CardFooter>
    </Card>
  )
}
