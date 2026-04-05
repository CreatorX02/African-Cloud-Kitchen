# 🌍 African Cloud Kitchen

A full-featured food ordering web application celebrating the rich and diverse culinary heritage of Africa. Browse authentic dishes from across the continent, add them to your cart, and place your order — all in one seamless experience.

## ✨ Features

- **Home Page** — Hero banner, popular dishes, about section, and customer testimonials
- **Full Menu** — 26 authentic African dishes organized across 5 categories (Starters, Mains, Sides, Drinks, Desserts)
- **Category Filter** — Quickly browse dishes by course
- **Shopping Cart** — Add/remove items, adjust quantities, live total calculation
- **Checkout** — Delivery details form, payment method selection (Cash, Card, Mobile Money)
- **Order Confirmation** — Order number, estimated delivery time, and next-steps guidance
- **About Page** — Brand story, values, and team profiles
- **Responsive Design** — Mobile-first layout that works on all screen sizes

## 🍽️ Cuisines Featured

West Africa (Nigeria, Ghana, Senegal), East Africa (Ethiopia, Kenya), South Africa, and more — representing the full breadth of the continent's culinary traditions.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) (App Router) | Full-stack React framework |
| [TypeScript](https://www.typescriptlang.org) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| React Context API | Global cart state management |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Other Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── menu/page.tsx       # Menu page
│   ├── cart/page.tsx       # Shopping cart
│   ├── checkout/page.tsx   # Checkout form
│   ├── order-confirmation/ # Order success page
│   └── about/page.tsx      # About page
├── components/
│   ├── Header.tsx          # Navigation with cart badge
│   ├── Footer.tsx          # Site footer
│   ├── MenuCard.tsx        # Individual dish card
│   └── CategoryFilter.tsx  # Menu category tabs
├── context/
│   └── CartContext.tsx     # Global cart state (React Context)
└── data/
    └── menu.ts             # Menu items and categories data
```

## 🌐 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new):

```bash
npm run build
```

Then push to GitHub and connect to Vercel for automatic deployments. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
