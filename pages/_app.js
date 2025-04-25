// pages/_app.js
import '../styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'aos/dist/aos.css';             // ← AOS styles
import { useEffect } from 'react';
import AOS from 'aos';                 // ← AOS core
import { DefaultSeo } from 'next-seo';

import Layout from '../components/Layout';
import WhatsAppBubble from '../components/WhatsAppBubble';

function MyApp({ Component, pageProps }) {
  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      once: true,     // animate once per element
      duration: 600,  // default animation duration
    });
  }, []);

  return (
    <>
      <DefaultSeo
        title="Buywise — Negotiate Your Home Price Down"
        description="Full 360° Home buyer representation—negotiation, legal & mortgage support. No savings, no fee."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://buywise.es/',
          site_name: 'Buywise',
          images: [
            {
              url: 'https://buywise.es/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Buywise — Save More When You Buy',
            },
          ],
        }}
        twitter={{
          handle: '@YourTwitter',      // ← replace with your real handle
          site: '@YourTwitter',
          cardType: 'summary_large_image',
        }}
      />

      <Layout>
        <Component {...pageProps} />
        <WhatsAppBubble />
      </Layout>
    </>
  );
}

export default MyApp;
