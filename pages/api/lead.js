// pages/api/lead.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ← your newly deployed Web-App endpoint:
  const SHEET_URL =
    'https://script.google.com/macros/s/AKfycbw-dWTYfg2kn_AwyDly-0LeIVRRVBGPkLMfsEuYKKvRd9mQRVQhThrOaCrkOfNFN0P9/exec';

  try {
    const rr = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    // capture raw status + body for debugging
    const text = await rr.text();
    console.log('→ Apps-Script status:', rr.status);
    console.log('→ Apps-Script body:', text);

    if (!rr.ok) {
      // forward the script’s error/text up to the client
      return res.status(502).json({ error: text || `Apps-Script ${rr.status}` });
    }

    // success path: parse your script’s JSON and return
    const data = JSON.parse(text);
    return res.status(200).json(data);

  } catch (err) {
    console.error('Fetch to Apps-Script failed:', err);
    return res.status(500).json({ error: err.message });
  }
}
