
import {ShoppingProvider} from '@/context/CartContext'
import NavBar from '@/organims/NavBar'
import Footer from '@/organims/footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (

   <ShoppingProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer/>
    </ShoppingProvider>

)}
  