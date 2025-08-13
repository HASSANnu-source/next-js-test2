'use client';

import { useCart } from '@/app/components/context/CartContext';
import toPersianNumber from '@/app/components/utils/format'
import { Product } from '@/app/components/data/products';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart, decreaseQuantity, cartItems } = useCart();

  const cartItem = cartItems.find((item: { id: number; }) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">{product.title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.description}</p>
          </div>
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold px-6 py-3 rounded-xl shadow-lg">
              {toPersianNumber(product.price)} تومان
            </div>
          </div>
          <div className="mt-auto">
            {quantityInCart === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                اضافه کردن به سبد خرید
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            ) : (
              <div className="flex items-center justify-center gap-4 p-2 bg-gray-800 rounded-xl">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors active:scale-95 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="text-white text-xl font-bold min-w-[3rem] text-center bg-gray-700 py-2 px-4 rounded-lg">
                  {toPersianNumber(quantityInCart)}
                </span>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="bg-gray-600 hover:bg-gray-500 text-white text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors active:scale-95 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}