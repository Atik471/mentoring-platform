'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function CategoryNav() {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(true);

    const categories = [
        'Engineering Mentors',
        'Design Mentors',
        'Startup Mentor',
        'AI Mentors',
        'Product Managers',
        'Marketing Coaches',
        'Leadership Mentors',
        'Career Coaches',
        'UX Designers',
        'Data Scientists',
    ];

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            setShowLeftFade(scrollLeft > 0);
            setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                container.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            {/* Left fade */}
            {showLeftFade && (
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#002418] to-transparent z-10 pointer-events-none" />
            )}

            {/* Right fade */}
            {showRightFade && (
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#002418] to-transparent z-10 pointer-events-none" />
            )}

            <div className="flex items-center gap-2">
                {/* Left Arrow */}
                {showLeftArrow && (
                    <button
                        onClick={() => scroll('left')}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition z-20"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((category) => (
                        <Link
                            key={category}
                            href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="whitespace-nowrap text-sm hover:text-white-200 transition-colors"
                        >
                            {category}
                        </Link>
                    ))}
                </div>

                {/* Right Arrow */}
                {showRightArrow && (
                    <button
                        onClick={() => scroll('right')}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition z-20"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
