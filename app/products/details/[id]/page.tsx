'use client';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'next/navigation';

// შენი ძველი ინთერფეისი და კომპონენტის შიგთავსი დავარქვათ ProductContent-ს:
function ProductContent() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id || 1}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20">იტვირთება დეტალები...</div>;
  if (!product) return <div className="text-center py-20">პროდუქტი ვერ მოიძებნა</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg my-10 flex flex-col md:flex-row gap-8">
      <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-80 object-contain" />
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-sm bg-gray-200 px-2 py-1 rounded uppercase">{product.category}</span>
          <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-600 mt-4">${product.price}</p>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full transition">
            კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
}

// აი ეს არის მთავარი ექსპორტი, რომელიც Suspense-ს იყენებს:
export default function ProductDetailsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">იტვირთება...</div>}>
      <ProductContent />
    </Suspense>
  );
}