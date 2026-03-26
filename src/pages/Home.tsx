import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { products, categories } from '../data/products';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-12 max-w-7xl mx-auto w-full">
        <div className="relative bg-black rounded-[2rem] overflow-hidden h-[70vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-60"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2000&auto=format&fit=crop"
              alt="Sneakers background"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-8 sm:px-16 lg:px-24 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl font-display font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl leading-[0.9]"
            >
              ELEVATE<br/>YOUR STRIDE.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg text-gray-300 max-w-xl font-light"
            >
              Discover our latest collection of premium sneakers. Minimalist design, maximum comfort, built for the modern streets.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a 
                href="#products" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('products');
                  if (element) {
                    const navbarHeight = 80;
                    const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                  navigate('/#products', { replace: true });
                }}
                className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all active:scale-95 text-center"
              >
                Shop Collection
              </a>
              <a 
                href="#categories" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('categories');
                  if (element) {
                    const navbarHeight = 80;
                    const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                  navigate('/#categories', { replace: true });
                }}
                className="px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-medium hover:bg-white/20 transition-all active:scale-95 text-center"
              >
                Explore Categories
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 hide-scroll-bar space-x-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 active:scale-95 ${
                  activeCategory === category
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-display font-bold tracking-tight text-gray-900">
              {activeCategory === 'All' ? 'Latest Drops' : `${activeCategory} Collection`}
            </h2>
            <span className="text-sm text-gray-500 font-medium">{filteredProducts.length} Results</span>
          </div>
          
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-8 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-black shadow-sm">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                <div className="mt-5 flex flex-col flex-1 px-1">
                  <h3 className="text-lg font-display font-bold text-gray-900">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-[2rem] overflow-hidden relative">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="CTA" />
            </div>
            <div className="relative z-10 py-20 px-6 sm:py-24 sm:px-12 lg:px-20 flex flex-col items-center text-center">
              <h2 className="text-4xl font-display font-bold text-white sm:text-5xl tracking-tight">
                Join the Culture.
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-2xl font-light">
                Subscribe to our newsletter and get 15% off your first order. Early access to drops, exclusive colorways, and more.
              </p>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                  (e.target as HTMLFormElement).reset();
                  setTimeout(() => setSubscribed(false), 3000);
                }}
                className="mt-10 w-full max-w-md flex flex-col sm:flex-row gap-3"
              >
                <input type="email" required placeholder="Enter your email" className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md" />
                <button type="submit" className="bg-white text-black font-medium rounded-full px-8 py-4 hover:bg-gray-100 transition-all active:scale-95">
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
