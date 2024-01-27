import Link from "next/link"
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <>
      <div className="w-[60%]">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src="/vaga1.jpeg"
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/vaga2.jpeg"
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/vaga3.jpeg"
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
