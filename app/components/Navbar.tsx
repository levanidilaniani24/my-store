import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/products">MyStore</Link>
      </div>
      <div className="flex gap-6 font-medium text-gray-700">
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        <Link href="/profile" className="hover:text-blue-600">Profile</Link>
        <Link href="/cart" className="hover:text-blue-600">Cart</Link>
      </div>
    </nav>
  );
}