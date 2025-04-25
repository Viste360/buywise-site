// components/ContactForm.js
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useT                             from '../lib/useTranslation'

const SHEET_URL =
  'https://script.google.com/macros/s/AKfycbw-dWTYfg2kn_AwyDly-0LeIVRRVBGPkLMfsEuYKKvRd9mQRVQhThrOaCrkOfNFN0P9/exec';

export default function ContactForm() {
  const { how } = useT(); 
  const [sent, setSent] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate]   = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd   = new FormData(form);

    const payload = {
      name:        fd.get('name'),
      email:       fd.get('email'),
      phone:       fd.get('phone'),
      stage:       fd.get('stage'),
      listings:    fd.get('listings'),
      availability:
        startDate && endDate
          ? `${startDate.toLocaleString()} – ${endDate.toLocaleString()}`
          : ''
    };

    try {
      const res = await fetch(SHEET_URL, {
        method: 'POST',
        body:   JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setSent(true);
    } catch (err) {
      alert('Submission failed – please try again.');
      console.error(err);
    }
  };

  return (
    <div id="contact" className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Let’s Get Started</h2>

          <input
            type="text" name="name"     placeholder="Your Name"     required
            className="w-full border-primary focus:ring-primary focus:border-primary rounded p-2"
          />
          <input
            type="email" name="email"   placeholder="Your Email"    required
            className="w-full border-primary focus:ring-primary focus:border-primary rounded p-2"
          />
          <input
            type="tel" name="phone"     placeholder="Your Phone / WhatsApp" required
            className="w-full border-primary focus:ring-primary focus:border-primary rounded p-2"
          />

          <fieldset className="space-y-2">
            <legend className="font-medium text-gray-700">Where are you in the buying process?</legend>
            {['Just looking', 'Already visited a property', 'Under offer / paperwork'].map(opt => (
              <label key={opt} className="inline-flex items-center space-x-2">
                <input type="radio" name="stage" value={opt} defaultChecked={opt==='Just looking'} className="form-radio text-primary"/>
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>

          <label className="block">
            <span className="text-gray-700">Listing links (URL)</span>
            <textarea
              name="listings" rows={3}
              placeholder="Paste property URLs you like"
              className="w-full border-primary focus:ring-primary focus:border-primary rounded p-2"
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Start date & time</span>
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                showTimeSelect
                timeIntervals={30}
                dateFormat="Pp"
                placeholderText="Start..."
                className="mt-1 block w-full border-primary rounded p-2"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">End date & time</span>
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                showTimeSelect
                timeIntervals={30}
                dateFormat="Pp"
                placeholderText="End..."
                className="mt-1 block w-full border-primary rounded p-2"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded transition"
          >
            Submit & Start Saving
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary">Thank you!</h3>
          <p>We’ve received your details and will be in touch shortly.</p>
        </div>
      )}
    </div>
  );
}
