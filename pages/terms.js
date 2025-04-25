// components/Calculator.js
import { useState } from 'react';

export default function Calculator() {
  const [price, setPrice] = useState('');
  const parsed = parseFloat(price) || 0;
  const savingsRate = 0.015; // 1.5%
  const savings = parsed * savingsRate;

  return (
    <div className="relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-primary">
        BuyWise Calculator
      </h2>

      <label className="block mb-6">
        <span className="block text-gray-700 mb-1">Property Price (€):</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="e.g. 500 000"
          className="w-full border-primary focus:ring-primary focus:border-primary rounded p-2"
        />
      </label>

      {parsed > 0 && (
        <div className="mb-6 text-center">
          <span className="block text-gray-800 font-medium">
            Your approximate savings before sale:
          </span>
          <span className="mt-2 text-3xl font-extrabold text-green-600 block">
            €{savings.toFixed(2)}
          </span>
        </div>
      )}

      <p className="text-center text-sm text-gray-600 font-semibold">
        No purchase. No fee. Guaranteed final Savings.
      </p>
    </div>
  );
}
