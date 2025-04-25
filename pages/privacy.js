import Head from 'next/head'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – BuyWise Spain</title>
        <meta name="description" content="Privacy policy for BuyWise Spain" />
      </Head>
      <main className="max-w-2xl mx-auto p-8 space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p>At BuyWise Spain, we value your privacy. This policy explains how we collect and use your data.</p>
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>We collect name, email, phone and availability when you submit our form.</p>
        <h2 className="text-2xl font-semibold">2. How We Use It</h2>
        <p>We use it to schedule viewings, negotiate on your behalf, and contact you via WhatsApp or email.</p>
        <h2 className="text-2xl font-semibold">3. Third-Party Sharing</h2>
        <p>We do not sell your data. We only share with our legal/mortgage partners as needed.</p>
        <h2 className="text-2xl font-semibold">4. Your Rights</h2>
        <p>You may request data deletion at any time by emailing privacy@buywise.es.</p>
        {/* … */}
      </main>
    </>
  )
}
