'use client';
import { useState } from 'react';

export default function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-amber-50 p-24">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900">Choose Your Plan</h1>
          <p className="mt-4 text-xl text-blue-900">Select the best plan that fits your needs</p>
        </header>

        {/* Plan Selection Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className={`p-6 bg-white rounded-lg shadow-lg cursor-pointer ${selectedPlan === 'premium' ? 'ring-4 ring-blue-900' : ''}`}
            onClick={() => setSelectedPlan('premium')}
          >
            <h2 className="text-2xl font-bold text-blue-900">Premium Plan</h2>
            <p className="mt-2 text-blue-900">Free for 14 days</p>
            <ul className="mt-4 list-disc list-inside text-blue-900">
              <li>Access to all premium features</li>
              <li>Priority support</li>
              <li>Monthly updates</li>
            </ul>
            <div className="mt-8">
              <span className="text-3xl font-bold text-blue-900">$29.99/month</span>
            </div>
          </div>
          <div 
            className={`p-6 bg-white rounded-lg shadow-lg cursor-pointer ${selectedPlan === 'enterprise' ? 'ring-4 ring-blue-900' : ''}`}
            onClick={() => setSelectedPlan('enterprise')}
          >
            <h2 className="text-2xl font-bold text-blue-900">Enterprise Plan</h2>
            <p className="mt-2 text-blue-900">Free for 14 days</p>
            <ul className="mt-4 list-disc list-inside text-blue-900">
              <li>All premium features</li>
              <li>Dedicated account manager</li>
              <li>Custom solutions</li>
              <li>24/7 support</li>
            </ul>
            <div className="mt-8">
              <span className="text-3xl font-bold text-blue-900">$99.99/month</span>
            </div>
          </div>
        </section>

        {/* Checkout Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Checkout</h2>
          <p className="text-blue-900">You have selected the <span className="font-bold">{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan</span>.</p>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label className="block text-blue-900 text-sm font-bold mb-2" htmlFor="credit-card">
                Credit Card
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline" id="credit-card" type="text" placeholder="Credit Card Number" />
            </div>
            <button className="mt-8 px-6 py-3 bg-blue-900 text-amber-50 text-lg rounded-lg shadow-lg hover:bg-blue-700">
              Start Free Trial
            </button>
          </form>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 text-center">
          <p className="text-blue-900">&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
