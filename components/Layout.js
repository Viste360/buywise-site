// components/Layout.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Footer from './Footer';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo only */}
          <Link href="/" className="block">
            <Image
              src="/buywise-logo.png"
              alt="BuyWise Spain"
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <Link href="#faq" className="hover:text-primary">FAQ</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col p-4 space-y-2 text-gray-600">
              <Link href="#faq" className="hover:text-primary">FAQ</Link>
              <Link href="#contact" className="hover:text-primary">Contact</Link>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
