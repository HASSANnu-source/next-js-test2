'use client';

import Link from 'next/link';
import { useCart } from './context/CartContext';
import toPersianNumber from '@/app/components/utils/format'
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
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-700 flex flex-col h-full">
      <Link href={`/products/${product.id}`} passHref className="flex-grow">
        <div className="flex-grow flex flex-col p-4 gap-3">
          <div className="relative w-full" style={{ aspectRatio: '5/8' }}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              quality={30}
            />
          </div>
          <h3 className="text-lg font-bold text-white line-clamp-2 min-h-[2.5rem] max-h-[3rem] leading-snug">
            {product.title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2 flex-grow">{product.description}</p>  
          <div className="self-end bg-blue-900 text-white text-lg font-medium px-4 py-1 rounded-full">
            {toPersianNumber(product.price)} تومان
          </div>
        </div>
      </Link>
        <div className="p-4">
          {quantityInCart > 0 ? (
            <div className="flex items-center justify-center gap-3 w-full">
              <button 
                onClick={handleAddToCart}
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="text-white font-semibold text-center min-w-[2rem]">
                {toPersianNumber(quantityInCart)}
              </span>
              <button 
                onClick={handleDecrease}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors active:scale-95 ${
                    quantityInCart > 1 
                      ? 'bg-gray-600 hover:bg-gray-500 text-white'
                      : 'bg-red-600 hover:bg-red-500 text-white'
                  }`}                
                aria-label="Decrease quantity"
              >
                {quantityInCart > 1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-95 text-sm"
            >
              اضافه کردن به سبد خرید
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
  );
}