import { useState } from 'react';
import useT          from '../lib/useTranslation';

export default function Calculator() {
  const { calculator } = useT();          // now pulls title, labels, etc.
  const [price, setPrice] = useState('');
  const parsed = parseFloat(price) || 0;
  const savings = parsed * 0.015;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-primary">
        {calculator.title}
      </h2>

      <label className="block mb-6">
        <span className="block text-gray-700 mb-1">
          {calculator.label_price}
        </span>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="e.g. 500 000"
          className="w-full border-primary focus:ring-primary focus:border-primary rounded p-2"
        />
      </label>

      {parsed > 0 && (
        <div className="mb-6 text-center">
          <p className="text-gray-800 font-medium">
            {calculator.savings_text}
          </p>
          <p className="mt-2 text-3xl font-extrabold text-green-600">
            €{savings.toFixed(2)}
          </p>
        </div>
      )}

      <p className="text-center text-sm text-gray-600 font-semibold">
        {calculator.no_fee_text}
      </p>
    </div>
  );
}
