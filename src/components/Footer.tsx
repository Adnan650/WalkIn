import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8 xl:col-span-1">
            <span className="font-display font-bold text-4xl tracking-tighter text-white">WALKIN.</span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Elevating your stride with premium, minimalist footwear designed for the modern world.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-100 tracking-widest uppercase">Shop</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Best Sellers</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Sale</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-semibold text-gray-100 tracking-widest uppercase">Support</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Returns</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-100 tracking-widest uppercase">Company</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Journal</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xs font-semibold text-gray-100 tracking-widest uppercase">Legal</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 Walkin Sneakers. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-500">
            <span>United States (USD)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
