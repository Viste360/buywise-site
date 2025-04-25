// components/WhatsAppBubble.js
import Link           from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppBubble() {
  return (
    <Link
      href="https://wa.me/message/5IYX266Z5KPKK1"
      className="
        fixed bottom-6 right-6 z-50
        bg-[#25D366] hover:bg-[#1ebe57]
        text-white p-4 rounded-full shadow-lg
        transition-transform hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </Link>
  )
}
