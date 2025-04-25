// pages/_app.js
import '../styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from '../components/Layout';
import WhatsAppBubble from '../components/WhatsAppBubble';
import 'react-datepicker/dist/react-datepicker.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <WhatsAppBubble />
    </Layout>
  );
}
