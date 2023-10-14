import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Footer } from "@/components/footer";

export default function Home() {

  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <Header />
      <Main  />
      <Footer />
    </div>
  )
}