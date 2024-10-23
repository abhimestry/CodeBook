import React from 'react'
import { CartEmpty } from "./components/CartEmpty"; 
import { useCart } from '../../context';
import { CartList } from './components/CartList';
export const CartPage = () => {
  const { cartList  } = useCart();
return (
    <main>
        {
          cartList.length ?  <CartList /> : <CartEmpty />
        }
    </main>
  )
}
