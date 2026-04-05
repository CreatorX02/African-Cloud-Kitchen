'use client';

import { useState } from 'react';
import { menuItems } from '@/data/menu';
import MenuCard from '@/components/MenuCard';
import CategoryFilter from '@/components/CategoryFilter';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <p className="text-[#E8590C] font-semibold uppercase tracking-widest text-sm mb-2">Explore</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-3">Our Menu</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          A culinary journey across Africa — from the vibrant streets of Lagos to the highlands of Ethiopia.
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-6xl mb-4">🍽️</div>
          <p className="text-xl">No items found in this category.</p>
        </div>
      )}
    </div>
  );
}
