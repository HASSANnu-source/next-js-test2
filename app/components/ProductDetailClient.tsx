'use client';

import { useCart } from '@/app/components/context/CartContext';
import { toPersianNumber } from '@/app/components/utils/price';
import { Product } from '@/app/components/data/products';
import Link from 'next/link';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart, decreaseQuantity, cartItems } = useCart();
  const cartItem = cartItems.find((item: { id: number; }) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;
  const discountedPrice = product.price - (product.price * product.discountPercent / 100);
  const hasDiscount = product.discountPercent > 0;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="#4B5563" />
              <stop offset="50%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 sticky top-16">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-3">{product.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-400 text-sm mr-2">({toPersianNumber(product.rating)})</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">مشخصات کتاب</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-24 text-gray-400 text-sm">نویسنده:</span>
                  <span className="text-white font-medium">{product.author}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-400 text-sm">ناشر:</span>
                  <span className="text-white font-medium">{product.publisher}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-24 text-gray-400 text-sm">صفحات:</span>
                  <span className="text-white font-medium">{toPersianNumber(product.pages)} صفحه</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-400 text-sm">زبان:</span>
                  <span className="text-white font-medium">فارسی</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">درباره کتاب</h2>
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-3xl font-bold px-6 py-3 rounded-xl shadow-lg">
                  {toPersianNumber(discountedPrice)} تومان
                </div>
                {hasDiscount && (
                  <>
                    <div className="line-through text-gray-500 text-xl">
                      {toPersianNumber(product.price)} تومان
                    </div>
                    <div className="bg-red-600 text-white text-lg font-bold px-3 py-1 rounded-lg">
                      {toPersianNumber(product.discountPercent)}٪ تخفیف
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="space-y-4">
              {quantityInCart === 0 ? (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-lg hover:shadow-xl text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  افزودن به سبد خرید
                </button>
              ) : (
                <div className="bg-gray-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300 font-medium">تعداد در سبد:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                        aria-label="افزایش تعداد"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <span className="text-white text-xl font-bold min-w-[2.5rem] text-center bg-gray-600 py-2 px-4 rounded-lg">
                        {toPersianNumber(quantityInCart)}
                      </span>
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          quantityInCart > 1 
                            ? 'bg-gray-600 hover:bg-gray-500 text-white'
                            : 'bg-red-600 hover:bg-red-500 text-white'
                        }`}
                        aria-label={quantityInCart > 1 ? "کاهش تعداد" : "حذف از سبد"}
                      >
                        {quantityInCart > 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <Link 
                    href="/cart"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center block"
                  >
                    مشاهده سبد خرید
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}