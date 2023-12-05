
import {ShoppingProvider} from '@/context/CartContext'
import ShoppingCart from '@/molecules/shoppingCart/ShoppingCart'
import NavBar from '@/organims/NavBar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (

   <ShoppingProvider>
    <NavBar />
    <Component {...pageProps} />
    <ShoppingCart />
    </ShoppingProvider>

)}
