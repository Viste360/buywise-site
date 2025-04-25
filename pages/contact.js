// pages/contact.js
import Head from 'next/head'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – Buywise</title>
        <meta name="description" content="Get in touch with Buywise Spain" />
      </Head>
      <main className="pt-20">
        <ContactForm />
      </main>
    </>
  )
}
