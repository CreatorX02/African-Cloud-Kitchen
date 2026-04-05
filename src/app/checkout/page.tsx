'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const DELIVERY_FEE = 2.99;

export default function CheckoutPage() {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    payment: 'cash',
  });

  useEffect(() => {
    if (cartCount === 0) {
      router.push('/cart');
    }
  }, [cartCount, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = 'ACK-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    clearCart();
    router.push(`/order-confirmation?order=${orderNumber}&name=${encodeURIComponent(form.name)}`);
  };

  if (cartCount === 0) return null;

  const total = cartTotal + DELIVERY_FEE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-5">Delivery Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8590C] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8590C] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel" name="phone" required value={form.phone} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8590C] focus:border-transparent"
                  placeholder="+234 800 000 0000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">City *</label>
                <input
                  type="text" name="city" required value={form.city} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8590C] focus:border-transparent"
                  placeholder="Lagos"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Address *</label>
                <input
                  type="text" name="address" required value={form.address} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8590C] focus:border-transparent"
                  placeholder="123 Ubuntu Street, Victoria Island"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  name="notes" value={form.notes} onChange={handleChange} rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E8590C] focus:border-transparent resize-none"
                  placeholder="Any special instructions or dietary requirements..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-5">Payment Method</h2>
            <div className="space-y-3">
              {[
                { value: 'cash', label: 'Cash on Delivery', emoji: '💵' },
                { value: 'card', label: 'Credit / Debit Card', emoji: '💳' },
                { value: 'mobile', label: 'Mobile Money', emoji: '📱' },
              ].map(opt => (
                <label key={opt.value} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${form.payment === opt.value ? 'border-[#E8590C] bg-orange-50' : 'border-gray-200 hover:border-orange-200'}`}>
                  <input
                    type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={handleChange}
                    className="accent-[#E8590C]"
                  />
                  <span className="text-xl">{opt.emoji}</span>
                  <span className="font-medium text-[#1A1A1A]">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E8590C] text-white py-4 rounded-full font-bold text-lg hover:bg-[#c44a08] transition-colors shadow-lg"
          >
            Place Order — ${total.toFixed(2)} 🎉
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50 h-fit">
          <h2 className="text-xl font-extrabold text-[#1A1A1A] mb-5">Order Summary</h2>
          <div className="space-y-3 mb-5">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-2 text-sm">
                <span>{item.emoji}</span>
                <span className="flex-1 text-gray-700 truncate">{item.name} × {item.quantity}</span>
                <span className="font-semibold text-[#1A1A1A] shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Delivery</span>
              <span>${DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-[#1A1A1A] text-lg pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
