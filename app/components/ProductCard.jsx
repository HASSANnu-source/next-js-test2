'use client';

import { useCart } from './context/CartContext';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const { addToCart, cartItems, decreaseQuantity } = useCart();

  const cartItem = cartItems.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDecrease = () => {
    if (quantityInCart > 0) {
      decreaseQuantity(product.id);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-700">
      <div className="relative w-full" style={{ aspectRatio: '1/1', maxHeight: '300px' }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white line-clamp-1">{product.title}</h3>
          <div className="bg-blue-900 backdrop-blur-sm rounded-full px-4 py-1 text-lg font-medium text-white whitespace-nowrap">
            ${product.price}
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 h-12">{product.description}</p>

        {quantityInCart > 0 ? (
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDecrease}
              className="bg-gray-600 hover:bg-gray-500 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <span className="text-white font-semibold flex-1 text-center">
              {quantityInCart}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ) : (
          <button 
            onClick={handleAddToCart}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}