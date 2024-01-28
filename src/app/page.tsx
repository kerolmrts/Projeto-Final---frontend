"use client"
import Navbar from "@/components/Navbar"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Carousel from "@/components/Carousel"
import Link from "next/link"
import * as React from "react"
import { Card } from "@/components/ui/card"
import { FiCheckCircle } from "react-icons/fi"
import CardCarousel from "@/components/CardCarousel"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto text-2xl my-10 container ">
        <h1 className="flex font-bold m-14">
          Bem-vindo ao Portal de Estágios do Rio Grande do Norte
        </h1>
        <div className="flex flex-col-2 w-full">
          <section>
            <h3 className="font-bold text-2xl">Estágio</h3>
            <div className="text-justify m-5">
              <p>
                Se você tem a partir de 16 anos, quer desenvolver novas
                habilidades e adquirir experiência na prática, o nosso programa
                de estágio te oferece isso e muito mais! Comece agora sua
                jornada profissional de sucesso.
              </p>
              <ul>
                <li className="flex gap-2 m-5">
                  <FiCheckCircle />
                  Até 6h diárias e 30h semanais
                </li>
                <li className="flex gap-2 m-5">
                  <FiCheckCircle />
                  Pagamento de bolsa-auxílio
                </li>
                <li className="flex gap-2 m-5">
                  <FiCheckCircle />
                  Auxílio-transporte e recesso remunerado
                </li>
                <li className="flex gap-2 m-5">
                  <FiCheckCircle />
                  Interação diária com diversos profissionais e campos de
                  atuação.
                </li>
              </ul>
            </div>
            <img
              className="rounded-xl hover:scale-110 transition-transform duration-100"
              src="/estagiario.jpg"
              alt="estagiario"
            />
          </section>
          <section>
            <div>
              <img
                className="rounded-xl hover:scale-110 transition-transform duration-100"
                src="/aprendiz.jpg"
                alt="aprendiz"
              />

              <div className="">
                <h4 className="font-bold text-2xl mt-5">Jovem Aprendiz</h4>
                <p className="text-justify m-5">
                  Tem de 14 a 24 anos, está na escola ou já concluiu o ensino
                  médio e quer trabalhar? O Programa Jovem Aprendiz é para você!
                </p>
                <ul>
                  <li className="flex gap-2 m-5">
                    <FiCheckCircle />
                    Contrato de 4h ou 6h diárias com direito a carteira assinada
                  </li>
                  <li className="flex gap-2 m-5">
                    <FiCheckCircle />
                    Salário mínimo/hora
                  </li>
                  <li className="flex gap-2 m-5">
                    <FiCheckCircle />
                    Vale transporte, 13º salário, INSS, férias
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="flex mt-20 w-auto mx-10 border-t-4 p-10 border-card-foreground/15">
          <div className="flex gap-4">
            <Carousel />

            <div className="flex flex-col w-[40%] gap-3">
              
             <CardCarousel />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-popover-foreground/15">
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
      </footer>
    </>
  )
}
