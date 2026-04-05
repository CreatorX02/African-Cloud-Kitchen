export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'sides' | 'drinks' | 'desserts';
  emoji: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters
  { id: 'akara', name: 'Akara', description: 'Crispy black-eyed pea fritters seasoned with peppers and onions, served with spicy dipping sauce', price: 8.99, category: 'starters', emoji: '🫘', popular: true },
  { id: 'chin-chin', name: 'Chin Chin', description: 'Crunchy fried dough snacks lightly sweetened, a beloved West African treat', price: 5.99, category: 'starters', emoji: '🍘' },
  { id: 'suya-skewers', name: 'Suya Skewers (2 pcs)', description: 'Spiced grilled beef skewers with suya spice blend, served with sliced onions and tomatoes', price: 12.99, category: 'starters', emoji: '🍢', popular: true },
  { id: 'plantain-chips', name: 'Plantain Chips', description: 'Thinly sliced plantains fried to golden perfection with a pinch of sea salt', price: 6.99, category: 'starters', emoji: '🍌' },
  
  // Mains
  { id: 'jollof-chicken', name: 'Jollof Rice with Chicken', description: 'The iconic West African party rice slow-cooked in tomato stew with aromatic spices, served with grilled chicken', price: 16.99, category: 'mains', emoji: '🍚', popular: true },
  { id: 'egusi-eba', name: 'Egusi Soup with Eba', description: 'Rich melon seed soup with assorted meat, leafy greens, and palm oil, served with golden eba', price: 18.99, category: 'mains', emoji: '🥣', popular: true },
  { id: 'pounded-yam-bitter-leaf', name: 'Pounded Yam with Ofe Onugbu', description: 'Silky smooth pounded yam paired with authentic bitter leaf soup and choice cuts of meat', price: 19.99, category: 'mains', emoji: '🫙' },
  { id: 'fufu-groundnut', name: 'Fufu with Groundnut Soup', description: 'Hand-pounded fufu served with creamy groundnut soup loaded with chicken and vegetables', price: 17.99, category: 'mains', emoji: '🥜' },
  { id: 'thieboudienne', name: 'Thieboudienne', description: "Senegal's national dish - seasoned fish and vegetables cooked in tomato sauce over long-grain rice", price: 21.99, category: 'mains', emoji: '🐟', popular: true },
  { id: 'injera-doro-wat', name: 'Injera with Doro Wat', description: 'Ethiopian sourdough flatbread served with slow-braised chicken stew in berbere spice sauce', price: 22.99, category: 'mains', emoji: '🫓' },
  { id: 'bobotie', name: 'Bobotie', description: 'South African spiced minced meat bake with egg custard topping, served with yellow rice and chutney', price: 19.99, category: 'mains', emoji: '🥧' },
  { id: 'nyama-choma', name: 'Nyama Choma', description: 'Kenyan-style slow-roasted goat meat seasoned with herbs and spices, served with ugali and kachumbari', price: 24.99, category: 'mains', emoji: '🍖', popular: true },
  
  // Sides
  { id: 'dodo', name: 'Fried Plantain (Dodo)', description: 'Sweet ripe plantains fried to caramelized perfection', price: 5.99, category: 'sides', emoji: '🍌', popular: true },
  { id: 'jollof-plain', name: 'Jollof Rice (plain)', description: 'Classic West African tomato-based rice cooked with aromatic spices', price: 6.99, category: 'sides', emoji: '🍚' },
  { id: 'coleslaw', name: 'Coleslaw', description: 'Creamy African-style coleslaw with a hint of sweetness', price: 3.99, category: 'sides', emoji: '🥗' },
  { id: 'moi-moi', name: 'Moi Moi', description: 'Steamed bean pudding made from black-eyed peas with peppers, onions, and choice fillings', price: 7.99, category: 'sides', emoji: '🫘' },
  
  // Drinks
  { id: 'zobo', name: 'Zobo', description: 'Refreshing hibiscus flower drink with ginger and citrus notes', price: 3.99, category: 'drinks', emoji: '🌺', popular: true },
  { id: 'kunu', name: 'Kunu', description: 'Traditional millet-based drink lightly spiced with ginger and cloves', price: 3.99, category: 'drinks', emoji: '🌾' },
  { id: 'chapman', name: 'Chapman', description: 'Nigerian classic cocktail with grenadine, Fanta, Sprite, cucumber, and lemon', price: 4.99, category: 'drinks', emoji: '🍹', popular: true },
  { id: 'palm-wine', name: 'Palm Wine', description: 'Naturally fermented palm tree sap with a slightly sweet and tangy flavor', price: 5.99, category: 'drinks', emoji: '🌴' },
  { id: 'tamarind-juice', name: 'Tamarind Juice', description: 'Sweet and tangy tamarind drink with a hint of spice', price: 3.99, category: 'drinks', emoji: '🍋' },
  
  // Desserts
  { id: 'puff-puff', name: 'Puff Puff', description: 'Light and airy deep-fried dough balls dusted with sugar, a West African favorite', price: 5.99, category: 'desserts', emoji: '🍩', popular: true },
  { id: 'mandazi', name: 'Mandazi', description: 'East African fried dough with cardamom, slightly sweet and perfect with tea', price: 6.99, category: 'desserts', emoji: '🥐' },
  { id: 'malva-pudding', name: 'Malva Pudding', description: 'Warm South African sponge pudding soaked in sweet cream sauce, served with vanilla ice cream', price: 7.99, category: 'desserts', emoji: '🍮', popular: true },
  { id: 'koeksisters', name: 'Koeksisters', description: 'Braided South African pastry soaked in cold sugar syrup with a crispy outside', price: 6.99, category: 'desserts', emoji: '🥨' },
];

export const categories = [
  { id: 'all', name: 'All Items', emoji: '🍽️' },
  { id: 'starters', name: 'Starters', emoji: '🥗' },
  { id: 'mains', name: 'Main Courses', emoji: '🍲' },
  { id: 'sides', name: 'Sides', emoji: '🍚' },
  { id: 'drinks', name: 'Drinks', emoji: '🥤' },
  { id: 'desserts', name: 'Desserts', emoji: '🍮' },
];
