// components/FAQs.js
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do you save me money?',
    answer:
      'We lower your purchase price before you sign—and only get paid if you save.',
  },
  {
    question: 'Do you handle everything?',
    answer:
      'Yes—price negotiation, paperwork review, contracts and mortgage support. We’ve got your back end-to-end.',
  },
  {
    question: 'I’ve already visited or reserved—can you still help?',
    answer:
      'Best to contact us before you commit. If you’ve signed an agreement, our negotiating power may be limited.',
  },
  {
    question: 'How do I get my savings?',
    answer:
      'You choose: an instant reduction on your purchase price or a cashback refund after closing.',
  },
  {
    question: 'Where do you operate?',
    answer:
      'Nationwide in Spain, with a focus on the Costa del Sol and major cities. We serve both expats and locals.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-100 focus:outline-none"
              >
                <span className="font-medium text-gray-800">
                  {item.question}
                </span>
                {openIndex === i ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === i && (
                <div className="p-4 bg-gray-50 text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
