"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen">
      
      <aside className={`fixed top-0 left-0 h-full bg-white shadow-lg p-5 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block hover:text-gray-500">Dashboard</Link>
          <Link href="/profile" className="block hover:text-gray-500">Profile</Link>
          <Link href="/settings" className="block hover:text-gray-500">Settings</Link>
          <Link href="/logout" className="block hover:text-gray-500">Logout</Link>
        </nav>
      </aside>
    </div>
  );
}
