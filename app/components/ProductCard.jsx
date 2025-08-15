'use client';

import Link from 'next/link';
import Image from 'next/image';
import useCart from './context/CartContext';
import { formatPrice, toPersianNumber } from '@/app/components/utils/price';

export default function ProductCard({ product }) {
  const { addToCart, cartItems, decreaseQuantity } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;
  const hasDiscount = product.discountPercent > 0;

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all">
      <Link href={`/products/${product.id}`} className="flex-grow p-4 flex flex-col gap-3">
        <div className="relative w-full aspect-[5/8] transition-transform duration-500 hover:scale-105">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover object-center"
            quality={50}
          />
          {hasDiscount && (
            <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-0 let-0 w-[141%] transform rotate-315 bg-red-600 py-1.5">
                <div className="text-center text-white text-sm mr-1 font-bold">
                  {toPersianNumber(product.discountPercent)}٪
                </div>
              </div>
            </div>
          )}
        </div>
        <h3 className="text-lg font-bold text-white line-clamp-2 leading-snug">{product.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{product.author}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-blue-900 text-white text-lg font-medium px-3 py-1 rounded-full">
            {formatPrice(product)} تومان
            {hasDiscount && (
              <span className="line-through text-gray-300 text-sm">
                {toPersianNumber(product.price)}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4">
        {quantityInCart > 0 ? (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-xl sm:text-2xl text-white w-10 h-10 rounded-lg flex items-center justify-center active:scale-95"
            >
              +
            </button>
            <span className="text-white font-semibold min-w-[2rem] text-center">
              {toPersianNumber(quantityInCart)}
            </span>
            <button
              onClick={() => decreaseQuantity(product.id)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center active:scale-95 ${
                quantityInCart > 1
                  ? 'bg-gray-600 hover:bg-gray-500 text-xl sm:text-2xl'
                  : 'bg-red-600 hover:bg-red-500'
              } text-white`}
            >
              {quantityInCart > 1 ?
              '-' :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              }
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base md:text-sm xl:text-base font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            اضافه کردن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
}
