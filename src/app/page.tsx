"use client"
import Navbar from "@/components/Navbar"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Link from "next/link"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10">
        <h1 className="flex font-bold m-14">
          As melhores vagas de estágio do RN
        </h1>
        <div className="flex gap-3 w-[1100px] mx-auto flex-wrap justify-start">
          <div className="flex gap-10 w-full">
            <div className="w-1/2">
              <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                >
                <CarouselContent>
                  <CarouselItem>
                    {" "}
                    <img
                      src="/vaga1.jpeg"
                      alt=""
                      className="w-full h-72 object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    {" "}
                    <img
                      src="/vaga2.jpeg"
                      alt=""
                      className="w-full h-72 object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    {" "}
                    <img
                      src="/vaga3.jpeg"
                      alt=""
                      className="w-full h-72 object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            <div className="w-1/2">
          <Card className=" flex w-56 h-56">
            <CardHeader>
              <img
                src="https://www.defensoria.rn.def.br/media/noticia_imagem/DSC_0353_CAPA.jpg"
                alt=""
                className="w-48 h-48 object-cover"
              />
            </CardHeader>
            <CardContent>
               <p>Descrição</p>
            </CardContent>
            <CardFooter>
              <p className="text-base">Publicada em</p>
            </CardFooter>
          </Card>
              <p>olaaaaaaaaa</p>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-popover-foreground/15">
        <div className="flex h-14 justify-between items-center container">
          <div>
            <p>
              {" "}
              @2023 – All Right Reserved. Designed and Developed by kerolmrts
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/estagios_rn/">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://img.olhardigital.com.br/wp-content/uploads/2022/05/logo-instagram.jpg"
                />
              </Avatar>
            </Link>
            <Link href="mailto:estagiosrn@yahoo.com">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://macmagazine.com.br/wp-content/uploads/2019/04/28-apple-mail-1260x630.jpg.webp"
                />
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
