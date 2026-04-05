'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const DELIVERY_FEE = 2.99;

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-3">Your cart is empty</h1>
        <p className="text-gray-500 text-lg mb-8">Looks like you haven&apos;t added any items yet.</p>
        <Link href="/menu" className="inline-block bg-[#E8590C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c44a08] transition-colors text-lg">
          Browse Menu 🍽️
        </Link>
      </div>
    );
  }

  const total = cartTotal + DELIVERY_FEE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-8">Your Cart 🛒</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-orange-50 flex items-center gap-4">
              <div className="text-4xl w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#1A1A1A] truncate">{item.name}</h3>
                <p className="text-[#E8590C] font-semibold">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-[#E8590C] text-white font-bold flex items-center justify-center hover:bg-[#c44a08]"
                >
                  −
                </button>
                <span className="font-bold w-5 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-[#E8590C] text-white font-bold flex items-center justify-center hover:bg-[#c44a08]"
                >
                  +
                </button>
              </div>
              <div className="text-right shrink-0 min-w-[60px]">
                <p className="font-bold text-[#1A1A1A]">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 text-sm mt-1 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <Link href="/menu" className="inline-block text-[#E8590C] font-semibold hover:underline mt-2">
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50 h-fit">
          <h2 className="text-xl font-extrabold text-[#1A1A1A] mb-5">Order Summary</h2>
          <div className="space-y-3 mb-5">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({cartCount} items)</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>${DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-[#1A1A1A] text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link href="/checkout" className="block w-full bg-[#E8590C] text-white text-center py-3 rounded-full font-bold hover:bg-[#c44a08] transition-colors text-lg">
            Proceed to Checkout →
          </Link>
          <p className="text-center text-gray-400 text-xs mt-3">🔒 Secure checkout</p>
        </div>
      </div>
    </div>
  );
}
