"use Client"
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link href="/" className="text-lg font-bold">MyBrand</Link>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/services" className="hover:text-gray-400">Services</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}
