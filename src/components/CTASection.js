'use client';

import Image from 'next/image';
import Button from './Button';

export default function CTASection() {
    return (
        <section
            className="py-20 px-4 md:px-20"
            style={{
                background: 'linear-gradient(180deg, #fbeedd 0%, #a8c5b8 15%, #4a7c6f 40%, #2d5a50 60%, #1a3d35 80%, #0f2922 100%)'
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Card Container */}
                <div
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ backgroundColor: '#faf6f1' }}
                >
                    <div className="grid md:grid-cols-2">
                        {/* Left Content */}
                        <div className="p-10 md:p-14 flex flex-col justify-center">
                            <h2
                                className="text-3xl md:text-4xl mb-6 leading-tight"
                                style={{
                                    fontFamily: '"Shippori Mincho", serif',
                                    fontWeight: 600,
                                    color: '#002418'
                                }}
                            >
                                No strings attached, free trial, fully vetted.
                            </h2>
                            <p
                                className="text-lg mb-8 leading-relaxed"
                                style={{ color: '#3a3a3a' }}
                            >
                                Try your first call for free with every mentor you're meeting. Cancel anytime, no questions asked.
                            </p>
                            <div>
                                <Button variant="primary" size="lg">
                                    Browse mentors
                                </Button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-72 md:h-auto">
                            <Image
                                src="/nightfall.webp"
                                alt="Mentoring session illustration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
