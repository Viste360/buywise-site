// pages/faq.js
import Head from 'next/head'
import FAQs from '../components/FAQs'

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ – Buywise</title>
        <meta name="description" content="Frequently Asked Questions – Buywise" />
      </Head>
      <main className="pt-20">
        <FAQs />
      </main>
    </>
  )
}
