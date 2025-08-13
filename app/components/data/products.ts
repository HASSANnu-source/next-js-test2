export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "هابیت | The Hobbit",
    description: "J R R Tolkien",
    price: 300_000,
    image: "/products/The-Hobbit.jpg"
  },
  {
    id: 2,
    title: "ارباب حلقه ها | The Lord of the Rings",
    description: "J R R Tolkien",
    price: 400_000,
    image: "/products/The-Lord-of-the-Rings-1.jpg"
  },
  {
    id: 3,
    title: "ارباب حلقه ها ۲ | The Lord of the Rings 2",
    description: "J R R Tolkien",
    price: 500_000,
    image: "/products/The-Lord-of-the-Rings-2.jpg"
  },
  {
    id: 4,
    title: "خورشید پدیدار میشود | Here Comes the Sun",
    description: "Joshua M. Greene",
    price: 600_000,
    image: "/products/Here-Comes-the-Sun.webp"
  },
  {
    id: 5,
    title: "ما پناه خواهیم گرفت | We Will Be Shelter",
    description: "Andrea Gibson",
    price: 700_000,
    image: "/products/We-Will-Be-Shelter.webp"
  },
  {
    id: 6,
    title: "پروژه درود بر مریم  | Project Hail Mary",
    description: "Andy Weir",
    price: 800_000,
    image: "/products/Project-Hail-Mary.webp"
  }
];