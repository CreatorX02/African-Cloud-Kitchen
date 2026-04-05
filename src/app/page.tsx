import Link from 'next/link';
import { menuItems } from '@/data/menu';
import MenuCard from '@/components/MenuCard';

export default function HomePage() {
  const featured = menuItems.filter(item => item.popular).slice(0, 6);

  const testimonials = [
    { name: 'Amara O.', stars: 5, text: "The Jollof Rice here tastes exactly like my grandmother's recipe. Absolutely incredible — I order every week!" },
    { name: 'Kofi A.', stars: 5, text: "Nyama Choma and Zobo? A match made in heaven. The portion sizes are generous and the flavors are authentic." },
    { name: 'Fatima B.', stars: 5, text: "As a Senegalese expat, finding authentic Thieboudienne was a dream. African Cloud Kitchen nailed it!" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8590C] via-[#c44a08] to-[#2D5016] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🌍</div>
          <div className="absolute top-20 right-20 text-7xl">🍲</div>
          <div className="absolute bottom-10 left-1/4 text-8xl">🥘</div>
          <div className="absolute bottom-20 right-10 text-6xl">🌶️</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-[#F5A623] font-semibold text-lg mb-3 tracking-wide">🌍 Authentic African Cuisine</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Taste the Soul<br />of Africa
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              From the spicy streets of Lagos to the aromatic kitchens of Addis Ababa — we bring the richest, most authentic African flavors straight to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="bg-white text-[#E8590C] px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors text-lg">
                Explore Our Menu 🍽️
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors text-lg">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-[#E8590C] font-semibold uppercase tracking-widest text-sm mb-2">Customer Favorites</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Popular Dishes</h2>
          <p className="text-gray-500 mt-2 text-lg">Loved by thousands of African food enthusiasts</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/menu" className="inline-block bg-[#E8590C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c44a08] transition-colors text-lg">
            View Full Menu →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#2D5016] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F5A623] font-semibold uppercase tracking-widest text-sm mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Bridging Continents Through Food</h2>
              <p className="text-green-200 text-lg leading-relaxed mb-4">
                African Cloud Kitchen was born out of a deep love for African culture and cuisine. We believe food is a bridge — connecting the diaspora to home and introducing the world to Africa&apos;s extraordinary culinary heritage.
              </p>
              <p className="text-green-200 leading-relaxed mb-6">
                Every dish is prepared with traditional techniques and authentic ingredients sourced directly from African suppliers. We don&apos;t cut corners — we honor the recipes passed down through generations.
              </p>
              <Link href="/about" className="inline-block bg-[#F5A623] text-[#1A1A1A] px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🌍', title: '5 Regions', desc: 'West, East, South, North & Central Africa' },
                { emoji: '🍽️', title: '26 Dishes', desc: 'Authentic recipes from across the continent' },
                { emoji: '⭐', title: '4.9 Rating', desc: 'Loved by thousands of customers' },
                { emoji: '🚀', title: 'Fast Delivery', desc: '30-45 min to your doorstep' },
              ].map((stat, i) => (
                <div key={i} className="bg-green-800/50 rounded-2xl p-5 text-center">
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div className="font-bold text-xl">{stat.title}</div>
                  <div className="text-green-300 text-sm mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-[#E8590C] font-semibold uppercase tracking-widest text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[#F5A623] text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <p className="font-bold text-[#1A1A1A]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFF8F0] border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4">
            Ready to Experience Africa? 🌍
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Browse our full menu and order your favorite African dishes today. Delivery in 30–45 minutes.
          </p>
          <Link href="/menu" className="inline-block bg-[#E8590C] text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-[#c44a08] transition-colors shadow-lg">
            Order Now 🛒
          </Link>
        </div>
      </section>
    </div>
  );
}
