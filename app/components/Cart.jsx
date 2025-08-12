'use client'

import { useCart } from './context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, decreaseQuantity, cartCount } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-xl font-bold text-white">Shopping Cart ({cartCount})</h2>
        </div>
        <p className="text-gray-400">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 className="text-xl font-bold text-white">Shopping Cart ({cartCount})</h2>
      </div>

      <div className="space-y-4 mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg border border-gray-600">
            <div className="flex items-center gap-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-gray-300 text-sm">
                    ${item.price} × {item.quantity}
                  </p>
                  <span className="text-gray-500">=</span>
                  <p className="text-green-400 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => decreaseQuantity(item.id)}
                className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-600 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-white">Total:</span>
          <span className="text-2xl font-bold text-green-400">${totalAmount.toFixed(2)}</span>
        </div>
        
        <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
}