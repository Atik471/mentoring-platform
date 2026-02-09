'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Design Mentors', href: '#' },
    { label: 'Startup Mentor', href: '#' },
    { label: 'AI Mentors', href: '#' },
    { label: 'Product Managers', href: '#' },
    { label: 'Marketing Coaches', href: '#' },
    { label: 'Leadership Mentors', href: '#' },
    { label: 'Career Coaches', href: '#' },
    { label: 'Top Mentors', href: '#' },
  ];

  return (
    <nav className="bg-transparent text-white sticky top-0 z-50 my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl hover:opacity-80 transition">
            <Image src="/mc-logo-white.svg" alt="Logo" width={180} height={40} priority />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md border-[1px] border-white rounded-sm">
            <div className="relative w-full">
              <svg
                className="absolute left-3 top-4 w-5 h-5 text-slate-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <input
                type="text"
                placeholder="Search by company, skills or role"
                className="w-full px-4 py-3 pl-12 rounded-sm bg-transparent text-white placeholder-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="transition flex items-center gap-1">
                For Businesses
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 first:rounded-t-md">Mentorship for Teams</Link>
                <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Information for Employers</Link>
                <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 last:rounded-b-md">Fractional Executives</Link>
              </div>
            </div>

            <Link href="/login" className="px-4 py-2 border-[2px] border-transparent hover:border-blue-500 hover:text-blue- rounded-full transition">
              Login
            </Link>
            <Button href="/mentors">
              Browse all mentors
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-slate-700 rounded-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 hover:bg-slate-700 rounded-lg transition"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <Link href="/login" className="block px-4 py-2 hover:bg-slate-700 rounded-lg transition text-center">
                Login
              </Link>
              <Button href="/mentors" className="w-full">
                Browse all mentors
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
