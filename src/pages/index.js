

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Card from '@/atoms/Card'




const inter = Inter({ subsets: ['latin'] })

export default function Home({Component , pageProps}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      <Card destino={{
        
    id:1,
    img: "/img/cards/Card-Bariloche.jpg",
    title: "Bariloche",
    text: "Paisajes, colores y belleza natural en Bariloche",
    paquete: "8 días / 7 noches, Vuelo directo Buenos Aires / Rosario - Bariloche, Gran Hotel Panamericano",
    price: "$289.467",
    bgcolor: "var(--primary-color)",
      }}/>
      
      <style jsx global>{`
          body {
            font-family: ${inter}, sans-serif;
          }
      `}</style>

        
      </main>
    </>
  )
}
