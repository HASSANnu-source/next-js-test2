import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    title: "The Hobbit",
    description: "Book 1 description",
    price: 30,
    image: "/products/The-Hobbit.jpg"
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    description: "Book 2 description",
    price: 40,
    image: "/products/The-Lord-of-the-Rings-1.jpg"
  },
  {
    id: 3,
    title: "Asiklara yer yok",
    description: "Book 3 description",
    price: 50,
    image: "/products/Asiklara-Yer-Yok.jpg"
  },
  {
    id: 4,
    title: "Here Comes the Sun",
    description: "Book 4 description",
    price: 60,
    image: "/products/Here-Comes-the-Sun.webp"
  },
  {
    id: 5,
    title: "We Will Be Shelter",
    description: "Book 5 description",
    price: 70,
    image: "/products/We-Will-Be-Shelter.webp"
  },
  {
    id: 6,
    title: "Project Hail Mary",
    description: "Book 6 description",
    price: 80,
    image: "/products/Project-Hail-Mary.webp"
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Our Products</h1>
        <div className="max-w-70 mx-auto sm:max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </main>
  );
}
