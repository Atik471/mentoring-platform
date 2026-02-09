'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');
    const [typedText, setTypedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const words = ['Python', 'UI/UX Design', 'Strategy', 'Entrepreneur'];

    const categories = [
        'Product Managers',
        'Career Coaches',
        'Software Engineers',
        'Leadership Mentors',
        'UX Designers',
        'Data Scientists',
    ];

    // Set mounted flag after hydration
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Typing animation effect
    useEffect(() => {
        if (!isMounted) return; // Don't run until component is mounted

        const currentWord = words[wordIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (typedText.length < currentWord.length) {
                    setTypedText(currentWord.substring(0, typedText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (typedText.length > 0) {
                    setTypedText(currentWord.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, wordIndex, words, isMounted]);

    return (
        <section className="relative bg-transparent py-20 px-4" style={{ color: '#fbeedd' }}>
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-semibold mb-4" style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 600 }}>
                    1-on-1 Mentorship in<br />
                    <span style={{ color: '#6ed9c0' }}>
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8" style={{ color: '#fbeedd' }}>
                    Learn a new skill, launch a project, land your dream career.
                </p>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-10">
                    <div className="relative flex-1 border-[1px] border-white rounded-sm">
                        <svg
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by company, skills or role"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-3 pl-12 rounded-sm bg-transparent placeholder-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            style={{ color: '#fbeedd' }}
                        />
                    </div>
                    <Button href="/search" className="sm:w-auto">
                        Find mentors
                    </Button>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-2 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Startup Founders - Centered below */}
                <div className="flex justify-center">
                    <button className="px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40">
                        Startup Founders
                    </button>
                </div>
            </div>
        </section>
    );
}
