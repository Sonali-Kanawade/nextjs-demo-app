'use client';

import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">MyBrand</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-gray-500">About</Link>
          <Link href="/services" className="hover:text-gray-500">Services</Link>
          <Link href="/contact" className="hover:text-gray-500">Contact</Link>
        </div>
        
        {/* <Button className="md:hidden" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button> */}
      </div>
      
      {/* {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link href="/about" className="block hover:text-gray-500">About</Link>
          <Link href="/services" className="block hover:text-gray-500">Services</Link>
          <Link href="/contact" className="block hover:text-gray-500">Contact</Link>
        </div>
      )} */}
    </nav>
  );
}

