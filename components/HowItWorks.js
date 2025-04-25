// components/HowItWorks.js
import { FaSearch, FaPaperPlane, FaFileAlt, FaPiggyBank } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    { Icon: FaSearch, label: '1. Find a property you love.' },
    { Icon: FaPaperPlane, label: '2. Send us the listing link & your availability.' },
    { Icon: FaFileAlt, label: '3. We review all paperwork & negotiate for you.' },
    { Icon: FaPiggyBank, label: '4. You save—price reduced or cashback (conditions apply).' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(({ Icon, label }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                <Icon className="text-green-600 text-xl" />
              </div>
              <p className="mt-4 text-gray-700 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
