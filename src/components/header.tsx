"use client"
import { Navbar} from "@material-tailwind/react";
import logo from "../assets/logo.png"
import Link from "next/link";

export function Header() {
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-[#0000]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href="/">
        <img src={logo.src} width={100} height={100} />
        </Link>
     </div>
    </Navbar>
  )
}