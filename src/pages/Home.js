import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants/constant';
// Dummy product list (in real apps, you’d fetch this)
const products = [
  { id: 1, name: 'iPhone 14', price: 799 },
  { id: 2, name: 'MacBook Air', price: 1199 },
  { id: 3, name: 'Apple Watch', price: 399 },
  { id: 4, name: 'AirPods Pro', price: 249 },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">{PRODUCTS}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
