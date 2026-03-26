import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, CreditCard, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
  });

  const subtotal = cartTotal;
  const shipping = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (cart.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md w-full bg-white shadow-sm border border-gray-100 rounded-[2rem] p-10 text-center"
        >
          <CheckCircle className="mx-auto h-20 w-20 text-black mb-6" />
          <h2 className="text-4xl font-display font-bold text-gray-900 tracking-tight">Confirmed.</h2>
          <p className="mt-4 text-base text-gray-500 font-light">
            Thank you for your purchase. We've received your order and will begin processing it right away.
          </p>
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-sm font-medium text-gray-900">Order Number: #WK-{Math.floor(Math.random() * 1000000)}</p>
            <p className="text-sm text-gray-500 mt-2">A confirmation email has been sent to {formData.email}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-10 w-full flex justify-center py-4 px-4 rounded-2xl text-sm font-medium text-white bg-black hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-5xl mb-10">Checkout</h1>
        
        <div className="max-w-2xl mx-auto lg:max-w-none lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          {/* Order summary */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-8 sticky top-28">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-8">Order Summary</h2>

              <ul role="list" className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.selectedSize}`} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-center object-cover" referrerPolicy="no-referrer" />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-bold text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Size {item.selectedSize}</p>
                      <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <dl className="border-t border-gray-100 pt-6 mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Taxes</dt>
                  <dd className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-6">
                  <dt className="text-lg font-display font-bold text-gray-900">Total</dt>
                  <dd className="text-xl font-display font-bold text-gray-900">${total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Checkout form */}
          <div className="mt-10 lg:mt-0 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-8 sm:p-10">
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="mb-10">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  />
                </div>

                <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100">
                  <h2 className="text-xl font-display font-bold text-gray-900 flex items-center mb-6">
                    <CreditCard className="mr-3 h-6 w-6 text-black" /> Payment
                  </h2>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-start">
                    <Lock className="h-5 w-5 text-gray-500 mt-0.5 mr-4" />
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Secure Payment</h3>
                      <p className="mt-1 text-sm text-gray-500 font-light">
                        You will be redirected to our secure payment partner to complete your purchase.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full bg-black rounded-2xl py-4 text-base font-medium text-white hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex justify-center items-center active:scale-95 ${isProcessing ? 'opacity-75 cursor-not-allowed active:scale-100' : ''}`}
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      `Pay $${total.toFixed(2)}`
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
