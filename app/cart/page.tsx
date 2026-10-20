'use client';
import { useState } from 'react';

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 109.95;

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">თქვენი კალათა</h1>
      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product" className="w-20 h-20 object-contain" />
          <div>
            <h2 className="font-semibold">Fjallraven - Foldsack No. 1 Backpack</h2>
            <p className="text-gray-500">${pricePerItem}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={decrease}
            disabled={quantity <= 1}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 font-bold"
          >
            -
          </button>
          <span className="font-bold text-lg">{quantity}</span>
          <button 
            onClick={increase}
            disabled={quantity >= 10}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 font-bold"
          >
            +
          </button>
        </div>

        <div className="text-right">
          <p className="font-bold text-lg">სულ: ${(pricePerItem * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}