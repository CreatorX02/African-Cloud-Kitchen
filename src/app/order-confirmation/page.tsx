'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function OrderConfirmationContent() {
  const params = useSearchParams();
  const orderNumber = params.get('order') || 'ACK-XXXXXX';
  const name = params.get('name') || 'Valued Customer';

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl mb-6 animate-bounce">✅</div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D5016] mb-3">Order Confirmed!</h1>
      <p className="text-xl text-gray-600 mb-2">Thank you, <span className="font-bold text-[#E8590C]">{name}</span>! 🎉</p>
      <p className="text-gray-500 mb-8">Your delicious African meal is being prepared with love.</p>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50 mb-8 text-left">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#1A1A1A]">Order Details</h2>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Confirmed</span>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Order Number</span>
            <span className="font-bold text-[#E8590C] font-mono">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Estimated Delivery</span>
            <span className="font-semibold">30–45 minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status</span>
            <span className="font-semibold text-green-600">🍳 Being Prepared</span>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-5 mb-8 text-left">
        <h3 className="font-bold text-[#1A1A1A] mb-2">What happens next?</h3>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>✅ Your order has been received and confirmed</li>
          <li>🍳 Our chefs are preparing your authentic African meal</li>
          <li>📦 Your order will be packaged with care</li>
          <li>🛵 A delivery rider will bring it straight to your door</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button disabled className="bg-gray-200 text-gray-400 px-8 py-3 rounded-full font-bold cursor-not-allowed">
          Track Order (Coming Soon)
        </button>
        <Link href="/menu" className="bg-[#E8590C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c44a08] transition-colors">
          Order Again 🍽️
        </Link>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-4xl animate-spin">⏳</div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
