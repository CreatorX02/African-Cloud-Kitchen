'use client';

import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find(i => i.id === item.id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-orange-50 flex flex-col">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center h-32">
        <span className="text-6xl">{item.emoji}</span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-[#1A1A1A] text-base leading-tight">{item.name}</h3>
          {item.popular && (
            <span className="shrink-0 text-xs bg-[#F5A623] text-white px-2 py-0.5 rounded-full font-medium">Popular</span>
          )}
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3 flex-1">{item.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#E8590C] font-bold text-lg">${item.price.toFixed(2)}</span>
          {!cartItem ? (
            <button
              onClick={() => addToCart(item)}
              className="bg-[#E8590C] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#c44a08] transition-colors"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                className="w-8 h-8 rounded-full bg-[#E8590C] text-white font-bold flex items-center justify-center hover:bg-[#c44a08] transition-colors"
              >
                −
              </button>
              <span className="font-bold text-[#1A1A1A] w-5 text-center">{cartItem.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                className="w-8 h-8 rounded-full bg-[#E8590C] text-white font-bold flex items-center justify-center hover:bg-[#c44a08] transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
