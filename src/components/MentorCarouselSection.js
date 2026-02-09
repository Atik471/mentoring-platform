'use client';

import Image from 'next/image';
import Button from './Button';

export default function MentorCarouselSection() {
    const mentors = [
        {
            name: 'Sarah Chen',
            title: 'Senior Software Engineer at Google',
            mainRole: 'Software Engineering',
            subRoles: ['Frontend', 'React'],
            expertise: ['React', 'System Design', 'Career Growth'],
            rating: 5.0,
            price: 150,
            image: '/mentor-1.avif'
        },
        {
            name: 'Nilanchala Panigrahy',
            title: 'Solutions Architect at S&P Global',
            mainRole: 'Software Architecture',
            subRoles: ['Spring Boot', 'Java'],
            expertise: ['Java', 'Spring', 'Spring Boot'],
            rating: 5.0,
            price: 150,
            image: '/mentor-1.avif'
        },
        {
            name: 'Denis Čahuk',
            title: 'Productive Tech Leadership at Coach Denis',
            mainRole: 'Engineering Management',
            subRoles: ['Leadership', 'Agile'],
            expertise: ['Engineering Leadership', 'Extreme Programming', 'Engineering Management'],
            rating: 5.0,
            price: 80,
            image: '/mentor-1.avif'
        },
        {
            name: 'Michael Roberts',
            title: 'Engineering Manager at Meta',
            mainRole: 'Engineering Management',
            subRoles: ['Python', 'ML'],
            expertise: ['Leadership', 'Python', 'ML/AI'],
            rating: 4.9,
            price: 180,
            image: '/mentor-1.avif'
        },
        {
            name: 'Emily Johnson',
            title: 'Product Designer at Airbnb',
            mainRole: 'Product Design',
            subRoles: ['UI/UX', 'Figma'],
            expertise: ['UI/UX', 'Figma', 'Design Systems'],
            rating: 5.0,
            price: 120,
            image: '/mentor-1.avif'
        },
        {
            name: 'David Kim',
            title: 'Staff Engineer at Netflix',
            mainRole: 'Backend Engineering',
            subRoles: ['Microservices', 'AWS'],
            expertise: ['Backend', 'Microservices', 'AWS'],
            rating: 4.8,
            price: 200,
            image: '/mentor-1.avif'
        }
    ];

    // Double the mentors array for seamless loop
    const duplicatedMentors = [...mentors, ...mentors];

    return (
        <section className="py-20 overflow-hidden bg-transparent">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center px-4 mb-16">
                <h2
                    className="text-3xl md:text-4xl mb-6 leading-tight"
                    style={{
                        fontFamily: '"Shippori Mincho", serif',
                        fontWeight: 600,
                        color: '#fbeedd'
                    }}
                >
                    An arsenal of industry veterans and mentoring packages at a flexible price.
                </h2>
                <p
                    className="text-lg leading-relaxed"
                    style={{ color: '#a8c5b8' }}
                >
                    Pick from a curated collection of mentors and services. Try them out with no obligation. Found your mentoring sessions useful? Move to a low-cost, monthly mentoring subscription. No lock-ins, no hidden fees – Just accelerated professional growth.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative">
                <div
                    className="flex gap-8 animate-scroll"
                    style={{
                        width: 'fit-content',
                    }}
                >
                    {duplicatedMentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[500px] md:w-[600px] rounded-md overflow-hidden flex flex-col"
                        >
                            {/* Top Section - Dark Green */}
                            <div className="flex p-8 gap-8 bg-[#1a3d35] flex-1">
                                {/* Image */}
                                <div className="relative w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Rating Badge */}
                                    <div
                                        className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md"
                                        style={{ backgroundColor: '#00694a' }}
                                    >
                                        <svg className="w-4 h-4" fill="#ffffff" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm font-semibold text-white">
                                            {mentor.rating}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                    <h3
                                        className="text-3xl mb-2"
                                        style={{
                                            fontFamily: '"Shippori Mincho", serif',
                                            fontWeight: 500,
                                            color: '#fbeedd'
                                        }}
                                    >
                                        {mentor.name}
                                    </h3>
                                    <p
                                        className="text-lg mb-6 leading-snug"
                                        style={{ color: '#ffffff' }}
                                    >
                                        {mentor.title}
                                    </p>

                                    {/* Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        <span
                                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#2d5a50] text-white"
                                        >
                                            {mentor.mainRole}
                                        </span>
                                        {mentor.subRoles.map((role, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#2d5a50] text-white"
                                            >
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section - Cream */}
                            <div
                                className="flex items-center justify-between px-8 py-6 bg-[#fbeedd]"
                            >
                                <div>
                                    <span className="text-sm font-medium block mb-1" style={{ color: '#1a3d35' }}>
                                        Starting from
                                    </span>
                                    <span
                                        className="text-4xl"
                                        style={{
                                            fontFamily: '"Shippori Mincho", serif',
                                            color: '#1a3d35'
                                        }}
                                    >
                                        ${mentor.price}<span className="text-2xl" style={{ fontFamily: 'sans-serif' }}>/month</span>
                                    </span>
                                </div>
                                <Button variant="primary" size="lg" className="px-10">
                                    View profile
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 80s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
