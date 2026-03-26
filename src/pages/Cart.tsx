import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-[#fafafa]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2rem] p-12 shadow-sm border border-gray-100 flex flex-col items-center max-w-lg text-center"
        >
          <ShoppingBag className="h-20 w-20 text-gray-200 mb-6" />
          <h2 className="text-3xl font-display font-bold text-gray-900 tracking-tight">Your cart is empty</h2>
          <p className="mt-4 text-base text-gray-500 font-light">
            Looks like you haven't added any sneakers to your cart yet. Let's get you some fresh kicks.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center px-8 py-4 rounded-full text-sm font-medium text-white bg-black hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-5xl mb-10">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

            <ul role="list" className="space-y-6">
              {cart.map((item, index) => (
                <motion.li 
                  key={`${item.id}-${item.selectedSize}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="flex p-6 sm:p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 rounded-2xl object-center object-cover sm:w-40 sm:h-40"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="ml-6 flex-1 flex flex-col justify-between">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-lg font-display font-bold">
                            <Link to={`/product/${item.id}`} className="text-gray-900 hover:text-gray-600 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-2 flex text-sm">
                          <p className="text-gray-500">Size {item.selectedSize}</p>
                        </div>
                        <p className="mt-4 text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="mt-6 sm:mt-0 sm:pr-9 flex flex-col items-start sm:items-end justify-between">
                        <div className="flex items-center border border-gray-200 rounded-xl h-10 w-28 justify-between px-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-2 text-gray-500 hover:text-black transition-colors active:scale-95"
                          >
                            -
                          </button>
                          <span className="text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="p-2 text-gray-500 hover:text-black transition-colors active:scale-95"
                          >
                            +
                          </button>
                        </div>

                        <div className="absolute top-0 right-0 sm:static sm:mt-4">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="p-2 inline-flex text-gray-400 hover:text-red-500 transition-colors active:scale-95"
                          >
                            <span className="sr-only">Remove</span>
                            <Trash2 className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-10 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 lg:mt-0 lg:col-span-5 sticky top-28"
          >
            <h2 id="summary-heading" className="text-xl font-display font-bold text-gray-900 mb-8">
              Order Summary
            </h2>

            <dl className="space-y-6 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd className="font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Shipping estimate</dt>
                <dd className="font-medium text-gray-900">{cartTotal > 100 ? 'Free' : '$10.00'}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Tax estimate</dt>
                <dd className="font-medium text-gray-900">${(cartTotal * 0.08).toFixed(2)}</dd>
              </div>
              <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                <dt className="text-lg font-display font-bold text-gray-900">Total</dt>
                <dd className="text-xl font-display font-bold text-gray-900">
                  ${(cartTotal + (cartTotal > 100 ? 0 : 10) + (cartTotal * 0.08)).toFixed(2)}
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black rounded-2xl py-4 text-base font-medium text-white hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center active:scale-95"
              >
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link to="/" className="text-black font-medium hover:underline underline-offset-4 transition-all">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
