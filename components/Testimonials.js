// components/Testimonials.js
export default function Testimonials() {
  const quotes = [
    { text: '“Saved over €12,000 and had complete peace of mind.”', author: 'Alice, Marbella' },
    { text: '“They negotiated my price down by 3%! Absolute pros.”', author: 'John, Málaga' },
    { text: '“From start to finish, they had our backs—and the savings show it.”', author: 'Emma & Carlos, Fuengirola' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        {quotes.map(({ text, author }, i) => (
          <blockquote
            key={i}
            className="bg-white p-6 rounded-lg shadow"
          >
            <p className="italic">{text}</p>
            <footer className="mt-4 font-semibold">— {author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
