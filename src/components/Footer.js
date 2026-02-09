'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="px-4 md:px-20 pb-10 pt-10"
            style={{
                background: 'linear-gradient(180deg, #fbeedd 0%, #a8c5b8 15%, #4a7c6f 40%, #2d5a50 60%, #1a3d35 80%, #012419 100%)',
            }}>
            <div
                className="max-w-7xl mx-auto rounded-md p-12 md:p-16 text-white text-sm"
                style={{ backgroundColor: '#1a3d35' }}
            >
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Logo & Description */}
                    <div className="lg:w-1/3">
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/mc-logo-white.svg"
                                    alt="MentorCruise Logo"
                                    width={28}
                                    height={28}
                                />
                                <span
                                    className="text-2xl font-bold tracking-tight"
                                    style={{ fontFamily: '"Shippori Mincho", serif' }}
                                >
                                    MentorCruise
                                </span>
                            </div>
                        </Link>

                        <p className="text-[#a8c5b8] mb-8 leading-relaxed max-w-sm">
                            Your trusted source to find highly-vetted mentors & industry professionals to move your career ahead.
                        </p>

                        <div className="mb-8">
                            <h4 className="font-bold mb-2">Contact</h4>
                            <a href="mailto:hello@mentorcruise.com" className="text-[#a8c5b8] hover:text-white transition-colors">
                                hello@mentorcruise.com
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            {/* X / Twitter */}
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            {/* Youtube */}
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Platform */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-base mb-2 text-[#a8c5b8]">Platform</h4>
                            {['Browse Mentors', 'Book a Session', 'Become a Mentor', 'Mentorship for Teams', 'Testimonials'].map(item => (
                                <Link key={item} href="#" className="text-white hover:text-[#a8c5b8] transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-base mb-2 text-[#a8c5b8]">Resources</h4>
                            {['Newsletter', 'Books', 'Perks', 'Templates', 'Career Paths', 'Blog'].map(item => (
                                <Link key={item} href="#" className="text-white hover:text-[#a8c5b8] transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-base mb-2 text-[#a8c5b8]">Company</h4>
                            {['Case Studies', 'Partner Program', 'Code of Conduct', 'Privacy Policy', 'DMCA'].map(item => (
                                <Link key={item} href="#" className="text-white hover:text-[#a8c5b8] transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Explore & Support */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-semibold text-base mb-2 text-[#a8c5b8]">Explore</h4>
                                {['Fractional Executives', 'Services & Training', 'Part-Time Experts'].map(item => (
                                    <Link key={item} href="#" className="text-white hover:text-[#a8c5b8] transition-colors">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-semibold text-base mb-2 text-[#a8c5b8]">Support</h4>
                                {['FAQ', 'Contact'].map(item => (
                                    <Link key={item} href="#" className="text-white hover:text-[#a8c5b8] transition-colors">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
