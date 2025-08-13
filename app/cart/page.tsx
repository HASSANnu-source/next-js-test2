import Cart from '../components/Cart';

export const metadata = {
  title: 'سبد خرید',
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">سبد خرید شما</h1>
      <Cart />
    </div>
  );
}