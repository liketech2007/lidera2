"use client"
import { Typography, } from "@material-tailwind/react";
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between"> 
    
      <Typography color="blue-gray" className="font-normal"> &copy; 2023 Lidera </Typography>
      
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8"> 
      
        <li> <Typography as="a" href="https://instagram.com/lidera_lda?igshid=MzRlODBiNWFlZA==" color="blue-gray" className="font-normal transition-colors hover:text-zinz-500 focus:text-zinc-500" > Instagram </Typography> </li>
      </ul>
      </footer>
  )
}