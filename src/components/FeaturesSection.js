'use client';

import Image from 'next/image';

export default function FeaturesSection() {
    const features = [
        {
            title: 'Discover',
            description: 'Browse thousands of mentors from top companies. Filter by expertise, industry, and availability to find your perfect match.',
            image: '/discover.svg'
        },
        {
            title: 'Start',
            description: 'Choose a flexible plan that fits your pace – whether it\'s Q&A chats, regular calls, or something in between, your mentor will help you build a personalized roadmap.',
            image: '/start.svg'
        },
        {
            title: 'Meet',
            description: 'Get ongoing support through regular calls, check-ins, and feedback. Your mentor stays with you for the long haul.',
            image: '/meet.svg'
        },
        {
            title: 'Grow',
            description: 'Mentees who stick with their mentor for 3+ months reach their goals 2x faster than they would on their own. Fewer dead ends, more breakthroughs.',
            image: '/grow.svg'
        }
    ];

    return (
        <section className="bg-transparent py-16 px-4" style={{ color: '#fbeedd' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20">
                    {/* Left Side */}
                    <div className="md:sticky md:top-24 md:self-start max-w-[80%]">
                        <h2
                            className="text-2xl md:text-3xl font-semibold leading-tight"
                            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 600 }}
                        >
                            Long-term mentorship isn't just better – it's faster
                        </h2>
                    </div>

                    {/* Right Side */}
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white hidden md:block" style={{ left: '-24px' }}>
                            {features.map((_, index) => (
                                <div
                                    key={index}
                                    className="absolute w-5 h-5 rounded-full bg-white border-2 border-white"
                                    style={{ left: '-8px', top: `${index * 22 + 8}%` }}
                                />
                            ))}
                        </div>

                        <div className="space-y-12 md:ml-8">
                            {features.map((feature, index) => (
                                <div key={index} className="space-y-6">
                                    <div className="w-full max-w-lg">
                                        <div className="relative w-full h-64 bg-gradient-to-br from-teal-800 to-teal-900 rounded-t-lg border-t border-x border-white/10 overflow-hidden">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="w-full h-16 bg-[#1a4641] rounded-b-lg border-b border-x border-white/10"></div>
                                    </div>
                                    <p className="text-lg md:text-lg leading-relaxed opacity-90">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
