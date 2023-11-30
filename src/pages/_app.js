
import {ShoppingProvider} from '@/context/CartContext'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <ShoppingProvider>
    <Component {...pageProps} />
    </ShoppingProvider>
)}
