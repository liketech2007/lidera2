"use client"
import foto2 from "../assets/foto2.jpg"
import { Typography } from "@material-tailwind/react";
import Link from "next/link"

export function Main() {
  return (
    <main className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-col gap-6 items-center justify-between text-blue-gray-900">
        <h1 className="text-4xl text-center"> O <span className="font-bold">evento</span> que vai mudar a tua vida e a tua empresa</h1>

        <div className="mt-8 mb-2 w-full h-[400px] lg:h-[600px] flex justify-center items-center p-4" id="conteinerFoto1">
            <Link href="/cadastro" className="bg-black p-2 rounded-lg hover:bg-transparent hover:text-white transition-500">Inscreva-se já</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Typography className="text-font text-xl">Investimento</Typography>
          <Typography id="price-antes" className="text-center">30.000,00kz</Typography>

          <Typography className="text-xl font-bold text-center">10.000,00kz</Typography>
        </div>

        <div className="min-w-full mt-4">
          <img src={foto2.src} className="w-full lg'w-[80%] h-[400px] lg:h-[600px]" />

          <Typography className="text-xl text-center mt-4">Estamos a tua espera</Typography>
        </div>
      </div>
    </main>
  )
}