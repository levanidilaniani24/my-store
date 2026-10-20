'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-xl">იტვირთება პროდუქტები...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">პროდუქტები</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between bg-white">
            <div>
              <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
              <h2 className="font-semibold text-lg line-clamp-1">{product.title}</h2>
              <p className="text-gray-500 font-bold mt-2">${product.price}</p>
            </div>
            <Link 
              href={`/products/details/${product.id}`}
              className="mt-4 block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
            >
              დეტალების ნახვა
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}