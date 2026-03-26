import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const [pathname, hash] = path.split('#');
    const targetPath = pathname || '/';

    if (location.pathname === targetPath) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      navigate(path, { replace: true });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex-shrink-0 flex items-center">
              <span className="font-display font-bold text-3xl tracking-tighter text-black">WALKIN.</span>
            </a>
            <div className="hidden sm:ml-12 sm:flex sm:space-x-8">
              <a href="/" onClick={(e) => handleNavClick(e, '/')} className="text-gray-500 hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/#categories" onClick={(e) => handleNavClick(e, '/#categories')} className="text-gray-500 hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors">
                Categories
              </a>
              <a href="/#products" onClick={(e) => handleNavClick(e, '/#products')} className="text-gray-500 hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors">
                Products
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative text-gray-400 hover:text-black transition-colors active:scale-95">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none transition-colors active:scale-95"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-100">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <a
              href="/"
              className="text-black block py-3 text-base font-medium"
              onClick={(e) => handleNavClick(e, '/')}
            >
              Home
            </a>
            <a
              href="/#categories"
              className="text-gray-500 hover:text-black block py-3 text-base font-medium transition-colors"
              onClick={(e) => handleNavClick(e, '/#categories')}
            >
              Categories
            </a>
            <a
              href="/#products"
              className="text-gray-500 hover:text-black block py-3 text-base font-medium transition-colors"
              onClick={(e) => handleNavClick(e, '/#products')}
            >
              Products
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
