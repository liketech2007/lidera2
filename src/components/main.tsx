"use client"
import foto2 from "../assets/foto2.jpg"
import { Typography } from "@material-tailwind/react";
import Link from "next/link"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.png"

export function Main() {
  return (
    <main className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-col gap-6 items-center justify-between text-blue-gray-900">
        <h1 className="text-4xl font-bold text-center"> IV Fórum de Empreendedorismo Emergente </h1>
        <Typography className="text-center">
        Comunicação, Networking, Gestão Financeira, Gestão Emocional, Inovação e Presença no Digital. Vamos falar de Empreendedorismo Emergente?
        </Typography>
        <Typography className="text-xs">
          19 Novembro | 14H ás 19H | CCB (Belas)
        </Typography>

        <div className="mt-8 mb-2 w-full h-[400px] lg:h-[600px] flex justify-center items-center p-4" id="conteinerFoto1">
            <Link href="/cadastro" className="bg-black p-2 rounded-lg hover:bg-transparent hover:text-white transition-500">Inscreva-se já</Link>
        </div>
        <Typography className="text-xl text-center mt-4">Esse <span className="font-bold">evento</span> vai mudar a sua vida.</Typography>
        <div className="flex flex-col justify-center items-center gap-4">
          <Typography className="text-font text-xl">Investimento</Typography>
          <Typography id="price-antes" className="text-center">30.000,00kz</Typography>

          <Typography className="text-xl font-bold text-center">10.000,00kz</Typography>

          <Typography className="text-xs text-center">Até ao dia 07 de Novembro.</Typography> 
        </div>
        <div className="min-w-full flex gap-6 justify-center items-end mt-4 w-full h-[400px] lg:h-[600px]" id="conteinerFoto2">
        </div>
        <Typography className="text-xl text-center mt-4">Estamos a tua espera</Typography>
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography className="text-xl text-center mt-4">Nossos Parceiros</Typography>
        </div>  
          <div className="flex gap-8 flex-wrap">
            <img src={p1.src} width="75" height="75" />
            <img src={p2.src} width="75" height="75" />
            <img src={p3.src} width="75" height="75" />
            <img src={p4.src} width="75" height="75" />
            <img src={p5.src} width="75" height="75" />
            <img src={p6.src} width="75" height="75" />
            <img src={p7.src} width="75" height="75" />
          </div>
        
      </div>
    </main>
  )
}