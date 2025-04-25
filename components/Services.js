// components/Services.js
import { FaHandshake, FaGavel, FaPiggyBank } from 'react-icons/fa';
import useT from '../lib/useTranslation'

export default function Services() {
  const { how } = useT(); 
  const items = [
    {
      Icon: FaHandshake,
      title: 'Expert Negotiation',
      desc: 'We haggle down the list price before you sign, saving you real money up front.',
    },
    {
      Icon: FaGavel,
      title: 'Legal Guidance',
      desc: 'Trusted lawyers review contracts so you never get caught out by hidden fees.',
    },
    {
      Icon: FaPiggyBank,
      title: 'Mortgage Support',
      desc: 'We connect you with the best lenders and help secure your financing seamlessly.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our 360° Buyer Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Icon className="text-5xl text-primary mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
