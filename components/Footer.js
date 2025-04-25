// components/Footer.js
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-6 text-gray-600">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <span>© {year} BuyWise Spain. All rights reserved.</span>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
