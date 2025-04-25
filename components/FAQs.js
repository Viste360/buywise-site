import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import useT                             from '../lib/useTranslation'

export default function FAQs() {
  const { faq } = useT();             // pulls { title, items: [ {q,a}, … ] } from the current locale
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {faq.title}
        </h2>
        <div className="space-y-4">
          {faq.items.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex justify-between items-center p-4 bg-white hover:bg-gray-100 focus:outline-none"
              >
                <span className="font-medium text-gray-800">
                  {item.q}
                </span>
                {openIndex === i
                  ? <FaChevronUp className="text-gray-500" />
                  : <FaChevronDown className="text-gray-500" />}
              </button>
              {openIndex === i && (
                <div className="p-4 bg-gray-50 text-gray-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
