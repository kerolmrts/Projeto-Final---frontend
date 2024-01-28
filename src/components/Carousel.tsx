"use client"
import Link from "next/link"
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { getJobs } from "@/lib/api"
import { Job } from "@/lib/types"

export default function Home() {
  const [jobs, setJobs] = React.useState<
    { job_image: string; job_title: string }[]
  >([])

  React.useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await getJobs()
      setJobs(jobs)
    }
    fetchJobs()
  }, [])

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <>
      <div className="w-[60%]">
        <Carousel
          plugins={[plugin.current]}
               >
          <CarouselContent>
            {jobs.map((job: any) => (
              <CarouselItem key={job._id}>
                <img
                  src={job.job_image}
                  alt={job.job_title}
                  className="w-full h-[500px] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
