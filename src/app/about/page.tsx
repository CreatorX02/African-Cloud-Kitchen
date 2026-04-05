import Link from 'next/link';

export default function AboutPage() {
  const values = [
    { emoji: '🌿', title: 'Authenticity', desc: 'Every recipe stays true to its cultural roots. We never compromise on authenticity or traditional cooking methods.' },
    { emoji: '✨', title: 'Quality', desc: 'We source the finest African spices and ingredients directly from local suppliers across the continent.' },
    { emoji: '🤝', title: 'Community', desc: 'We celebrate the African diaspora, connecting people to their heritage and introducing others to our culture.' },
    { emoji: '🥬', title: 'Freshness', desc: 'All dishes are prepared fresh daily. No frozen shortcuts — just vibrant, fresh ingredients every time.' },
  ];

  const team = [
    { name: 'Chef Adaeze Okafor', role: 'Head Chef & Co-Founder', origin: '🇳🇬 Lagos, Nigeria', emoji: '👩‍🍳' },
    { name: 'Kwame Mensah', role: 'Kitchen Director & Co-Founder', origin: '🇬🇭 Accra, Ghana', emoji: '👨‍🍳' },
    { name: 'Amina Al-Rashid', role: 'Pastry Chef', origin: '🇿🇦 Cape Town, South Africa', emoji: '👩‍🍳' },
    { name: 'Elias Tadesse', role: 'Sous Chef', origin: '🇪🇹 Addis Ababa, Ethiopia', emoji: '👨‍🍳' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2D5016] to-[#1a3009] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#F5A623] font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About African Cloud Kitchen</h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
            A love letter to the African continent, expressed through the universal language of food.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1A1A1A] mb-5">How It All Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              African Cloud Kitchen was founded in 2020 by Chef Adaeze Okafor and Kwame Mensah, two childhood friends who shared a deep passion for their home continent&apos;s extraordinary culinary traditions. As members of the African diaspora living abroad, they felt a profound longing for the authentic tastes of home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              What started as weekend cooking sessions for friends and family quickly grew into something bigger. People were amazed by the diversity and richness of African cuisine — from the smoky Jollof Rice of West Africa, to the tangy Injera of Ethiopia, to the hearty Nyama Choma of Kenya.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, African Cloud Kitchen serves thousands of customers across multiple cities, bringing authentic African flavors to anyone who craves a taste of the continent. Our mission hasn&apos;t changed: every meal should feel like a warm hug from home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '🍲', text: 'Family Recipes' },
              { emoji: '🌍', text: '5 African Regions' },
              { emoji: '👨‍👩‍👧‍👦', text: '10,000+ Customers' },
              { emoji: '⭐', text: 'Award Winning' },
            ].map((item, i) => (
              <div key={i} className="bg-[#FFF8F0] border border-orange-100 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-3">{item.emoji}</div>
                <div className="font-bold text-[#1A1A1A]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#E8590C] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-bold italic mb-4">
            &ldquo;Food is not just sustenance — it is culture, memory, love, and identity. We cook with all of those.&rdquo;
          </p>
          <p className="text-orange-200 font-semibold">— Chef Adaeze Okafor, Co-Founder</p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-3">Our Values</h2>
          <p className="text-gray-500 text-lg">The principles that guide every dish we make</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50 text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">{val.emoji}</div>
              <h3 className="font-bold text-xl text-[#1A1A1A] mb-2">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#FFF8F0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-3">Meet Our Team</h2>
            <p className="text-gray-500 text-lg">Passionate chefs from across Africa</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50 text-center hover:shadow-md transition-shadow">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-[#1A1A1A] text-lg">{member.name}</h3>
                <p className="text-[#E8590C] font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D5016] text-white py-16">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Taste Africa? 🌍</h2>
          <p className="text-green-200 mb-8 text-lg">
            Join thousands of food lovers who have discovered the magic of authentic African cuisine.
          </p>
          <Link href="/menu" className="inline-block bg-[#F5A623] text-[#1A1A1A] px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-400 transition-colors">
            Explore Our Menu 🍽️
          </Link>
        </div>
      </section>
    </div>
  );
}
