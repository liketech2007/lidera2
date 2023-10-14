"use client"
import Link from "next/link"
import { WhatsappLogo } from "phosphor-react"
export function What() {
  return (
    <div className="fixed bottom-14 right-5 w-[50px] h-[50] rounded-full p-2 bg-green-500 text-white flex justify-center items-center hover:bg-black transition-500">
      <Link href="#">
        <WhatsappLogo size={32} />
      </Link>
    </div>
  )
}