import React, { useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { TOTAL,CLEAR_CART } from '../constants/constant';
const CartSummary = () => {
  const { cartItems, clearCart } = useCart();

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="p-4 border-t mt-4">
      <p className="text-lg font-semibold">{TOTAL}{total}</p>
      <button
        onClick={clearCart}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        {CLEAR_CART}
      </button>
    </div>
  );
};

export default CartSummary;
