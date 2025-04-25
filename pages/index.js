// pages/index.js
import Head from 'next/head';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudIes';
import ContactForm from '../components/ContactForm';
import FAQs from '../components/FAQs';

export default function Home() {
  return (
    <>
      <Head>
        <title>BuyWise Spain | Buy Smarter. Save Thousands.</title>
        <meta
          name="description"
          content="BuyWise Spain helps you save thousands on property purchases in Spain. No buy, no fee. Only pay if you save."
        />
      </Head>

      <Hero />

      <main className="space-y-16">
        <HowItWorks />
        <Services />

        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <Calculator />
          </div>
        </section>

        <Testimonials />

        {/* Real-world examples */}
        <CaseStudies />

        <section id="contact" className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <ContactForm />
          </div>
        </section>

        <FAQs />
      </main>
    </>
  );
}
