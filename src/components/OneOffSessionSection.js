'use client';

import Button from './Button';

export default function OneOffSessionSection() {
    const sessions = [
        {
            title: 'Introductory Call',
            description: "If you're looking for a mentor, and you're just not sure about how this all works – this should be for you. In a casual, informal introductory call, a mentor will introduce themselves ...",
            price: 39
        },
        {
            title: 'Study Plan',
            description: "Looking to learn a new skill? The vast amount of resources on any topic on the internet can feel overwhelming at times. A mentor can give you an overview of worthwhile ...",
            price: 119
        },
        {
            title: 'Interview Preparation',
            description: "Some big interviews coming up? In this 1-hour session, a mentor with hiring experience will act as a technical interviewer and ask you some standard hiring questions ...",
            price: 149
        }
    ];

    return (
        <section className="py-24 px-4 md:px-20" style={{ backgroundColor: '#fbeedd' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2
                        className="text-3xl md:text-4xl mb-6 leading-tight"
                        style={{
                            fontFamily: '"Shippori Mincho", serif',
                            fontWeight: 600,
                            color: '#491f13' // Darker brown from screenshot
                        }}
                    >
                        Not sure if mentorship is right for you?
                        <br />
                        Give it a try with a one-off session.
                    </h2>
                    <p
                        className="text-lg leading-relaxed max-w-2xl mx-auto"
                        style={{ color: '#002418' }}
                    >
                        A quick, easy call with an expert is just one click away with our attractive one-off sessions. Picking a brain, talking through an issue or getting to know an industry expert has never been easier.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-16 mb-16">
                    {sessions.map((session, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-10 flex flex-col text-center transition-all duration-300 py-16 group bg-[#f5dec0] hover:bg-[#ecbc84]"
                            style={{
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                borderBottom: '4px solid #ecbc84'
                            }}
                        >
                            <h3
                                className="text-3xl mb-6"
                                style={{
                                    fontFamily: '"Shippori Mincho", serif',
                                    fontWeight: 500,
                                    color: '#491f13'
                                }}
                            >
                                {session.title}
                            </h3>
                            <p
                                className="text-base mb-10 leading-relaxed flex-grow"
                                style={{ color: '#002418', opacity: 0.9 }}
                            >
                                {session.description}
                            </p>

                            <div className="mt-auto">
                                <div className="mb-6">
                                    <span style={{ fontSize: '0.875rem', color: '#491f13' }}>Starting from</span>
                                    <div
                                        className="text-4xl mt-1"
                                        style={{
                                            fontFamily: '"Shippori Mincho", serif',
                                            color: '#00694a'
                                        }}
                                    >
                                        ${session.price}<span style={{ fontFamily: 'sans-serif', fontSize: '1.5rem', color: '#00694a' }}>/call</span>
                                    </div>
                                </div>
                                <Button variant="primary" size="lg" className="w-full">
                                    Explore
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show more button */}
                <div className="text-center">
                    <button
                        className="px-6 py-2 rounded-full text-base font-medium transition-all duration-300 border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                        Show me more
                    </button>
                </div>
            </div>
        </section>
    );
}
