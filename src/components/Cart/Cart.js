import React from "react";
// import ItemList from '../Restaurants/ItemList';
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleCart } from "../../features/cardSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

    // Calculate total dynamically from cartItems
  const total = cartItems.reduce((sum, item) => {
    const itemPrice = item.card.info.price || item.card.info.defaultPrice || 0;
    return sum + (itemPrice / 100) * (item.quantity || 1);
  }, 0);

  if (!isCartOpen) {
    return null; 
  }

  return (
    <div className="fixed bottom-0 right-0 min-w-[40%] max-w-[50%] max-h-[80%] bg-primary-color overflow-auto p-2 shadow-lg rounded-tl-xl z-50">
      <button
        onClick={handleToggleCart}
        className="absolute top-2 right-[0.10px] cursor-pointer bg-orange-800 text-white font-inherit p-1 mr-1 rounded-md border-none"
      >
        Close
      </button>
      <h2 className="text-2xl font-bold border-b-4 border-double border-white pb-3 ">
        Cart
      </h2>

      <CartItems items={cartItems} />
     <strong>Total: ₹{total.toFixed(2)}</strong>
      <button
        onClick={handleClearCart}
        className="text-white bg-primary-color px-3 m-4 py-1 rounded font-semibold ml-2"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
