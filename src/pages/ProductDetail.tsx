import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Star, Truck, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<number | string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [showError, setShowError] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
        <h2 className="text-2xl font-display font-bold text-gray-900">Product not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 flex items-center text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    setShowError(false);
    addToCart(product, quantity, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors active:scale-95"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to collection
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          {/* Image gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full aspect-square bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 px-4 sm:px-0 lg:mt-0"
          >
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-widest">{product.category}</p>
                <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-5xl">{product.name}</h1>
              </div>
              <p className="text-3xl font-display font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            {/* Reviews */}
            <div className="mt-6 flex items-center">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star key={rating} className="h-4 w-4 text-black fill-current" />
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-500">117 reviews</span>
            </div>

            <div className="mt-8">
              <p className="text-base text-gray-600 leading-relaxed font-light">{product.description}</p>
            </div>

            <div className="mt-10">
              {/* Sizes */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest">
                    {product.category.includes('Apparel') ? 'Size' : 'Size (US)'}
                  </h3>
                  <button className="text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-black transition-colors active:scale-95">
                    Size guide
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setShowError(false);
                      }}
                      className={`
                        py-3 flex items-center justify-center text-sm font-medium rounded-xl transition-all active:scale-95
                        ${selectedSize === size 
                          ? 'bg-black text-white shadow-md' 
                          : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-400'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {showError && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="mt-3 text-sm font-medium text-red-500"
                  >
                    Please select a size before adding to cart.
                  </motion.p>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center bg-white border border-gray-200 rounded-2xl px-2 h-14 w-full sm:w-32 justify-between">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-gray-500 hover:text-black transition-colors active:scale-95">-</button>
                  <span className="w-8 text-center font-medium text-gray-900">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-gray-500 hover:text-black transition-colors active:scale-95">+</button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className={`
                    flex-1 rounded-2xl h-14 flex items-center justify-center text-base font-medium text-white transition-all duration-300 active:scale-95
                    ${isAdded ? 'bg-green-500' : 'bg-black hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5'}
                  `}
                >
                  {isAdded ? (
                    <>
                      <Check className="mr-2 h-5 w-5" /> Added to Cart
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Truck className="h-5 w-5 mr-3 text-black" />
                  Free shipping over $100
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ShieldCheck className="h-5 w-5 mr-3 text-black" />
                  Authenticity guaranteed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
