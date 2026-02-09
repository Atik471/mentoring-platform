'use client';

import Image from 'next/image';
import Button from './Button';

export default function ExploreMentorsSection() {
    const mentors = [
        {
            name: 'Sarah Chen',
            title: 'Senior Software Engineer at Google',
            expertise: ['React', 'System Design', 'Career Growth'],
            rating: 5.0,
            image: '/mentor-1.avif'
        },
        {
            name: 'Michael Roberts',
            title: 'Engineering Manager at Meta',
            expertise: ['Leadership', 'Python', 'ML/AI'],
            rating: 4.9,
            image: '/mentor-1.avif'
        },
        {
            name: 'Emily Johnson',
            title: 'Product Designer at Airbnb',
            expertise: ['UI/UX', 'Figma', 'Design Systems'],
            rating: 5.0,
            image: '/mentor-1.avif'
        },
        {
            name: 'David Kim',
            title: 'Staff Engineer at Netflix',
            expertise: ['Backend', 'Microservices', 'AWS'],
            rating: 4.8,
            image: '/mentor-1.avif'
        },
        {
            name: 'Jessica Martinez',
            title: 'Data Scientist at Spotify',
            expertise: ['Data Science', 'Python', 'Analytics'],
            rating: 4.9,
            image: '/mentor-1.avif'
        },
        {
            name: 'Alex Thompson',
            title: 'Frontend Lead at Stripe',
            expertise: ['TypeScript', 'React', 'Performance'],
            rating: 5.0,
            image: '/mentor-1.avif'
        }
    ];

    return (
        <section className="py-20 px-20" style={{ backgroundColor: '#fbeedd' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl mb-8 max-w-[40%] md:max-w-[60%] lg:max-w-[80%] mx-auto"
                        style={{
                            fontFamily: '"Shippori Mincho", serif',
                            fontWeight: 600,
                            color: '#6f361f'
                        }}
                    >
                        Explore 6,800+ available mentors
                    </h2>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center gap-4 mb-14">
                    <div className="relative flex-1 max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search by company, skills or role"
                            className="w-full px-6 py-4 rounded-lg text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00694a]"
                            style={{
                                backgroundColor: '#fbeedd',
                                border: '1px solid #00694a',
                                color: '#002418'
                            }}
                        />
                    </div>
                    <Button variant="primary" size="lg" className="px-8">
                        Find mentors
                    </Button>
                </div>

                {/* Mentor Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            {/* Image Container - Separate from card */}
                            <div className="relative aspect-[4/4] rounded-xl overflow-hidden mb-5">
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Rating Badge */}
                                <div
                                    className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                                    style={{ backgroundColor: 'rgba(0, 36, 24, 0.85)' }}
                                >
                                    <svg className="w-4 h-4" fill="#ffffff" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-white">
                                        {mentor.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Content - Below image */}
                            <div className="px-1">
                                {/* Name */}
                                <h3
                                    className="text-2xl mb-1"
                                    style={{
                                        fontFamily: '"Shippori Mincho", serif',
                                        fontWeight: 600,
                                        color: '#002418'
                                    }}
                                >
                                    {mentor.name}
                                </h3>

                                {/* Title */}
                                <p
                                    className="text-base mb-4"
                                    style={{ color: '#00694a' }}
                                >
                                    {mentor.title}
                                </p>

                                {/* Expertise Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {mentor.expertise.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-sm px-3 py-1.5 rounded-full"
                                            style={{
                                                backgroundColor: '#f5d9b4',
                                                color: '#5a4a3a'
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* View Profile Button */}
                                <Button variant="primary" size="lg" className="w-full mt-8">
                                    View profile
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-14">
                    <button
                        className="px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                            backgroundColor: '#002418',
                            color: '#fbeedd'
                        }}
                    >
                        View All Mentors
                        <svg
                            className="inline-block ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
