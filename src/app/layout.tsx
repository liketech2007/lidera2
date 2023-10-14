import { What } from '@/components/what'
import './globals.css'
import { Inter } from 'next/font/google'
import foto3 from "../assets/foto3.jpeg"
import icon from "../assets/icon.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lidera',
  description: 'Inscrição - IV Fórum de Empreendedorismo Emergente - Comunicação, Networking, Gestão Financeira, Gestão Emocional, Inovação e Presença no Digital. Vamos falar de Empreendedorismo Emergente?',
  openGraph: {
    url: `${process.env.NEXT_PUBLIC_URL}`,
    title: 'Lidera',
    description: `Inscrição - IV Fórum de Empreendedorismo Emergente - Comunicação, Networking, Gestão Financeira, Gestão Emocional, Inovação e Presença no Digital. Vamos falar de Empreendedorismo Emergente?`,
    images: [
      {
        url: foto3.src,
        width: 800,
        height: 600,
        alt: 'Lidera',
        type: 'image/jpeg',
      }
    ],
    siteName: 'Lidera',
  },
  twitter: {
    handle: '@lidera',
    site: `${process.env.NEXT_PUBLIC_URL}`,
    cardType: foto3.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" type="image/x-icon" href={icon.src} />
      </head>
      <body className={`${inter.className} min-w-full min-h-screen flex flex-col items-center`}>
        {children}
        <What />
      </body>
    </html>
  )
}
