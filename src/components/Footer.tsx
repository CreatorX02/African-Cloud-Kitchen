import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D5016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="font-bold text-xl">African Cloud Kitchen</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Bringing the rich and authentic flavors of Africa to your doorstep. Made with love, tradition, and the finest ingredients.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-green-200 text-sm">
              <li>📍 123 Ubuntu Street, Lagos, Nigeria</li>
              <li>📞 +234 800 AFRICA (237422)</li>
              <li>✉️ hello@africancloudkitchen.com</li>
              <li>🕐 Mon–Sun: 10am – 10pm</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <span className="cursor-pointer hover:text-[#F5A623] transition-colors">Facebook</span>
              <span className="cursor-pointer hover:text-[#F5A623] transition-colors">Instagram</span>
              <span className="cursor-pointer hover:text-[#F5A623] transition-colors">Twitter</span>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} African Cloud Kitchen. All rights reserved. Made with ❤️ for Africa.</p>
        </div>
      </div>
    </footer>
  );
}
