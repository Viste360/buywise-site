// components/Layout.js
import { useState }        from 'react'
import { useRouter }       from 'next/router'
import Link                from 'next/link'
import Image               from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'
import useT                from '../lib/useTranslation'
import Footer              from './Footer'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, pathname, query } = useRouter()
  const other = locale === 'en' ? 'es' : 'en'
  const { brand, nav } = useT()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link
            href="/"
            locale={locale}
            className="block"
          >
            <Image
              src="/buywise-logo.png"
              alt={brand}
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Desktop nav + language switch */}
          <div className="hidden md:flex items-center space-x-6 text-gray-600">
            <Link
              href={{ pathname, query, hash: 'faq' }}
              locale={locale}
              className="hover:text-primary"
            >
              {nav.faq}
            </Link>
            <Link
              href={{ pathname, query, hash: 'contact' }}
              locale={locale}
              className="hover:text-primary"
            >
              {nav.contact}
            </Link>
            <Link
              href={{ pathname, query }}
              locale={other}
              className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded"
            >
              {other.toUpperCase()}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col p-4 space-y-2 text-gray-600">
              <Link
                href={{ pathname, query, hash: 'faq' }}
                locale={locale}
                className="hover:text-primary"
              >
                {nav.faq}
              </Link>
              <Link
                href={{ pathname, query, hash: 'contact' }}
                locale={locale}
                className="hover:text-primary"
              >
                {nav.contact}
              </Link>
              <Link
                href={{ pathname, query }}
                locale={other}
                className="mt-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded"
              >
                {other.toUpperCase()}
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}
