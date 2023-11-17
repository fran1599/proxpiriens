import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CardsSection from "@/organims/CardsSection";
import NavBar from "@/organims/NavBar";
import DestinosContainer from "@/organims/DestinosContainer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

    <NavBar />     
    <CardsSection />
   
        <style jsx global>{`
          body {
            font-family: ${inter}, sans-serif;
          }
        `}</style>
      </main>
    </>
  );
}
