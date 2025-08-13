import ProductCard from './components/ProductCard';
import { products } from './components/data/products';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">محصولات</h1>
        <div className="max-w-70 mx-auto sm:max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </main>
  );
}
