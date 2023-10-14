"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MainLogin } from "@/components/mainLogin";

export default function CadastroPage() {
  return (
    <div className="min-w-full min-h-screen flex flex-col items-center">
      <Header />
      <MainLogin />
      <Footer />
    </div>
  )
}