'use client'

import Link from 'next/link';
import useCart from './context/CartContext';
import { toPersianNumber, calculateFinalPrice } from '@/app/components/utils/price'
import { useState } from 'react';

export default function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, cartCount } = useCart();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const totalAmount = cartItems.reduce((total, item) => {
    const finalPrice = calculateFinalPrice(item);
    return total + (finalPrice * item.quantity);
  }, 0);

  const handleClearCartClick = () => {
    if (cartItems.length === 0) return;
    setShowConfirmModal(true);
  };

  const handleConfirmClear = () => {
    clearCart();
    setShowConfirmModal(false);
  };

  const handleCancelClear = () => {
    setShowConfirmModal(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-lg sm:text-xl font-bold text-white">سبد خرید ({toPersianNumber(cartCount)})</h2>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">سبد خرید شما خالی است.</p>
        <Link 
          href="/" 
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700">
      {/* Header */}
      <div className="flex flex-row items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-lg sm:text-xl font-bold text-white">سبد خرید ({toPersianNumber(cartCount)})</h2>
        </div>
        <button
          onClick={handleClearCartClick}
          className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          خالی کردن سبد
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cartItems.map(item => {
          const finalPrice = calculateFinalPrice(item);
          const itemTotal = finalPrice * item.quantity;
          const hasDiscount = item.discountPercent > 0;
          const originalPrice = item.price * item.quantity;
          const savings = originalPrice - itemTotal;

          return (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
              {/* Product info */}
              <div className="flex items-center gap-4">
                <Link href={`/products/${item.id}`} passHref>
                  <img src={item.image} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg" />
                </Link>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-white text-sm sm:text-base">{item.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="text-gray-300">
                      {toPersianNumber(finalPrice)} × {toPersianNumber(item.quantity)}
                    </span>
                    <span className="font-medium">
                      = {toPersianNumber(itemTotal)} تومان
                    </span>
                    {hasDiscount && (
                      <span className="text-green-400 text-xs">
                        (تخفیف: {toPersianNumber(savings)} تومان)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-2 justify-end sm:justify-start">
                <button onClick={() => addToCart(item)} className="bg-blue-600 hover:bg-blue-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors">+</button>
                <span className="text-white font-semibold text-center min-w-[2rem]">{toPersianNumber(item.quantity)}</span>
                {item.quantity > 1 && (
                  <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-600 hover:bg-gray-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors">-</button>
                )}
                <button onClick={() => removeFromCart(item.id)} className="bg-red-600 hover:bg-red-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total & Checkout */}
      <div className="border-t border-gray-600 pt-4">
        <div className="flex justify-between items-center mb-2 text-sm sm:text-base">
          <span className="font-semibold text-white">مجموع:</span>
          <span className="text-lg sm:text-2xl font-bold">{toPersianNumber(totalAmount)} تومان</span>
        </div>

        {cartItems.some(item => item.discountPercent > 0) && (
          <div className="text-xs sm:text-sm text-green-400 text-left mb-2">
            تخفیف کل: {
              toPersianNumber(
                cartItems.reduce((savings, item) => {
                  if (item.discountPercent > 0) {
                    const originalTotal = item.price * item.quantity;
                    const finalTotal = calculateFinalPrice(item) * item.quantity;
                    return savings + (originalTotal - finalTotal);
                  }
                  return savings;
                }, 0)
              )
            } تومان
          </div>
        )}

        <Link href="/payment" passHref>
          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base">
            پرداخت
          </button>
        </Link>
      </div>

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 max-w-md w-full">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-900 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">تأیید خالی کردن سبد</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                آیا مطمئن هستید که می‌خواهید سبد خرید را خالی کنید؟ این عملیات غیرقابل بازگشت است.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleCancelClear}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  لغو
                </button>
                <button
                  onClick={handleConfirmClear}
                  className="px-4 py-2 sm:px-6 sm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  خالی کردن سبد
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
