'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

export default function DetailedTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Rao",
            role: "Engineering Mentee",
            image: "/mentor-1.avif",
            text: "Brandon has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications.",
            highlights: ["amazing value with his industry knowledge,", "tips unique to my situation and support"]
        },
        {
            name: "Clara",
            role: "Web Development",
            image: "/mentor-1.avif", // Using same image as placeholder/requested
            text: "Sandrina helped me improve my portfolio significantly. Looking back, I took a huge leap forward exceeding my own expectations.",
            highlights: ["improve my portfolio significantly", "exceeding my own expectations"]
        },
        {
            name: "David",
            role: "Product Manager",
            image: "/mentor-1.avif",
            text: "The mentorship sessions were invaluable. I gained insights that would have taken years to learn on my own.",
            highlights: ["invaluable", "gained insights"]
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 px-4 md:px-20 bg-[#fbf3e5]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="max-w-xl">
                    <h2
                        className="text-4xl md:text-5xl mb-8 leading-tight"
                        style={{
                            fontFamily: '"Shippori Mincho", serif',
                            color: '#3e2416'
                        }}
                    >
                        Still not convinced? Don't just take our word for it
                    </h2>
                    <p className="text-lg leading-relaxed mb-10 text-gray-800">
                        We've already delivered 1-on-1 mentorship to thousands of students, professionals, managers and executives. Even better, they've left an average rating of 4.9 out of 5 for our mentors.
                    </p>
                    <Button
                        href="/mentors"
                        variant="outline"
                        className="!border-[#076899] !text-[#076899] hover:!bg-[#076899] hover:!text-white px-8 py-3 rounded-full font-medium"
                    >
                        Find a mentor
                    </Button>
                </div>

                {/* Right Content - Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-[#f3dfc1] p-10 rounded-lg min-h-[400px] flex flex-col shadow-sm">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-medium text-[#134e4a] font-serif" style={{ fontFamily: '"Shippori Mincho", serif' }}>
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-lg leading-relaxed text-[#3e2416]">
                                            "{renderTextWithHighlights(testimonial.text, testimonial.highlights)}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-8 px-4">
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#3e2416]"
                                aria-label="Previous testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full hover:bg-black/5 transition-colors text-[#3e2416]"
                                aria-label="Next testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#134e4a] w-6' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper to highlight specific phrases
function renderTextWithHighlights(text, highlights) {
    if (!highlights || highlights.length === 0) return text;

    // This is a simple implementation. For production, might need more robust matching 
    // to handle overlapping or multiple occurrences safely.
    let parts = [text];

    highlights.forEach(highlight => {
        const newParts = [];
        parts.forEach(part => {
            if (typeof part !== 'string') {
                newParts.push(part);
                return;
            }

            const split = part.split(highlight);
            for (let i = 0; i < split.length; i++) {
                newParts.push(split[i]);
                if (i < split.length - 1) {
                    newParts.push(
                        <span key={`${highlight}-${i}`} className="bg-[#eacea5] px-1 rounded-sm mx-0.5">
                            {highlight}
                        </span>
                    );
                }
            }
        });
        parts = newParts;
    });

    return parts;
}
