
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../types';
import PlusIcon from '../components/icons/PlusIcon';
import MinusIcon from '../components/icons/MinusIcon';
import TrashIcon from '../components/icons/TrashIcon';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/store" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 border-b pb-4">Your Shopping Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item: CartItem) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between pb-4 border-b last:border-b-0">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-6" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100 rounded-l-lg">
                  <MinusIcon />
                </button>
                <span className="px-4 font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100 rounded-r-lg">
                  <PlusIcon />
                </button>
              </div>
              <p className="font-bold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-full transition">
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t">
         <div className="flex justify-between items-center mb-6">
            <button onClick={clearCart} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition">
                Clear Cart
            </button>
            <div className="text-right">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-3xl font-bold">${cartTotal.toFixed(2)}</p>
            </div>
        </div>
        <button className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition text-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
