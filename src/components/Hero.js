'use client';

import { useState } from 'react';
import Button from './Button';

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        'Product Managers',
        'Career Coaches',
        'Software Engineers',
        'Leadership Mentors',
        'UX Designers',
        'Data Scientists',
    ];

    return (
        <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    1-on-1 Mentorship in{' '}
                    <span className="text-cyan-400">Pro</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Learn a new skill, launch a project, land your dream career.
                </p>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-10">
                    <div className="relative flex-1">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
                            className="w-full pl-12 pr-4 py-3.5 rounded-full border-2 border-gray-600 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 transition"
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
                            className="px-5 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all duration-200 border border-white/20 hover:border-white/40"
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
