import { products } from '@/app/components/data/products';
import ProductDetailClient from '@/app/components/ProductDetailClient';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">محصول یافت نشد</h1>
          <p className="text-gray-400">متاسفانه محصول مورد نظر پیدا نشد.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ProductDetailClient product={product} />
    </div>
  );
}