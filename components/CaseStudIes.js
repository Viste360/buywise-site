// components/CaseStudies.js
import Image from 'next/image';

const studies = [
  {
    id: 'couple',
    title: "Carlos & Emma’s €14,000 Savings",
    img: '/images/case-couple-home.jpg',
    story: [
      "They loved a €495 000 flat but the terrace wasn’t legalized.",
      "We reviewed their Nota Simple, got all the paperwork in order, then negotiated:",
      "• €8 000 off to cover legal regularization",
      "• €6 000 further price reduction"
    ],
    savings: { legal: 8000, negotiation: 6000 }
  },
  {
    id: 'mary',
    title: "Mary’s €5,400 Savings",
    img: '/images/case-mary-home.jpg',
    story: [
      "Mary found a €350 000 townhouse—only to discover hidden community fees.",
      "We dug into the contract, secured full disclosure, and negotiated:",
      "• €5 400 off the final sale price"
    ],
    savings: { legal: 0, negotiation: 5400 }
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        {studies.map(({ id, title, img, story, savings }) => {
          const total = savings.legal + savings.negotiation;
          const legalPct = total ? (savings.legal / total) * 100 : 0;
          const negPct = total ? (savings.negotiation / total) * 100 : 0;

          return (
            <div key={id} className="space-y-6">
              <h2 className="text-3xl font-bold text-center">{title}</h2>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-full md:w-1/2">
                  <Image
                    src={img}
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-2 text-gray-700">
                  {story.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {savings.legal > 0 && (
                  <div>
                    <div className="flex justify-between text-sm text-gray-800">
                      <span>Legal Regularization (€{savings.legal.toLocaleString()})</span>
                      <span>{legalPct.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded mt-1">
                      <div
                        className="bg-green-600 h-2 rounded"
                        style={{ width: `${legalPct}%` }}
                      />
                    </div>
                  </div>
                )}

                {savings.negotiation > 0 && (
                  <div>
                    <div className="flex justify-between text-sm text-gray-800">
                      <span>Negotiation Savings (€{savings.negotiation.toLocaleString()})</span>
                      <span>{negPct.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded mt-1">
                      <div
                        className="bg-green-400 h-2 rounded"
                        style={{ width: `${negPct}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="text-right text-lg font-semibold">
                  Total Savings: <span className="text-green-700">€{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
