import React from 'react';
import { useCart } from '../context/CartContext';
import { PRICE_TAG,QTY,EACH ,REMOVE} from '../constants/constant';
const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-600">{QTY} {item.quantity}</p>
        <p className="text-sm text-gray-600">{PRICE_TAG}{item.price} {EACH}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{item.price * item.quantity}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="mt-2 text-red-500 hover:underline"
        >
          {REMOVE}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
