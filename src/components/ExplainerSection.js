'use client';

import Image from 'next/image';
import Button from './Button';

export default function ExplainerSection() {
    const companies = [
        { name: 'Airbnb', logo: '/companies/Airbnb.svg' },
        { name: 'Amazon', logo: '/companies/Amazon.svg' },
        { name: 'Meta', logo: '/companies/Meta.svg' },
        { name: 'Microsoft', logo: '/companies/Microsoft.svg' },
        { name: 'Spotify', logo: '/companies/Spotify.svg' },
        { name: 'Uber', logo: '/companies/Uber.svg' },
    ];

    const features = [
        { text: 'Thousands of mentors available', icon: '✓' },
        { text: 'Flexible program structures', icon: '✓' },
        { text: 'Free trial', icon: '✓' },
        { text: 'Personal chats', icon: '✓' },
        { text: '1-on-1 calls', icon: '✓' },
        { text: '97% satisfaction rate', icon: '✓' },
    ];

    return (
        <section className="bg-transparent py-16 px-4" style={{ color: '#fbeedd' }}>
            <div className="max-w-7xl mx-auto">
                {/* Company Logos */}
                <div className="mb-16">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {companies.map((company) => (
                            <div key={company.name} className="opacity-60 hover:opacity-100 transition-opacity">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={120}
                                    height={40}
                                    className="h-8 md:h-10 w-auto object-contain"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h2
                            className="text-3xl md:text-4xl leading-1.4 font-semibold mb-6"
                            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 600 }}
                        >
                            At your fingertips:<br />
                            a dedicated career coach
                        </h2>

                        <p className="text-lg mb-8 leading-relaxed opacity-90">
                            Want to start a new dream career? Successfully build your startup? Itching to learn high-demand skills? Work smart with an online mentor by your side to offer expert advice and guidance to match your zeal. Become unstoppable using MentorCruise.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6ed9c0]/20 flex items-center justify-center">
                                        <span className="text-[#6ed9c0] text-sm font-bold">{feature.icon}</span>
                                    </div>
                                    <span className="text-sm">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Button href="/mentors">
                            Browse mentors
                        </Button>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative w-full h-[400px] md:h-[500px]">
                            <Image
                                src="/explainer.webp"
                                alt="MentorCruise Platform Preview"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
