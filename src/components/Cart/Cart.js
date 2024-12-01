import React from 'react'
import ItemList from '../Restaurants/ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/cardSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
    const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className='text-center m-4 p-4'>
    <div className='text-2xl font-bold'>Cart</div>
    
    <ItemList items={cartItems} />
    <button onClick={handleClearCart} className='text-white bg-primary-color px-3 m-4 py-1 rounded font-semibold ml-2'>Clear Cart</button>
</div>
  )
}

export default Cart
