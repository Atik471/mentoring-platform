'use client';

import Image from 'next/image';

export default function TestimonialSection() {
    return (
        <section className="bg-transparent py-16 px-4" style={{ color: '#fbeedd' }}>
            <div className="max-w-4xl mx-auto text-center">
                {/* Star Rating */}
                <div className="flex justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className="w-8 h-8"
                            fill="#F59E0B"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                    "Having access to the knowledge and experience of mentors on MentorCruise was an opportunity I couldn't miss. Thanks to my mentor, I managed to reach my goal of joining Tesla."
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600">
                        {/* Placeholder avatar */}
                        <div className="w-full h-full flex items-center justify-center text-2xl font-bold">
                            <Image
                                src="/testimonial-img.avif"
                                alt="Michele Verriello"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="font-semibold text-lg">Michele Verriello</div>
                        <div className="text-sm opacity-75">Software Engineer at Tesla</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
