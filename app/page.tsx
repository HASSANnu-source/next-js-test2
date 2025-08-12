import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    title: "Book 1",
    description: "Book 1 description",
    price: 30,
    image: "/book.webp"
  },
  {
    id: 2,
    title: "Book 2",
    description: "Book 2 description",
    price: 40,
    image: "/book2.webp"
  },
  {
    id: 3,
    title: "Book 3",
    description: "Book 3 description",
    price: 50,
    image: "/book.webp"
  },
  {
    id: 4,
    title: "Book 4",
    description: "Book 4 description",
    price: 60,
    image: "/book2.webp"
  },
  {
    id: 5,
    title: "Book 5",
    description: "Book 5 description",
    price: 70,
    image: "/book.webp"
  },
  {
    id: 6,
    title: "Book 6",
    description: "Book 6 description",
    price: 80,
    image: "/book2.webp"
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
