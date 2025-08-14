import { Product } from '@/app/components/data/products';

export function calculateFinalPrice(product: Product): number {
  if (product.discountPercent > 0) {
    return product.price - (product.price * product.discountPercent / 100);
  }
  return product.price;
}

export function formatPrice(product: Product): string {
  const finalPrice = calculateFinalPrice(product);
  return new Intl.NumberFormat('fa-IR').format(finalPrice);
}

export function toPersianNumber(price: number): string {
  return new Intl.NumberFormat('fa-IR').format(price);
}