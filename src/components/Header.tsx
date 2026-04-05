'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <span className="font-bold text-lg text-[#1A1A1A]">African Cloud Kitchen</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#1A1A1A] hover:text-[#E8590C] font-medium transition-colors">Home</Link>
            <Link href="/menu" className="text-[#1A1A1A] hover:text-[#E8590C] font-medium transition-colors">Menu</Link>
            <Link href="/about" className="text-[#1A1A1A] hover:text-[#E8590C] font-medium transition-colors">About</Link>
            <Link href="/cart" className="relative flex items-center gap-1 bg-[#E8590C] text-white px-4 py-2 rounded-full font-medium hover:bg-[#c44a08] transition-colors">
              <span>🛒</span>
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile: cart + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="/cart" className="relative p-2">
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md text-[#1A1A1A]" aria-label="Toggle menu">
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 flex flex-col gap-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-[#1A1A1A] hover:text-[#E8590C] font-medium">Home</Link>
            <Link href="/menu" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-[#1A1A1A] hover:text-[#E8590C] font-medium">Menu</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-[#1A1A1A] hover:text-[#E8590C] font-medium">About</Link>
          </div>
        )}
      </div>
    </header>
  );
}
